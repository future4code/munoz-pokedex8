import React, { useEffect, useState } from 'react';
import { useParams} from 'react-router-dom';
import axios from "axios"
import styled from 'styled-components'

const DetailsConteiner = styled.div`
  display: grid;
  grid-template:  1fr 3fr 3fr / 3fr 3fr 3fr;
  background-color: #f7f7f7;
`

const PokeName = styled.h1`
  grid-area: 1/1/2/4;
  text-align: center;
  font-size: 45px;
`

const PokeSprites = styled.section`
  grid-area: 2/1/4/2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 40px;
`

const PokeStats = styled.section`
  grid-area: 2/2/4/3; 
  text-align: center;
  margin-top: 50px;
  margin: 40px;
  padding-top: 150px;
  background-image: url("https://wallpaperaccess.com/full/5818315.png");
  background-size: 550px 650px;
`

const PokeType = styled.section`
  grid-area: 2/3/3/4;
  text-align: center;
  margin-top: 50px;
  margin: 40px;
  padding-top: 40px;
  background-image: url("https://www.pngitem.com/pimgs/m/600-6002639_pokemon-dialog-box-pokemon-text-box-png-transparent.png");
  background-size: 550px 275px;
`

const PokeAtak = styled.section`
  text-align: center;
  margin: 40px;
  padding-top: 10px;
  background-image: url("https://www.pngitem.com/pimgs/m/600-6002639_pokemon-dialog-box-pokemon-text-box-png-transparent.png");
  background-size: 550px 270px;
`

const Image = styled.img`
  width: 200px;
  height: 200px;
  margin: 40px;
  border: solid black 2px;
  background-image: url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2fb2821a-1406-4a1d-9b04-6668f278e944/d843fov-5ad2d436-789b-48f4-91ac-7a553ca26306.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJmYjI4MjFhLTE0MDYtNGExZC05YjA0LTY2NjhmMjc4ZTk0NFwvZDg0M2Zvdi01YWQyZDQzNi03ODliLTQ4ZjQtOTFhYy03YTU1M2NhMjYzMDYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.4WU23QrSu_7CD6c4MJIYPEeIvE5o8maEEkqYM40mwus");
  background-size: 350px;
`

const H1Mover = styled.h1`
  margin-top: 45px;
  margin-bottom: -10px;
`


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