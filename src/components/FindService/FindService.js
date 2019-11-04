import React from 'react'
import styled from "styled-components";
import ServiceList from "../ServiceList/ServiceList";

const Wrapper = styled.div`
    padding: 100px 30px;
`;

const Title = styled.h3`
    font-size: 30px;
    margin-top: 0;
`;

const FormWrapper = styled.form`
    margin-top: 30px;
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
`;

const Select = styled.select`
    background-color: #fff;
    padding: 13px 120px 13px 13px;
    box-sizing: border-box;
    border-radius: 6px;
    border: 1px solid #eee;
    -webkit-text-decoration: none;
    text-decoration: none;
    outline: 0;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #333333;
    margin: 10px 0;
    width: 30%;
    margin-right: 10px;
`;

const Input = styled.input`
    background-color: #fff;
    padding: 13px 120px 13px 13px;
    box-sizing: border-box;
    border-radius: 6px;
    border: 1px solid #eee;
    -webkit-text-decoration: none;
    text-decoration: none;
    outline: 0;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #333333;
    margin: 10px 0;
    margin-right: 10px;
`;

const Button = styled.button`
    color: #fff;
    cursor: pointer;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
    justify-content: center;
    padding: 0 15px;
    border-radius: 6px;
    -webkit-text-decoration: none;
    text-decoration: none;
    outline: none;
    border: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: #0095ff;
    font-size: 15px;
    font-weight: bold;
    height: 44px;
    margin: 0 auto;
    margin-top: 15px;
`;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`


class FindService extends React.Component {
    render(){
        return(
            <Wrapper>
                <Title>Найти сервис</Title>
                <FormWrapper>
                    <Container>
                    <Input placeholder={'Город'}/>
                    <Select>
                        <option value="" disabled selected>Тип ремонтируемой техники</option>
                        <option>Телевизоры</option>
                        <option>Смартфоны</option>
                        <option>Планшеты</option>
                        <option>Ноутбуки</option>
                    </Select>

                    <Select>
                        <option value="" disabled selected>Сортировка</option>
                        <option>по рейтингу</option>
                        <option>по ценам</option>
                        <option>по удаленности</option>
                    </Select>

                    <Button>Найти сервисы</Button>
                    </Container>

                </FormWrapper>
                <ServiceList/>

            </Wrapper>
        )
    }
}

export default FindService