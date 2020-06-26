const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const Post = require("./models/post");

let posts = [
    {
        title: "My first blog news",
        content: "This is just content",
    },
];

app.set("view engine", "twig");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    Post.find({}).then((posts) => {
        res.render("index", { posts: posts });
    });
});

app.get("/create", (req, res) => res.render("create"));
app.post("/create", (req, res) => {
    const { title, content } = req.body;

    Post.create({ title, content }).then((post) => console.log(post));

    res.redirect("/");
});

module.exports = app;
