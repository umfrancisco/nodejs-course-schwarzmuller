const http = require("http");
const { handler, hello } = require("./routes");

console.log(hello);
const server = http.createServer(handler);
server.listen(3000);
