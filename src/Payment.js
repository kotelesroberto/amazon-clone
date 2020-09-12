import React, { useEffect, useState } from "react";
import "./Payment.css";

import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link, useHistory } from "react-router-dom";
import { getBasketTotal } from "./reducer";

import CurrencyFormat from "react-currency-format";

// stripe
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

// axios
import axios from "./axios"; // local file axios

function Payment() {
  const history = useHistory(); // it allows us to programmatically change the url (after login for example)
  const [{ basket, user }, dispatch] = useStateValue();

  const [error, setError] = useState(null); // for handling errors
  const [disabled, setDisabled] = useState(true); // for managing button's disabled status
  const [processing, setProcessing] = useState(""); // managing processing status
  const [succeeded, setSucceeded] = useState(false); // managing succeeded status
  const [clientSecret, setClientSecret] = useState(false); // asking stripe for client secret "hey dude, I wanna pay $50 for you"

  // stripe
  const stripe = useStripe();
  const elements = useElements();

  // design of card input
  const CARD_OPTIONS = {
    iconStyle: "solid",
    style: {
      base: {
        iconColor: "#c4f0ff",
        color: "#000",
        fontWeight: 500,
        fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
        fontSize: "16px",
        fontSmoothing: "antialiased",
        ":-webkit-autofill": { color: "#fce883" },
        "::placeholder": { color: "#87bbfd" },
      },
      invalid: {
        iconColor: "#ffc7ee",
        color: "#ffc7ee",
      },
    },
  };

  useEffect(() => {
    // generate the special stripe secret which allows us to charge a customer
    // every time when basket is changing we need to ask a new stripe secret code for that amount "it's not $50 anymore but $30, gve a new secret code for that"
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        // stripe expects the total in a currencies submits ($20.34 ====> 2034) dollars in cents, pounds in pences, etc.
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      }); //.then((response) => {});

      // clientSecret will be associated an amount (controlling)
      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [basket]);

  // stripe
  console.log("THE SECRET IS >>> ", clientSecret);

  const handleSubmit = async (event) => {
    // do all fancy stripe stuff...
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            address: {
              city: null,
              country: null,
              line1: null,
              line2: null,
              postal_code: null,
              state: null,
            },
            name: user?.email,
            email: user?.email,
            phone: null,
          },
        },
      })
      // }).then( response => {})

      // (response) is exploded as ({ paymentIntent }) in the next
      .then(({ paymentIntent }) => {
        // paymentIntent = payment confirmation
        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type: "EMPTY_BASKET",
        });

        //as we don't want to permit the users going back to the payment page again, after payment let's use HISTORY REPLACE
        history.replace("/orders");
      });

    // const payload = await stripe();
  };

  const handleChange = (event) => {
    // Listen for changes in the CardElement and displays any errors as the custome types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        {/* Payment section - Delivery address*/}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123 My address</p>
            <p>London, UK</p>
          </div>
        </div>

        {/* Payment section - Review items*/}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {basket?.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        {/* Payment section - Payment method, STRIPE */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment method</h3>
          </div>
          <div className="payment__details">
            <form action="" onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} options={CARD_OPTIONS} />
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button
                  disabled={!stripe || processing || disabled || succeeded}
                >
                  <span>{processing ? "Processing..." : "Buy now"}</span>
                </button>
              </div>

              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
