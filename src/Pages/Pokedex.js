import React from 'react';
import { useHistory, useParams } from "react-router-dom";

function Pokedex() {
    const history = useHistory();

    const goBack = () => {
      history.goBack();
    };

    return (
      <div>
       <h1>PokeDex</h1>
       <button onClick={goBack}>Voltar</button>
      </div>
    );
}
  
export default Pokedex;