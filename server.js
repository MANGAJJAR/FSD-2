const expr = require("express")
const mg = require("mongoose")
const cors = require("cors")
var app = expr()
app.use(cors())
app.use(express.json())
mg.connect()

mg.connect("mongodb://127.0.0.1:27017/Man004").then(()=>{
    console.log("Connect")
}).catch((err)=>{console.error(err)})
mg.pluralize(null)

const myschema = new mg.Schema({
    name:{type:String},
});
app.post('singup',async(req,res)=>{
    try{
        const{username}=req.body
        const newUser = new({username})
        await newUser.save()
        res.send('inserted')
    } catch(error){
        res.send(error)
    }
})
const data = new mg.model("form",myschema)