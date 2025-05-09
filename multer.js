const express = require("express");
const expr = require("express");
const app = expr();
var multer = require("multer")


app.use(expr.static(__dirname,{index:"multer.html"}))

var store = multer.diskStorage({
    destination:"Single",
    filename:(req,file,cb)=>{
        cb(null,file.orginialname)
    }
})

var upload = multer({Storage:store}).single('file')

app.use(express.static("./",{index:"multer.html"}))

app.post("/uploadfile",upload,(req,res)=>{
    if(req.file)
        res.send(req.file.orginialname+"has been Upload")
    else
        res.send("Not Found")
})
app.listen(3000)











































// \\192.168.101.51\ftp\STUDENT DATA\MJT\MJT
