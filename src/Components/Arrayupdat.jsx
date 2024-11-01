import { useState } from "react"

export default function Arrayupdat(){

const [foods,setfood]=useState(['banana','orange','watermelon']);
const[newfood,setnewfood]=useState("")




function handlefood(){

    if(newfood.trim()){



        setfood(f=>[...f,newfood]);
        setnewfood("");
    }






}



function handleremovefood(index){

setfood(foods.filter((_,i)=>i !==index))




}


return (

    <div>



        <h2> list without using documentid</h2>

<ul>





{foods.map((food,index)=><li key={index}  onClick={()=>handleremovefood(index)} >{food}</li>)}

<input type="text"onChange={e=>setnewfood(e.target.value)}         placeholder="addfood"/>


<button onClick={handlefood}>addfood</button>

</ul>







    </div>
)




}