require("./db/mongoose");
const express = require("express");
const router = require("./routers/routers");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;
// const bcrypt = require("bcryptjs");

const publicDirectoryPath = path.join(__dirname, "../templates");
app.set("view engine", "ejs");
app.set("views", publicDirectoryPath);
app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log("Server is up on port " + port + ".");
});

// const myFunction = async () => {
//   const password = "Red12345";
//   const hashedPassword = await bcrypt.hash(password, 8);

//   console.log(hashedPassword);

//   const isMatch = await bcrypt.compare("Red12345", hashedPassword);
//   console.log(isMatch);
// };
// myFunction();
