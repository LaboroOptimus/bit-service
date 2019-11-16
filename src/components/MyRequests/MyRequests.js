import React from 'react'
import styled from "styled-components";


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 100px 30px;
`;

const Title = styled.h3`
    font-size: 30px;
    text-align: left;
    margin-top: 0;
    margin-bottom: 0;
`;

class MyRequests extends React.Component{
    render(){
        return(
            <Wrapper>
                <Title>Мои заявки</Title>
            </Wrapper>
        )
    }
}

export default MyRequests