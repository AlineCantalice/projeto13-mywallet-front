import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components"

import UserContext from "../../contexts/UserContext"
import Button from "../../shared/button/Button"
import Input from "../../shared/input/Input"

export default function Deposit() {

    const URL = "http://localhost:5000/balance";
    const { user } = useContext(UserContext);

    const navigate = useNavigate();

    const [value, setValue] = useState('');
    const [title, setTitle] = useState('');

    function newEntry(event) {
        event.preventDefault();

        const body = {
            title: title,
            value: value,
            type: "deposit"
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

    // Caso seja uma entrada
    return (
        <Container>
            <p>Nova Entrada</p>
            <form onSubmit={newEntry}>
                <Input placeholder="Value" />
                <Input placeholder="Descrição" />
                <Button type="submit" title="Salvar entrada" />
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
