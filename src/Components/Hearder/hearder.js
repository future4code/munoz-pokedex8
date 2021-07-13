import { useHistory } from "react-router";
import { goToHomePage, goToPokedex } from "../../route/coordinator";
import { ButtonsContainer } from "./styles";

const Hearder = () => {
    const history = useHistory();

    return (
        <>
            <ButtonsContainer>
                <button onClick={() => goToHomePage(history)}>Lista de Pokémons</button>
                <button onClick={() => goToPokedex(history)}>Pokédex</button>
            </ButtonsContainer>
        </>
    )
}
export default Hearder;