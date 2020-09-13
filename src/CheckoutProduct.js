import React from "react";
import "./CheckoutProduct.css";
import StarIcon from "@material-ui/icons/Star";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ addedToBasket, id, image, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBusket = () => {
    // remove the tiem from the basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
      key: addedToBasket,
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>
                <StarIcon />
              </p>
            ))}
        </div>
        <button onClick={removeFromBusket}>Remove from Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
