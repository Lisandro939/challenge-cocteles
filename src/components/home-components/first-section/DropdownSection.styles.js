import styled from "styled-components"

export const Dropdown = styled.div`
    display: ${props => props.display || "none"};
    position: absolute;
    top: 38px;
    background-color: #f9f9f9;
    min-width: 367px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    border-radius: 0px 0px 20px 20px;
    transition: all 1s ease-in-out;
`

export const DropdownOption = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 12px;
    color: black;
    padding: 12px 10px;
    text-decoration: none;
    &:hover {
        background-color: #eee;
        border-radius: 20px 20px 20px 20px;
    }
`

export const DropdownSearch = styled.button`
    width: fit-content;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    background: none;
    border: 0;
    color: inherit;
    font: inherit;
    line-height: normal;
    overflow: visible;
    padding: 0;
`

export const DeleteSearch = styled.button`
    cursor: pointer;
    text-decoration: none;
    background: none;
    border: 0;
    color: inherit;
    font: inherit;
    line-height: normal;
    overflow: visible;
    padding: 0;
`