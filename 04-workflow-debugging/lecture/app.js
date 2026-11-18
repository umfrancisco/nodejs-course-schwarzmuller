const http = require("http");
const { handler } = require("./routes");

const PORT = 3000;
const server = http.createServer(handler);

console.log(`Server running at http://localhost:${PORT}`);
server.listen(PORT);
