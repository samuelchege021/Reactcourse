import { useState } from "react"

export default function Form(){



    

    const [name,setname]=useState("");
    function handlechange(e){
        
        setname(e.target.value);
    }

    return <div>

      
    <form >


        <input 
        
    //     onChange={function demo(e){return handlechange(e)}
    // } 
        

    onChange={(e)=>handlechange(e)}
        
        type="text" value={name} /> 
    </form>
    
    
    </div>
}