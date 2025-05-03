const expr = require("express")
const app = expr();

// app.get("/",(req,res)=> {
//     res.set("Content-Type","text/plain")
//     res.write("<b>hello world</b>");
//     res.send();
// }); 

// app.get("/about",(req,res)=> {
//     res.set("Content-Type","text/html")
//     res.write("<h1>hello world</h1>");
//     res.send();
// }); 

// app.get("/:id",(req,res) => {
//     res.send("the id you specified is"+req.params.id);
// });
// app.listen(3000);

// MAN GAJJAR
// url = http://localhost:5000/user/342/test/889
// app.get("/user/:user/test/:test1",(req,res) => {
//     res.send(req.params);        // {"user":"342","test1":"889"}
// });
// app.listen(5000);


// url = http://localhost:5000/things/practice/12345
// app.get("/things/:name/:id",(req,res) => {
//     res.send(req.params);        // {"name":"practice","id":"12345"}
// });
// app.listen(5000);


// url = http://localhost:5000/flights/ADI-NYC
app.get("/flights/:from-:to",(req,res) => {
    res.send(req.params);        // {"from":"ADI","to":"NYC"}
});
app.listen(5000);