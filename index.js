// index.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Função para carregar scripts
function safeRequire(path) {
  try {
    return require(path);
  } catch (err) {
    console.warn(`Aviso: não foi possível carregar o módulo ${path}`);
    return null;
  }
}

// Carrega scripts
const autoGPT = safeRequire('./scripts/autoGPT');
const bitcoin = safeRequire('./scripts/bitcoin');

// Inicializa AutoGPT
if (autoGPT && typeof autoGPT.init === 'function') {
  autoGPT.init();
}

// Inicializa Bitcoin
if (bitcoin && typeof bitcoin.init === 'function') {
  bitcoin.init();
}

// Rota principal
app.get('/', (req, res) => {
  res.send('EternaAI Bridge funcionando com AutoGPT e Bitcoin!');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
