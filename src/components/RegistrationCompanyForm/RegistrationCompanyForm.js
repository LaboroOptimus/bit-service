import React from 'react'
import styled from "styled-components";
import {NavLink} from "react-router-dom";

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
`;

const LinkDecription = styled.span`
    font-size: 15px;
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px 20px;
    width: 50%;
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



class RegistrationCompanyForm extends React.Component {
    render() {
        return(
            <Wrapper>

                <FormWrapper>
                    <Title>Регистрация новой компании</Title>
                    <Row>
                        <Container>
                            <Label>Введите имя и фамилию</Label>
                            <Input placeholder={'Иван Иванов'}/>
                        </Container>
                        <Container>
                            <Label>Введите название компании</Label>
                            <Input placeholder={'Рога и Копыта'}/>
                        </Container>
                    </Row>

                    <Row>
                        <Container>
                            <Label>Введите город</Label>
                            <Input placeholder={'Москва'}/>
                        </Container>
                        <Container>
                            <Label>Введите телефон</Label>
                            <Input placeholder={'8(800)000-00-00'}/>
                        </Container>
                    </Row>


                    <Row>
                        <Container>
                            <Label>Введите email</Label>
                            <Input placeholder={'service@mail.ru'}/>

                        </Container>
                        <Container>
                            <Label>Введите пароль</Label>
                            <Input type='password'/>

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
                                <Link to={'/'}>Войти на сайт</Link>
                            </Links>
                        </Container>

                    </Row>

                    <Row>

                        <Button>Зарегистрироваться</Button>

                    </Row>
                </FormWrapper>
            </Wrapper>

        )
    }
}

export default RegistrationCompanyForm