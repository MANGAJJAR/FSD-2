const expr = require("express");
const app = expr();
const cp = require("cookie-parser");
app.use(cp());

app.use(expr.static("./", { index: "example1.html" }));

app.get("/example1", (req, res) => {
    res.cookie("name", req.query.fname);
    res.cookie("lname", req.query.lname);
    res.redirect("/admin")
});

app.get("/admin", (req, res) => {
    // res.clearCookie("lname"); 
    res.send("Welcome " + req.cookies.name);
});

app.listen(4321);