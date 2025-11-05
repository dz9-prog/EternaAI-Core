// scripts/autoGPT.js
const fs = require('fs');

module.exports = {
  init: () => {
    console.log('AutoGPT iniciado!');

    // Simula uma "tarefa automática"
    setInterval(() => {
      const timestamp = new Date().toISOString();
      console.log(`[AutoGPT] Rodando tarefa automática em: ${timestamp}`);

      // Salva um log local
      fs.appendFileSync('autogpt.log', `[${timestamp}] AutoGPT rodou\n`);
    }, 10000); // a cada 10 segundos
  }
};
