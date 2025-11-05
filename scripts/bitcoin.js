import axios from "axios";

export async function getBitcoinPrice() {
    try {
        const response = await axios.get("https://api.coindesk.com/v1/bpi/currentprice/BTC.json");
        const price = response.data.bpi.USD.rate;
        console.log(`[Bitcoin] Preço atual do BTC: $${price}`);
        return price;
    } catch (err) {
        console.error("[Bitcoin] Erro ao buscar preço:", err.message);
    }
}
