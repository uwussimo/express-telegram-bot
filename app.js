const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", () => {
  app.render("index", {});
});

app.listen(3000, () => console.log("Server has been started"));
