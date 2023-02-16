const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;

//
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/view/index.html");
});

app.listen(PORT, () => {
  console.log("Escutando na porta" + PORT);
});
