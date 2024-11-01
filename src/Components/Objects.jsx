export default function Objects(){

const fruits=[{name:"apple",price:10,emoji:"🍋"},
{name:"mangoe",price:5,emoji:"🌲"},
{name:"banana",price:6,emoji:"🍌"},
{name:"orange",price:15,emoji:"🍊"},
{name:"pinnaple",price:20,emoji:"🍍"}]

    return <div>
        <ul>

{fruits.map(fruit=><li>{fruit.name},${fruit.price},{fruit.emoji}</li>)}

</ul>
    </div>
}