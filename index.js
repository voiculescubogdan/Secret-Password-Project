//Secret password: bogdan2108

import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.post("/check", (req, res) => {
  if(req.body["password"] === "bogdan2108") {
    res.sendFile(__dirname + "/public/secret.html");
    console.log("Cum ai știut asta?")
  } else {
    res.sendFile(__dirname + "/public/index.html");
  }
})

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});