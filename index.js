import express from "express";
import { runAutoGPT } from "./scripts/autoGPT.js";
import { getBitcoinPrice } from "./scripts/bitcoin.js";
import cron from "node-cron";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Endpoint principal
app.get("/", async (req, res) => {
    const btcPrice = await getBitcoinPrice();
    const autoGPTResult = await runAutoGPT("Escreva uma previsão divertida do preço do Bitcoin hoje");
    res.send({
        bitcoin: btcPrice,
        autoGPT: autoGPTResult
    });
});

// Tarefa automática: roda a cada 10 minutos
cron.schedule("*/10 * * * *", async () => {
    console.log("=== Executando AutoGPT automático ===");
    const btcPrice = await getBitcoinPrice();
    await runAutoGPT(`Crie uma análise do preço do BTC atual: $${btcPrice}`);
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
