import { useState } from "react";

const AddToDoList=(props)=>{
const activityArr=props.activityArr;
const setActivityArr=props.setActivityArr;     
const [input,setInput]=useState("");
const handleInput=(event)=>{
   setInput(event.target.value);
}
const addItems=()=>{
    setActivityArr([...activityArr,{id:activityArr.length+1,activity:input}]);
    setInput("");
}
    return (
        <div className="flex flex-col gap-3">
        <h1 className="text-2xl font-medium">Manage Activities</h1>
        <div>
            <input value={input} onChange={handleInput} placeholder="Next Activity?" className="border border-black p-1 bg-transparent rounded-sm focus:outline-none"></input>
            <button className="border border-black p-1 bg-black text-white" onClick={addItems}>Add</button>
        </div>
        </div>
    )
}
export default AddToDoList;