import React from 'react';
import styled from 'styled-components'
import {NavLink} from "react-router-dom";
import shieldpro from './assets/success.png'
import servicephoto from './assets/service.png'
import map from './assets/map.png'
import email from './assets/email.png'
import {ReactComponent as Plus} from "./assets/add.svg";
import {formatAddress, formatPhone, formatPrice} from "../../utils/format";
import Stars from "./assets/Stars";
import { metroStationColor } from '../../utils/metroStationColor'

const PlusIcon = styled(Plus)`
    fill: #368594;
    width: 15px;
    height: 15px;
    text-anchor:middle;
`;

const Name = styled.h3`
    font-size: 28px;
    margin: 0;
    padding-left: 15px;
    font-family: 'NotoSans-Bold';
    
     @media (max-width: 768px) {
        font-size: 23px;
        padding-left: 10px;
    }
`;

const ShieldPro = styled.img`
    width: 35px;
    height: 35px;
`;

const YetContainer = styled.div`
    margin-top: 5px;
    margin-bottom: 15px;
    margin-left: 6px;
    font-size: 14px;
    
`;

const Yet = styled(NavLink)`
    color: #368594;
    text-decoration: none;
    
    text-align: left;  
    :hover {
    border-bottom: 1px dashed;
    }
`;

const NameContainer = styled.div`
    display: flex;
    margin-bottom: 15px;
`;

const Container = styled.div`
    background: #FFFFFF;
    box-shadow: 0px -4px 4px rgba(201, 200, 200, 0.1), 0px 4px 4px rgba(201, 200, 200, 0.1);
    border-radius: 10px;
    border: 1px solid #eee;
    margin: 20px 0;
    padding: 20px 20px 40px 20px;
    width: 95%;
    font-family: 'NotoSans-Regular';
    
    @media (max-width: 768px) {
        padding: 10px;
    }
`;

const Content = styled.div`
    display: flex;
    flex-direction: row;
    
     @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const Description = styled.p`
    margin-top: 0;
    margin-bottom: 20px;
    font-size: 16px;
    color: #000000;
`;

const PriceItem = styled.div`
    width: 100%;
    background-color: ${props => props.backgroundColor};
    padding: 10px;
    display: flex;
    
    @media (max-width: 768px) {
       padding: 5px 3px;
    }
`;

const PriceName = styled.p`
    flex-grow:1;
    margin: 0;
`;

const ServicePhoto = styled.img`
    margin-bottom: 40px;
    
     @media (max-width: 768px) {
        margin-bottom: 20px;
    }
`;

const PriceValue = styled.span`
    background-color: #70C294;
    border-radius: 50px;
    padding: 3px 10px;
    font-weight: 500;
    font-size: 14px;
    color: #FFFFFF;
    
    @media (max-width: 768px) {
       font-size: 13px;
       padding: 3px 6px;
    }
`;

/*const Stars = styled.div`
    margin-left: 5px;
`;*/

const LeftColumn = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 15px;
    margin-right: 15px;
    width: 25%;
    
     @media (max-width: 768px) {
        width: 100%;
        margin: 0;
        margin-bottom: 20px;
    }
`;

const CenterColumn = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 15px;
    margin-right: 15px;
    width: 20%;
    
    @media (max-width: 768px) {
        width: 100%;
        margin: 0;
        margin-bottom: 20px;
    }
`;

const RightColumn = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 15px;
    margin-right: 15px;
    width: 50%;
    
    @media (max-width: 768px) {
        width: 100%;
        margin: 0;
    }
`;


const Star = styled.img`
   padding-top: 12px;
`;

const Link = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
    font-size: 18px;
    color: blue;
    
    @media (max-width: 768px) {
       flex-direction: column;
       text-align: center;
    }
`;

const Contact = styled.div`
    display: flex;
    margin: 5px 0;
    
     @media (max-width: 768px) {
        justify-content: center;
    }
`;

const ContactImg = styled.img`
    width: 25px;
    height: 25px;
`;

const ContactDescription = styled.p`
    margin: 0 0 0 5px;
    font-size: 14px;
    font-weight: normal;
     
    
    @media (max-width: 768px) {
        font-size: 19px;
    }
`;

const AdvantagesItem = styled.div`
    padding: 10px 10px 10px 20px;
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    background-color: ${props => props.backgroundColor};
    border-radius: 50px;
    margin-bottom: 10px;
`;


const PrimaryButton = styled(NavLink)`
    border-radius: 5px;
    font-size: 15px;
    padding: 10px 20px;
    text-decoration: none;
    color: #fff; 
    background-color: #368594;
    
  :hover {
    background-color: #99DDDE;
    color: #368594;
  }
    
    @media (max-width: 768px) {
       margin-right: 0;
       margin: 5px 0px;
    }
`;

const SecondaryButton = styled(NavLink)`
    border-radius: 5px;
    font-size: 15px;
    padding: 10px 20px;
    text-decoration: none;
    color: #368594; 
    background-color: #99DDDE;
    margin-right: 20px;
    
    :hover {
        background-color: #368594;
        color: #fff;
    }
    
    @media (max-width: 768px) {
       margin-right: 0;
       margin: 5px 0px;
    }
`;
const ContactPersonTitle = styled.p`
    margin-left: 10px;
`;

const ContactPerson = styled.div`
    display: flex;
    flex-direction: row;
    margin: 10px 0 0 10px;
`;

const ContactPersonPhoto = styled.img`
   width: 75px;
   height: 75px;
   border-radius: 50%;
`;

const ContactPersonColumn = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
`;

const StationColoredCircle = styled.div`
    display: inline-block;
    margin-right: 3px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${props=>props.backgroundColor};
`;

class ServiceItem extends React.Component {
    render() {
        return (
            <Container>
                <NameContainer>
                    {this.props.isProStatus && <ShieldPro src={shieldpro}/>}
                    <Name>{this.props.name}</Name>
                    <Stars rating={this.props.rating}/>
                </NameContainer>
                <Content>
                    <LeftColumn>
                        <ServicePhoto src={servicephoto}/>
                        {this.props.address.map((e, index) => {
                            let stationColor = metroStationColor(e.station);
                            console.log(+stationColor)
                            return (
                                <>
                                    {index < 2 ? (<Contact index={index}>
                                        <ContactDescription>
                                            <StationColoredCircle backgroundColor={typeof stationColor !== "undefined" ? stationColor : '#000'}/>
                                            {e.station + ', ' + e.street + ', ' + e.house}
                                        </ContactDescription>
                                    </Contact>) : null}
                                </>
                            )
                        })}
                        {this.props.address.length > 2 &&
                        <YetContainer><PlusIcon/> <Yet to={'/'}>
                            Еще {this.props.address.length - 2} {formatAddress(this.props.address.length - 2)}
                        </Yet></YetContainer>}

                        {this.props.address.map((e, index) => {
                            return (
                                <>
                                    {index < 2 && e.phone ? (<Contact index={index}><img alt={'alt'} src={email}/>
                                        <ContactDescription>{e.phone}</ContactDescription>
                                    </Contact>) : null}
                                </>
                            )
                        })}
                        {this.props.address.length > 2 &&

                        <YetContainer><PlusIcon/> <Yet
                            to={'/'}>Еще {this.props.address.length - 2} {formatPhone(this.props.address.length - 2)}
                        </Yet></YetContainer>}
                     {/*   <Contact><img alt={'alt'} src={email}/><ContactDescription>email@service.ru</ContactDescription></Contact>*/}


                    </LeftColumn>

                    <CenterColumn>
                        {this.props.isFreeDiagnostics && <AdvantagesItem backgroundColor={'#E6DDDE'}>Бесплатная диагностика</AdvantagesItem>}
                        <AdvantagesItem backgroundColor={'#F5C6B4'}>Рейтинг {this.props.rating}/5</AdvantagesItem>
                        {this.props.isGuarantee && <AdvantagesItem backgroundColor={'#F9DC8E'}>Даем гарантию</AdvantagesItem>}
                        {this.props.isSafeDeal && <AdvantagesItem backgroundColor={'#E6DDDE'}>Безопасная сделка</AdvantagesItem>}
                    </CenterColumn>
                    <RightColumn>
                        <Description>
                            {this.props.description}
                        </Description>
                        {this.props.prices.map((e, index) => {
                            return (
                                <>
                                    {index < 5 ? (<PriceItem
                                        backgroundColor={index % 2 === 0 ? 'transparent' : 'rgb(230, 221, 222, 0.2)'}>
                                        <PriceName>{e.name}</PriceName>
                                        <PriceValue>от {e.price} рублей</PriceValue>
                                    </PriceItem>) : null}

                                </>
                            )
                        })}

                        {this.props.prices.length > 5 ? <YetContainer><PlusIcon/> <Yet to={'/'}> Смотреть
                            еще {this.props.prices.length - 5} {formatPrice(this.props.prices.length - 5)}</Yet></YetContainer> : null}


                        <Link>
                            <SecondaryButton to={'/'}> На
                                страницу сервиса </SecondaryButton>
                            <PrimaryButton to={'/'}> Заказать ремонт
                                техники </PrimaryButton>
                        </Link>

                        <ContactPersonTitle>Контактное лицо</ContactPersonTitle>
                        <ContactPerson>
                            <ContactPersonPhoto src={`${this.props.personPhoto}`}/>
                            <ContactPersonColumn>
                                {this.props.personName && <span>{this.props.personName}</span>}
                                {this.props.personPhone && <span>Телефон : {this.props.personPhone}</span>}
                                {this.props.personEmail && <span>Email : {this.props.personEmail}</span>}
                            </ContactPersonColumn>
                        </ContactPerson>

                    </RightColumn>
                </Content>
            </Container>
        )
    }
}

export default ServiceItem