import React from 'react'
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import axios from 'axios'
import fire from "../../config/Fire";

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
    width: 60%;
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
`;



class RegistrationForm extends React.Component {

    state = {
        name:'',
        email: '',
        phone: '',
        pass: '',
        uid:''
    };

   onNameChanged = (e) => {
       this.setState({
           name: e.target.value
       })
   }

   onEmailChanged = (e) => {
       this.setState({
           email: e.target.value
       })
   };

   onPhoneChanged = (e) => {
       this.setState({
           phone: e.target.value
       })
   };

   onPassChanged = (e) => {
       this.setState({
           pass: e.target.value
       })
   };

   onSubmit = (e) => {
       e.preventDefault();
       fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.pass)
           .then((response) => {
               //console.log(response.user.uid)
              /* this.setState({
                   uid:response.user.uid
               })*/
              let uid = response.user.uid;
              const data = {
                  name:this.state.name,
                  email:this.state.email,
                  phone: this.state.phone,
              }
               axios.post(`https://bit-ser.firebaseio.com/users/' + ${uid}.json`,data);
           })
           .catch((e) => {
           console.log(e)
       });
   }



    render(){
        console.log(this.state.uid)
        return(
            <Wrapper>
                <FormWrapper>
                    <Title>Регистрация на сайте</Title>
                    <Input onChange={this.onNameChanged} value={this.state.name} placeholder="Имя и Фамилия"/>
                    <Input onChange={this.onEmailChanged} value={this.state.email} placeholder="Email"/>
                    <Input onChange={this.onPhoneChanged} value={this.state.phone} placeholder="Телефон"/>
                    <Input onChange={this.onPassChanged} value={this.state.pass} placeholder="Пароль"/>
                    <Input placeholder="Повторите пароль"/>
                    <Button type="submit" onClick={this.onSubmit}>Зарегистрироваться</Button>
                    <p>Уже зарегистрированы?</p>
                    <NavLink to={'/login'}>Войти на сайт</NavLink>
                </FormWrapper>
            </Wrapper>
        )
    }
}

export default RegistrationForm
