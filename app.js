const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();
var newListItems = ["Rise", "Shine"];

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true })); //very important line to use the body parser! 
app.use(express.static("public"));

app.get("/", function(req, res) {
    var today = new Date()
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    var day = today.toLocaleDateString("en-US", options);
    res.render("list", {
        kindOfDay: day,
        listItems: newListItems //LHS is the var name in HTML file and RHS is the var name in the js file 
    });
});

app.post("/", function(req, res) {
    listItem = req.body.newItem;
    newListItems.push(listItem);
    res.redirect("/");
});

app.listen(3000, function(req, res) {
    console.log("Hey! I am the server speaking!");
});