import { useState } from "react"

export default function Arrayupdate(){
    const[car,setcar]=useState({
        year:2024,

        make:"ford",
        model:"mustang"

    });

    const [foods,setfood]=useState(['apple','orange','banana']);








// function handlechanmge(){


//     setcar(c=>({...c,model:e.target.value}))
// }


    return <div>

<h1> your favorite car is:{car.year} {car.make} {car.model}</h1>


<input type="number"  onChange={(e)=>setcar({...car,year:e.target.value})}  value={car.year}  />
<input type="text"   onChange={(e)=>setcar({...car,make:e.target.value})}     value={car.make}  />
<input type="text" onChange={(e)=>setcar({...car,model:e.target.value})}      value={car.model}  />




    </div>
}


