const expr = require("express")
const app = expr();

app.use(expr.static(__dirname,{index:"form.html"}))

// form
// app.get("/process-get",(req,res)=> {
//     response = {Username : req.query.fname, Password: req.query.pass}
//     console.log(response)
//     res.send(response);
// }); 

// textarea
app.get("/process-get",(req,res)=> {
    t1 = req.query.text.split(".")
    for (i in t1){
        res.write(t1[i]+"<br>")
    }
    res.send()
}); 
app.listen(5002);