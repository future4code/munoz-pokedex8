import React from 'react';
import PokeCard from '../Components/PokeCard/PokeCard';
import {useGlobalContext} from "../Global/GlobalContext";


function Pokedex() {
  const { states, setters } = useGlobalContext();

  const botaoRemover = (pkmParaRemover) => {
    const teste2 = states.pokedex.filter(pokemon => pokemon.name != pkmParaRemover)
    console.log("está AQUI", teste2)
    setters.setPokedex(teste2)
  }

  const name = "Remover"

  return (
    <div>
      <h1>PokeDex</h1>
      {states.pokedex &&
        states.pokedex.map((pokemon) => {
          return <PokeCard key={pokemon.name} botao={name} fbotao={botaoRemover} img={pokemon.sprites.front_default} alt={name} PokemonName={pokemon.name}/>;
        })}     
    </div>
  );
}
  
export default Pokedex;