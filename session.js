const expr = require("express");
const app = expr();

const sess = require("express-session")

app.use(sess({
    secret:"gmh2810",
    saveUninitialized:true,
    resave:false,
    // cookie:{maxAge: 24 * 60 * 60 * 1000}    // show page count if comment
}))

app.get("/",(req,res)=>{
    if(req.session.page_views){
        req.session.page_views++;
        res.send("Total Number of time page view: " + req.session.page_views);
    } else{
        req.session.page_views=1;
        res.send('<h1>Welcome to Session Page</h1>');
    }
})

app.listen(1234);




