const express = require("express");
const _ = require("lodash")

const app = express();

app.get("/ping", (req, res) =>{
    res.json({
        resp: "pong"
    })
});

app.listen(3000, () => console.log("Started."));
