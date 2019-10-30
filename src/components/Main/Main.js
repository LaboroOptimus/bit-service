import React from 'react'
import styled from "styled-components";

const Wrapper = styled.div`
    height: 500px;
    background: #e5e5e5;
    box-sizing: border-box;
    padding: 30px;
`;

const Title = styled.h1`
    text-align: center;
    font-size: 2em;
    font-weight: bold;
`;

const FormWrapper = styled.form`
    text-align: center;
    margin-top: 30px;
`

const Button = styled.button`
    color: #fff;
    border: none;
    cursor: pointer;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
    justify-content: center;
    padding: 0 15px;
    border-radius: 6px;
    -webkit-text-decoration: none;
    text-decoration: none;
    outline: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: #0095ff;
    width: 10%;
    font-size: 15px;
    font-weight: bold;
    height: 44px;
    border-radius: 0 6px 6px 0;
`;

const Input = styled.input`
    background-color: #fff;
    padding: 10px;
    width: 50%;
    box-sizing: border-box;
    border-radius: 6px;
    -webkit-text-decoration: none;
    text-decoration: none;
    outline: 0;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #333333;
    border: none;
    border-radius: 6px 0 0 6px;
`;


class Main extends React.Component {
    render() {
        return (
            <Wrapper>
                <Title>Сломалась бытовая или компьютерная техника?</Title>
                <FormWrapper>
                    <Input placeholder="Что у Вас сломалось?"/>
                    <Button type="submit">Найти</Button>
                </FormWrapper>
            </Wrapper>
        );
    }
}

export default Main