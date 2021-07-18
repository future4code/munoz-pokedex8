import { Card, ButtonContainer, Button } from "./styles"
import { useHistory } from 'react-router';



const PokeCard = (props) => {
    const history = useHistory();

    const goToDetails = () => {
        history.push(`/${props.PokemonName}/details`)
    }
    


    return (
        <Card>
            <img src={props.img} alt="pokemon"/>
            <strong>{props.PokemonName}</strong>
            <ButtonContainer>
                <Button onClick={() => props.fbotao(props.pokemon)}>{props.nomeBotao}</Button>
                <Button onClick={() => goToDetails(history)}>Detalhes</Button>
            </ButtonContainer>
        </Card>
    )
}
export default PokeCard;