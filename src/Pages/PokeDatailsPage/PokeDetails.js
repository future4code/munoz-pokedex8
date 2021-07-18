import React, { useEffect, useState } from 'react';
import { useParams} from 'react-router-dom';
import axios from "axios"
import { DetailsConteiner, PokeName, PokeSprites, PokeStats, PokeType, PokeAtak, Image, H1Mover } from './styles';


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
    {pokeData && <DetailsConteiner>
      <PokeName>{pokemon}</PokeName>
  
      <PokeSprites>
        <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeData.id}.png`} alt={`${pokemon} front`} />
        <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokeData.id}.png`} alt={`${pokemon} back`} />
      </PokeSprites>

      <PokeStats>
        <h1>Status</h1>
        <p><b>HP:</b> {pokeData.stats[0].base_stat}</p>
        <p><b>Ataque:</b> {pokeData.stats[1].base_stat}</p>
        <p><b>Defesa:</b> {pokeData.stats[2].base_stat}</p>
        <p><b>Ataque-Especial:</b> {pokeData.stats[3].base_stat}</p>
        <p><b>Defesa-Especial:</b> {pokeData.stats[4].base_stat}</p>
        <p><b>Velocidade:</b> {pokeData.stats[5].base_stat}</p>
      </PokeStats>

      <PokeType>
        <h2>Tipo 1:</h2>
        <p>{pokeData.types[0].type.name}</p>
        <h2>Tipo 2:</h2>
        <p>{pokeData.types[1] ? pokeData.types[1].type.name : "Nenhum"}</p>
      </PokeType>

      <PokeAtak >
        <H1Mover>Ataques</H1Mover>
        <p><b>Ataque 1:</b> {pokeData.moves[0].move.name}</p>
        <p><b>Ataque 2:</b> {pokeData.moves[1].move.name ? pokeData.moves[1].move.name : "Nenhum"}</p>
        <p><b>Ataque 3:</b> {pokeData.moves[2].move.name ? pokeData.moves[2].move.name : "Nenhum"}</p>
        <p><b>Ataque 4:</b> {pokeData.moves[3].move.name ? pokeData.moves[3].move.name : "Nenhum"}</p>
      </PokeAtak>
    </DetailsConteiner>}
    </>

    
  );
}
  
export default PokeDetails;