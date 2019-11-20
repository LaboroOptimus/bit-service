import React from 'react'
import styled from "styled-components";
import ServiceList from "../ServiceList/ServiceList";

const Wrapper = styled.div`
    padding: 100px 30px;
    background-color: #FCFCFE;
`;

const Title = styled.h3`
    font-size: 30px;
    margin-top: 0;
    margin-bottom: 0;
`;

const FormWrapper = styled.form`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    
    @media (max-width: 768px) {
        margin-top: 0;
    }
`;

const Input = styled.input`
    background-color: #fff;
    padding: 0px 13px 0px 20px;
    border: 1px solid #eee;
    box-sizing: border-box;
    -webkit-text-decoration: none;
    text-decoration: none;
    outline: 0;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #333333;
    margin-right: 30px;
    box-shadow: 0px -2px 6px rgba(140, 140, 140, 0.1), 0px 2px 6px rgba(140, 140, 140, 0.1);
    border-radius: 10px;
    width: 330px;
    height: 50px;
    
    @media (max-width: 768px) {
        margin-right:0;
        margin-top: 10px;
        margin-bottom: 10px;
    }
`;

const Button = styled.button`
    color: #fff;
    cursor: pointer;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
    justify-content: center;
    padding: 13px 13px 13px 20px;
    border-radius: 6px;
    -webkit-text-decoration: none;
    text-decoration: none;
    outline: none;
    border: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color #6A7BFF;
    font-size: 17px;
    font-weight: normal;
    height: 48px;    
    box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.25), 0px 2px 4px rgba(0, 0, 0, 0.25);
    
     @media (max-width: 768px) {
        margin: 10px auto;
    }
`;

const Container = styled.div`
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


class FindService extends React.Component {
    render(){
        return(
            <Wrapper>
                <Title>Найти сервис</Title>
                <FormWrapper>
                    <Container>
                    <Input placeholder={'Город'}/>
                    <Input placeholder={'Тип ремонтируемой техники'}/>
                    <Button>Найти сервисы</Button>
                    </Container>

                    <Container>
                        <SortText>Сортировка:</SortText>
                        <SortItem>по рейтингу</SortItem>
                        <SortItem>по цене</SortItem>
                        <SortItem>по удаленности</SortItem>
                    </Container>
                </FormWrapper>
                <ServiceList/>

            </Wrapper>
        )
    }
}

export default FindService