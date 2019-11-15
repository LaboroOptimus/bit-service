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
`;

const PriceItem = styled.div`
    width: 100%;
    background-color: ${props=> props.backgroundColor};
    padding: 10px;
    margin: 5px 0;
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
    background-color: #FF71A1;
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
`

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
    background-color: ${props=>props.backgroundColor};
    border-radius: 50px;
    margin-bottom: 10px;
`;

const Button = styled(NavLink)`
    background: ${props=> props.backgroundColor}; 
    border-radius: 5px;
    color: ${props=> props.color}; 
    font-size: 15px;
    padding: 10px 20px;
    text-decoration: none;
    margin-right: ${props => props.marginRight};
    
    @media (max-width: 768px) {
       margin-right: 0;
       margin: 5px 0px;
    }
`;

class ServiceItem extends React.Component {
    render(){
        return (
            <Container>
                <NameContainer>
                    <ShieldPro src={shieldpro}/>
                    <Name>РемБытТех</Name>
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
                        <Contact><img src={email}/><ContactDescription>email@service.ru</ContactDescription></Contact>
                        <Contact><img src={phone}/><ContactDescription>8(800)000-00-00</ContactDescription></Contact>
                        <Contact><img src={map}/><ContactDescription>ул. Ленина д.5</ContactDescription></Contact>
                    </LeftColumn>

                    <CenterColumn>
                        <AdvantagesItem backgroundColor={'#31DBC4'}>Рейтинг: 4.5 из 5</AdvantagesItem>
                        <AdvantagesItem backgroundColor={'#6F80FF'}>Бесплатная диагностика</AdvantagesItem>
                        <AdvantagesItem backgroundColor={'#FF71A1'}>Гарантия - 3 года</AdvantagesItem>
                        <AdvantagesItem backgroundColor={'#31DBC4'}>Безопасная сделка</AdvantagesItem>
                    </CenterColumn>
                    <RightColumn>
                        <Description>
                            Пять столетий спустя Lorem Ipsum испытал всплеск популярности с выпуском сухого переноса листов Letraset в.
                            Эти листы надписи можно потереть на любом месте и были быстро приняты художники-графики,
                            принтеры, архитекторов и рекламодателей для их профессионального
                        </Description>

                        <PriceItem backgroundColor={'rgb(49, 219, 196, 0.26)'}>
                            <PriceName>ремонт ноутбука</PriceName>
                            <PriceValue> от 500 рублей</PriceValue>
                        </PriceItem>

                        <PriceItem backgroundColor={'#fff'}>
                            <PriceName >ремонт ноутбука</PriceName>
                            <PriceValue> от 500 рублей</PriceValue>
                        </PriceItem>

                        <PriceItem backgroundColor={'rgb(49, 219, 196, 0.26)'}>
                            <PriceName>ремонт ноутбука</PriceName>
                            <PriceValue> от 500 рублей</PriceValue>
                        </PriceItem>

                        <PriceItem backgroundColor={'#fff'}>
                            <PriceName>ремонт ноутбука</PriceName>
                            <PriceValue> от 500 рублей</PriceValue>
                        </PriceItem>

                        <Link>
                            <Button marginRight={'20px'} color={'#4C60FF'} backgroundColor={'#E1E5FF'} to={'/'}> На страницу сервиса </Button>
                            <Button color={'#fff'} backgroundColor={'#6A7BFF'} to={'/'}> Заказать ремонт техники </Button>
                        </Link>
                    </RightColumn>
                </Content>
            </Container>
        )
    }
}

export default ServiceItem