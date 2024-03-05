
import React, { useState } from 'react'
import {Home} from "./components/Home"
import PizzaOrderComponent from './components/PizzaOrder'

function App() {

  const [ apellido , setApellido] = useState("lopez")

  return (
    <>
      <Home apellido={apellido} />
      <button onClick={()=>setApellido("gonzalez")}>Cambiar apellido</button>
      <PizzaOrderComponent/>
    </>
  )
}

export default App