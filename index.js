const express = require("express");
const app = express();

const courses = [
  { id: 1, name: "course1" },
  { id: 2, name: "course2" },
  { id: 3, name: "course3" },
];

app.get("/", (req, res) => {
  res.send("hello toxic world haha");
});

app.get("/api/courses", (req, res) => {
  res.send(courses);
});

app.get("/api/courses/:id", (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course)
    res
      .status(404)
      .send(
        "The course with given ID was not found error 404 means that you know"
      );
  res.send(course);
});

//PÖRT
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));
