const express=require("express")
const mg=require("mongoose")
const cors=require("cors")
const app=express()

app.use(cors())
app.use(express.json())

mg.connect("mongodb://127.0.0.1:27017/Man004").then(()=>{console.log("Success")}).catch((err)=>{console.error(err)})

mg.pluralize(null)

const myschema=new mg.Schema({
    username:{type: String}
});

const data=new mg.model("serv",myschema)

app.post("/Signup",async(req,res)=>{
    try{
        const {username}=req.body
        const newUser= new data({username})
        await newUser.save()
        res.send("Inserted !!!")
       
    }
    catch(err){
        res.send(err)

    }
}).listen(5000)