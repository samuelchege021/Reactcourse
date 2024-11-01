import { useState } from "react"

export default function Mycomponent(){


    let[name,setname]=useState(" Guest");

    const[age,setage]=useState(7);
    const[isemployed,setisemployed]=useState(false);

   


    const updatename=()=>{

setname("samuel");

    };

    const updateage=()=>{

setage(age+5)

    };

    const togglemployementsatus=()=>{setisemployed(true)


    }


return <div>




<h3>Name:{name}</h3>

<button onClick={updatename}>setname</button>

<h4>my age is{age}</h4>
<button onClick={updateage}> setage</button>

<h4>is employed{isemployed?'YES':"NO"}</h4>
<button onClick={togglemployementsatus}>toggle status</button>


</div>


}