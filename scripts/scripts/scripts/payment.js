import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function checkPayments() {
  console.log("💰 Verificando pagamentos...");
  // Aqui você pode listar clientes, assinaturas e automatizar ações
  const customers = await stripe.customers.list({ limit: 5 });
  customers.data.forEach(c => console.log("Cliente ativo:", c.email));
}
