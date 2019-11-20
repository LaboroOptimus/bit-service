import React from 'react'
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import axios from 'axios'
import fire from "../../config/Fire";


const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 100px 30px;
`;

const FormWrapper = styled.div`
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
    font-size: 16px;
    font-weight: bold;
    height: 53px;
    width: 218px;
    margin: 17.5px auto;
    background: #6A7BFF;
    box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.25), 0px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 50px;
`;

const Input = styled.input`
    width: 100%;
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
    margin-left: 10px;
`;

const Links = styled.div`
    display: flex;
    flex-direction: row;
    margin: 20px 0px 0px 10px;
    
    @media (max-width: 768px) {
        font-size: 13px;
        margin-top: 0;
    }
`;

const LinkDecription = styled.span`
    font-size: 15px;
    
    @media (max-width: 768px) {
        font-size: 13px;
    }
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    
    @media (max-width: 768px) {
         flex-wrap: wrap;
    }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px 20px;
    width: 50%;
    
    @media (max-width: 768px) {
        width: 100%;
    }
`;

const Label = styled.label`
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 23px;
    color: #000000;
    text-align: left;
    margin-bottom: 10px;
    margin-top: 10px;
    margin-left: 20px;
`;

const CheckboxLabel = styled.label`
    font-size: 16px;
    display: inline-block;
    text-align: left;
    
    :after {
        content:'';
        display:block;
        height:14px;
        width:14px;
        outline:1px solid #6A7BFF;
        position:absolute;
        top:0;
        left:0;
        margin-top: 4px;
    }
`;

const CheckboxGroup = styled.div`
    margin: 20px 0px 0px 10px;
    color: #000000;
    position: relative;
    padding-left:25px;
    display: flex;
    flex-wrap: wrap;
`;

const Checkbox = styled.input`
    display:none;
   :checked + ${CheckboxLabel}:after {
        outline:1px solid #6A7BFF;
        border:2px solid #fff;
        width:10px;
        height:10px;
        background-color: #6A7BFF; 
   }
`;

class RegistrationCustomerForm extends React.Component {
/*    state = {
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
    };*/
 /*  onEmailChanged = (e) => {
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
       }*/
/*   onPassChanged = (e) => {
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
   };*/

 /*  onSubmit = (e) => {
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
   }*/




    render(){
        const {name, city, station, phone,pass,email} = this.props;
        console.log(name,city,station,phone,pass,email);
        return(
            <Wrapper>
                <FormWrapper>
                    <Title>Регистрация нового клиента</Title>
                    <Row>
                        <Container>
                            <Label>Введите имя и фамилию</Label>
                            <Input value={name} onChange={this.props.handleChangeName} placeholder={'Иван Иванов'}/>
                        </Container>
                        <Container>
                            <Label>Введите телефон</Label>
                            <Input value={phone} onChange={this.props.handleChangePhone} placeholder={'+7(800)000-00-00'}/>
                        </Container>
                    </Row>
                    <Row>
                        <Container>
                            <Label>Введите город</Label>
                            <Input value={city} onChange={this.props.handleChangeCity} placeholder={'Москва'}/>
                        </Container>
                        <Container>
                            <Label>Введите ближайшее метро</Label>
                            <Input value={station} onChange={this.props.handleChangeStation} placeholder={'Планерная'}/>
                        </Container>
                    </Row>
                    <Row>
                        <Container>
                            <Label>Введите email</Label>
                            <Input value={email} onChange={this.props.handleChangeEmail} placeholder={'service@mail.ru'}/>
                        </Container>
                        <Container>
                            <Label>Введите пароль</Label>
                            <Input value={pass} onChange={this.props.handleChangePass} type='password'/>
                        </Container>
                    </Row>
                    <Row>
                        <Container>
                            <CheckboxGroup>
                                <Checkbox id='phone_email' type='checkbox'/>
                                <CheckboxLabel htmlFor={'phone_email'}>Согласен на обработку персональных данных</CheckboxLabel>
                            </CheckboxGroup>
                        </Container>
                        <Container>
                            <Links>
                                <LinkDecription>Уже зарегистрированы?</LinkDecription>
                                <Link to={'/login'}>Войти на сайт</Link>
                            </Links>
                        </Container>
                    </Row>
                    <Row>
                        <Button onClick={this.props.submitHandler}
                        >Зарегистрироваться</Button>
                    </Row>
                </FormWrapper>
                {/*<button onClick={this.testFunc}>тест</button>*/}
            </Wrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isLogin: state.root.isLogin,
        name: state.root.name,
        city: state.root.city,
        email: state.root.email,
        pass: state.root.pass,
        station: state.root.station,
        phone: state.root.phone,
    }
};

const mapDispatchToProps = dispatch => ({
    submitHandler: (e) => {dispatch({type:'SUBMIT'})},
    handleChangeName:(e) => dispatch({type: "CHANGE_NAME", payload: e.target.value}),
    handleChangeCity:(e) => dispatch({type: "CHANGE_CITY", payload: e.target.value}),
    handleChangeEmail:(e) => dispatch({type: "CHANGE_EMAIL", payload: e.target.value}),
    handleChangePass:(e) => dispatch({type: "CHANGE_PASS", payload: e.target.value}),
    handleChangeStation:(e) => dispatch({type: "CHANGE_STATION", payload: e.target.value}),
    handleChangePhone:(e) => dispatch({type: "CHANGE_PHONE", payload: e.target.value})
});



export default connect(mapStateToProps,mapDispatchToProps)(RegistrationCustomerForm)
