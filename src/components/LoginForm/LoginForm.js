import React from 'react'
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import axios from "axios";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 100px 30px;
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
    -webkit-text-decoration: none;
    text-decoration: none;
    outline: none;
    border: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    font-size: 17px;
    font-weight: bold;
    height: 44px;
    width: 200px;
    margin: 17.5px auto;
    background: #6A7BFF;
    box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.25), 0px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 50px;
`;

const Input = styled.input`
    width: 330px;
    background-color: #fff;
    box-shadow: 0px -4px 6px rgba(140, 140, 140, 0.1), 0px 4px 6px rgba(140, 140, 140, 0.1);
    padding: 20px 13px 20px 25px;
    box-sizing: border-box;
    border-radius: 50px;
    border: 1px solid #eee;
    -webkit-text-decoration: none;
    text-decoration: none;
    outline: 0;
    font-weight: 400;
    font-size: 17px;
    line-height: 24px;
    color: #787878;
    margin: 17.5px 0;
    margin-right: 10px;
`;

const Title = styled.h3`
    font-size: 30px;
    text-align: center;
    margin-top: 0;
`;

const Link = styled(NavLink)`
    text-align: left;
    color: #3249FF;
`;

const LinkDecription = styled.p`
   font-size: 17px;   
   text-align: right;
   margin: 0;
   color: #000;
`;

const LinksWrapper = styled.div`
    display: flex;
    margin-top: 17.5px;
`;

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-left: ${props=>props.marginLeft};
`;


class LoginForm extends React.Component {
    state = {
        login: '',
        password: '',
    };

    onChangeLogin = (e) => {
        this.setState({
            login: e.target.value
        })
    }

    onChangePass = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    onSubmit = async (e) => {
        e.preventDefault();
        const authData = {
            email: this.state.login,
            password: this.state.password,
            returnSecureToken: true
        }
        try {
            const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD9_bt5G55PgVsoh3M20ZKAwe6MhroAOK8', authData);
            console.log(response.data)
        } catch (e) {

        }
    }

    render() {
        return (
            <Wrapper>
                <FormWrapper>
                    <Title>Вход на сайт</Title>
                    <Input value={this.state.login} onChange={this.onChangeLogin} placeholder="Email/телефон"/>
                    <Input value={this.state.password} onChange={this.onChangePass} placeholder="Пароль"/>
                    <Button type="submit" onClick={this.onSubmit}>Войти</Button>
                    <LinksWrapper>
                    <Container>
                        <LinkDecription>Забыли пароль?</LinkDecription>
                        <LinkDecription>Нет аккаунта?</LinkDecription>

                    </Container>

                    <Container marginLeft={'15px'}>
                        <Link to={'/forgotpass'}>Восстановление пароля</Link>
                        <Link to={'/registration'}>Зарегистрироваться</Link>
                    </Container>
                    </LinksWrapper>


                </FormWrapper>
            </Wrapper>
        )
    }
}

export default LoginForm