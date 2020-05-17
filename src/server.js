const express = require("express");
const router = require("./routers/routers");
const app = express();
const path = require("path");

const publicDirectoryPath = path.join(__dirname, "./views");
app.set("view engine", "ejs");
app.set("views", publicDirectoryPath);
app.use(router);

app.listen(3000, () => {
  console.log("Server is up on port 3000.");
});
