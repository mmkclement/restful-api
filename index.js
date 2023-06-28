const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello toxic world");
});

app.listen(3000, () => console.log("Listening on port 300"));
