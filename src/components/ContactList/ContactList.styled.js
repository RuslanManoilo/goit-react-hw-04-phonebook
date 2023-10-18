import styled from "styled-components";

export const ListItem = styled.li`
    background-color: #f0f0f0;
    border: 1px solid #a93a3a;
    border-radius: 5px;
    margin-bottom: 10px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ItemText = styled.p`
    font-family: 'Courier New', monospace;
    color: #333;
`;

export const ItemBtn = styled.button`
    font-family: 'Courier New', monospace;
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: #fff;
    background-color: #a93a3a;
    transition: background-color 0.3s;
        &:hover {
            background-color: #8a2727;
        }
`;