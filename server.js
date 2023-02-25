const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const bodyParser = require("body-parser");
const routes = require("./routes/index");
const cors = require('cors');

//spremanje expressa u varijablu 
const app = express();

//postavljanje detalja o responseu
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  });

app.use(cors());

app.use(bodyParser.json());

//pocetna ruta
app.use("/", routes);

//slusanje servera na portu 3000
app.listen(3000, () => {
  console.log("Listening to port 3000");
});
