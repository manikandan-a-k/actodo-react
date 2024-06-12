import Head from "../components/Header";
import Card from "../components/Card";
import Todo from "../components/Todo";
import { useLocation } from "react-router-dom";
const Landing=()=>{

  const data=useLocation()
  const cardItems=[
    {
     bgColor:"#8272DA",
     title:"23",
     subtitle:"Chennai"
    },
    {
      bgColor:"#FD6663",
      title:"December 08",
      subtitle:"12.12.00"
     },
     {
      bgColor:"#FCA201",
      title:"Build Using",
      subtitle:"React"
     },]
  
    return (
        <div className="bg-black p-10">
        <div className="bg-[#EFEFEF] p-10 border rounded-md flex flex-col gap-5">
          {/* /* Header */ }
         <Head username={data.state.user}/>
         {/* Card */}
         <div className="flex justify-between gap-7 flex-wrap">
           {
            cardItems.map((item)=>{
              return <Card bgColor={item.bgColor} title={item.title} subtitle={item.subtitle}/>
            })
           }
         </div>
         {/* Todo */}
         <Todo/>
        </div>
      </div>
    )
}
export default Landing;