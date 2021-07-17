import styled from "styled-components"
import DetailsButton from '../DetailsButton/DetailsButton'


const Card = styled.div `
    border: solid 1px black;
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

const PokeCard = (props) => {
   

    
    return (
        <Card>
            <img src={props.img} alt="pokemon"/>
            <p>{props.PokemonName}</p>
            <Botoes>
                <button onClick={() => props.fbotao(props.pokemon)}>{props.nomeBotao}</button>
                <DetailsButton PokemonName={props.PokemonName}/>
            </Botoes>
        </Card>
    )
}
export default PokeCard