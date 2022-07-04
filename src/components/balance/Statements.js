import styled from "styled-components";

export default function Statements({ title, value, type, date }) {

    return (
        <Container>
            <Title>
                <h2>{date}</h2>
                <h3>{title}</h3>
            </Title>
            <Value type={type}>{value}</Value>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    width: 100%;
    position: relative;
    margin-bottom: 10px;
`

const Title = styled.div`
    display: flex;
    align-items: center;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    width: 215px;
    h2{
        color: #C6C6C6; 
        margin-right: 12px;
    }
    h3 {
        color: #000000;
        word-break: break-word;
    }   
`

const Value = styled.div`
    width: 80px;
    display: flex;
    justify-content: end;
    align-items: center;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: ${props => props.type === "deposit" ? "#03AC00" : "#C70000"};
    word-break: break-all;
    margin-left: 5px;
`