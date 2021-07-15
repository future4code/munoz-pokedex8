import styled from "styled-components"


const Card = styled.div `
    border: solid 1px black;
    width: 20vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Botoes = styled.div `
    display: flex;
    max-width: 100%;
`

const PokeCard = (props) => {
    
    return (
        <Card>
            <img src={props.img} alt="pokemon"/>
            <Botoes>
                <button>{props.name}</button>
                <button>Ver Det.</button>
            </Botoes>
        </Card>
    )
}
export default PokeCard