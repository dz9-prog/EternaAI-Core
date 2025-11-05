const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const { exec } = require('child_process');

app.get('/', (req, res) => {
  res.send('🧠 Eterna.AI Bridge Online - CEO conectado');
});

// Rota para rodar CEO GPT
app.get('/runCEO', (req, res) => {
  exec('node scripts/autoGPT.js', (err, stdout, stderr) => {
    if(err) return res.send(`Erro: ${err.message}`);
    if(stderr) return res.send(`Stderr: ${stderr}`);
    res.send(`Output: ${stdout}`);
  });
});

// Rota para rodar pagamentos
app.get('/runPayment', (req, res) => {
  exec('node scripts/payment.js', (err, stdout, stderr) => {
    if(err) return res.send(`Erro: ${err.message}`);
    if(stderr) return res.send(`Stderr: ${stderr}`);
    res.send(`Output: ${stdout}`);
  });
});

// Rota para rodar Bitcoin
app.get('/runBitcoin', (req, res) => {
  exec('node scripts/bitcoin.js', (err, stdout, stderr) => {
    if(err) return res.send(`Erro: ${err.message}`);
    if(stderr) return res.send(`Stderr: ${stderr}`);
    res.send(`Output: ${stdout}`);
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
