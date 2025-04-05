var fs = require('fs')

fs.writeFileSync("space.txt", "5 2 1 4 3")

data1 = fs.readFileSync("space.txt","utf-8")
console.log(data1)
data2=data1.split(" ")
// console.log(data2.length)

for (i=0;i<data2.length; i++) {
    data2[i] = parseInt(data2[i]);
}
d1 = data2.sort();
console.log(d1)