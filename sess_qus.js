// create one html file file having username, passwrod and submit button, after click on submit button
//  it should jump on savesession page and shore the username and passwrod in session
//  after saving session redirect to fetchsession and read the value and put delete session link
//  deletesession page

const expr = require("express");
const app = expr();
const sess = require("express-session")
app.use(expr.static("./", { index: "sess_qus.html" }));

app.use(sess({
    secret: "gmh2810",
    saveUninitialized: true,
    resave: false,
}))

app.get("/savesession", (req, res) => {
    res.set("content-type", "text/html")
    req.session.uname = req.query.uname
    req.session.passwrod = req.query.pass
    res.redirect("/fetchsession")
    res.end()
})

app.get("/fetchsession", (req, res) => {
    res.set("content-type", "text/html")
    res.write("Welcome " + req.session.uname + "<br>");
    res.write(`<a href='/deletesess'>Delete Session</a>`);
    res.end()
});

app.get("/deletesess", (req, res) => {
    req.session.destroy()
    res.redirect("/savesession")
    res.send()
});

app.listen(3000);





