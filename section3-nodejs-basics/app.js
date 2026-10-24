const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  res.setHeader("Content-Type", "text/html");
  if (url === "/") {
    res.write(`
    <html>
    <body>
      <h2>Enter message</h2>
      <form action="/message" method="POST">
        <input type="text" name="message">
        <button type="submit">Submit</button>
      </form>
    </body>
    </html>
    `);
    return res.end();
  }
  res.write("<h2>Hello World from Node.js server</h2>");
  res.end();
});

server.listen(3000);
