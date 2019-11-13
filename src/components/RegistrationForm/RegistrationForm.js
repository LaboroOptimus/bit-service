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
    padding: 13px 13px 13px 13px;
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

const FormBlock = styled.div`
    display: flex;
    margin-top:10px;
    margin-bottom: 10px;
`;

const CheckoboxLabel = styled.p`
    margin: 5px;
`;

const Error = styled.div`
    padding: 8px;
    background: #ff00008f;
    text-align: left;
    border-radius: 10px;
    width: auto;
    color: #fff;
`;




class RegistrationForm extends React.Component {

    state = {
        name:'',
        email: '',
        phone: '',
        city: '',
        passOne: '',
        agree: false,
        uid:'',
        showPassTips: false,
        showEmailTips: false,
        showAgreeTips: false,
        emailValidate: false,
        passValidate: false,
        isPassEquals: true,
    };

   onChangeAgree = () => {
        this.setState({
            agree: !this.state.agree,
        })
    }
   onNameChanged = (e) => {
       this.setState({
           name: e.target.value
       })
   }
   onPhoneChanged = (e) => {
        this.setState({
            phone: e.target.value
        })
    };
   onCityChanged = (e) => {
        this.setState({
            city: e.target.value
        })
    };
   onEmailChanged = (e) => {
       this.setState({
           email: e.target.value
       })
       console.log(this.state.email);
       const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
       if(reg.test(e.target.value) === true){
           this.setState({
               emailValidate: true,
           })}
       else {
           this.setState({
               emailValidate: false,
           })
           }
       }
   onPassChanged = (e) => {
       this.setState({
           passOne: e.target.value
       })

       const reg  = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;

       if(reg.test(e.target.value)=== true){
           this.setState({
               passValidate: true,
           })
       }
       else{
           this.setState({
               passValidate: false,
           })
       }
   };

   onSubmit = (e) => {
       e.preventDefault();

       if(this.state.passValidate && this.state.emailValidate && this.state.agree) {
           fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.passOne)
               .then((response) => {
                   let uid = response.user.uid;
                   const data = {
                       name: this.state.name,
                       email: this.state.email,
                       phone: this.state.phone,
                       city: this.state.city,
                   }
                   axios.post(`https://bit-ser.firebaseio.com/users/${uid}.json`, data);
               }).then(() => {
               this.setState({
                   name:'',
                   email: '',
                   phone: '',
                   city: '',
                   passOne: '',
                   agree: false,
                   uid:'',
                   showPassTips: false,
                   showEmailTips: false,
                   showAgreeTips: false,
                   emailValidate: false,
                   passValidate: false,
                   isPassEquals: true,
               })
           })
               .catch((e) => {
                   console.log(e)
               });
       }
       else if(!this.state.emailValidate){
           this.setState({
               showEmailTips: true,
           })
       }
       else if(!this.state.passValidate){
           this.setState({
               showPassTips: true,
           })
       }
       else if (!this.state.agree){
           this.setState({
               showAgreeTips: true
           })
       }
       else{
           console.log('введите данные верно')
       }
   }

    render(){
        console.log(this.state.uid)
        return(
            <Wrapper>
                <FormWrapper>
                    <Title>Регистрация на сайте</Title>
                    <Input onChange={this.onNameChanged} value={this.state.name} placeholder="Имя и Фамилия"/>
                    <Input type='text' onChange={this.onEmailChanged} value={this.state.email} placeholder="Email"/>
                    <Input onChange={this.onCityChanged} value={this.state.city} placeholder="Город"/>
                    {this.state.showEmailTips ? <Error>Введите корректный email!</Error> : null}
                    <Input onChange={this.onPhoneChanged} value={this.state.phone} placeholder="Телефон"/>
                    <Input onChange={this.onPassChanged} value={this.state.passOne} placeholder="Пароль"/>
                    {this.state.showPassTips ? <Error>Введите корректный пароль!</Error> : null}
                    {this.state.showAgreeTips ? <Error>Примите условия обработки данных!</Error> : null}
                    <FormBlock>
                        <Input onChange={this.onChangeAgree} type='checkbox'/>
                        <CheckoboxLabel>Согласие на обработку персональных данных </CheckoboxLabel>
                    </FormBlock>
                    <Button type="submit" onClick={this.onSubmit}>Зарегистрироваться</Button>
                    <p>Уже зарегистрированы?</p>
                    <NavLink to={'/login'}>Войти на сайт</NavLink>
                    <p>Уже зарегистрированы?</p>
                </FormWrapper>
            </Wrapper>
        )
    }
}

export default RegistrationForm
