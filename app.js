"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const getDate = require("./date");
const date = require(__dirname + "/date.js");

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

const items = [];
const workItems = [];

app.get("/", (req, res) => {
    
    const day = date.getDate();
    res.render("list", {listTitle: day, items: items});
});

app.get("/work", (req, res) => {
    res.render("list", {listTitle: "Work", items: workItems});
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.post("/", (req, res) => {
    const item = req.body.newItem;

    if (req.body.button === "Work") {
        workItems.push(item);
        res.redirect("/work");
    } else {
        items.push(item);
        res.redirect("/");
    }
});



app.listen(3000, () => {
    console.log("Server started on port 3000");
});