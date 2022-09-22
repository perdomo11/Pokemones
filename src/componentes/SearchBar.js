import React, { useState } from "react";
import { SearchPokemon } from '../Api';


const SearchBar =  (props) =>{
    /* let search = ""; */
    const {onSearch} = props;
    const [search, setSearch] = useState("");
    const [pokemon,setPokemon] = useState("");

    
    const onChange = (evt) =>{   
        /* console.log(evt.target.value) */  /* con este console.log nos muestra lo que estamos escribiendo */
        /* search = evt.target.value; */
        setSearch(evt.target.value);
        if(evt.target.value.length===0){
            onSearch(null);
        }
    }

    const onClick = async (e) =>{
        onSearch(search);
    }
    
    return(
    <>
    <form className="container mt-3">
            <div className="input-group mb-3">
                <input type="text" 
                       className="form-control" 
                       placeholder="Buscar Pokemones" 
                       aria-label="Pokemon-name" 
                       aria-describedby="button-addon2" 
                        onChange={onChange}
                       />
                <button onClick={onClick} className="btn btn-outline-danger" type="button" id="button-addon2">Button</button>
            </div>
        </form>
      

        </>
    
    )

}

export default SearchBar