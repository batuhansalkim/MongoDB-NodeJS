const express = require("express");
const morgan = require("morgan");

const app = express();
app.set("view engine", "ejs");

app.listen(3000);

app.use(morgan("tiny"));

app.get("/", (req, res) => {
    res.render("index", {
        title: "anasayfa"
    });
})



app.get("/about", (req, res) => {
    res.render("about", {
        title: "Hakkımızda"
    });
})

app.get("/about-us", (req, res) => {
    res.render("/about");
})

app.use((req, res) => {
    res.status(400).render("404", {
        title: "Sayfa Bulunamadı KNK"
    });
})
