import icon from "../assets/images/delete-icon.png";

const Todoitem=(props)=>{
    let listArr=props.listArr;
    let setListArr=props.setListArr;
    
     const handleChange=(deleteId)=>{
        let temp=listArr.filter((item)=>{
            if(item.id===deleteId)
                {
                    return false;
                }
                else{
                    return true;
                }
        })
        setListArr(temp);
     }
    return (
        <>
        <div className="flex justify-between">
        <p>{props.index+1}.{props.activity}</p>
        <button className="" onClick={()=>{handleChange(props.id)}}><img src={icon} alt="delete-icon" className="w-5 rounded-lg"></img></button>
        </div>
        
        </>
        
    )
}
export default Todoitem;