import React from 'react';


const Navbar = () => {

    let Urlimg = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";

    return (
        <nav className="navbar navbar-expand-lg bg-danger">
        <div className="container-fluid">
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
      
          <div className="collapse navbar-collapse nav justify-content-center" id="navbarSupportedContent">
            <ul className="">
              
              <img src={Urlimg}
                alt="poke-logo"
                className='nav'
              />
              
            </ul>
          </div>
        </div>
      </nav>
    );
  };




export default Navbar;