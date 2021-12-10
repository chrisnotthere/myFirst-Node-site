const express = require("express");
const app = express();
const port = 5500;

// listen for requests
app.listen(port, () => {
  console.log(`listening on port ${port}!`);
});

app.get("/", (req, res) => {
  res.sendFile("./docs/index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  res.sendFile("./docs/about.html", { root: __dirname });
});

app.get("/contact", (req, res) => {
  res.sendFile("./docs/contact.html", { root: __dirname });
});

// 404
app.use((req,res) => {
    res.status(404).sendFile('./docs/404.html', { root:__dirname });
});
