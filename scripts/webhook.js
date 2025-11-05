import express from "express";
import bodyParser from "body-parser";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

const app = express();
app.post("/webhook", bodyParser.raw({ type: "application/json" }), (req, res) => {
  const sig = req.headers["stripe-signature"];
  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
  } catch (err) {
    console.log(`❌ Webhook Error: ${err.message}`);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  switch (event.type) {
    case "invoice.payment_succeeded":
      console.log("✅ Pagamento recebido:", event.data.object.customer);
      break;
    case "invoice.payment_failed":
      console.log("❌ Pagamento falhou:", event.data.object.customer);
      break;
    default:
      console.log(`⚡ Evento recebido: ${event.type}`);
  }

  res.json({ received: true });
});

export default app;
