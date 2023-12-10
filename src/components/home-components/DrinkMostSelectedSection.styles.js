import styled from "styled-components";

export const SectionContainer = styled.section`
    background: #383838;
    height: 100vh;
    display: flex;
    flex-direction: flex;
    justify-content: start;
    align-items: center;
    padding-left: 120px;
    color: #fff;
`

export const CardContainer = styled.div`
    height: 100%;
    width: 45%;
    display: flex;
    justify-content: start;
    align-items: center;
`

export const DescriptionContainer = styled.aside`
    height: 100%;
    width: 55%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    padding: 20px;
    text-align: left;
    & > h3 {
        font-size: 2rem;
        margin-bottom: 40px;
    }
    & > h3 > span{
        color: #FFDE59;
        padding-bottom: 5px;
        border-bottom: 3px solid #FFDE59;
    }
    & > p {
        font-size: 1.2rem;
        color: #cdcdcd;
        width: 70%;
    }
`
