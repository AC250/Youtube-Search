const express = require("express");
const axios = require("axios");
const mongoose = require("mongoose");
const app = express();

const dbURL =
  "mongodb+srv://application-yt:someRandomPassword@cluster0.xqo1b.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose
  .connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to mongoDB");
    app.listen(3000, () => console.log("Listening on 3000......"));
  })
  .catch((err) => {
    console.log(err);
  });
