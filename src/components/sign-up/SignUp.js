import styled from "styled-components"

import { useNavigate } from "react-router-dom";
import axios from 'axios';
import React, { useState } from "react";

import Button from "../../shared/button/Button"
import Input from "../../shared/input/Input"

export default function SignUp() {

    const URL = "http://localhost:5000/sign-up";
    const navigate = useNavigate();

    const [formData, setFormData] = useState(
        {
            name: '',
            email: '',
            password: '',
            confirm_password: ''
        }
    );

    function handleInputChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    function signUp(event) {
        event.preventDefault();
        const promise = axios.post(URL, formData);
        promise.then(() => {
            navigate("/");
        }).catch(() => {
            alert("E-mail já cadastrado!! Tente novamente.");
            setFormData({
                name: '',
                email: '',
                password: '',
                confirm_password: ''
            });
        })
    }

    return (
        <Container>
            <h1>MyWallet</h1>
            <form onSubmit={signUp}>
                <Input onChange={handleInputChange} value={formData.name} type="text" name="name" placeholder="Nome" />
                <Input onChange={handleInputChange} value={formData.email} type="email" name="email" placeholder="E-mail" />
                <Input onChange={handleInputChange} value={formData.password} type="password" name="password" placeholder="Senha" />
                <Input onChange={handleInputChange} value={formData.confirm_password} type="password" name="confirm_password" placeholder="Confirme a senha" />
                <Button title="Cadastrar" type="submit" />
            </form>
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