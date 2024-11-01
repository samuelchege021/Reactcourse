

export default function Fruit({name,price,emoji,soldout}){

return <div>

    <li >{name} {emoji} {price} {soldout?"soldout":""}</li>
    
    
    
{/* {price>5?<h3>{emoji}{price}{name}</h3>:""} */}

</div>
}