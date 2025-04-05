// <!-- write file json file and write in the file  -->
    var a = '{"name": "Test", "year": 20}'
    console.log(a)


    var fs = require('fs')

    data = fs.writeFileSync("json1.txt", a)
    console.log(data)

