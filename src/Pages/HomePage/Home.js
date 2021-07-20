import React, { useEffect, useState } from 'react'
import axios from "axios"
import {useGlobalContext} from "../../Global/GlobalContext"
import PokeCard from '../../Components/PokeCard/PokeCard'
import { CardContainer } from "./styles"

function Home() {
  const { states, setters } = useGlobalContext()
  const [pokemons, setPokemon] = useState()

  const get20 = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?offset=00&limit=20`)
      .then((response) =>{
        setPokemon(response.data)
      })
  }

  const createState = () => {
    pokemons.results.map((pkm) =>{
      axios
        .get(`${pkm.url}`)
        .then((response) =>{
          const pokemon = response.data
          states.pkmApi.push(pokemon)
          setters.setPkmApi([...states.pkmApi.sort(function(a, b) { return a.id - b.id})])
      })
    })
  }

  const botaoAdicionar = (pkmParaAdicionar) => {
    states.pokedex.push(pkmParaAdicionar)
    setters.setPokedex([...states.pokedex])
    alert (`Adicionado à Pokedex`)
  }

  const botaoRemover = (pkmParaRemover) => {
    const teste2 = states.pokedex.filter(pokemon => pokemon.name != pkmParaRemover.name)
    setters.setPokedex(teste2)
  }

  let nomeBotao = "adicionar"
  let fbotao 
  
  const checarSeExiste = (pkmInfo) => {   
    if (states.pokedex.length == 0){
      return nomeBotao = "adicionar", fbotao = () => botaoAdicionar(pkmInfo)
    }
    
    states.pokedex.find((pkmNaPokedex) =>{
      if (pkmNaPokedex.name === pkmInfo.name) {
        return nomeBotao = "remover", fbotao = () => botaoRemover(pkmInfo)
      }
      
      return nomeBotao = "Adicionar", fbotao = () => botaoAdicionar(pkmInfo)
    })
  }

  useEffect(() => {
    if (!pokemons){
      get20()
    }
    if (pokemons && states.pkmApi.length === 0){
      createState()
    }
  }, [pokemons, states.pkmApi])
  
  return (
    <CardContainer>
      {states.pkmApi.map((pokemon, i)=>{
        return(
          <PokeCard
          // {...console.log(pokemon)}
          // {...console.log(i)}
            {...checarSeExiste(pokemon)}
            key={i}
            pokemon={pokemon}
            nomeBotao={nomeBotao}
            fbotao={fbotao}
            img={pokemon.sprites.front_default} 
            alt={pokemon.name} 
            PokemonName={pokemon.name}>            
          </PokeCard>
        )
      })}
    </CardContainer>
  );
}
  
export default Home;