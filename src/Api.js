export const SearchPokemon = async (pokemon) => {
    try{
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
        const respuesta = await fetch(url)
        const data = await respuesta.json()
        return data;
    }
    catch(err){

    }
}


export const getPokemons = async (limit=25, offset=0) =>
{
    try{
        let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
        const respuesta = await fetch(url)
        const data = await respuesta.json()
        return data;
    }
    catch(err){

    }
}
export const getPokemonData = async (url) =>{
    try{
        const respuesta = await fetch(url)
        const data = await respuesta.json()
        return data;
    }
    catch(err){

    }
}