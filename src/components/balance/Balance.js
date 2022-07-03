import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Balance() {

    const navigate = useNavigate();

    return (
        <Container>
            <Header>
                <h2>Olá, Fulano</h2>
                <ion-icon onClick={() => navigate("/")} name="log-out-outline"></ion-icon>
            </Header>
            <BankStatement>
                <h3>Não há registros de entrada ou saída</h3>
            </BankStatement>
            <Footer>
                <div onClick={() => navigate("/deposit")}>
                    <ion-icon name="add-circle-outline"></ion-icon>
                    <p>Nova entrada</p>
                </div>
                <div onClick={() => navigate("/withdraw")}>
                    <ion-icon name="remove-circle-outline"></ion-icon>
                    <p>Nova saída</p>
                </div>
            </Footer>
        </Container>
    );
}

const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Header = styled.header`
    width: 90vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 22px 0;

    h2, ion-icon {
        font-weight: 700;
        font-size: 26px;
        color: #FFFFFF;
    }
`

const BankStatement = styled.article`
    width: 90vw;
    height: 65vh;
    //margin-bottom: 110px;
    background-color: #FFFFFF;
    border-radius: 5px;
    font-weight: 400;
    display: flex;
    align-items: center;

    p {
        font-size: 16px;
        color: #000000; //A cor vai depender se é data, entrada ou saida
    }
    
    // Essa informação aparece quando não tem nenhum historico
    h3 { 
        font-size: 20px;
        color: #868686;
        text-align: center;
    }
`

const Footer = styled.footer`
    width: 90vw;
    height: 114px;
    display: flex;
    justify-content: space-between;
    position: fixed;
    bottom: 18px;
    left: 18px;

    div {
        width: 155px;
        height: 114px;
        background: #A328D6;
        border-radius: 5px;
        position: relative;
    }

    p {
        font-weight: 700;
        font-size: 17px;
        color: #FFFFFF;
        position: absolute;
        left: 10px;
        bottom: 10px;
    }

    ion-icon {
        font-weight: 700;
        font-size: 21px;
        color: #FFFFFF;
        position: absolute;
        left: 10px;
        top: 10px;
    }
`