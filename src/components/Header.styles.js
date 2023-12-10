import styled from 'styled-components';

export const HeaderContainer = styled.div`
    height: 15vh;
    width: 100%;
    background-color: #222222;
    display: flex;
    justify-content: end;
    align-items: center;
    position: relative;
`

export const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: center;
    padding-right: 40px;
    gap: 20px;
`

export const Link = styled.a`
    cursor: pointer;
    color: #ffffff; 
    padding: 10px;
    font-weight: bold;   
    font-size: 12px;
    transition: all 0.2s ease-in-out;
    &:hover {
        color: #EABB00;
        border-bottom: 1px solid #EABB00;
    }
`

export const Logo = styled.img`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 10%;
    width: 85px;
    height: 85px;
`