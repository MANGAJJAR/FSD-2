var ps = require('fs')

var data = {"Name":"XYZ"}

ps.writeFileSync("abc.txt", JSON.stringify(data))
console.log(data)