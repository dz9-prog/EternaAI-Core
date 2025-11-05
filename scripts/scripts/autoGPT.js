import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function runCEO() {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [
        { role: "system", content: "Você é o CEO da EternaAI, tomando decisões automáticas." },
        { role: "user", content: "Verifique o status do projeto e sugira melhorias passivas." }
      ]
    });
    console.log("🤖 CEO GPT:", response.choices[0].message.content);
  } catch (err) {
    console.log("❌ Erro CEO GPT:", err.message);
  }
}
