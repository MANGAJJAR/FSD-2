// write express js script to requset sever to display json object 
const expr = require("express")
const app = expr();

var obj = {
    u1: [{ name: "LJU", id: 1 },
    { name: "LJU", id: 2 },
    { name: "LJU", id: 3 },
    { name: "LJU", id: 4 },
    { name: "LJU", id: 5 },
    { name: "LJU", id: 6 }
    ]
}

app.get("/",(req,res)=> {
    res.set("Content-Type","text/html")
    res.write("<center><table cellspacing='5px' cellpadding='8px' border='1px solid'><tr><th>Name</th><th>ID</th></tr>");
    for(i of obj.u1){
        res.write("<tr><td>"+i.name+"</td>")
        res.write("<td>"+i.id+"</td></tr>")
    }
}); 

app.listen(5000);  
