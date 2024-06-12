import AddToDoList from "./AddToDoList";
import Activity from "./Activity";
import { useState } from "react";
const Todo=()=>{
    const [list,setList]=useState([{
        id:1,
        activity:"Go For A Walk"
     },{
        id:2,
        activity:"Take a cold Shower"
     }]);
    return (
        <div>
            <div className="flex gap-2 flex-wrap items-center">
             <AddToDoList activityArr={list} setActivityArr={setList}/>
             <Activity activityArr={list} setActivityArr={setList}/>
           
            </div>
            
        </div>
    )
}
export default Todo;