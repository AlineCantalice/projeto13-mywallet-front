import styled from "styled-components";

export default function Input({ onChange, value, type, name, placeholder }) {
    return (
        <InputCss onChange={onChange} value={value} type={type} name={name} placeholder={placeholder} />
    )
}

const InputCss = styled.input`
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
`