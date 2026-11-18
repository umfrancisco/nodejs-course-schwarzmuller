const http = require("http");

const form = `
  <html>
  <body>
    <form action="/create-user" method="POST">
    <input placeholder="Enter your name" type="text" name="username">
    <button type="submit">Submit</button>
    </form>
  </body>
  </html>
`;

console.log("Listening at port 3000");
const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(form);
    return res.end();
  }
  if (url === "/users") {
    res.setHeader("Content-Type", "text/html");
    res.write("<ul><li>user 1</li></ul>");
    return res.end();
  }
  if (url === "/create-user" && method === "POST") {
    res.setHeader("Content-Type", "text/html");
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      const parsed = Buffer.concat(body).toString();
      const username = parsed.split("=")[1];
      console.log(username);
    });
    res.statusCode = 302;
    res.setHeader("Location", "/");
    res.end();
  }
});

server.listen(3000);