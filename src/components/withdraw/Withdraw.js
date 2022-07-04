import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components"
import UserContext from "../../contexts/UserContext";

import Button from "../../shared/button/Button"
import Input from "../../shared/input/Input"

export default function Withdraw() {

    const URL = "https://back-project-13.herokuapp.com/balance";
    const { user } = useContext(UserContext);

    const navigate = useNavigate();

    const [value, setValue] = useState('');
    const [title, setTitle] = useState('');

    function newOut(event) {
        event.preventDefault();

        const body = {
            title: title,
            value: value,
            type: "withdraw"
        }

        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        }

        const promise = axios.post(URL, body, config);

        promise
            .then(res => {
                navigate("/balance");
            }).catch((err) => {
                alert(err.response.data);
                setValue('');
                setTitle('');
            })
    }

    // Caso seja uma saida
    return (
        <Container>
            <p>Nova Saída</p>
            <form onSubmit={newOut}>
                <Input type="text" placeholder="Valor" onChange={(e) => setValue(e.target.value)} value={value} />
                <Input type="text" placeholder="Descrição" onChange={(e) => setTitle(e.target.value)} value={title} />
                <Button type="submit" title="Salvar saída" />
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