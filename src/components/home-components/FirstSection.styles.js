import styled from "styled-components";

export const SectionContainer = styled.section`
    height: 100vh;
    background-image: url("/Portada01.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    padding-left: 120px;
`

export const Title = styled.h1`
    width: 300px;
    color: #ffffff;
    font-size: 38px;
    font-weight: bold;
`

export const Subtitle = styled.h2`
    width: 400px;
    color: #ffffff;
    font-size: 22px;
    font-weight: normal;
    margin: 0px;
`

export const SectionSubcontainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 30px;
`

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    width: 400px;
`

export const Button = styled.button`
    background-color: #000;
    border: 1px solid ${props => props.search || "#ffffff"};
    border-radius: 30px;
    color: ${props => props.search || "#ffffff"};
    font-size: 12px;
    font-weight: 400;
    cursor: pointer;
    padding: 10px 15px;
`

export const SearchContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    gap: 20px;
`

export const SearchInput = styled.input`
    background-color: #fff;
    border: 1px solid #ffffff;
    border-radius: ${props => props.borderRadius || "40px"};
    color: #fff;
    font-size: 12px;
    font-weight: 400;
    padding: 10px 0px 10px 40px;
    width: 325px;
    color: #000;
    &:focus {
        outline: none;
    }
    &::placeholder {
        color: ${props => props.placeholderTextColor};;
    }
`

export const Circle = styled.div`  
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: #FFDE59;
    position: absolute;
    bottom: -200px;
    right: -50px;
`

export const IconWrapper = styled.button`
    cursor: pointer;
    text-decoration: none;
    position: absolute;
    left: 10px;
    background: none;
    border: 0;
    color: inherit;
    font: inherit;
    line-height: normal;
    overflow: visible;
    padding: 0;
`