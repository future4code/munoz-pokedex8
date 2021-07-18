import styled from "styled-components"
import DetailsButton from '../DetailsButton/DetailsButton'


const Card = styled.div `
    border: outset;
    width: 15vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 5px;
    padding: 5px;
`

const Botoes = styled.div `
    display: flex;
    
`

const Button = styled.button`
    
    cursor: pointer;
   
`

const PokeCard = (props) => {
    return (
        <Card>
            <img src={props.img} alt="pokemon"/>
            <strong>{props.PokemonName}</strong>
            <Botoes>
                <Button onClick={() => props.fbotao(props.pokemon)}>{props.nomeBotao}</Button>
                <DetailsButton PokemonName={props.PokemonName}/>
            </Botoes>
        </Card>
    )
}
export default PokeCard