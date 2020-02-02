import React from 'react'
import styled from "styled-components";
import {connect} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faPencilAlt, faPenAlt} from '@fortawesome/free-solid-svg-icons'
import clipboard from './assets/clipboard.png'
import star from './assets/favorites.png';
import review from './assets/review.png';
import phone from './assets/phone.png'
import TextField from "../../UI/TextField";
import Title from "../../UI/Title";
import Wrapper from "../../UI/Wrapper";

const MainProfile = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px;
`;

const SubTitle = styled.h4`
    font-size: 25px;
    padding: 0;
    margin: 0 0 20px 0px;
    font-family: 'NotoSans-Bold';
    color: #222;
`;

const PersonTitle = styled.h4`
    font-size: 25px;
    padding: 0;
    margin: 10px 0;
    font-family: 'NotoSans-Bold';
    color: #222;
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: ${props => props.marginTop}
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    margin: ${props=> props.margin}
`;

const Img = styled.img`
    height: 225px;
    width: 225px;
    border-radius: 50%;
`;

const PersonInfoBlock = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 25px;
`;

const CompanyInfoBlock = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 30px;
`;

const PersonLabel = styled.span`
    font-size: 14px;
    color: #A5A5A5;
    margin-top: 15px;
    font-family: 'NotoSans-Regular';
`;

const PersonInfo = styled.span`
    font-size: 20px;
    font-family: 'NotoSans-Bold';
    color: #444;
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

const CompanyInfo = styled.span`
    font-size: 22px;
    margin-bottom: 20px;
    font-family: 'NotoSans-Bold';
    color: #444;
`;

const Status = styled.span`
    padding: 2px 10px;
    color: #fff;
    background: #F07554;
    border-radius: 50px;
    margin-left: 20px;
    font-size: 14px;
    font-family: 'NotoSans-Regular';
    font-weight: 500;
`;

const Price = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
    width: 300px;
    background-color: ${props=>props.backgroundColor}  
`;

const EditLink = styled.a`
    margin-top: 40px;
    font-size: 21px;
    color: #368594;
    border-bottom: 2px dashed transparent;
    
    :hover {
        cursor: pointer;
        border-bottom: 2px solid #368594;
    }
`;

const EditIcon = styled(FontAwesomeIcon)`
    color: #368594;
    font-size: 17px;
    margin-right: 5px;
  
    :hover {
        cursor: pointer;
    }
`;

const CompanyLabel = styled.span`
    font-size: 14px;
    color: #A5A5A5
`;

const PriceName = styled.span`
    color: #444;
`;
const PriceValue = styled.span`
   color: #444;
`;

const AdnvantagesBlock = styled.div`
    background-image: url(${props=>props.backgroundImage});
    background-repeat: no-repeat;
    background-position: center center;
    padding: 60px;
`;

const AdnvantagesLabel = styled.p`
    color: #444;
    text-align: center;
    padding: 0;
    margin: 10px 0 0 0;
`;

const AdvantagesCount = styled.h4`
    color: #222;
    text-align: center;
    font-size: 60px;
    font-family: 'NotoSans-Bold';
    margin: 0 0 10px 0;
    padding: 0;
`;

const AdditionItem = styled.p`
    color: #444;
    font-size: 16px;  
    margin: 5px 0;
`;

const AdditionItemCircle = styled.span`
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: #70C294;
    display: inline-block;
    margin-right: 10px;
`;

const ServiceAddress = styled.h4`
    font-size: 18px;
    color: #222;
    font-family: 'NotoSans-Bold';
    margin: 10px 0;
`;

const ServiceMetro = styled.p`
    font-size: 16px;
    color: #444;  
    margin: 0 0 10px 0;
`;

const MetroCircle = styled.span`
    display: inline-block;
    width: 15px;
    height: 15px;
    background-color: ${props=> props.backgroundColor};
    margin-right: 5px;
    border-radius: 50%;
`;
const WorkingHoursColumn = styled.span`
    display: flex;
    flex-direction: column;
    margin-right: 20px;
`;

const WorkingHours = styled.span`
    font-size: 14px;
    margin: 2px 0 2px 0;
    color: #444;
`;

const ServiceContactItem = styled.p`
    font-size: 14px;
    margin: 2px 0 2px 0;
`;

const ServiceContactImg = styled.img`
    margin-right: 5px;
`;

const ServicePhoto = styled.img`
    margin-left: 40px;
    width: 300px;
    height: 200px;
`;



function CompanyProfile(props) {
    console.log('цены', props.prices);
    return (
        <Wrapper>
            <Title>Мой профиль</Title>
            <Row>
                <MainProfile>
                    <Img src={`${props.contactPersonPhoto}`}/>
                </MainProfile>
                <MainProfile>
                    <PersonLabel>Фамилия Имя Отчество</PersonLabel>
                    <PersonTitle>{props.contactPerson}</PersonTitle>
                    <Row>
                        <PersonInfoBlock>
                            <PersonLabel>email</PersonLabel>
                            <PersonInfo>{props.contactPersonEmail}</PersonInfo>
                            <PersonLabel>телефон</PersonLabel>
                            <PersonInfo>{props.contactPersonPhone}</PersonInfo>
                        </PersonInfoBlock>
                        <PersonInfoBlock>
                            <PersonLabel>дата регистрации</PersonLabel>
                            <PersonInfo>20.01.2019</PersonInfo>
                            <PersonLabel>последняя активность</PersonLabel>
                            <PersonInfo>{props.dateUpload}  {props.timeCreated}</PersonInfo>
                        </PersonInfoBlock>
                    </Row>
                </MainProfile>
                <MainProfile>
                    {/*<Button onClick={props.onEditCompanyProfile}>Редактировать профиль</Button>*/}
                    <EditLink onClick={props.onEditCompanyProfile}><EditIcon icon={faPencilAlt} />Редактировать профиль</EditLink>
                </MainProfile>
            </Row>

            <Row marginTop={'40px'}>
                <Title>Моя компания <Status>{props.status}</Status></Title> </Row>
                <Row>
                <Column margin={'0 10% 0 0'}>
                    <CompanyLabel>Название компании</CompanyLabel>
                    <CompanyInfo>{props.companyName}</CompanyInfo>
                    <CompanyLabel>ОГРН</CompanyLabel>
                    <CompanyInfo>{props.ogrn}</CompanyInfo>
                    <CompanyLabel>ИНН</CompanyLabel>
                    <CompanyInfo>{props.inn}</CompanyInfo>
                </Column>
                <Column>
                    <AdnvantagesBlock backgroundImage={clipboard}>
                        <AdnvantagesLabel>Выполненых заявок</AdnvantagesLabel>
                        <AdvantagesCount>{props.amountOrders}</AdvantagesCount>
                    </AdnvantagesBlock>
                </Column>

                    <Column>
                        <AdnvantagesBlock backgroundImage={review}>
                            <AdnvantagesLabel>Оценка пользователей</AdnvantagesLabel>
                            <AdvantagesCount>{props.userRating}/5</AdvantagesCount>
                        </AdnvantagesBlock>
                    </Column>

                    <Column margin={'0 20px'}>
                        <AdnvantagesBlock backgroundImage={star}>
                            <AdnvantagesLabel>Рейтинг</AdnvantagesLabel>
                            <AdvantagesCount>{props.rating}</AdvantagesCount>
                        </AdnvantagesBlock>
                    </Column>
                </Row>

            <Row marginTop={'40px'}>
                <Column margin={'0 60px 0 0'}>
                    <SubTitle>Цены на ремонт</SubTitle>
                    {props.prices.map((e,index)=>{
                        return (
                            <Price key={index + e.name + e.price} backgroundColor={index%2 === 0 ? 'transparent' : 'rgba(230,221,222,.2)'}>
                                <PriceName>{e.name}</PriceName>
                                <PriceValue>{e.price} рублей</PriceValue>
                            </Price>
                        )
                    })}
                </Column>

                <Column>
                    <SubTitle>Дополнительные услуги</SubTitle>
                    <AdditionItem><AdditionItemCircle/>Бесплатная диагностика</AdditionItem>
                    <AdditionItem><AdditionItemCircle/>Доставка до сервиса</AdditionItem>
                    <AdditionItem><AdditionItemCircle/>Работаем с юридическими лицами</AdditionItem>
                </Column>
            </Row>


            <Row marginTop={'40px'}>
                <SubTitle>Адрес и режим работы</SubTitle> </Row>
            <Row >
                <Column>
                    <ServiceAddress>г.Москва, ул. Соколово-Мещерская, д. 26 к.1</ServiceAddress>
                    <ServiceMetro><MetroCircle backgroundColor={'#782678'}/>м. Планерная</ServiceMetro>
                    <Row>
                        <WorkingHoursColumn>
                            <WorkingHours>Пн - 10:00 - 18:00</WorkingHours>
                            <WorkingHours>Вт - 10:00 - 18:00</WorkingHours>
                            <WorkingHours>Ср - 10:00 - 18:00</WorkingHours>
                            <WorkingHours>Чт - 10:00 - 18:00</WorkingHours>
                        </WorkingHoursColumn>

                        <WorkingHoursColumn>
                            <WorkingHours>Пт - 10:00 - 18:00</WorkingHours>
                            <WorkingHours>Сб - 10:00 - 18:00</WorkingHours>
                            <WorkingHours>Вск - выходной</WorkingHours>
                        </WorkingHoursColumn>

                        <WorkingHoursColumn>
                            <ServiceContactItem><ServiceContactImg src={phone}/>+7(900)555-35-35</ServiceContactItem>
                            <ServiceContactItem><ServiceContactImg src={phone}/>+7(900)555-35-35</ServiceContactItem>
                        </WorkingHoursColumn>
                    </Row>
                </Column>
                <ServicePhoto src={`${props.companyPhoto}`}/>
            </Row>

            {props.address && props.address.map((e, index)=>{
                return (
                    <Row marginTop={'40px'} key={index+e.street+e.house}>
                        <Column>
                            <ServiceAddress>{e.city}, {e.street}, {e.house}</ServiceAddress>
                            <ServiceMetro><MetroCircle backgroundColor={'#D90102'}/>м. Чистые Пруды</ServiceMetro>
                            <Row>
                                <WorkingHoursColumn>
                                    <WorkingHours>Пн - 10:00 - 18:00</WorkingHours>
                                    <WorkingHours>Вт - 10:00 - 18:00</WorkingHours>
                                    <WorkingHours>Ср - 10:00 - 18:00</WorkingHours>
                                    <WorkingHours>Чт - 10:00 - 18:00</WorkingHours>
                                </WorkingHoursColumn>

                                <WorkingHoursColumn>
                                    <WorkingHours>Пт - 10:00 - 18:00</WorkingHours>
                                    <WorkingHours>Сб - 10:00 - 18:00</WorkingHours>
                                    <WorkingHours>Вск - выходной</WorkingHours>
                                </WorkingHoursColumn>

                                <WorkingHoursColumn>
                                    <ServiceContactItem><ServiceContactImg src={phone}/>8(800)555-35-35</ServiceContactItem>
                                </WorkingHoursColumn>
                            </Row>
                        </Column>
                        <ServicePhoto src={`${props.companyPhoto}`}/>
                    </Row>
                )
            })}
        </Wrapper>
    )
}


const mapStateToProps = (state) => {
    return {
        dateUpload: state.company.dateUpload,
        timeUpload: state.company.timeUpload,
        address: state.company.address,
        prices: state.company.prices,
        inn: state.company.inn,
        contactPersonEmail: state.company.contactPersonEmail,
        contactPersonPhone: state.company.contactPersonPhone,
        contactPersonPhoto: state.company.contactPersonPhoto,
        contactPerson: state.company.contactPerson,
        companyName:state.company.companyName,
        companyPhoto: state.company.companyPhoto,
        isFreeDiagnostics: state.company.isFreeDiagnostics,
        isDelivery: state.company.isDelivery,
        isGuarantee: state.company.isGuarantee,
        isWorkWithLegalEntity: state.company.isWorkWithLegalEntity,
        isEmailNotification: state.company.isEmailNotification,
        isPhoneNotification: state.company.isPhoneNotification,
        isEmailNews: state.company.isEmailNews,
        ogrn: state.company.ogrn,
        rating: state.company.rating,
        userRating: state.company.userRating,
        amountOrders: state.company.amountOrders,
        status: state.company.status,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onEditCompanyProfile: () => dispatch({type: 'EDIT_COMPANY_PROFILE'})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CompanyProfile)