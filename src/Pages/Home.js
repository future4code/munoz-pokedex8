import React from 'react';
import { useHistory, useParams } from "react-router-dom";

function Home() {
    const history = useHistory();

    const goPokedexPage = () => {
        history.push("/pokedex");
    };

    return (
      <div>
        <h1>Home</h1>
        <button onClick={goPokedexPage}>Pokedex</button>
      </div>
    );
}
  
export default Home;