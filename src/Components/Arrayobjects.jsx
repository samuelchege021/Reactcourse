import { useState } from "react"

export default function(){





    const [cars,setcars]=useState([]);
    const[caryear,setcaryear]=useState(new Date().getFullYear());
    const[carmake,setcarmake]=useState("");
    const[carmodel,setcarmodel]=useState("");

    
    
 function handleremove(index){

  setcars(c=>c.filter(((_,i)=>i !==index)))
}





// function handleremove(index){

//     setcars(c=>c.filter((_,i)=>i !==index))






// }


const handleadd= ()=>{

    const newcar={year:caryear,make:carmake,model:carmodel};

    
    
setcars(c=>[...c,newcar]);

 // Optionally, reset input fields after adding a car
 setcaryear(new Date().getFullYear());
 setcarmake("");
 setcarmodel("");
    
};
    
    return <div>




<h2>list of car object</h2>

<ul>

{cars.map((car,index)=><li onClick={()=>handleremove(index)} key={index}>{car.year}-{car.make}-{car.model}</li>)}


</ul>

<input type="number"   onChange={e=>setcaryear(e.target.value)}    placeholder="year"  value={caryear}/>
<input type="text"   onChange={e=>setcarmake(e.target.value)}  placeholder="make"    value={carmake}/>
<input type="text"   onChange={e=>setcarmodel(e.target.value)}   placeholder="model"   value={carmodel}/>

<button onClick={handleadd}>add</button>









    </div>








}