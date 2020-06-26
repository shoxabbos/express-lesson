const express = require("express");
const bodyParser = require("body-parser");
const app = express();

let posts = [
    {
        title: "My first blog news",
        content: "This is just content",
    },
];

app.set("view engine", "twig");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => res.render("index", { posts: posts }));
app.get("/create", (req, res) => res.render("create"));
app.post("/create", (req, res) => {
    posts.push({
        title: req.body.title,
        content: req.body.content,
    });

    res.redirect("/");
});

module.exports = app;
