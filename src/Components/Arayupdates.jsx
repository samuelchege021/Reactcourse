import { useState } from "react"


export default function Arrayupdates(){

    const [foods,setfood]=useState(['banana','orange','pinnaples','mangoes'])

function handlefood(){



   


     const newfood=document.getElementById("foodinput").value;
    document.getElementById("foodinput").value="";

    // setfood([...foods,newfood]);
    setfood(F=>[...F,newfood]);
    
}

    return (<div>







        
<h2>list of food</h2>
<ul>
{foods.map((food,index)=><li key={index}>{food}</li>)}

<input type="text"  id="foodinput" placeholder="enter food name" />

{ <button onClick={handlefood}>add food</button> }


</ul>

    </div>)
}

