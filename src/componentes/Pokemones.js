import React, { useEffect, useState }  from 'react'
import axios from 'axios'
import Card from './Card'

export default Pokemones 
function Pokemones() {
    const [Pokemons,SetPokemons] = useState([])

    useEffect(()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon/')
        .then(resp =>{
            console.log(resp.data.results)
            SetPokemons(resp.data.results)
        })
        .catch(error => {
            console.log(error)
        })
    },[])




  return (

  
      <div className="row">
            {
                Pokemons.map((mostrarPokemon) =>
                  
                
                <Card key={mostrarPokemon} Mipokemon={mostrarPokemon}/>
                
                )
                
            }
           
     

            
    </div>
  )
}

