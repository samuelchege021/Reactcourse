import Fruit from "./Fruit"

export default function Fruits(){



    
const fruits=[{name:"apple",price:10,emoji:"🍋",soldout:false},
{name:"mangoe",price:5,emoji:"🌲",soldout:true},
{name:"banana",price:6,emoji:"🍌",soldout:false},
{name:"orange",price:15,emoji:"🍊",soldout:true},
{name:"pinnaple",price:20,emoji:"🍍",soldout:true}]

    return <div>
        <ul>

{fruits.map((fruit)=>(<Fruit name={fruit.name} price={fruit.price} emoji={fruit.emoji} soldout={fruit.soldout}/>))}

</ul>
    </div>
}