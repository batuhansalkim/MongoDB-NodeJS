const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Blog = require("./models/blogs")


const app = express();
const dbURL = "mongodb+srv://Batu:batu123@nodeblog.scvno6o.mongodb.net/?retryWrites=true&w=majority&appName=NodeBlog"
mongoose.connect(dbURL)
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(morgan("dev"));

/*MongoDB veritabanına veriler ekliyorum */
app.get("/add", (req, res) => {
    const blog = new Blog({
        title: "yeni yazi 3",
        short: "kisa aciklama batuhan",
        long: "uzun aciklama",
    })

    blog.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err);
        })
})

/*ekledigim verilerin hepsini görüntülüyorum*/
app.get("/all", (req, res) => {
    Blog.find()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        })
})

app.get("/", (req, res) => {
    Blog.find().sort({createdAt:-1})
    .then((result)=>{
        res.render("index",{title:"Anasayfa",blogs:result})
    })
    .catch((err)=>{
        console.log(err);
    })
})



app.get("/about", (req, res) => {
    res.render("about", {
        title: "Hakkımızda"
    });
})

app.get("/about-us", (req, res) => {
    res.redirect("/about");
})

app.get("/login", (req, res) => {
    res.render("login", { title: "Giris" });
})

app.use((req, res) => {
    res.status(400).render("404", {
        title: "Sayfa Bulunamadı KNK"
    });
})
