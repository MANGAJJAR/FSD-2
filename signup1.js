import React,{useState} from 'react'
import axios from 'axios'


const Signup1 = () => {
  const[username,setUsername] = useState("")
  const[password,setPassword] = useState("")

  const handleSignup = async(e)=>{
    e.preventDefault();
   
    try{
        await axios.post("http://localhost:5000/signup1",{username,password})
        alert("User Signup Successfully "+username)
        document.getElementById("u").innerHTML=username
        setUsername("")
        setPassword("")
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
            <input type='text' name='username' onChange={(e)=>{setUsername(e.target.value)}}/>
            <label  for="username">Password</label>

             <input type='password' name='pass' onChange={(e)=>{setPassword(e.target.value)}}/>
            <button type='submit'>Signup</button><br></br><br></br>
        </form>
        <h1 id='u'></h1>
    </div>
  )
}

export default Signup1