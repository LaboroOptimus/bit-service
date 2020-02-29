import React from 'react';
import styled from "styled-components";

const But = styled.button`
    color: #fff;
    cursor: pointer;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
    justify-content: center;
    padding: 15px 35px;
    border-radius: 50px;
    -webkit-text-decoration: none;
    text-decoration: none;
    outline: none;
    border: 3px solid #368594;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: #368594;
    font-size: 18px;
    font-family: 'NotoSans-Bold';
    
    :hover {
        border: 3px solid #368594;
        background: transparent;
        color: #368594;
    }
`;

export default function Button (props) {
    return (
        <But onClick={props.onClick}>{props.text}</But>
    )
}
