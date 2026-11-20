const fs = require("fs");

const getHtml = (file) => {
  const path = `./pages/${file}`;
  const html = { content: "" };
  try {
    html.content = fs.readFileSync(path, "utf-8");
  } catch (err) {
    console.log("file not found: "+err);
    html.content = "page not found :/";
  }
  return html;
}

module.exports = getHtml;