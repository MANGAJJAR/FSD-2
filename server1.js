const express = require("express");
const mg = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const app = express();

app.use(cors());
app.use(express.json());

mg.connect("mongodb://127.0.0.1:27017/Man004").then(() => { console.log("Success")})
  .catch((err) => { console.error(err) });

mg.pluralize(null);

const myschema = new mg.Schema({
  username: { type: String },
  password: { type: String } 
});

const data = new mg.model("man", myschema);

app.post("/Signup1", async (req, res) => {
  try {
    const { username, password } = req.body;
    const hashedpassword = await bcrypt.hash(password, 10);
    const newUser = new data({ username, password: hashedpassword });
    await newUser.save();
    res.send("Inserted !!!");
  } catch (err) {
    res.send(err);
  }
});

app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await data.findOne({username})
    if(!user){
        return res.status(401).json({error:"user not found"})
    }
    const passwordMatch = await bcrypt.compare(password,user.password)
    if(!passwordMatch){
        return res.status(401).json({error:"Invalid Password"})
    }
    res.json({message:"Login Succcefull"})
  } 
  catch (err) {
    res.send(err);
  }
});

app.listen(5000);
