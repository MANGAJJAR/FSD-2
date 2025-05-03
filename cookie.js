// const expr = require("express")
// const app = expr();
// const cp = require("cookie-parser")
// app.use(cp())

// app.get("/",(req,res)=>{
//     res.cookie("fname","Man")
//     res.cookie("lname","Gajjar")
//     res.cookie("email","mangajjar44@gmail.com",{maxAge:5000})  
//     res.cookie("City","Ahmedabad")
//     res.cookie("Contact","9099036034",{expires: new Date(Date.now()+10000)})
//     res.send("cookies set")
// })
// app.get("/cookie",(res,req)=>{
//     res.set("Content-Type", "text/html")
//     res.write(req.cookie.name)
//     res.write(req.cookie.lname)
//     res.write(req.cookie.email)
//     res.write(req.cookie.City)
//     res.write(req.cookie.Contact)
//     res.send()
// })

// app.get("/clear",(res,req)=>{
//     res.set("Content-Type", "text/html")
//     res.clearCookie(req.cookie.email)
//     res.clearCookie(req.cookie.Contact)
//     res.end()
// })
// app.listen(4000);






const expr = require("express");
const app = expr();
const cp = require("cookie-parser");
app.use(cp());

app.get("/", (req, res) => {
    res.cookie("fname", "Man");
    res.cookie("lname", "Gajjar");
    res.cookie("email", "mangajjar44@gmail.com", { maxAge: 5000 });
    res.cookie("City", "Ahmedabad");
    res.cookie("Contact", "9099036034", { expires: new Date(Date.now() + 10000) });
    res.send("Cookies set");
});

app.get("/cookie", (req, res) => {
    res.set("Content-Type", "text/html");
    res.write(req.cookies.fname || "<br>");
    res.write(req.cookies.lname || "<br>");
    res.write(req.cookies.email || "<br>");
    res.write(req.cookies.City || "<br>");
    res.write(req.cookies.Contact || "<br>");
    res.send();
});

app.get("/clear", (req, res) => {
    res.clearCookie("email");
    res.clearCookie("Contact");
    res.send("Cookies cleared");
});

app.listen(4000);






