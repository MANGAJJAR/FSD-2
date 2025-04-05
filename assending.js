var ps=require("fs");
ps.writeFileSync("s1.txt","50 -1 10 39 11 70");
data=ps.readFileSync("s1.txt","utf-8");
data=data.split(" ");
d=data.sort((a,b)=>a-b);
console.log(d);