const express = require('express');
const path = require('path');
const adatok = require("./myModules/adatok.js")

const port = 5555;

const app = express();
app.set('view engine', 'ejs');
app.use(express.static( "css" ) );
app.use( express.static( "images" ) );

app.get('/', (req, res) => {

    res.sendFile(path.join(__dirname, './views/index.html'));
})

app.get('/json', (req, res) =>{
    adatok.jsonRender(req, res);
})

app.get('/mysql', (req, res) =>{
    adatok.dbRender(req, res);
})

app.get('/mysql2', (req, res) =>{
    res.render("mysql", {hivasok : [{
        "kezdOra": 6,
        "kezdPerc": 51,
        "kezdMp": 8,
        "vegeOra": 6,
        "vegePerc": 54,
        "vegeMp": 58
      }]})
})

app.listen(port);
