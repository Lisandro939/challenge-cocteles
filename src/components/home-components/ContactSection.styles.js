import styled from "styled-components";

export const ContactSectionContainer = styled.section`
    width: 100%;
    height: 100vh;
    background: #383838;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    padding-left: 120px;
    & > h4 {
        font-size: 2rem;
        color: #fff;
        margin-bottom: 40px;
    }
    & > h4 > span{
        color: #FFDE59;
        padding-bottom: 5px;
        border-bottom: 3px solid #FFDE59;
    }
    & > p {
        font-size: 1.2rem;
        color: #cdcdcd;
        width: 70%;
    }
`;

export const ContactFormContainer = styled.div`
    position: relative;
    width: calc(100% - 240px);
    height: 40%;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
`;

export const Form = styled.form`
    height: 100%;
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    & [type="email"] {
        width: 100%;
        height: 40px;
        border-radius: 20px;
        border: none;
        outline: none;
        color: #000;
        text-align: center;
        &:not(:placeholder-shown),
        &:focus {
            border: 1px solid #000;
        }
    }
    & p {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }
    // Make the checkbox with background yellow and border yellow
    & [type="checkbox"] {
        cursor: pointer;
        appearance: none;
        width: 15px;
        height: 15px;
        border: 1px solid #000;
        border-radius: 2px;
        &:checked {
            border: 1px solid #FFBC00;
            background-color: #FFBC00;
        }
        &:checked::before {
            content: "✔"; 
            color: white; 
            font-size: 10px; 
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
    & label {
        font-size: 14px;
    }
`;