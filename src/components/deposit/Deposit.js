import styled from "styled-components"

import Button from "../../shared/button/Button"
import Input from "../../shared/input/Input"

export default function Deposit() {

    // Caso seja uma entrada
    return (
        <Container>
            <p>Nova Entrada</p>
            <form>
                <Input placeholder="Valor" />
                <Input placeholder="Descrição" />
                <Button title="Salvar entrada" />
            </form>
        </Container>
    )

}

const Container = styled.section`
    margin: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
        font-weight: 700;
        font-size: 26px;
        color: #FFFFFF;
        margin-top: 25px;
        margin-bottom: 40px;
    }
`
