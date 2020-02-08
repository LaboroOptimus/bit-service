import React from 'react'
import styled from "styled-components";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';


const Button = styled.button`
    color: #fff;
    cursor: pointer;
    border-radius: 50px;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
    justify-content: center;
    padding: 10px 30px;
    -webkit-text-decoration: none;
    text-decoration: none;
    outline: none;
    border: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    font-size: 14px;
    height: 45px;
    font-family: 'NotoSans-Bold';
    align-self: center;
    background: #70C294;
`;

const Icon = styled(FontAwesomeIcon)`
    color: #fff; 
    margin-right: 3px;
`;


export default function AddButton(props) {
    return (
        <Button onClick={props.onClick}><Icon icon={faPlus}/>{props.text}</Button>
    )
}