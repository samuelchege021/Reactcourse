export default function Map(){

const fruits=['mangoes','pinnaples','apples','banana','orange']

    return <div>
<ul>

        {fruits.map((fruit)=>(<li key={fruit}>{fruit}</li>))}

        </ul>
    </div>





}