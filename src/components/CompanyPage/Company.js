import React from 'react'
import styled from "styled-components";
import {connect} from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faTrashAlt} from '@fortawesome/free-solid-svg-icons'

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

const DeleteIcon = styled(FontAwesomeIcon)`
    color: #F07554;
    margin-top: 3px;
    margin-left: 3px;
    
    :hover {
        cursor: pointer;
    }
`;

const AddedItem = styled.span`
   
`;

function Company(props) {
    console.log(props.isFreeDiagnostics, props.isDelivery);
    return (
        <Wrapper>
            <Title>Мой профиль </Title>
            <Row>
                <Column>
                    <Img src={'http://placehold.it/200x200'}/>
                </Column>
                <Column>
                    <SubTitle>Контактная информация <Question>для чего мне загружать информацию о
                        себе?</Question></SubTitle>
                    <Row>
                        <Input onChange={props.onChangeCompanyPersonName} width={'60%'} placeholder={'Смирнов Игорь Витальевич'}/>
                    </Row>
                    <Row>
                        <Input onChange={props.onChangeCompanyPersonEmail} width={'40%'} placeholder={'igor@mail.ru'}/>
                        <Input onChange={props.onChangeCompanyPersonPhone} width={'40%'} placeholder={'89269258713'}/>
                    </Row>
                </Column>
            </Row>
            <Row>
                <Column>
                    <Title>Моя компания</Title>
                    <SubTitle>Информация о компании</SubTitle>
                    <Row>
                        <Input onChange={props.onChangeCompanyName} placeholder={'Название компании'}/>
                        <Input onChange={props.onChangeCompanyOgrn} placeholder={'ОГРН'}/>
                        <Input onChange={props.onChangeCompanyInn} placeholder={'ИНН'}/>
                    </Row>
                    <SubTitle>Адреса сервисов</SubTitle>

                    {props.address.length !== 0 && props.address.map((e,index) => {
                        return (
                            <Row key={index}>
                                <AddedItem>{e.city},</AddedItem>
                                <AddedItem>{e.street},</AddedItem>
                                <AddedItem>{e.house}</AddedItem>
                                <DeleteIcon icon={faTrashAlt} onClick={()=>props.onRemoveAddress(e.id)}/>
                            </Row>
                        )
                    })}

                    <Row>
                        <Input onChange={props.onChangeCompanyCity} value={props.companyCity} width={'20%'}
                               placeholder={'Москва'}/>
                        <Input onChange={props.onChangeCompanyStreet} value={props.companyStreet} width={'30%'}
                               placeholder={'ул. Ленина'}/>
                        <Input onChange={props.onChangeCompanyHouse} value={props.companyHouse} width={'25%'}
                               placeholder={'дом 5 строение 2'}/>
                        <Add>
                            {/* <AddIcon src={plus}/>*/}
                            <AddValue onClick={() => props.onAddAddress()}>добавить еще адрес</AddValue>
                        </Add>
                    </Row>


                    <SubTitle>Цены на услуги</SubTitle>
                    {props.prices.length !== 0 && props.prices.map((e,index) => {
                        return (
                            <Row key={index}>
                                <AddedItem>{e.name}</AddedItem>
                                <AddedItem>{e.price}</AddedItem>
                                <DeleteIcon icon={faTrashAlt} onClick={()=>props.onRemovePrice(e.id)}/>
                            </Row>
                        )
                    })}


                    <Row>
                        <Input width={'30%'}  value={props.serviceName} onChange={props.onChangeServiceName} placeholder={'замена дисплея iphone'}/>
                        <Input width={'20%'} value={props.servicePrice} onChange={props.onChangeServicePrice} placeholder={'1000'}/>
                        <Add>
                            {/* <AddIcon src={plus}/>*/}
                            <AddValue onClick={()=>props.onAddPrice()}>добавить еще</AddValue>
                        </Add>
                    </Row>

                    <Row>
                        <Column>
                            <SubTitle>Дополнительная информация</SubTitle>
                            <CheckboxGroup>
                                <Checkbox onChange={props.onChangeCheckbox} id='ch1' type='checkbox' name={'isFreeDiagnostics'}/>
                                <CheckboxLabel htmlFor={'ch1'}>Бесплатная диагностика</CheckboxLabel>
                            </CheckboxGroup>

                            <CheckboxGroup>
                                <Checkbox onChange={props.onChangeCheckbox} id='ch2' type='checkbox' name={'isDelivery'}/>
                                <CheckboxLabel htmlFor={'ch2'}>Доставка техники до/после ремонта</CheckboxLabel>
                            </CheckboxGroup>

                            <CheckboxGroup>
                                <Checkbox onChange={props.onChangeCheckbox} id='ch3' type='checkbox' name={'isGuarantee'}/>
                                <CheckboxLabel htmlFor={'ch3'}>Предоставляем гарантию</CheckboxLabel>
                            </CheckboxGroup>

                            <CheckboxGroup>
                                <Checkbox onChange={props.onChangeCheckbox} id='ch4' type='checkbox' name={'isWorkWithLegalEntity'}/>
                                <CheckboxLabel htmlFor={'ch4'}>Работаем с юридическими лицами</CheckboxLabel>
                            </CheckboxGroup>
                        </Column>

                        <Column marginLeft={'50px'}>
                            <SubTitle>Настройка уведомлений</SubTitle>
                            <CheckboxGroup>
                                <Checkbox onChange={props.onChangeCheckbox} id='ch5' type='checkbox' name={'isEmailNotification'}/>
                                <CheckboxLabel htmlFor={'ch5'}>Уведомление по email</CheckboxLabel>
                            </CheckboxGroup>

                            <CheckboxGroup>
                                <Checkbox onChange={props.onChangeCheckbox} id='ch6' type='checkbox' name={'isPhoneNotification'}/>
                                <CheckboxLabel htmlFor={'ch6'}>Уведомление по SMS</CheckboxLabel>
                            </CheckboxGroup>

                            <CheckboxGroup>
                                <Checkbox onChange={props.onChangeCheckbox} id='ch7' type='checkbox' name={'isEmailNews'}/>
                                <CheckboxLabel htmlFor={'ch7'}>Получать новости по email</CheckboxLabel>
                            </CheckboxGroup>

                        </Column>
                    </Row>
                </Column>
            </Row>
        </Wrapper>
    )
}

const mapStateToProps = (state) => {
    return {
        companyCity: state.company.companyCity,
        companyHouse: state.company.companyHouse,
        companyStreet: state.company.companyStreet,
        address: state.company.address,
        prices: state.company.prices,
        serviceName: state.company.serviceName,
        servicePrice: state.company.servicePrice,
        isFreeDiagnostics: state.company.isFreeDiagnostics,
        isDelivery: state.company.isDelivery,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeCompanyCity: (e) => dispatch({type: 'CHANGE_COMPANY_CITY', payload: e.target.value}),
        onChangeCompanyHouse: (e) => dispatch({type: 'CHANGE_COMPANY_HOUSE', payload: e.target.value}),
        onChangeCompanyStreet: (e) => dispatch({type: 'CHANGE_COMPANY_STREET', payload: e.target.value}),
        onChangeServiceName: (e) => dispatch({type: 'CHANGE_SERVICE_NAME', payload: e.target.value}),
        onChangeServicePrice: (e) => dispatch({type: 'CHANGE_SERVICE_PRICE', payload: e.target.value}),
        onAddAddress: () => dispatch({type: 'ADD_COMPANY_ADDRESS'}),
        onAddPrice: () => dispatch({type: 'ADD_COMPANY_PRICE'}),
        onRemoveAddress : (id) => dispatch({type: 'REMOVE_COMPANY_ADDRESS', payload: id}),
        onRemovePrice: (id)=> dispatch({type: 'REMOVE_SERVICE_PRICE', payload: id}),
        onChangeCompanyPersonName: (e) => dispatch({type: 'CHANGE_COMPANY_PERSON_NAME', payload: e.target.value}),
        onChangeCompanyPersonEmail: (e) => dispatch({type: 'CHANGE_COMPANY_PERSON_EMAIL', payload: e.target.value}),
        onChangeCompanyPersonPhone: (e) => dispatch({type: 'CHANGE_COMPANY_PERSON_PHONE', payload: e.target.value}),
        onChangeCompanyName: (e) => dispatch({type: 'CHANGE_COMPANY_NAME', payload: e.target.value}),
        onChangeCompanyOgrn: (e) => dispatch({type: 'CHANGE_COMPANY_OGRN', payload: e.target.value}),
        onChangeCompanyInn: (e) => dispatch({type: 'CHANGE_COMPANY_INN', payload: e.target.value}),
        onChangeCheckbox: (e) => dispatch({type: 'CHANGE_COMPANY_CHECKBOX', payload: e.target})
    }
}

/*TODO: переписать функции по аналогии с сменой чекбокса*/
export default connect(mapStateToProps, mapDispatchToProps)(Company)