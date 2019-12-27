import React from 'react'
import styled from "styled-components";
import MyRequestItem from "./MyRequestItem";
import {data} from "./data";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 100px 30px;
    background-color: #FCFCFE;
`;

const Title = styled.h3`
    font-size: 30px;
    text-align: left;
    margin-top: 0;
    margin-bottom: 0;
`;

const SortItem = styled.a`
    color: #3249FF;
    //border-bottom: 1px solid #3249FF;
    font-weight: normal;
    font-size: 17px;
    line-height: 18px;
    margin: 0 10px;
    
    :hover {
        cursor: pointer;
        border-bottom: 1px solid #3249FF;
    }
`;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 20px;
    margin-bottom: 20px;
    flex-wrap: wrap;
`;

const SortContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    margin-bottom: 20px;
    flex-wrap: wrap;
`;

const SortText = styled.span`
    color: #969696;
    font-size: 17px;
    line-height: 19px
`;

class MyRequests extends React.Component {
    render() {
        return (
            <Wrapper>
                <Title>Мои заявки</Title>
                <SortContainer>
                    <SortText>Показывать:</SortText>
                    <SortItem>все</SortItem>
                    <SortItem>активные</SortItem>
                    <SortItem>удаленные</SortItem>
                </SortContainer>

                <Container>
                    {data.map((e) => {
                       return(<MyRequestItem id={e.id} status={e.status} date={e.date} name={e.name} problem={e.problem} photo={e.photo} answers={e.answers} />)
                    })}
                </Container>

            </Wrapper>
        )
    }
}

export default MyRequests