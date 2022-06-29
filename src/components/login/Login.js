import styled from "styled-components"
import Button from "../../shared/button/Button"

export default function Login() {
    return (
        <Container>
            <h1>MyWallet</h1>
            <Form>
                <input type='text' name="email" placeholder="E-mail" />
                <input type='password' name="password" placeholder="Senha" />
            </Form>
            <Button title="Login"/>
            <p>Primeira vez? Cadastre-se!</p>
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

const Form = styled.form`
    
    input {
        width: 100%;
        height: 58px;
        background-color: #FFFFFF;
        border: none;
        border-radius: 5px;
        margin-bottom: 13px;
        font-size: 20px;
        font-weight: 400;
        color: #000000;
        padding-left: 15px;
    }
`