const http = require("http");

const PORT = 3000;

const unorderedList = `
  <ul>
    <li>user1</li>
    <li>user2</li>
  </ul>
`;

const form = `
  <form action="/create-user" method="POST">
    <input placeholder="Enter your name" type="text" name="username">
    <button type="submit">Send</button>
  </form>
`;

const getHtml = (content) => {
  let root = `
    <html>
    <body>
      ${content}
    </body>
    </html>
  `;
  return root;
}

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(getHtml(form));
    return res.end();
  }
  if (url === "/users") {
    res.setHeader("Content-Type", "text/html");
    res.write(getHtml(unorderedList));
    return res.end();
  }
  if (url === "/create-user" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      const parsed = Buffer.concat(body).toString();
      console.log(parsed.split("=")[1]);
    });
    res.statusCode = 302;
    res.setHeader("Location", "/");
    res.end();
  }
});

console.log(`Server running at http://localhost:${PORT}`);
server.listen(PORT);