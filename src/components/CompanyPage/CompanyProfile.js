import React from 'react'
import styled from "styled-components";
import {connect} from 'react-redux'

const Wrapper = styled.div`
    padding: 100px;
    display: flex;
    flex-direction: column;
`;

const Title = styled.h3`
    font-size: 30px;
    padding: 0;
    margin: 0 0 20px 0;
`;

const SubTitle = styled.h4`
    font-size: 25px;
    padding: 0;
    margin: 0 0 20px 0px;
`;

const PersonTitle = styled.h4`
    font-size: 25px;
    padding: 0;
    margin: 0 0 20px 15px;
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: ${props => props.marginTop}
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
`;

const Img = styled.img`
    height: 200px;
    width: 200px;
    
`;

const PersonInfoBlock = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 15px;
    margin-right: 15px;
`;

const CompanyInfoBlock = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 30px;
`;

const PersonLabel = styled.span`
    font-size: 16px;
    color: #A5A5A5;
    margin-top: 10px;
`;

const PersonInfo = styled.span`
    font-size: 20px;
    font-weight: bold;
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
    font-size: 18px;
`;

const Status = styled.span`
    padding: 2px 10px;
    color: #fff;
    background: #F07554;
    border-radius: 50px;
    margin-left: 20px;
    margin-top: 10px;
    font-size: 14px;
`;

const Price = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
    width: 300px;
    background-color: ${props=>props.backgroundColor}  
`;
const PriceName = styled.span`
 
`;
const PriceValue = styled.span`
   
`;


function CompanyProfile(props) {
    return (
        <Wrapper>
            <Title>Мой профиль</Title>
            <Row>
                <Column>
                    <Img src={`${props.contactPersonPhoto}`}/>
                </Column>
                <Column>
                    <PersonTitle>Смирнов Игорь Витальевич</PersonTitle>
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
                </Column>
                <Button onClick={props.onEditCompanyProfile}>Редактировать профиль</Button>
            </Row>

            <Row marginTop={'20px'}>
                <Column>
                    <Title>Моя компания</Title>
                    <CompanyInfo>{props.companyName}</CompanyInfo>
                    <CompanyInfo>ОГРН : {props.ogrn}</CompanyInfo>
                    <CompanyInfo>ИНН : {props.inn}</CompanyInfo>
                </Column>
                <Column>
                    <Status>не подтвержден</Status>
                </Column>
            </Row>

            <Row marginTop={'20px'}>
                <CompanyInfoBlock>
                    <SubTitle>Адреса сервисов</SubTitle>
                    <span>г. Москва, ул. Ленина дом 5 строение 2</span>
                    <span>г. Москва, ул. Ленина дом 5 строение 2</span>
                    <span>г. Москва, ул. Ленина дом 5 строение 2</span>
                    <span>г. Москва, ул. Ленина дом 5 строение 2</span>
                </CompanyInfoBlock>
                <CompanyInfoBlock>
                    <SubTitle>Режим работы</SubTitle>
                    <span>пн-пт : 10:00 - 20:00, cб: 10:00 - 19:00</span>
                    <span>пн-пт : 10:00 - 20:00, cб: 10:00 - 19:00</span>
                    <span>пн-пт : 10:00 - 20:00, cб: 10:00 - 19:00</span>
                    <span>пн-пт : 10:00 - 20:00, cб: 10:00 - 19:00</span>
                </CompanyInfoBlock>
                <CompanyInfoBlock>
                    <SubTitle>Фото</SubTitle>
                    <Img src={`${props.companyPhoto}`}/>
                </CompanyInfoBlock>
            </Row>

            <Row marginTop={'20px'}>
                <Column>
                    <SubTitle>Цены на ремонт</SubTitle>
                <Price backgroundColor={'transparent'}>
                    <PriceName>ремонт дисплея</PriceName>
                    <PriceValue>5000 рублей</PriceValue>
                </Price>

                    <Price backgroundColor={'rgba(230,221,222,.2)'}>
                        <PriceName>ремонт дисплея</PriceName>
                        <PriceValue>5000 рублей</PriceValue>
                    </Price>

                    <Price backgroundColor={'transparent'}>
                        <PriceName>ремонт дисплея</PriceName>
                        <PriceValue>5000 рублей</PriceValue>
                    </Price>

                    <Price backgroundColor={'rgba(230,221,222,.2)'}>
                        <PriceName>ремонт дисплея</PriceName>
                        <PriceValue>5000 рублей</PriceValue>
                    </Price>

                </Column>

            </Row>

        </Wrapper>
    )
}


const mapStateToProps = (state) => {
    return {
        dateUpload: state.company.dateUpload,
        timeUpload: state.company.timeUpload,
        address: state.company.address,
        price: state.company.prices,
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
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onEditCompanyProfile: () => dispatch({type: 'EDIT_COMPANY_PROFILE'})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CompanyProfile)