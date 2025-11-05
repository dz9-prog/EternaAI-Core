// index.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Importando scripts
const runCEO = require('./scripts/autoGPT');
const runPayment = require('./scripts/payment');
const runBitcoin = require('./scripts/bitcoin');

// Rota principal
app.get('/', (req, res) => {
  res.send('🧠 Eterna.AI Bridge Online - CEO conectado');
});

// Rotas manuais (opcional)
app.get('/runCEO', async (req, res) => {
  try {
    await runCEO();
    res.send('CEO rodou com sucesso!');
  } catch (err) {
    res.send(`Erro ao rodar CEO: ${err.message}`);
  }
});

app.get('/runPayment', async (req, res) => {
  try {
    await runPayment();
    res.send('Pagamento processado!');
  } catch (err) {
    res.send(`Erro no pagamento: ${err.message}`);
  }
});

app.get('/runBitcoin', async (req, res) => {
  try {
    await runBitcoin();
    res.send('Bitcoin processado!');
  } catch (err) {
    res.send(`Erro no Bitcoin: ${err.message}`);
  }
});

// Loop passivo interno
const EXEC_INTERVAL = 15 * 60 * 1000; // a cada 15 minutos

setInterval(async () => {
  console.log('🟢 Rodando CEO passivamente...');
  try {
    await runCEO();
    await runPayment();
    await runBitcoin();
    console.log('✅ Ciclo completo executado');
  } catch (err) {
    console.log('❌ Erro no ciclo:', err.message);
  }
}, EXEC_INTERVAL);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
