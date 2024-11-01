
import Arrayupdates from "./Components/Arayupdates"
import Arrayobjects from "./Components/Arrayobjects"
import Arrayupdat from "./Components/Arrayupdat"
import Arrayupdate from "./Components/Arrayupdate"
import Codecondition from "./Components/Codecondition"
import Condition from "./Components/Condition"
import Counter from "./Components/Counter"
import Destructuring from "./Components/Destructuring"
import Elementvariable from "./Components/Elementvariable"
import Event from "./Components/Events"

import Fruits from "./Components/Fruits"
import Hello from "./Components/Hello"
import Map from "./Components/Map"
import Mycomponent from "./Components/Mycomponents"
import Objects from "./Components/Objects"
import { Props } from "./Components/Props"
import Tenary from "./Components/Tenary"
import Form from "./Components/form"




function App() {
  const seatnumbers=[1,3,4]

  const person={name:"sam",age:23,gender:"male"}


  return (

<div>

    <Hello/>
  
    {/* <Props name="rob" message="hey there"/>
    <Props name="tom" message="good morning"/>
    <Destructuring name="joan" message="have a good day" emoji="🤣" seatnumbers={seatnumbers} person={person}/>
  
  <Map/>
  <Objects/>
<Fruits/>
  <Condition/>
  <Codecondition/>

  <Elementvariable/>
  <Tenary/>
  <Event/>
  <Counter/> */}
  {/* <Form/> */}

  <Mycomponent/>
  <Arrayupdates/>
  <Arrayupdat/>
  <Arrayobjects/>
  
  </div>)
}

export default App
