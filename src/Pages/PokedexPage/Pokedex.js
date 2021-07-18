import React from 'react';
import PokeCard from '../../Components/PokeCard/PokeCard';
import {useGlobalContext} from "../../Global/GlobalContext";
import styled from 'styled-components';

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin: 2vw 5vw;
`


function Pokedex() {
  const { states, setters } = useGlobalContext();

  const botaoRemover = (pkmParaRemover) => {
    const teste2 = states.pokedex.filter(pokemon => pokemon.name != pkmParaRemover.name)
    setters.setPokedex(teste2)
    alert ("Pokémon removido da sua Pokedex!")
  }

  const nameBotao = "Remover"

  return (
    <div>
      <CardContainer>
      {states.pokedex &&
        states.pokedex.sort(function(a, b) { return a.id - b.id}).map((pokemon) => {
          return <PokeCard key={pokemon.name} pokemon={pokemon} nomeBotao={nameBotao} fbotao={botaoRemover} img={pokemon.sprites.front_default} alt={pokemon.name} PokemonName={pokemon.name}/>;
        })}
      </CardContainer>     
    </div>
  );
}
  
export default Pokedex;