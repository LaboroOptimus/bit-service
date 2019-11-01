import React from 'react'
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    padding:100px 30px;
`;
const FormWrapper = styled.form`
    text-align: center;
    margin-top: 30px;
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
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
    width: 40%;
    margin: 0 auto;
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

const Title = styled.h3`
    font-size: 30px;
    text-align: center;
    margin-top: 0;
`;

const Link = styled.a`
   font-size: 18px;
   color: blue;
   border-bottom: 1px solid dotted; 
   margin-top: 10px;
`


class LoginForm extends React.Component {
    render() {
        return (
            <Wrapper>
                <FormWrapper>
                    <Title>Вход на сайт</Title>
                    <Input placeholder="Email/телефон"/>
                    <Input placeholder="Пароль"/>
                    <Button>Войти</Button>
                    <Link href={'#'}>Забыли пароль?</Link>
                </FormWrapper>

            </Wrapper>
        )
    }
}

export default LoginForm