// scripts/bitcoin.js
const axios = require('axios');

module.exports = {
  init: () => {
    console.log('Script Bitcoin iniciado!');

    // Função para buscar preço do BTC
    const fetchBTCPrice = async () => {
      try {
        const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice/BTC.json');
        const priceUSD = response.data.bpi.USD.rate;
        console.log(`[Bitcoin] Preço atual do BTC: $${priceUSD}`);
      } catch (err) {
        console.error('[Bitcoin] Erro ao buscar preço:', err.message);
      }
    };

    // Busca a cada 15 segundos
    fetchBTCPrice(); 
    setInterval(fetchBTCPrice, 15000);
  }
};
