const expr = require("express")
const app = expr();

app.use(expr.urlencoded({extended:false}))
app.use(expr.static("./",{index:"post.html"}))

app.post("/index",(req,res) =>{           
    t = req.body  
    res.send(t)
})

app.listen(5001);