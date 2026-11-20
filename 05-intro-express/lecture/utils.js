const fs = require("fs");

const getHtml = (file) => {
  const path = `./pages/${file}.html`;
  const html = { content: "" };
  try {
    html.content = fs.readFileSync(path, "utf-8");
    html.content = getCssStyles("./pages/styles.css", html.content);
  } catch (err) {
    console.log("file not found: "+err);
    html.content = "page not found :/";
  }
  return html;
}

const getCssStyles = (path, content) => {
  const html = content.split("<!-- css here -->");
  let style = "";
  try {
    style = fs.readFileSync(path, "utf-8");
    style = `<style>${style}</style>`;
    style = html[0] + style + html[1];
  } catch (err) {
    console.log("error");
  }
  return style;
}

module.exports = getHtml;