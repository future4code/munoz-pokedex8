import React, { useEffect, useState } from 'react';
import axios from "axios"




function Home() {

  const [pokemons, setPokemon] = useState()
  

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?offset=20&limit=20")
      .then((response) =>{
        setPokemon(response.data)
      })
  }, [])
  
  console.log(pokemons && pokemons.results)
  
 

  return (
    <div>
      <h1>Home</h1>
      {pokemons && pokemons.results.map((pokemon)=>{
        return(
          <div>
            {pokemon.name}
          </div>
        )
      })}
    </div>
  );
}
  
export default Home;