const Card=(props)=>{

    return (
        <>
         <div className="px-14 py-3  text-center border rounded-md flex-1" style={{backgroundColor:props.bgColor}}>
             <h2 className="text-2xl font-medium">{props.title}</h2>
             <p>{props.subtitle}</p>
            </div>
           
        </>
           
        
    )
}
export default Card;