import React from 'react'
import styled from "styled-components";

const Title = styled.h3`
    font-size: 20px;
    margin: 20px 0;
    padding: 0;
    font-family: 'NotoSans-Bold';
    color: #222;
`;

export default function Subtitle(props) {
    return (
        <Title>
            {props.children}
        </Title>
    )
}