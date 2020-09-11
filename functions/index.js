// This setup is for get the bakend express app running on a Cloud function

const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

// with the secret key of stripe

const stripe = require("stripe")(
  "sk_test_51HQESUBUefnWIo5AmxOpcgVxnCbqTVH7seWKCDYIPQtRhH2SFJHUUGjTXFxibjIGYXcn063QTLHLit6TaUMJVRGE00f2C829Mr"
);

//
// API
//----------------------------------

// - App config
const app = express();

// - Middleware, app.use():  The function is executed every time the app receives a request.
app.use(cors({ origin: true })); // reflect (enable) the requested origin in the CORS response
app.use(express.json()); // allows us to send data and  parse in JSON format

// - API routes
app.get("/", (request, response) =>
  response.status(200).send("Hello World Express")
);

app.get("/test", (request, response) => response.status(200).send("Whatsup?"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total; // comes from ?total parameter when calling this API
  console.log("Payment request recieved BOOM >>> ", total);

  // integrate STRIPE
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency (for USD is CENT)
    currency: "usd",
  });

  // 201: OK, created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listens commands | Expose Express API as a single Cloud Function:
exports.api = functions.https.onRequest(app);

// ( exports.api will create the "api" word at the end of API url like http://localhost:5001/clone-34ebc/us-central1/api)
