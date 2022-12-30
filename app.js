"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));

const items = [];

app.get("/", (req, res) => {
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    
    const today = new Date();
    const day = today.toLocaleDateString("us-en", options);

    res.render("list", {kindOfDay: day, items: items});
});

app.post("/", (req, res) => {
    const item = req.body.newItem;
    items.push(item);

    res.redirect("/");
});



app.listen(3000, () => {
    console.log("Server started on port 3000");
});