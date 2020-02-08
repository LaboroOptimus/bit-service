import React from 'react'
import styled from "styled-components";
import {connect} from 'react-redux'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons'
import {validationEmail, validationEmptyString, validationPhone,} from "../../utils/validation";
import {changeCompanyPersonFile, changeCompanyPhoto, updateCompanyProfile} from '../../redux/user-action-creators'
import TextField from "../../UI/TextField";
import Title from "../../UI/Title";
import Wrapper from "../../UI/Wrapper";
import Subtitle from "../../UI/Subtitle";
import AddButton from "../../UI/AddButton";


const TextFieldLabel = styled.span`
    font-size: 13px;
    color: #000;
`;

const File = styled.input`
    margin-top: 15px;
`;

const PhotoPreview = styled.img`
    width: 50px;
    height: 50px;
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: ${props => props.marginTop}
`;

const Img = styled.img`
    margin-right: 30px;
    height: 200px;
    width: 200px;
`;

const CompanyPhoto = styled.img`
    width: 100px;
    height: 100px;
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: ${props => props.marginLeft};
    margin-top: ${props=>props.marginTop};
    padding: ${props=>props.padding ? props.padding : '0'};
`;

const Question = styled.span`
    font-size: 13px;
    color: #928F8F;
    font-weight: normal;
    margin-left: 20px;
`;

const Add = styled.div`
    
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
   font-size: 14px;
`;

const Error = styled.span`
    background: #f66;
    color: #fff;
    padding: 5px 5px 5px 15px;
    text-align: left;
    margin-top: 10px;
    border-radius: 20px;
    font-size: 13px;
    width: ${props => props.width};
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

const WorkingHoursLabel = styled.span`
    margin: 7px 20px 25px 0;
    font-size: 13px;
`;

const Hyphen = styled.span`
    margin-top: 5px;
    font-size: 16px;
    font-family: 'NotoSans-Regular'; 
`;

const WorkingHours = styled.span`
  font-size: 14px;
`;

function CompanyEdit(props) {
    console.log('пн старт', props.mondayStart)

    console.log('вт старт', props.tuesdayStart)
    return (
        <Wrapper>
            <Title>Мой профиль</Title>
            <Row>
                <Column>
                    <Img src={props.contactPersonPhoto}/>
                    <File type={'file'} onChange={props.onChangeFile}/>
                    {!props.isPersonPhotoValid && props.mustCheckCompanyFields &&
                    <Error width={'100%'}>Файл должен быть в формате .png, .jpg, .jpeg</Error>}
                </Column>
                <Column>
                    <Subtitle>Контактная информация <Question>для чего мне загружать информацию о
                        себе?</Question></Subtitle>
                    {(!props.isPersonPhoneValid || !props.isPersonEmailValid || props.isPersonNameValid) && props.mustCheckCompanyFields &&
                    <Row>
                        <Error width={'50%'}>Проверьте правильность полей!</Error>
                    </Row>}
                    <Row>
                        <TextField dataValidationFunc={validationEmptyString} dataValidation={'isPersonNameValid'}
                                   onChange={props.onChangeCompanyInfo} width={'60%'}
                                   placeholder={'Смирнов Игорь Витальевич'} name={'contactPerson'}/>
                    </Row>
                    <Row>
                        <TextField dataValidationFunc={validationEmail} dataValidation={'isPersonEmailValid'}
                                   onChange={props.onChangeCompanyInfo} width={'40%'} placeholder={'igor@mail.ru'}
                                   name={'contactPersonEmail'}/>
                        <TextField dataValidationFunc={validationPhone} dataValidation={'isPersonPhoneValid'}
                                   onChange={props.onChangeCompanyInfo} width={'40%'} placeholder={'89269258713'}
                                   name={'contactPersonPhone'}/>
                    </Row>

                </Column>
            </Row>
            <Row>
                <Column>
                    <Title>Моя компания</Title>
                    <Subtitle>Информация о компании</Subtitle>
                    <Row>
                        <Column>
                            <TextFieldLabel>Название компании</TextFieldLabel>
                            <TextField dataValidation={'isCompanyNameValid'} onChange={props.onChangeCompanyInfo}
                                       placeholder={'ООО "Рога и Копыта"'} name={'companyName'}/>
                        </Column>
                        <Column>
                            <TextFieldLabel>ОГРН</TextFieldLabel>
                            <TextField dataValidation={'isOgrnValid'} onChange={props.onChangeCompanyInfo}
                                       placeholder={'1177746126040'} name={'ogrn'}/>
                        </Column>
                        <Column>
                            <TextFieldLabel>ИНН</TextFieldLabel>
                            <TextField dataValidation={'isInnValid'} onChange={props.onChangeCompanyInfo}
                                       placeholder={'7731347089'} name={'inn'}/>
                        </Column>
                    </Row>
                    {(!props.isCompanyNameValid || !props.isOgrnValid || !props.isInnValid) && props.mustCheckCompanyFields &&
                    <Row>
                        <Error width={'50%'}>Проверьте правильность полей!</Error>
                    </Row>}

                    <Subtitle>Адреса сервисов</Subtitle>


                    {props.address && props.address.map((e, index) => {
                        return (

                    <Row marginTop={'20px'}>
                        <Column>
                            <PhotoPreview src={e.photo}/>
                        </Column>
                        <Column marginLeft={'20px'}>
                            <Row marginTop={'10px'}>
                                <AddedItem>{index + 1}. {e.city}, {e.street}, {e.house}</AddedItem>
                                <DeleteIcon icon={faTrashAlt} onClick={() => props.onRemoveAddress(e.id)}/>
                            </Row>
                            <Row>
                                <WorkingHours>
                                    пн:{e.mondayStart}:00 - {e.mondayEnd}:00,
                                    вт:{e.tuesdayStart}:00 - {e.tuesdayEnd}:00,
                                    ср:{e.wednesdayStart}:00 - {e.wednesdayEnd}:00,
                                    чт:{e.thursdayStart}:00 - {e.thursdayEnd}:00,
                                    пт:{e.fridayStart}:00 - {e.fridayEnd}:00,
                                    сб:{e.saturdayStart}:00 - {e.saturdayEnd}:00,
                                    вск:{e.sundayStart}:00 - {e.sundayEnd}:00
                                </WorkingHours>
                            </Row>
                        </Column>
                    </Row>)})}


                    <Row marginTop={'20px'}>
                        <Column padding={'0 20px 0 0'}>
                            <TextFieldLabel>Город</TextFieldLabel>
                        <TextField dataValidation={'isCompanyAddressValid'} name={'companyCity'}
                                   onChange={props.onChangeCompanyInfo} value={props.companyCity}
                                   placeholder={'Москва'}/>
                        </Column>
                        <Column padding={'0 20px 0 20px'}>
                            <TextFieldLabel>Улица</TextFieldLabel>
                        <TextField dataValidation={'isCompanyStreetValid'} name={'companyStreet'}
                                   onChange={props.onChangeCompanyInfo} value={props.companyStreet}
                                   placeholder={'ул. Ленина'}/>
                        </Column>
                        <Column padding={'0 20px 0 20px'}>
                            <TextFieldLabel>Дом, строение</TextFieldLabel>
                        <TextField dataValidation={'isCompanyHouseValid'} name={'companyHouse'}
                                   onChange={props.onChangeCompanyInfo} value={props.companyHouse}
                                   placeholder={'дом 5 строение 2'}/>
                        </Column>
                        <Column padding={'0 20px 0 20px'}>
                            <TextFieldLabel>Ближайшее метро</TextFieldLabel>
                        <TextField dataValidation={'isCompanyHouseValid'} name={'companyStation'}
                                   onChange={props.onChangeCompanyInfo} value={props.companyStation}
                                   placeholder={'Пушкинская'}/>
                        </Column>

                    </Row>


                    {props.mustCheckNewAddress && !(props.isCompanyHouseValid && props.isCompanyStreetValid && props.isCompanyAddressValid) &&
                    <Error width={'20%'}>Проверьте правильность адреса!</Error>}

                    <Row>
                        <Column>
                            <Subtitle>Фото сервиса</Subtitle>
                            <CompanyPhoto src={props.companyPhoto}/>
                            <File onChange={props.onChangeCompanyPhoto} type={'file'}/>
                        </Column>

                        <Column marginTop={'20px'}>
                            <WorkingHoursLabel>Понедельник</WorkingHoursLabel>
                            <WorkingHoursLabel>Вторник</WorkingHoursLabel>
                            <WorkingHoursLabel>Среда</WorkingHoursLabel>
                            <WorkingHoursLabel>Четверг</WorkingHoursLabel>
                            <WorkingHoursLabel>Пятница</WorkingHoursLabel>
                            <WorkingHoursLabel>Суббота</WorkingHoursLabel>
                            <WorkingHoursLabel>Воскресенье</WorkingHoursLabel>
                        </Column>

                        <Column marginTop={'20px'}>
                            <Row>
                                <TextField height={'10%'} width={'10%'} placeholder={'8'}
                                           dataValidation={'isCompanyWorkHoursValid'}
                                           onChange={props.onChangeCompanyInfo} name={'mondayStart'}
                                           value={props.mondayStart}/>
                                <Hyphen>-</Hyphen>
                                <TextField height={'10%'} width={'10%'} marginLeft={'10px'} placeholder={'12'}
                                           dataValidation={'isCompanyWorkHoursValid'}
                                           onChange={props.onChangeCompanyInfo} name={'mondayEnd'}
                                           value={props.mondayEnd}/>
                            </Row>
                            <Row>
                                <TextField height={'10%'} width={'10%'} placeholder={'8'}
                                           dataValidation={'isCompanyWorkHoursValid'}
                                           onChange={props.onChangeCompanyInfo} name={'tuesdayStart'}
                                           value={props.tuesdayStart}/>
                                <Hyphen>-</Hyphen>
                                <TextField height={'10%'} marginLeft={'10px'} width={'10%'} placeholder={'12'}
                                           dataValidation={'isCompanyWorkHoursValid'}
                                           onChange={props.onChangeCompanyInfo} name={'tuesdayEnd'}
                                           value={props.tuesdayEnd}/>
                            </Row>

                            <Row>
                                <TextField height={'10%'} width={'10%'} placeholder={'8'}
                                           dataValidation={'isCompanyWorkHoursValid'}
                                           onChange={props.onChangeCompanyInfo} name={'wednesdayStart'}
                                           value={props.wednesdayStart}/>
                                <Hyphen>-</Hyphen>
                                <TextField height={'10%'} marginLeft={'10px'} width={'10%'} placeholder={'12'}
                                           dataValidation={'isCompanyWorkHoursValid'}
                                           onChange={props.onChangeCompanyInfo} name={'wednesdayEnd'}
                                           value={props.wednesdayEnd}/>
                            </Row>

                            <Row>
                                <TextField height={'10%'} width={'10%'} placeholder={'8'}
                                           dataValidation={'isCompanyWorkHoursValid'}
                                           onChange={props.onChangeCompanyInfo} name={'thursdayStart'}
                                           value={props.thursdayStart}/>
                                <Hyphen>-</Hyphen>
                                <TextField height={'10%'} marginLeft={'10px'} width={'10%'} placeholder={'12'}
                                           dataValidation={'isCompanyWorkHoursValid'}
                                           onChange={props.onChangeCompanyInfo} name={'thursdayEnd'}
                                           value={props.thursdayEnd}/>
                            </Row>

                            <Row>
                                <TextField height={'10%'} width={'10%'} placeholder={'8'}
                                           dataValidation={'isCompanyWorkHoursValid'}
                                           onChange={props.onChangeCompanyInfo} name={'fridayStart'}
                                           value={props.fridayStart}/>
                                <Hyphen>-</Hyphen>
                                <TextField height={'10%'} marginLeft={'10px'} width={'10%'} placeholder={'12'}
                                           dataValidation={'isCompanyWorkHoursValid'}
                                           onChange={props.onChangeCompanyInfo} name={'fridayEnd'}
                                           value={props.fridayEnd}/>
                            </Row>

                            <Row>
                                <TextField height={'10%'} width={'10%'} placeholder={'8'}
                                           dataValidation={'isCompanyWorkHoursValid'}
                                           onChange={props.onChangeCompanyInfo} name={'saturdayStart'}
                                           value={props.saturdayStart}/>
                                <Hyphen>-</Hyphen>
                                <TextField height={'10%'} marginLeft={'10px'} width={'10%'} placeholder={'12'}
                                           dataValidation={'isCompanyWorkHoursValid'}
                                           onChange={props.onChangeCompanyInfo} name={'saturdayEnd'}
                                           value={props.saturdayEnd}/>
                            </Row>

                            <Row>
                                <TextField height={'10%'} width={'10%'} placeholder={'8'}
                                           dataValidation={'isCompanyWorkHoursValid'}
                                           onChange={props.onChangeCompanyInfo} name={'sundayStart'}
                                           value={props.sundayStart}/>
                                <Hyphen>-</Hyphen>
                                <TextField height={'10%'} marginLeft={'10px'} width={'10%'} placeholder={'12'}
                                           dataValidation={'isCompanyWorkHoursValid'}
                                           onChange={props.onChangeCompanyInfo} name={'sundayEnd'}
                                           value={props.sundayEnd}/>
                            </Row>
                        </Column>



                        <Column marginTop={'20px'}>
                            <Add>
                                {/*<AddValue onClick={() => props.onAddAddress()}>добавить еще адрес</AddValue>*/}
                                <AddButton text={'Добавить адрес'} onClick={()=>props.onAddAddress()}/>
                            </Add>
                        </Column>
                    </Row>


                    <Subtitle>Цены на услуги</Subtitle>
                    {props.prices.length !== 0 && props.prices.map((e, index) => {
                        return (
                            <Row key={index}>
                                <AddedItem>{e.name} -</AddedItem>
                                <AddedItem> {e.price}</AddedItem>

                                <DeleteIcon icon={faTrashAlt} onClick={() => props.onRemovePrice(e.id)}/>
                            </Row>
                        )
                    })}

                    <Row>
                        <TextField dataValidation={'isServiceNameValid'} name={'serviceName'} width={'30%'}
                                   value={props.serviceName} onChange={props.onChangeCompanyInfo}
                                   placeholder={'замена дисплея iphone'}/>
                        <TextField dataValidation={'isServicePriceValid'} name={'servicePrice'} width={'20%'}
                                   value={props.servicePrice} onChange={props.onChangeCompanyInfo}
                                   placeholder={'1000'}/>
                        <Add>
                            {/* <AddIcon src={plus}/>*/}
                            <AddValue onClick={() => props.onAddPrice()}>добавить еще</AddValue>
                        </Add>
                    </Row>

                    {props.mustCheckNewPrice && !(props.isServiceNameValid && props.isServicePriceValid) &&
                    <Error width={'20%'}>Проверьте правильность полей!</Error>}

                    <Row>
                        <Column>
                            <Subtitle>Дополнительная информация</Subtitle>
                            <CheckboxGroup>
                                <Checkbox onChange={props.onChangeCheckbox} id='ch1' type='checkbox'
                                          name={'isFreeDiagnostics'}/>
                                <CheckboxLabel htmlFor={'ch1'}>Бесплатная диагностика</CheckboxLabel>
                            </CheckboxGroup>

                            <CheckboxGroup>
                                <Checkbox onChange={props.onChangeCheckbox} id='ch2' type='checkbox'
                                          name={'isDelivery'}/>
                                <CheckboxLabel htmlFor={'ch2'}>Доставка техники до/после ремонта</CheckboxLabel>
                            </CheckboxGroup>

                            <CheckboxGroup>
                                <Checkbox onChange={props.onChangeCheckbox} id='ch3' type='checkbox'
                                          name={'isGuarantee'}/>
                                <CheckboxLabel htmlFor={'ch3'}>Предоставляем гарантию</CheckboxLabel>
                            </CheckboxGroup>

                            <CheckboxGroup>
                                <Checkbox onChange={props.onChangeCheckbox} id='ch4' type='checkbox'
                                          name={'isWorkWithLegalEntity'}/>
                                <CheckboxLabel htmlFor={'ch4'}>Работаем с юридическими лицами</CheckboxLabel>
                            </CheckboxGroup>
                        </Column>

                        <Column marginLeft={'50px'}>
                            <Subtitle>Настройка уведомлений</Subtitle>
                            <CheckboxGroup>
                                <Checkbox onChange={props.onChangeCheckbox} id='ch5' type='checkbox'
                                          name={'isEmailNotification'}/>
                                <CheckboxLabel htmlFor={'ch5'}>Уведомление по email</CheckboxLabel>
                            </CheckboxGroup>

                            <CheckboxGroup>
                                <Checkbox onChange={props.onChangeCheckbox} id='ch6' type='checkbox'
                                          name={'isPhoneNotification'}/>
                                <CheckboxLabel htmlFor={'ch6'}>Уведомление по SMS</CheckboxLabel>
                            </CheckboxGroup>

                            <CheckboxGroup>
                                <Checkbox onChange={props.onChangeCheckbox} id='ch7' type='checkbox'
                                          name={'isEmailNews'}/>
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
        companyStation: state.company.companyStation,
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


        mondayStart: state.company.mondayStart,
        mondayEnd: state.company.mondayEnd,
        tuesdayStart: state.company.tuesdayStart,
        tuesdayEnd: state.company.tuesdayEnd,
        wednesdayStart: state.company.wednesdayStart,
        wednesdayEnd: state.company.wednesdayEnd,
        thursdayStart: state.company.thursdayStart,
        thursdayEnd: state.company.thursdayEnd,
        fridayStart: state.company.fridayStart,
        fridayEnd: state.company.fridayEnd,
        saturdayStart: state.company.saturdayStart,
        saturdayEnd: state.company.saturdayEnd,
        sundayStart: state.company.sundayStart,
        sundayEnd: state.company.sundayEnd,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeCompanyInfo: (e) => dispatch({type: 'CHANGE_COMPANY_INFO', payload: e.target}),
        onAddAddress: () => dispatch({type: 'ADD_COMPANY_ADDRESS'}),
        onAddPrice: () => dispatch({type: 'ADD_COMPANY_PRICE'}),
        onRemoveAddress: (id) => dispatch({type: 'REMOVE_COMPANY_ADDRESS', payload: id}),
        onRemovePrice: (id) => dispatch({type: 'REMOVE_SERVICE_PRICE', payload: id}),
        onChangeCheckbox: (e) => dispatch({type: 'CHANGE_COMPANY_CHECKBOX', payload: e.target}),
        onChangeFile: (e) => changeCompanyPersonFile(e.target.files[0]),
        onChangeCompanyPhoto: (e) => changeCompanyPhoto(e.target.files[0]),
        onUpdateCompanyProfile: (e) => dispatch(updateCompanyProfile(e))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CompanyEdit)