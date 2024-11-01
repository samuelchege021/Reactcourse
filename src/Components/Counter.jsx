import { useState } from "react"

export default function Counter(){


    const[count,setcount]=useState(0);

    const[incrementby,setincrementby]=useState(1);

    function handleClick(){
        setcount(count+incrementby);
    };

    function reduce(){


        setcount(count-1);
    };


function increaseincrement(){

setincrementby(incrementby+1);

};


function decreaseincrement(){



    setincrementby(incrementby-1)
}

    return <div>



        <h3>count value is:{count}</h3>
        <button onClick={handleClick}>increment</button>

        <button onClick={reduce}>decrement</button>


        <h1>we are incremention the value by:{incrementby}</h1>

        <button onClick={increaseincrement}>increase increment</button>
        <button onClick={decreaseincrement}>decrease increment</button>

    </div>




}