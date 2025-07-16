import React,{useState} from 'react'
import axios from 'axios'


const Signup = () => {
  const[username,setUsername] = useState("")
  const handleSignup = async(e)=>{
    e.preventDefault();
   
    try{
        await axios.post("http://localhost:5000/signup",{username})
        alert("User Signup Successfully"+username)
        document.getElementById("u").innerHTML=username
        setUsername("")
    }
    catch(error){
        console.error("Signup error")
        alert("an error executed")
    }
  }
  return (
    <div>
        <h1>Signup</h1>
        <form method='post' onSubmit={handleSignup}>
            <label  for="username">Username</label>
            <input type='text' name='username' onChange={(e)=>{setUsername(e.target.value)}}/><br></br>
            <button type='submit'>Signup</button>
        </form>
        <h1 id='u'></h1>
    </div>
  )
}

export default Signup