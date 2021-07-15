import { useHistory } from "react-router";
import React from "react";


const DetailsButton = (props) => {
    const history = useHistory();

    const goToDetails = () => {
        history.push(`/${props.PokemonName}/details`)
    }

    return (
        <>
            <button onClick={() => goToDetails(history)}>Detalhes</button>
        </>
    )
}
export default DetailsButton;