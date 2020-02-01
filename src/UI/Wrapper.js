import React from 'react'
import styled from "styled-components";

const Container = styled.div`
    padding: 100px;
    display: flex;
    flex-direction: column;
`;

export default function Wrapper(props) {
    return (
        <Container>
            {props.children}
        </Container>
    )
}