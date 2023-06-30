const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello toxic world haha");
});

app.get("/api/courses", (req, res) => {
  res.send([1,2,3]);
});

app.get("/api/posts/:year/:month" , (req,res) => {
  res.send(req.query);
});

//PÖRT
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));
