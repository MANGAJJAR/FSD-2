const expr = require("express");
const app = expr();

// app.use(expr.static("./", { index: "pug.html" }));

app.set("view engine","pug")
app.get("/",(req,res)=>{
  res.render(__dirname+"/one.pug")
  res.send()
});

app.listen(1234);