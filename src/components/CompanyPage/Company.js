import React from 'react'
import styled from "styled-components";
import {connect} from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faTrashAlt} from '@fortawesome/free-solid-svg-icons'
import {validationEmail, validationEmptyString, validationPhone,} from "../../utils/validation";
import {changeCompanyPersonFile,updateCompanyProfile,changeCompanyPhoto} from '../../redux/user-action-creators'
import {login} from "../../redux/action-creators";

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

const File = styled.input`
    margin-top: 15px;
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
`;

const Img = styled.img`
    margin-right: 30px;
    height: 200px;
    width: 200px;
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

const Error = styled.span`
    background: #f66;
    color: #fff;
    padding: 5px 5px 5px 15px;
    text-align: left;
    margin-top: 10px;
    border-radius: 20px;
    font-size: 13px;
    width: ${props=>props.width};
`;

const Button = styled.button`
    color: #fff;
    cursor: pointer;
    margin-top: 30px;
    border-radius: 50px;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
    justify-content: center;
    padding: 10px 40px;
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
    height: 55px;
    align-self: center;
    background: #368594;
    box-shadow: 0px 4px 6px rgba(106, 123, 255, 0.1);
`;

function Company(props) {
    return (
        <Wrapper>
            <Title>Мой профиль</Title>
            <Row>
                <Column>
                    <Img src={props.contactPersonPhoto}/>
                    <File type={'file'} onChange={props.onChangeFile}/>
                    {!props.isPersonPhotoValid && props.mustCheckCompanyFields && <Error width={'100%'}>Файл должен быть в формате .png, .jpg, .jpeg</Error>}
                </Column>
                <Column>
                    <SubTitle>Контактная информация <Question>для чего мне загружать информацию о
                        себе?</Question></SubTitle>
                    {(!props.isPersonPhoneValid || !props.isPersonEmailValid || props.isPersonNameValid) && props.mustCheckCompanyFields &&
                    <Row>
                        <Error width={'50%'}>Проверьте правильность полей!</Error>
                    </Row>}
                    <Row>
                        <Input data-validation-func={validationEmptyString} data-validation={'isPersonNameValid'} onChange={props.onChangeCompanyInfo} width={'60%'} placeholder={'Смирнов Игорь Витальевич'} name={'contactPerson'}/>
                    </Row>
                    <Row>
                        <Input data-validation-func={validationEmail} data-validation={'isPersonEmailValid'} onChange={props.onChangeCompanyInfo} width={'40%'} placeholder={'igor@mail.ru'} name={'contactPersonEmail'}/>
                        <Input data-validation-func={validationPhone} data-validation={'isPersonPhoneValid'} onChange={props.onChangeCompanyInfo} width={'40%'} placeholder={'89269258713'} name={'contactPersonPhone'}/>
                    </Row>

                </Column>
            </Row>
            <Row>
                <Column>
                    <Title>Моя компания</Title>
                    <SubTitle>Информация о компании</SubTitle>
                    <Row>
                        <Input data-validation={'isCompanyNameValid'} onChange={props.onChangeCompanyInfo} placeholder={'Название компании'} name={'companyName'}/>
                        <Input data-validation={'isOgrnValid'} onChange={props.onChangeCompanyInfo} placeholder={'ОГРН'} name={'ogrn'}/>
                        <Input data-validation={'isInnValid'} onChange={props.onChangeCompanyInfo} placeholder={'ИНН'} name={'inn'}/>
                    </Row>
                    {(!props.isCompanyNameValid || !props.isOgrnValid || !props.isInnValid) && props.mustCheckCompanyFields &&
                    <Row>
                        <Error width={'50%'}>Проверьте правильность полей!</Error>
                    </Row>}

                        <SubTitle>Фото сервиса</SubTitle>
                        <Img src={props.companyPhoto}/>
                        <File onChange={props.onChangeCompanyPhoto} type={'file'}/>

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
                        <Input data-validation={'isCompanyAddressValid'} name={'companyCity'} onChange={props.onChangeCompanyInfo} value={props.companyCity} width={'20%'}
                               placeholder={'Москва'}/>
                        <Input data-validation={'isCompanyStreetValid'} name={'companyStreet'} onChange={props.onChangeCompanyInfo} value={props.companyStreet} width={'30%'}
                               placeholder={'ул. Ленина'}/>
                        <Input data-validation={'isCompanyHouseValid'} name={'companyHouse'} onChange={props.onChangeCompanyInfo} value={props.companyHouse} width={'25%'}
                               placeholder={'дом 5 строение 2'}/>

                        <Add>
                            <AddValue onClick={() => props.onAddAddress()}>добавить еще адрес</AddValue>
                        </Add>
                    </Row>
                    {props.mustCheckNewAddress && !(props.isCompanyHouseValid && props.isCompanyStreetValid && props.isCompanyAddressValid) &&
                    <Error width={'20%'}>Проверьте правильность адреса!</Error>}

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
                        <Input data-validation={'isServiceNameValid'} name={'serviceName'} width={'30%'}  value={props.serviceName} onChange={props.onChangeCompanyInfo} placeholder={'замена дисплея iphone'}/>
                        <Input data-validation={'isServicePriceValid'} name={'servicePrice'} width={'20%'} value={props.servicePrice} onChange={props.onChangeCompanyInfo} placeholder={'1000'}/>
                        <Add>
                            {/* <AddIcon src={plus}/>*/}
                            <AddValue onClick={()=>props.onAddPrice()}>добавить еще</AddValue>
                        </Add>
                    </Row>

                    {props.mustCheckNewPrice && !(props.isServiceNameValid && props.isServicePriceValid) && <Error width={'20%'}>Проверьте правильность полей!</Error>}

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
                    <Row>
                    <Button onClick={props.onUpdateCompanyProfile}>Отправить данные</Button>
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
        companyPhoto: state.company.companyPhoto,
        address: state.company.address,
        prices: state.company.prices,
        serviceName: state.company.serviceName,
        servicePrice: state.company.servicePrice,
        isFreeDiagnostics: state.company.isFreeDiagnostics,
        isDelivery: state.company.isDelivery,
        isPriceValid: state.company.isPriceValid,
        isPersonEmailValid: state.company.isPersonEmailValid,
        isPersonPhoneValid: state.company.isPersonPhoneValid,
        isPersonPhotoValid: state.company.isPersonPhotoValid,

        isCompanyAddressValid: state.company.isCompanyAddressValid,
        isCompanyStreetValid: state.company.isCompanyStreetValid,
        isCompanyHouseValid: state.company.isCompanyHouseValid,
        isCompanyPhotoValid: state.company.isCompanyPhotoValid,

        isServiceNameValid: state.company.isServiceNameValid,
        isServicePriceValid: state.company.isServicePriceValid,
        mustCheckNewAddress: state.company.mustCheckNewAddress,
        mustCheckNewPrice: state.company.mustCheckNewPrice,
        mustCheckCompanyFields: state.company.mustCheckCompanyFields,
        contactPersonPhoto: state.company.contactPersonPhoto,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeCompanyInfo: (e) => dispatch({type:'CHANGE_COMPANY_INFO', payload: e.target}),
        onAddAddress: () => dispatch({type: 'ADD_COMPANY_ADDRESS'}),
        onAddPrice: () => dispatch({type: 'ADD_COMPANY_PRICE'}),
        onRemoveAddress : (id) => dispatch({type: 'REMOVE_COMPANY_ADDRESS', payload: id}),
        onRemovePrice: (id)=> dispatch({type: 'REMOVE_SERVICE_PRICE', payload: id}),
        onChangeCheckbox: (e) => dispatch({type: 'CHANGE_COMPANY_CHECKBOX', payload: e.target}),
        onChangeFile:(e) => changeCompanyPersonFile(e.target.files[0]),
        onChangeCompanyPhoto: (e) => changeCompanyPhoto(e.target.files[0]),
        onUpdateCompanyProfile: (e) => dispatch(updateCompanyProfile(e))
    }
};
/* TODO:  загрузка изображения*/
export default connect(mapStateToProps, mapDispatchToProps)(Company)