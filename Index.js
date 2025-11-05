console.log("🧠 Eterna.AI Bridge Online - CEO conectado ao GitHub");

const http = require("http");
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("🧠 Eterna.AI Bridge Online - CEO conectado ao GitHub\n");
});

server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
