import styled from "styled-components"

import { useNavigate } from "react-router-dom";

import Button from "../../shared/button/Button"
import Input from "../../shared/input/Input"

export default function SignUp() {

    const navigate = useNavigate();

    return (
        <Container>
            <h1>MyWallet</h1>
            <form>
                <Input type="text" name="name" placeholder="Nome" />
                <Input type="email" name="email" placeholder="E-mail" />
                <Input type="password" name="password" placeholder="Senha" />
                <Input type="password" name="confirm_password" placeholder="Confirme a senha" />
            </form>
            <Button title="Cadastrar" />
            <p onClick={() => navigate("/")}>Já tem uma conta? Entre agora!</p>
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