import React from 'react'
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {connect} from 'react-redux';
import {onCompanyRegistration, changeCompanyName,changeCompany,changeCompanyCheckbox,changeCompanyCity,changeCompanyEmail,changeCompanyPass,changeCompanyPhone} from "../../redux/action-creators";

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

/*
*




    isPassValid: true,*/

class RegistrationCompanyForm extends React.Component {
    render() {
        const {name,company,phone,email,city,pass, isAgreementCheck,isCompanyValid,isNameValid,isCityValid,isPhoneValid,isEmailValid,isPassValid} = this.props;
        return(
            <Wrapper>
                <FormWrapper>
                    <Title>Регистрация новой компании</Title>
                    <Row>
                        <Container>
                            <Label>Введите имя и фамилию</Label>
                            <Input onChange={this.props.onNameChange} value={name} placeholder={'Иван Иванов'}/>
                        </Container>
                        <Container>
                            <Label>Введите название компании</Label>
                            <Input onChange={this.props.onCompanyChange} value={company} placeholder={'Рога и Копыта'}/>
                        </Container>
                    </Row>

                    <Row>
                        <Container>
                            <Label>Введите город</Label>
                            <Input onChange={this.props.onCityChange} value={city} placeholder={'Москва'}/>
                        </Container>
                        <Container>
                            <Label>Введите телефон</Label>
                            <Input onChange={this.props.onPhoneChange} value={phone} placeholder={'8(800)000-00-00'}/>
                        </Container>
                    </Row>


                    <Row>
                        <Container>
                            <Label>Введите email</Label>
                            <Input onChange={this.props.onEmailChange} value={email} placeholder={'service@mail.ru'}/>

                        </Container>
                        <Container>
                            <Label>Введите пароль</Label>
                            <Input onChange={this.props.onPassChange} value={pass} type='password'/>

                        </Container>
                    </Row>

                    <Row>
                        <Container>
                            <CheckboxGroup>
                                <Checkbox onClick={() => this.props.onCheckboxChange()} id='phone_email' type='checkbox'/>
                                <CheckboxLabel htmlFor={'phone_email'}>Согласен на обработку персональных данных</CheckboxLabel>
                            </CheckboxGroup>
                        </Container>

                        <Container>
                            <Links>
                                <LinkDecription>Уже зарегистрированы?</LinkDecription>
                                <Link to={'/'}>Войти на сайт</Link>
                            </Links>
                        </Container>
                    </Row>

                    <Row>
                        <Button onClick={(e)=>this.props.onSubmit(e,name,company,phone,email,city,pass, isAgreementCheck,isCompanyValid,isNameValid,isCityValid,isPhoneValid,isEmailValid,isPassValid)}>Зарегистрироваться</Button>
                    </Row>
                </FormWrapper>
            </Wrapper>

        )
    }
}

const mapStateToProps = state => {
    return {
        name: state.regCompany.name,
        company: state.regCompany.company,
        city: state.regCompany.city,
        phone: state.regCompany.phone,
        email: state.regCompany.email,
        pass: state.regCompany.pass,
        isAgreementCheck: state.regCompany.isAgreementCheck,
        isCompanyValid: state.regCompany.isCompanyValid,
        isNameValid: state.regCompany.isNameValid,
        isCityValid: state.regCompany.isCityValid,
        isPhoneValid: state.regCompany.isPhoneValid,
        isEmailValid: state.regCompany.isEmailValid,
        isPassValid: state.regCompany.isPassValid,
        mustCheckFields: state.regCompany.mustCheckFields
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onNameChange:(e) => dispatch(changeCompanyName(e)),
        onCompanyChange: (e) => dispatch(changeCompany(e)),
        onCityChange: (e) => dispatch(changeCompanyCity(e)),
        onPhoneChange: (e) => dispatch(changeCompanyPhone(e)),
        onEmailChange: (e) => dispatch(changeCompanyEmail(e)),
        onPassChange: (e) => dispatch(changeCompanyPass(e)),
        onCheckboxChange: () => dispatch(changeCompanyCheckbox()),
        onSubmit:(e,name,company,phone,email,city,pass, isAgreementCheck,isCompanyValid,isNameValid,isCityValid,isPhoneValid,isEmailValid,isPassValid) => {
            dispatch(onCompanyRegistration(e,name,company,phone,email,city,pass, isAgreementCheck,isCompanyValid,isNameValid,isCityValid,isPhoneValid,isEmailValid,isPassValid))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationCompanyForm)