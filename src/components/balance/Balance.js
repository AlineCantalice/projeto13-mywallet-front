import styled from "styled-components";
import React, { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import UserContext from "../../contexts/UserContext";
import Statements from "./Statements";
import axios from "axios";

export default function Balance() {

    const URL = "https://back-project-13.herokuapp.com/balance";
    const { user, setUser, balanceList, setBalanceList } = useContext(UserContext);

    const navigate = useNavigate();
    const balance = calculateBalance(balanceList);
   

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        }

        const promise = axios.get(URL, config);

        promise.then(res => {
            if (res.data.length !== 0) {
                const newBalanceList = res.data
                setBalanceList(newBalanceList);
            }
        });
    }, []);

    function calculateBalance(balanceList) {
        let entrySum = 0;
        let outSum = 0;
        console.log(balanceList)
        if(balanceList.length !== 0) {
            balanceList.forEach((statement) => {
                if (statement.type === "deposit") {
                    entrySum += parseFloat(statement.value.replace(",", "."));
                } else if (statement.type === "withdraw") {
                    outSum += parseFloat(statement.value.replace(",", "."));
                }
            });
    
            return (entrySum - outSum).toFixed(2).replace(".", ",");
        }
    }

    function logOut() {
        if (window.confirm("Você realmente deseja sair?")) {
            setUser({});
            navigate("/");
        }
    }

    function renderStatements() {
        return (
            balanceList.map((item, index) => <Statements key={index} title={item.title} value={item.value} type={item.type} date={item.day} />)
        );
    }

    function renderLocalStatements() {
        if (balanceList.length === 0) {
            return (
                <p>
                    Não há registros de
                    entrada ou saída
                </p>
            );
        } else {
            return (
                <>
                    <Statement>
                        {statements}
                    </Statement>
                    <BalanceValue balance={balance}>
                        <h5>Saldo</h5>
                        <h6>{balance}</h6>
                    </BalanceValue>
                </>
            );
        }
    }

    const statements = renderStatements();
    const localStatements = renderLocalStatements();

    return (
        <Container>
            <Header>
                <h2>Olá, {user.name}</h2>
                <ion-icon onClick={logOut} name="log-out-outline"></ion-icon>
            </Header>
            <BankStatement>
                {localStatements}
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
    width: 326px;
    height: calc(100vh - 220px);
    background-color: #FFFFFF;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    padding: 24px 12px 10px 12px;
    position: relative;

    p {
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        align-self: center;
        text-align: center;
        margin-top: 50%;
        width: 200px;
        color: #868686;
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

const Statement = styled.div`
    margin-bottom: 35px;
    overflow-y: scroll;
    &::-webkit-scrollbar {
    display: none;
    }
`

const BalanceValue = styled.div`
    width: 300px;
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: 10px;
    h5 {
        font-weight: 700;
        font-size: 17px;
        line-height: 20px;
        color: #000000;
    }
    h6 {
        font-weight: 400;
        font-size: 17px;
        line-height: 20px;
        color: ${props => parseFloat(props.balance) >= 0 ? "#03AC00" : "#C70000"};
    }
`