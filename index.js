const express = require("express");
const app = express();

const users = [
  "ahfvjash",
  "ajdstyfd",
  "ahfwiu",
  "auykdfy",
  "ayfdyaes",
  "trqwecjfn",
];

const port = 3000;

app.get("/", (req, res) => {
  res.send(`calling root at port ${port}`);
});

app.get("/user/:id", (req, res) => {
  const id = req.params.id;
  const name = users[id];
  res.send({ id, name });
});

app.listen(port, () => console.log(`Listening to port ${port}`));
