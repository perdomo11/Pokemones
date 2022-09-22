import React from "react";
import Pagination from "./pagination";
import Pokemon from "./Pokemon";


const Pokedex = (props) =>{
  
    const {Pokemons,page,setPage,total, loading} = props;

    const lastPage = () =>
    {
        const nextPage = Math.max(page -1 ,0);
        setPage(nextPage);
    }

    const nextPage = () =>
    {
        const nextPage = Math.min(page + 1, total);
        setPage(nextPage);
    }



    return (
    <div>
        <div className="header">
        <h1>PokeDex</h1>
        <Pagination
            page ={page + 1 }
            totalPages={total}
            onLeftClick ={lastPage}
            onRightClick = {nextPage}
        />
        </div>

        {
            loading ?
            <div>Cargando pokemon...</div>:
        <div className="poke-grid">

        {Pokemons.map((pokemon,idx)=>{
            return(

              <Pokemon pokemon={pokemon} key={pokemon.name}/>
            )
        })}

        </div>
        }
    </div>
    )
};
export default Pokedex