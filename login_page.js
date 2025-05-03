// MIddleWare
const expr = require("express")
const app = expr();

app.use(expr.urlencoded({ extended: false }));
app.use(expr.static("./", { index: "login_page.html" }));

//common 
app.get("/login",(req,res,next) =>{
    res.set("Content-Type", "text/html")
    res.write(" <h1> Welcome "+req.query.name+"</h1><br>")
    res.write(" <h2> Your Email is "+ req.query.email + "</h2><br>")
    next();
})
 
app.get("/login",(req,res,next) =>{
    if(req.query.checkbox=="on"){
        res.write("Thank you for Subscription <a href='/'>Logout</a>")
    } else{
        res.write("You can Subsciption to get daily Update <a href='/'>Subscribe</a>")
        next();
    } 
})

app.get('/subscribe',(req,res)=>{
    res.set("Content-Type", "text/html")
    res.write("Thank you for Subscription")
    res.write("<a herf='/'>Logout</a>") 
})

app.listen(3001);