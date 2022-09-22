import { useEffect, useState } from "react";
import { getPokemonData, getPokemons, SearchPokemon } from "./Api";
import Navbar from "./componentes/Navbar";
import Pokedex from "./componentes/Pokedex";
import SearchBar from "./componentes/SearchBar";




function App() {

  const [Pokemons,setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [total,SetTotal] = useState(0);
  const [loading, setLoading ] = useState(true);
  const [noResult , SetnoResult] = useState(false);

  const fetchPokemons = async () =>{
    try{
      setLoading(true);
      const data = await getPokemons(25, 25*page);
      const promises = data.results.map(async (pokemon)=>{
        return await getPokemonData(pokemon.url)
      })
      const results = await Promise.all(promises)
      setPokemons(results)
      setLoading(false);
      SetTotal(Math.ceil(data.count /25));
      SetnoResult(false);
    }
    catch(error)
    {

    }
  }

  useEffect(() => {
    fetchPokemons();
  },[page]);


const onSearch = async (pokemon) =>{
  if(!pokemon){
    return fetchPokemons();
  }
  setLoading(true);
   const result = await SearchPokemon(pokemon);
   if(!result)
   {
    SetnoResult(true);
    setLoading(false);
    return;
    
   } else{
    setPokemons([result])
    setPage(0)
    SetTotal(1)

   }
   
   setLoading(false);
};

  return (
   
    <>
    <Navbar/>  {/* Se manda a llamar el menu */} 
    <SearchBar
      onSearch = {onSearch}/>
      {noResult ?
      <div>No se encontro el pokemon buscado</div>
      :
     /* se crea el searchBar */

      <Pokedex Pokemons = {Pokemons}
        loading = {loading}
        page ={page}
        setPage ={setPage} 
        total = {total}

      />
    }
    
  
    <div className="container">
      {/* <Pokemones/> */}
   </div>
    
    
       
      
       
    </>   
  );
}

export default App;
