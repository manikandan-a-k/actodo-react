import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Signup=(props)=>{
   const navigate=useNavigate();
   const users=props.users;
   const setUser=props.setUser;
   const [userName,setUsername]=useState("");
   const [passWord,setPassword]=useState("");
   const handleUsername=(event)=>{
      setUsername(event.target.value);
   }
   const handlePassword=(event)=>{
      setPassword(event.target.value)
   }
const addUsers=()=>{
   setUser([...users,{username:userName,password:passWord}])
   navigate("/");
}
    return (
       <div className="bg-black p-10">
        <div className="bg-[#EFEFEF] p-10 border rounded-md">
        <h1 className="text-3xl font-medium">Hey Hi 👋</h1> 
        <p className=" font-normal">You can signup here :)</p>  
        <div className="flex flex-col gap-2 my-2"> 
           <input placeholder="username" value={userName} onChange={handleUsername} className="border border-black p-1 bg-transparent w-52 rounded-md"/>
           <input placeholder="password" value={passWord} onChange={handlePassword} className="border border-black p-1 bg-transparent w-52 rounded-md"/>
          <button className="bg-[#FCA201] w-24 p-1 rounded-md" onClick={addUsers}>Sign Up</button>  
        </div>
        <p>Already have an account ? <Link to={"/"} className="underline">Login</Link></p>
        </div>
       </div>
    )
}
export default Signup;