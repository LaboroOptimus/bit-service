import React from 'react';
import styled from 'styled-components'
import {NavLink} from "react-router-dom";
import shieldpro from './assets/success.png'
import servicephoto from './assets/service.png'
import star from './assets/star.png'
import map from './assets/map.png'
import phone from './assets/phone.png'
import email from './assets/email.png'

const Name = styled.h3`
    font-size: 28px;
    margin: 0;
    padding-left: 15px;
    
     @media (max-width: 768px) {
        font-size: 23px;
        padding-left: 10px;
    }
`;

const ShieldPro = styled.img`
    width: 35px;
    height: 35px;
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

const Stars = styled.div`
    margin-left: 5px;
`;

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

const ContactDescription = styled.p`
    margin: 0 0 0 5px;
    font-size: 16px;
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

const Button = styled(NavLink)`
    background: ${props => props.backgroundColor}; 
    border-radius: 5px;
    color: ${props => props.color}; 
    font-size: 15px;
    padding: 10px 20px;
    text-decoration: none;
    margin-right: ${props => props.marginRight};
    
    @media (max-width: 768px) {
       margin-right: 0;
       margin: 5px 0px;
    }
`;

/*
data = [
  {
    serviceId: 104,
    serviceUrl: www.remont.ru/104,
    serviceName: РемБытТех,
    servicePhoto: file,
    serviceDescription: Какое-то описание,
    serviceRating: 4,
    serviceAdress: [],
    servicePhone: [],
    serviceStation: [],
    serviceAdvantages: [],
    servicePrices: [],
    isSafeDeal: true,
  },
{},
]


*/


class ServiceItem extends React.Component {
    render() {
        return (
            <Container>
                <NameContainer>
                    {this.props.prostatus && <ShieldPro src={shieldpro}/>}
                    <Name>{this.props.name}</Name>
                    <Stars>
                        <Star src={star}/>
                        <Star src={star}/>
                        <Star src={star}/>
                        <Star src={star}/>
                        <Star src={star}/>
                    </Stars>
                </NameContainer>
                <Content>
                    <LeftColumn>
                        <ServicePhoto src={servicephoto}/>
                        {this.props.address.map((e, index) => {
                            return (
                                <>
                                    {index < 2 ? (<Contact index={index}><img alt={'alt'} src={map}/>
                                        <ContactDescription>{e}</ContactDescription>
                                    </Contact>) : null}
                                </>
                            )
                        })}
                        /*TODO: Сделать функцию форматирования адресов */
                        {this.props.address.length > 2 && <a>Еще {this.props.address.length - 2} адреса</a>}

                        {this.props.phone.map((e,index)=>{
                            return (
                                <>
                                    {index < 2 ? (<Contact index={index}><img alt={'alt'} src={phone}/>
                                        <ContactDescription>{e}</ContactDescription>
                                    </Contact>) : null}
                                </>
                            )
                        })}
                        /*TODO: Сделать функцию форматирования телефон(а/ов)*/
                        {this.props.phone.length > 2 && <a>Еще {this.props.phone.length - 2} телефон</a>}
                        <Contact><img alt={'alt'} src={email}/><ContactDescription>email@service.ru</ContactDescription></Contact>


                    </LeftColumn>

                    <CenterColumn>
                        {this.props.advantages.map((e, index) => {
                            return (
                                <AdvantagesItem
                                    backgroundColor={index === 0 ? '#E6DDDE' : index === 1 ? '#F5C6B4' : index === 2 ? '#F9DC8E' : 'transparent'}
                                    index={index}>{e}
                                </AdvantagesItem>
                            )
                        })}
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
                                        <PriceName>{e.title}</PriceName>
                                        <PriceValue>от {e.price} рублей</PriceValue>
                                    </PriceItem>) : null}

                                </>
                            )
                        })}

                        {this.props.prices.length > 5 ? <p>Смотреть еще {this.props.prices.length - 5} цен</p> : null}

                        <Link>
                            <Button marginRight={'20px'} color={'#4C60FF'} backgroundColor={'#E1E5FF'} to={'/'}> На
                                страницу сервиса </Button>
                            <Button color={'#fff'} backgroundColor={'#6A7BFF'} to={'/'}> Заказать ремонт
                                техники </Button>
                        </Link>
                    </RightColumn>
                </Content>
            </Container>
        )
    }
}

export default ServiceItem