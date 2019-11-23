import React from 'react'
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {Redirect} from 'react-router-dom';
import {store} from '../../redux/store'
import {
    changeCheckbox,
    changeCity,
    changeEmail,
    changeName,
    changePass,
    changePhone,
    changeStation,
    submit,
    redirect
} from '../../redux/action-creators.js'


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

const Error = styled.span`
    background: #f66;
    color: #fff;
    padding: 5px 5px 5px 15px;
    text-align: left;
    margin-top: 10px;
    border-radius: 20px;
    font-size: 13px;
`;

function RegistrationCustomerForm(props) {

    if(props.isRegistrationSuccess){
        return <Redirect to={'/registration-success'}/>
    }
    console.log(props.isRegistrationSuccess);
    const {name, city, station, phone, pass, email, isEmailValid, isPhoneValid, isNameValid, isAgreementCheck, mustCheckFields,isPassValid,
        isRegistrationSuccess} = props;
    return (

        <Wrapper>
            {isRegistrationSuccess ? <Redirect to={'/login'}/> : (
            <FormWrapper>
                <Title>Регистрация нового клиента</Title>
                <Row>
                    <Container>
                        <Label>Введите имя и фамилию</Label>
                        <Input value={name} onChange={props.onChangeName} placeholder={'Иван Иванов'}/>
                        {mustCheckFields && !isNameValid ? <Error>Введите корректное имя и фамилию!</Error> : null}
                    </Container>
                    <Container>
                        <Label>Введите телефон</Label>
                        <Input value={phone} onChange={props.handleChangePhone} placeholder={'+7(800)000-00-00'}/>
                        {mustCheckFields && !isPhoneValid ? <Error>Введите корректный телефон! </Error> : null}

                    </Container>
                </Row>
                <Row>
                    <Container>
                        <Label>Введите город</Label>
                        <Input value={city} onChange={props.handleChangeCity} placeholder={'Москва'}/>
                    </Container>
                    <Container>
                        <Label>Введите ближайшее метро</Label>
                        <Input value={station} onChange={props.handleChangeStation} placeholder={'Планерная'}/>
                    </Container>
                </Row>
                <Row>
                    <Container>
                        <Label>Введите email</Label>
                        <Input value={email} onChange={props.handleChangeEmail} placeholder={'service@mail.ru'}/>
                        {mustCheckFields && !isEmailValid ? <Error>Введите корректный email!</Error> : null}
                    </Container>
                    <Container>
                        <Label>Введите пароль</Label>
                        <Input value={pass} onChange={props.handleChangePass} type='password'/>
                        {mustCheckFields && !isAgreementCheck ? <Error>Пароль должен содеражть больше 6 символов!</Error> : null}
                    </Container>
                </Row>
                <Row>
                    <Container>
                        <CheckboxGroup>
                            <Checkbox id='phone_email' type='checkbox' onClick={() => props.handleCheckboxChange()}/>
                            <CheckboxLabel htmlFor={'phone_email'}>Согласен на обработку персональных
                                данных</CheckboxLabel>
                        </CheckboxGroup>
                        {mustCheckFields && !isAgreementCheck ? <Error>Вы должны принять соглашение</Error> : null}
                    </Container>
                    <Container>
                        <Links>
                            <LinkDecription>Уже зарегистрированы?</LinkDecription>
                            <Link to={'/login'}>Войти на сайт</Link>
                        </Links>
                    </Container>
                </Row>
                <Row>
                    <Button
                        onClick={() => props.submitHandler(name, city, email, pass, station, phone, isEmailValid, isPhoneValid, isNameValid, isAgreementCheck)}
                    >Зарегистрироваться</Button>

                </Row>
            </FormWrapper>
            )}
        </Wrapper>
    )
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
        isEmailValid: state.root.isEmailValid,
        isNameValid: state.root.isNameValid,
        isPhoneValid: state.root.isPhoneValid,
        isAgreementCheck: state.root.isAgreementCheck,
        isPassValid: state.root.isPassValid,
        mustCheckFields: state.root.mustCheckFields,
        isRegistrationSuccess: state.root.isRegistrationSuccess
    }
};

const mapDispatchToProps = dispatch => ({
    submitHandler: (name, city, email, pass, station, phone, isEmailValid, isPhoneValid, isNameValid, isAgreementCheck) => {
        dispatch(submit(name, city, email, pass, station, phone, isEmailValid, isPhoneValid, isNameValid, isAgreementCheck))
    },
    onChangeName: (e) => dispatch(changeName(e)),
    handleChangeCity: (e) => dispatch(changeCity(e)),
    handleChangeEmail: (e) => dispatch(changeEmail(e)),
    handleChangePass: (e) => dispatch(changePass(e)),
    handleChangeStation: (e) => dispatch(changeStation(e)),
    handleChangePhone: (e) => dispatch(changePhone(e)),
    handleCheckboxChange: () => dispatch(changeCheckbox()),
});


export default connect(mapStateToProps, mapDispatchToProps)(RegistrationCustomerForm)
