import React from 'react';
import PokeCard from '../Components/PokeCard/PokeCard';
import {useGlobalContext} from "../Global/GlobalContext";


function Pokedex() {
  const { states, setters } = useGlobalContext();



  const name = "Remover"

  return (
    <div>
      <h1>PokeDex</h1>
      {states.pokedex &&
        states.pokedex.map((pokemon) => {
          return <PokeCard botao={name} img={pokemon.sprites.front_default} alt={name} PokemonName={pokemon.name}/>;
        })}     
    </div>
  );
}
  
export default Pokedex;