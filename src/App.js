import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Landing from "./Pages/Landing";
import { useState } from "react";
const App=()=>{
  const [users,setUser]=useState([
      {
          username:"Manikandan",
          password:"123"
      }
  ])
  return(
      <div>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Login users={users}/>}></Route>
          <Route path="/signup" element={<Signup users={users} setUser={setUser}/>}></Route>
          <Route path="/landing" element={<Landing/>}></Route>
      </Routes>
      </BrowserRouter>
      
      </div>
  )
}

export default App;
