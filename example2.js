// write express js script to requset sever to display json object in sort 
const expr = require("express")
const app = expr();

var obj = {
    u1: [{ name: "AJAY", age: 6 },
    { name: "Man", age: 5 },
    { name: "mit", age: 4 },
    { name: "ram", age: 3 },
    { name: "jay", age: 2 },
    { name: "raj", age: 1 }
    ]
}

obj.u1.sort((a, b) => a.age - b.age);

app.get("/", (req, res) => {
    res.set("Content-Type", "text/html")
    res.write("<center><table cellspacing='5px' cellpadding='8px' border='1px solid'><tr><th>Name</th><th>ID</th></tr>");
    for (i of obj.u1) {
        res.write("<tr><td>" + i.name + "</td>")
        res.write("<td>" + i.age + "</td></tr>")
    }
});

app.listen(5000);  
