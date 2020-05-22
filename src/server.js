require("./db/mongoose");
const express = require("express");
const router = require("./routers/routers");
const cors = require("cors");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;

const publicDirectoryPath = path.join(__dirname, "../templates/views");
const publicPath = path.join(__dirname, "../public");
app.use(cors());
app.set("view engine", "hbs");
app.set("views", publicDirectoryPath);
app.use(express.static(publicPath));
app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log("Server is up on port " + port + ".");
});
