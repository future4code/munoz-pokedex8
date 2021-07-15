import React, { useEffect, useState } from 'react';
import { useParams} from 'react-router-dom';
import axios from "axios"

function PokeDetails() {
  const [pokeData, setPokeData] = useState()

  const { pokemon } = useParams();


  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then((response) =>{
        setPokeData(response.data)
        console.log(response.data.stats[0].base_stat)
      })
  }, [])

  return (
    <>
    {pokeData && <div>
      <h1>{pokemon}</h1>
      <section>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeData.id}.png`} alt={`${pokemon} front`}  width="150" height="150"/>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokeData.id}.png`} alt={`${pokemon} back`}  width="150" height="150"/>
      </section>

      <section>
        <h2>Status</h2>
        <p><b>HP:</b> {pokeData.stats[0].base_stat}</p>
        <p><b>Ataque:</b> {pokeData.stats[1].base_stat}</p>
        <p><b>Defesa:</b> {pokeData.stats[2].base_stat}</p>
        <p><b>Ataque-Especial:</b> {pokeData.stats[3].base_stat}</p>
        <p><b>Defesa-Especial:</b> {pokeData.stats[4].base_stat}</p>
        <p><b>Velocidade:</b> {pokeData.stats[5].base_stat}</p>
      </section>

      <section>
        <h3>Tipo 1:</h3>
        <p>{pokeData.types[0].type.name}</p>
        <h3>Tipo 2:</h3>
        <p>{pokeData.types[1] ? pokeData.types[1].type.name : "Nenhum"}</p>
      </section>

      <section>
        <h2>Ataques</h2>
        <p><b>Ataque 1:</b> {pokeData.moves[0].move.name}</p>
        <p><b>Ataque 2:</b> {pokeData.moves[1].move.name ? pokeData.moves[1].move.name : "Nenhum"}</p>
        <p><b>Ataque 3:</b> {pokeData.moves[2].move.name ? pokeData.moves[2].move.name : "Nenhum"}</p>
        <p><b>Ataque 4:</b> {pokeData.moves[3].move.name ? pokeData.moves[3].move.name : "Nenhum"}</p>
      </section>
    </div>}
    </>

    
  );
}
  
export default PokeDetails;