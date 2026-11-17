const fs = require("fs");

const htmlContent = `
  <html>
  <body>
    <h2>Enter message</h2>
    <form action="/message" method="POST">
      <input type="text" name="message">
      <button type="submit">Submit</button>
    </form>
  </body>
  </html>
`;

function requestHandler(req, res) {
  const url = req.url;
  const method = req.method;
  res.setHeader("Content-Type", "text/html");
  if (url === "/") {
    res.write(htmlContent);
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFile("message.txt", message, () => {
        res.writeHead(302, {
          location: "/",
        });
        return res.end();
      });
    });
  }
  res.write("<h2>Hello World from Node.js server</h2>");
  res.end();
}

module.exports = {
  handler: requestHandler,
  hello: "Hello from Node.js",
};