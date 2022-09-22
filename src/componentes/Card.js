import axios from "axios"
import { useEffect, useState } from "react"
import './pokemones.css'

export default function Card({Mipokemon}) {
  
const [OnePokemon,SetOnePokemon] = useState(
  {
     name:"",
        sprites:{front_default: ""}
  }
)
    
const getPokemones = (url) =>{
  axios.get(url)
  .then((respuesta) =>{
    console.log(respuesta)
    SetOnePokemon(respuesta.data)
  })
  .catch((errores) =>{
    console.log(errores)
  })
} 



useEffect(() =>{
  getPokemones(Mipokemon.url);
},[])

  return (
   

 
            <div className="col-md-3 col-sm-4 p-3">
              <div className="card-body card fondo-poke">
              
                <h4>ID {OnePokemon.id}</h4>
              <img alt="" className="card-img-top" src={OnePokemon.sprites.front_default}/>
              <h5 className="card-title">{OnePokemon.name}</h5>
            </div>
          </div>
            
        

        
    
    


  )
}