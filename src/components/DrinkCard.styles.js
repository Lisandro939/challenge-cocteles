import styled from "styled-components";

export const Card = styled.div`
    background-image: url(${props => props.image});
    background-size: 100%;
    background-position: center center;
    width: 475px;
    min-width: 475px;
    height: 475px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    cursor: pointer;
    transition:0.3s background-size;
    transition-delay: 0s;
    &:hover {
        background-size: 120%;
        transition:0.3s background-size;
        transition-delay: 0s;
        outline: 1px solid #FFDE59;
    }
`;

export const CardDetails = styled.div`
    background: #fff;
    color: #000;
    width: 100%;
    height: 45%;
    border-radius: 0px 0px 20px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
    & > h4 {
        font-size: 1.3rem;
        font-weight: 700;
        margin-bottom: 10px;
        margin: 0px;
    }
    & > p {
        width: 80%;
        font-weight: 500;
        margin: 0px;
    }
`
