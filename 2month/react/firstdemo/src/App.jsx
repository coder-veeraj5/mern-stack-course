import { useState } from 'react'

import './App.css'
import Para from './para'

function App() {
 
 const [info,setinfo]= useState([
      {id:349 ,name: "suraj",age:18},
       {id:340 ,name: "yash",age:19},
        {id:341 ,name: "sahil",age:20}
     ])

     

  return (
    <>
    


   <h1>veeraj</h1>
 {/* <Para id={349} name={"veeraj"} age={18} />
 <Para id={340} name={"yash"} age={19} />
 <Para id={341} name={"sahil"} age={20} />
     */}

{
info.map((person)=>(
<Para key={person.id} id={person.id} name={person.name} umar={person.age} />
))

}


  
  

    </>
  )
}

export default App
