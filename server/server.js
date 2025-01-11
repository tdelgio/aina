const express = require("express");
const Stripe = require("stripe");
const cors = require("cors");

const app = express();
const stripe = Stripe(
  "pk_test_51Pa4ko2KaxVTzcwYp4ve9sRD215v3r9vqgNDucXA83lS8Flr49ZneHIhSGsH7F777zyoR6b7xF3Cm1lIwSlLlIOU005XmWFG5j"
);

app.use(cors());
app.use(express.json());

app.post("/create-payment-intent", async (req, res) => {
  const { amount } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.status(400).send({
      error: {
        message: error.message,
      },
    });
  }
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
