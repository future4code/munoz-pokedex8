import React, { useEffect, useState } from 'react'
import axios from "axios"
import {useGlobalContext} from "../Global/GlobalContext"
import PokeCard from '../Components/PokeCard/PokeCard';


function Home() {
  const { states, setters } = useGlobalContext()
  const [pokemons, setPokemon] = useState()
  const [pokemonsList, setPokemonsList] = useState([])

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
          setPokemonsList([...pokemonsList, pokemonsList.push(pokemon)])
      })
    })
  }

  useEffect(() => {
    if (!pokemons){
      get20()
    }
    if (pokemons && pokemonsList.length === 0){
      createState()
    }
  }, [pokemons, pokemonsList])
    
  const teste = () => {
    const sprites = []
    pokemonsList.map((pokemon)=>{
      return sprites.push(pokemon.sprites)
    })
    return console.log(sprites)
  }

  return (
    <div>
      <h1>Home</h1>
      <button onClick={teste}>teste</button>
      {pokemonsList.map((pokemon)=>{
        return(
          <PokeCard 
            key={pokemon.name} 
            botao={"remov add"} 
            img={pokemon.sprites} 
            alt={pokemon.name} 
            PokemonName={pokemon.name}>            
          </PokeCard>
        )
      })}
    </div>
  );
}
  
export default Home;