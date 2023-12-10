import styled from "styled-components";

export const PrimaryButton = styled.button`
    width: ${props => props.width || "100%"};
    height: 40px;
    background-color: #FFDE59;
    border-radius: 40px;
    color: #000;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    padding: 10px 20px;
    border: none;
    outline: none;
    transition: 0.3s;
    &:hover {
        background-color: #EABB00;
        color: #fff;
    }
`