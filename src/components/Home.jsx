import React, { useState, useEffect } from 'react'

export const Home = () => {
    const [contador, setContador] = useState(0)
    const [transacciones, setTransacciones] = useState([])
    const [nombre, setNombre] = useState("pepito")
    const [persona, setPersona] = useState(null)
   
const cambiarNombre = ()=>{
    if(nombre === "pepito"){
        setNombre("maria")
    }else{
        setNombre("pepito")
    }
}



    //array de dependencias

    useEffect(()=>{
     
        console.log("Hacemos la peticion");
        setPersona({edad: 22})
    }, 
    []
    )

const sumar =()=>{
    setContador(
        contador + 1
    );
}

  return (
    <div>
        <h1>Este es el home</h1>
        <button onClick={sumar}>Sumar</button>
        <button onClick={cambiarNombre}>Cambiar nombre</button>

        <h2>La edad de la persona es {persona?.edad}</h2>
    </div>
  )
}

