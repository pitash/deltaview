// index.js
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Express + Docker 🚀");
});

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
