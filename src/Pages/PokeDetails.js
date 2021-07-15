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
        console.log(response.data.sprites)
      })
  }, [])


  return (
    <>
    {pokeData && <div>
      <h1>{pokemon}</h1>
      <section>
        <img src="" alt={pokemon}/>
        <img src="" alt={pokemon}/>
      </section>

      <section>
        <h2>Status</h2>
        <p>HP: </p>
        <p>Ataque: </p>
        <p>Defesa: </p>
        <p>Ataque-Especial: </p>
        <p>Defesa-Especial: </p>
        <p>Velocidade</p>
      </section>

      <section>
        <h3>Tipo 1:</h3>
        <p>Placeholder</p>
        <h3>Tipo 2:</h3>
        <p>Placeholder</p>
      </section>

      <section>
        <h2>Ataques</h2>
        <p>Ataque 1: </p>
        <p>Ataque 2: </p>
        <p>Ataque 3: </p>
        <p>Ataque 4: </p>
      </section>
    </div>}
    </>

    
  );
}
  
export default PokeDetails;