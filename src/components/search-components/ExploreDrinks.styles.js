import styled from "styled-components"

export const ExploreDrinksContainer = styled.div`
    background-image: url("/Portada01.png");
    background-position: right;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 100%;
    height: 120vh;
    background-color: #fff;
    padding-top: 20px;   
    padding-left: 120px;
    color: #fff;
`

export const SearchBox = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
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

export const IconWrapper = styled.button`
    cursor: pointer;
    text-decoration: none;
    background: none;
    border: 0;
    color: inherit;
    font: inherit;
    line-height: normal;
    overflow: visible;
    padding: 0;
    rotate: 270deg;
    &:hover {
        color: #FFDE59;
    }
`

export const IconDeleteWrapper = styled.button`
    cursor: pointer;
    text-decoration: none;
    background: none;
    position: absolute;
    right: 45px;
    border: 0;
    color: black;
    font: inherit;
    line-height: normal;
    overflow: visible;
    padding-right: 5px;
    border-right: 1px solid #000;
`

export const IconSearchWrapper = styled.button`
    cursor: pointer;
    text-decoration: none;
    background: none;
    position: absolute;
    right: 10px;
    border: 0;
    color: black;
    font: inherit;
    line-height: normal;
    overflow: visible;
`

export const ExploreOptionsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 85%;
    padding: 20px 0px 20px 0px;
`

export const ButtonsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
`