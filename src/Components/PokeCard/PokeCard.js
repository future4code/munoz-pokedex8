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

export const PokeCard = () => {
    return (
        <Card>
            <p>POKE CARD</p>
            <Botoes>
                <button>ADD</button>
                <button>Ver Det.</button>
            </Botoes>
        </Card>
    )
}
export default PokeCard