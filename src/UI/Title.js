import React from 'react'
import styled from "styled-components";

const FirstTitle = styled.h2`
    font-size: 40px;
    padding: 0;
    margin: 20px 0;
    font-family: 'NotoSans-Bold';
    color: #222;  
`;

export default function Title(props) {
    return (
        <FirstTitle>
            {props.children}
        </FirstTitle>
    )
}