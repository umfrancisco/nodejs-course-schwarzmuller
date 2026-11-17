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
  res.setHeader("Content-Type", "text/html");
  if (url === "/form") {
    res.write(form);
    return res.end();
  }
  if (url === "/users") {
    res.write("<ul><li>user 1</li></ul>");
    return res.end();
  }
  if (url === "/create-user" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    return req.on("end", () => {
      const parsed = Buffer.concat(body).toString();
      console.log(parsed);
      return res.end();
    });
  }
  res.write("hello world");
  res.end();
});

server.listen(3000);