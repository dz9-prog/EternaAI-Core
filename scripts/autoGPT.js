import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function runAutoGPT(task) {
    try {
        const response = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                { role: "system", content: "Você é um assistente automatizado para executar tarefas." },
                { role: "user", content: `Execute a seguinte tarefa: ${task}` }
            ],
            temperature: 0.7
        });

        const result = response.choices[0].message.content;
        console.log(`[AutoGPT] Resultado da tarefa "${task}":\n${result}\n`);
        return result;
    } catch (err) {
        console.error("[AutoGPT] Erro:", err.message);
    }
}
