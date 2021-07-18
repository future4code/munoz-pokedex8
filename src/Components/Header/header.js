import { useHistory } from "react-router";
import { goToHomePage, goToPokedex } from "../../route/coordinator";
import { ButtonsContainer, Button } from "./styles";

const Header = () => {
    const history = useHistory();

    return (
        <>
            <ButtonsContainer>
                <Button onClick={() => goToHomePage(history)}>Lista de Pokémons</Button>
                <Button onClick={() => goToPokedex(history)}>Pokédex</Button>
            </ButtonsContainer>
        </>
    )
}
export default Header;