const express = require("express");
const { connection } = require("./config/db");

const app = express();
app.use(express.json());

app.listen(8080, async () => {
  try {
    await connection;
    console.log("mongodb connected succefully");
    console.log("server running on port 8080");
  } catch (err) {
    console.log(err);
  }
});
