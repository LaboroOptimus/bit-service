import React, {Component} from 'react'
import styled from "styled-components";
import calendar from './assets/calendar.png'
import time from './assets/clock.png'
import Stars from "../ServiceItem/assets/Stars";
import shieldpro from "../ServiceItem/assets/success.png";
import shield from './assets/shield.png';
import pack from './assets/package.png';
import map from '../ServiceItem/assets/map.png';
import phone from '../ServiceItem/assets/phone.png'
import email from '../ServiceItem/assets/email.png'
import service from './assets/service.jpg'
import {NavLink} from "react-router-dom";
import {connect} from 'react-redux';
import {loadAnswers} from "../../redux/user-action-creators";

const Wrapper = styled.div`
    padding: 100px 30px 180px 30px;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const Title = styled.h3`
     font-size: 30px;
     display: inline-block;
     margin: 0;
`;

const SecondTitle = styled.h4`
    font-size: 24px;
`;

const PriceTitle = styled.h4`
    font-size: 20px;
    margin: 0 0 10px 0;
    
`;

const Row = styled.div`
    display: flex;
    flex-direction
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
`;

const ContentColumn = styled.div`
    display: flex;
    flex-direction: column;
    width: 32%;
    margin: 0 10px 0 10px;  
`;

const StatusContainer = styled.div`
     margin-left: 10px;
     margin-top: 10px;
`;

const Status = styled.span`
    background: #129920;
    border-radius: 50px;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 14px;
    color: #fff;
    padding: 5px 10px;
    margin-right: 10px;
`;

const DateContainer = styled.div`
    margin-right: 15px;
    margin-top: 10px;
    margin-bottom: 10px;
`;

const DateValue = styled.span`
   color: #969696;
   font-size: 14px;
`;

const DateIcon = styled.img`
    width: 15px;
    height: 15px;
    margin-right: 5px;
`;

const Cancel = styled.a`
    font-size: 16px;
    color: #F07554;
    border-bottom: none;
    
    :hover {
        cursor: pointer;
        
        border-bottom: 1px dashed;
    }
`;

const Image = styled.img`
    width: 200px;
    height: 200px;
    margin-top: 10px;
`;

const RequestTitle = styled.h4`
    font-size: 24px;
    margin: 0 0 10px 20px;
`;

const RequestDesc = styled.p`
    font-size: 18px;
    padding-right: 200px;
    margin: 0 0 10px 20px;
`;

const AnswerItem = styled.div`
    box-shadow: 0px -4px 4px rgba(186, 186, 186, 0.1), 0px 4px 4px rgba(186, 186, 186, 0.25);
    border-radius: 20px;
    padding: 20px;
    display: flex;
    flex-direction: row;
`;

const ShieldPro = styled.img`
    width: 20px;
    height: 20px;
    padding-top: 6px;
    
`;

const ServiceName = styled.h4`
    font-size: 20px;
    margin: 0 10px 0 10px;
    padding-top: 3px;
`;

const AnswerMessage = styled.span`
    font-style: italic;
    display: inline-block;
    margin: 0;
    padding-top: 10px;
    padding-bottom: 10px;
`;

const Contact = styled.div`
    display: flex;
    margin-top: 5px;
    margin-bottom: 5px;
`;


const Link = styled(NavLink)`
    color: #368594;
    border-bottom: 1px dashed;
    text-decoration: none;
    line-height: 20px;
    display: inline-block;
    
    :hover {
        border-bottom: 1px solid transparent;
    }
`;

const ServicePhoto = styled.img`
    width: auto;
    height: 260px;
`;

const PriceItem = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 5px;
`;

const PriceItemReverse = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 5px;
    background-color: rgba(230,221,222,.2);
`;

const PriceValue = styled.span`
    font-weight: bold;
`;

const ContactDescription = styled.span`

`;

const TotalPrice = styled.span`
    font-size: 24px;
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 10px;
`;

const PrimaryButton = styled(NavLink)`
    border-radius: 5px;
    font-size: 18px;
    padding: 10px 20px;
    text-decoration: none;
    color: #fff; 
    background-color: #368594;
    margin-top: 10px;
    margin-left: 20px;
    
  :hover {
    background-color: #99DDDE;
    color: #368594;
  }
`;

const AdvantagesContainer = styled.div`
   margin-top: 10px;
   display: flex;
   flex-direction: column;
`;

const Advantages = styled.div`
    margin: 5px 0;
`;

const AdvantagesValue = styled.span`
    font-size: 16px;
    color: #368594;
    margin: 5px 0 5px 10px;
`;

const AnswerTitle = styled.span`
    font-style: normal;
`;

const Filter = styled.a`
    color: #3249FF;
    font-weight: normal;
    font-size: 17px;
    line-height: 18px;
    margin: 0 10px;
    border-bottom: 1px dashed transparent;   
    
    :hover {
        border-bottom: 1px dashed;    
        cursor: pointer;
    }
`;

const FilterContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
    font-size: 17px;
    line-height: 18px;
`;

class Answer extends Component {
    componentDidMount() {
        this.props.onLoadAnswers(this.props.id)
    }

    render() {
        const request = this.props.request;
        console.log(this.props.isRequestLoad);
        //console.log(this.props.request);

        return (
            <Wrapper>
                <Container>
                    {this.props.isRequestLoad && (
                        <>
                    <Row>
                        <Title>Заявка №{this.props.id}</Title>
                        <StatusContainer>
                             <Status>{request.status}</Status>
                            <Cancel>отменить заявку</Cancel>
                        </StatusContainer>
                    </Row>

                    <Row>
                        <DateContainer>
                            <DateIcon src={calendar}/>
                            <DateValue>{request.date}</DateValue>
                        </DateContainer>

                        <DateContainer>
                            <DateIcon src={time}/>
                            <DateValue>15:25</DateValue>
                        </DateContainer>

                    </Row>

                    <Row>
                        <Image src={request.file}/>
                        <Column>
                            <RequestTitle>{request.type + ' ' + request.brand + ' ' + request.model}</RequestTitle>
                            <RequestDesc>{request.desc}</RequestDesc>
                        </Column>
                    </Row>
                        </>
                        )}

                    <SecondTitle>Предложения сервисных центров</SecondTitle>
                    <FilterContainer>
                        <span>Сортировка: </span>
                        <Filter>по рейтингу</Filter>
                        <Filter>по цене</Filter>
                        <Filter>по дате</Filter>
                    </FilterContainer>

                    <Column>
                        <AnswerItem>
                            <ContentColumn>
                                <Row>
                                    <ShieldPro src={shieldpro}/>
                                    <ServiceName>РемБытТех</ServiceName>
                                    <Stars rating={5}/>
                                </Row>

                                <AnswerMessage><AnswerTitle>сообщение от сервиса: </AnswerTitle>“для любого епсилон
                                    большего
                                    нуля найдется дельта такое, что для всех таких, что модуль
                                    разности х и а больше нуля и меньше дельта выполнятся неравенство f(x) - A по модулю
                                    меньше епсилон”</AnswerMessage>
                                <Contact>
                                    <img src={map}/>
                                    <ContactDescription>ул. Строителей, 2б</ContactDescription>
                                </Contact>

                                <Contact>
                                    <img src={phone}/>
                                    <ContactDescription>8(800) 000-00-00</ContactDescription>
                                </Contact>

                                <Contact>
                                    <img src={email}/>
                                    <ContactDescription>www.rem-bit-teh.ru</ContactDescription>
                                </Contact>
                                <div>
                                    <Link to={'/'}>На страницу сервиса</Link>
                                </div>
                            </ContentColumn>

                            <ContentColumn>
                                <PriceTitle>Стоимость ремонта</PriceTitle>
                                <PriceItem>
                                    диагностика ноутбука
                                    <PriceValue>0 р.</PriceValue>
                                </PriceItem>
                                <PriceItemReverse>
                                    покупка оригинальных запчастей
                                    <PriceValue>5000 р.</PriceValue>
                                </PriceItemReverse>
                                <PriceItem>
                                    замена дисплея
                                    <PriceValue>500 р.</PriceValue>
                                </PriceItem>
                                <Row>
                                    <TotalPrice>5500 рублей</TotalPrice>
                                    <PrimaryButton to={'/'}>Заказать ремонт</PrimaryButton>
                                </Row>

                                <AdvantagesContainer>
                                    <Advantages><img src={shield}/><AdvantagesValue>Гарантия - 3
                                        года</AdvantagesValue></Advantages>
                                    <Advantages><img src={pack}/><AdvantagesValue>Доставим до сервиса и
                                        обратно</AdvantagesValue></Advantages>
                                </AdvantagesContainer>

                            </ContentColumn>
                            <ContentColumn>
                                <ServicePhoto src={service}/>
                            </ContentColumn>
                        </AnswerItem>
                    </Column>
                </Container>
            </Wrapper>
        )
    }
}

const mapStateToProps = state => {
    return {
        request: state.answer.request,
        isRequestLoad: state.answer.isRequestLoad
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onLoadAnswers: (id) => dispatch(loadAnswers(id))
    }
};


export default connect(mapStateToProps,mapDispatchToProps)(Answer)