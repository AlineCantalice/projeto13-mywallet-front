import styled from "styled-components"

import { useNavigate } from "react-router-dom";

import Button from "../../shared/button/Button"
import Input from "../../shared/input/Input"

export default function Login() {

    const navigate = useNavigate();

    return (
        <Container>
            <h1>MyWallet</h1>
            <form>
                <Input type='text' name="email" placeholder="E-mail" />
                <Input type='password' name="password" placeholder="Senha" />
            </form>
            <Button title="Entrar"/>
            <p onClick={() => navigate("/sign-up")}>Primeira vez? Cadastre-se!</p>
        </Container>
    )
}

const Container = styled.section`
    margin: auto 25px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        font-weight: 400;
        font-size: 32px;
        color: #FFFFFF;
        margin-bottom: 30px;
    }

    p {
        font-weight: 700;
        font-size: 15px;
        color: #FFFFFF;
        margin-top: 36px;
    }
`