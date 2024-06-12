
import Todoitem from "./Todoitems";
const Activity=(props)=>{
   const activityArr=props.activityArr;
   const setActivityArr=props.setActivityArr;
    return (
        <div className="bg-[#BDB4EA] p-3 border rounded-md flex-grow">
        <h1 className="text-2xl font-medium">Today's Activity</h1>
        {activityArr.length===0?<p>you haven't added any activity yet</p>:""}
        
        {
            activityArr.map((item,index)=>{
              return <Todoitem id={item.id} activity={item.activity} index={index} listArr={activityArr} setListArr={setActivityArr}/>
            })
        }
    </div>
    )
}
export default Activity;