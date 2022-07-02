import ResetCss from './theme/ResetCss';
import styled from 'styled-components';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignIn from './components/sign-in/SignIn'
import SignUp from './components/sign-up/SignUp';
import Balance from './components/balance/Balance';

export default function App() {
    return (
        <>
            <ResetCss />
            <Main>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<SignIn />} />
                        <Route path='/sign-up' element={<SignUp />} />
                        <Route path='/balance' element={<Balance />} />
                    </Routes>
                </BrowserRouter>
            </Main>
        </>

    )
}

const Main = styled.main`
    width: 100vw;
    height: 100vh;
    background-color: #8C11BE;
    font-family: 'Raleway', sans-serif;
    box-sizing: border-box;
    display: flex;
    justify-content: center;

    h1 {
        font-family: 'Saira Stencil One', cursive;
    }
`