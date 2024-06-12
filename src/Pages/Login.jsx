import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
const Login=(props)=>{
    const navigate=useNavigate();
    const users=props.users;
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const[ruser,setRuser]=useState(true);
const handleUsername=(event)=>{
setUsername(event.target.value);
}
const handlePassword=(event)=>{
setPassword(event.target.value);
}

const checkUser=()=>{
      
       users.forEach((item)=>{
         if(item.username==username && item.password==password)
            {
                console.log("Login Successful");
                setRuser(true);
                navigate("/landing",{state:{user:username}});
                
            }
            
           
       })
        
}
   
   
    return(
        <div className="bg-black p-10">
        <div className="bg-[#EFEFEF] p-10 border rounded-md">
        <h1 className="text-3xl font-medium">Hey Hi 👋</h1> 
        {ruser?<p className=" font-normal">I help you manage your activities after you login :)</p>:<p className="text-red-400">Please Sign Up Before Login</p>}  
        <div className="flex flex-col gap-2 my-2"> 
           <input placeholder="username" value={username} onChange={handleUsername} className="border  border-black p-1 bg-transparent w-52 rounded-md"/>
           <input placeholder="password" value={password} onChange={handlePassword} className="border border-black p-1 bg-transparent w-52 rounded-md"/>
        
          <button className="bg-[#8272DA] w-24 p-1 rounded-md" onClick={checkUser}>Login</button>  
        </div>
        <p>I don't have an account ? <Link to={"/signup"} className="underline">Sign Up</Link></p>
        </div>
       </div>
    )
}
export default Login;