import React, {Component} from 'react'
import styled from "styled-components";

const Wrapper = styled.div`
    padding: 30px 100px;
    display: flex;
    flex-direction: column;
`;

const Title = styled.h3`
    font-size: 30px;
`;

const SubTitle = styled.h3`
    font-size: 20px;
    margin: 20px 0 20px 0;
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
    margin-top: 10px;
    margin-bottom: 10px;
    margin-right: 10px;
    width: ${props => props.width};
    height: 50px;
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
`;

const Img = styled.img`
    margin-right: 30px;
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: ${props => props.marginLeft}
`;

const Question = styled.span`
    font-size: 13px;
    color: #928F8F;
    font-weight: normal;
    margin-left: 20px;
`;

const Add = styled.div`
    padding-top: 20px;
`;

const AddIcon = styled.img`
    width: 16px;
    height: 16px;
    margin-right: 5px;
`;

const AddValue = styled.span`
    color: #70C294;
   
    :hover {
        border-bottom: 1px solid #70C294;
        cursor: pointer;
    }
`;

const CheckboxLabel = styled.label`
    font-size: 16px;
    display: inline-block;
    text-align: left;
    
    :hover {
     cursor: pointer;
     }
    
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
        cursor: pointer;
   }
`;

class Company extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <Wrapper>
                <Title>Мой профиль</Title>
                <Row>
                    <Column>
                        <Img src={'http://placehold.it/200x200'}/>
                    </Column>
                    <Column>
                        <SubTitle>Контактная информация <Question>для чего мне загружать информацию о
                            себе?</Question></SubTitle>
                        <Row>
                            <Input width={'40%'} placeholder={'Смирнов Игорь Витальевич'}/>
                        </Row>
                        <Row>
                            <Input width={'30%'} placeholder={'Москва'}/>
                            <Input width={'30%'} placeholder={'igor@mail.ru'}/>
                            <Input width={'30%'} placeholder={'89269258713'}/>
                        </Row>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <Title>Моя компания</Title>
                        <SubTitle>Информация о компании</SubTitle>
                        <Row>
                            <Input placeholder={'Название компании'}/>
                            <Input placeholder={'ОГРН'}/>
                            <Input placeholder={'ИНН'}/>
                        </Row>
                        <SubTitle>Адреса сервисов</SubTitle>
                        <Row>
                            <Input width={'20%'} placeholder={'Москва'}/>
                            <Input width={'30%'} placeholder={'ул. Ленина'}/>
                            <Input width={'25%'} placeholder={'дом 5 строение 2'}/>
                            <Add>
                                {/* <AddIcon src={plus}/>*/}
                                <AddValue onClick={this.add}>добавить еще адрес</AddValue>
                            </Add>
                        </Row>

                        <SubTitle>Цены на услуги</SubTitle>
                        <Row>
                            <Input width={'30%'} placeholder={'замена дисплея iphone'}/>
                            <Input width={'20%'} placeholder={'1000'}/>

                            <Add>
                                {/* <AddIcon src={plus}/>*/}
                                <AddValue>добавить еще</AddValue>
                            </Add>
                        </Row>

                        <Row>
                            <Column>
                                <SubTitle>Дополнительная информация</SubTitle>
                                <CheckboxGroup>
                                    <Checkbox id='ch1' type='checkbox'/>
                                    <CheckboxLabel htmlFor={'ch1'}>Бесплатная диагностика</CheckboxLabel>
                                </CheckboxGroup>

                                <CheckboxGroup>
                                    <Checkbox id='ch2' type='checkbox'/>
                                    <CheckboxLabel htmlFor={'ch2'}>Доставка техники до/после ремонта</CheckboxLabel>
                                </CheckboxGroup>

                                <CheckboxGroup>
                                    <Checkbox id='ch3' type='checkbox'/>
                                    <CheckboxLabel htmlFor={'ch3'}>Предоставляем гарантию</CheckboxLabel>
                                </CheckboxGroup>

                                <CheckboxGroup>
                                    <Checkbox id='ch4' type='checkbox'/>
                                    <CheckboxLabel htmlFor={'ch4'}>Работаем с юридическими лицами</CheckboxLabel>
                                </CheckboxGroup>
                            </Column>

                            <Column marginLeft={'50px'}>
                                <SubTitle>Настройка уведомлений</SubTitle>
                                <CheckboxGroup>
                                    <Checkbox id='ch5' type='checkbox'/>
                                    <CheckboxLabel htmlFor={'ch5'}>Уведомление по email</CheckboxLabel>
                                </CheckboxGroup>

                                <CheckboxGroup>
                                    <Checkbox id='ch6' type='checkbox'/>
                                    <CheckboxLabel htmlFor={'ch6'}>Уведомление по SMS</CheckboxLabel>
                                </CheckboxGroup>

                                <CheckboxGroup>
                                    <Checkbox id='ch7' type='checkbox'/>
                                    <CheckboxLabel htmlFor={'ch7'}>Получать новости по email</CheckboxLabel>
                                </CheckboxGroup>

                            </Column>
                        </Row>
                    </Column>
                </Row>
            </Wrapper>
        )
    }
}


export default Company