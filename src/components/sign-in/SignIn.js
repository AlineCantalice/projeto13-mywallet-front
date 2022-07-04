import styled from "styled-components"

import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Button from "../../shared/button/Button"
import Input from "../../shared/input/Input"
import UserContext from "../../contexts/UserContext";

export default function SignIn() {

    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);

    const URL = "http://localhost:5000/sign-in";

    const [formData, setFormData] = useState(
        {
            email: '',
            password: ''
        }
    );

    function handleInputChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    function signIn(event) {
        event.preventDefault();
        const promise = axios.post(URL, formData);
        promise.then(response => {
            setUser(response.data);
            navigate("/balance")
        }).catch(() => {
            alert("E-mail ou senha incorretos!! Tente novamente.");
            setFormData({
                email: '',
                password: ''
            });
        })
    }

    return (
        <Container>
            <h1>MyWallet</h1>
            <form onSubmit={signIn}>
                <Input onChange={handleInputChange} type='text' name="email" placeholder="E-mail" />
                <Input onChange={handleInputChange} type='password' name="password" placeholder="Senha" />
                <Button type="submit" title="Entrar" />
            </form>
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