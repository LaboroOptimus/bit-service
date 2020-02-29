import React from 'react';
import styled from "styled-components";
import Wrapper from '../../UI/Wrapper';
import Title from "../../UI/Title";
import Button from "../../UI/Button";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faClock, faTable, faCreditCard, faUserClock} from '@fortawesome/free-solid-svg-icons';
import phone from './assets/phone.png'
import email from './assets/email.png'

const Item = styled.div`
    background: #FFFFFF;
    box-shadow: 0px -4px 4px rgba(201, 200, 200, 0.1), 0px 4px 4px rgba(201, 200, 200, 0.1);
    border-radius: 10px;
    border: 1px solid #eee;
    margin: 20px 0;
    padding: 20px 20px 40px 20px;
    width: 95%;
    font-family: 'NotoSans-Regular';
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    width: ${props=>props.width};
    align-items: flex-start;
`;

const RequestInfo = styled.span`
    font-size: 14px;
    background-color: ${props=>props.backgroundColor};
    padding: 5px;
    border-radius: 5px;  
`;

const RequestContainer = styled.div`
  display: flex;
  flex-direction: row;  
`;

const RequestDescription = styled.p`
    font-size: 14px;
`;

const RequestTitle = styled.h3`
    font-family: 'NotoSans-Bold';
    color: #222;
    font-size: 30px;
    margin: 0;
`;

const RequestsLabels = styled.span`
    font-size: 14px;
    background-color: ${props=>props.backgroundColor};
    padding: 5px 10px;
    border-radius: 5px; 
    margin-right: 10px;
`;

const Icon = styled(FontAwesomeIcon)`
    margin-right: 3px;
`;

const RequestPersonImage = styled.img`
    width: 75px;
    height: 75px;
    border-radius: 50%;
    margin-right: 15px;
`;

const RequestPersonName = styled.h4`
    font-size: 22px;
    font-family: 'NotoSans-Bold';
    margin: 0 0 10px 0;
    color: #222;
    
`;

const PersonColumn = styled.div`
    display: flex;
    flex-direction: column;

  
`;

const PersonRow = styled.div`
    display: flex;
    flex-direction: row;
   
`;

const PersonLabel = styled.span`
    font-size: 12px;
    background-color: #99DDDE;
    padding: 5px;
    border-radius: 5px; 
    margin-right: 5px;
    color: #fff;
`;

const PersonStation = styled.p`
    font-size: 14px;
    margin: 0;
    padding: 0;
    margin-top: 8px;
    margin-left: 8px;
`;

const PersonStationCircle = styled.span`
    width: 10px;
    height: 10px;
    margin-right: 3px;
    display: inline-block;
    border-radius: 50px;
    background-color: ${props=>props.backgroundColor};
`;

const PersonContactBlock = styled.div`
    display: flex;
    flex-direction: row;
    margin: ${props=> props.margin};
    
`;

const PersonContactImage = styled.img`
    width: 22px;
    height: 22px;
    margin-right: 10px;
    margin-top:3px;
`;

const PersonContactValue = styled.p`
    font-size: 18px;
    margin: 0;
    color: #222;
`;

const RequestImage = styled.img`
   margin-left: 20px;
   height: 250px;
   width: 95%;
`;

const AllRequests = () => {
    return (
        <Wrapper>
          <Title>Все заявки</Title>
            <Item>
                <Row>
                    <Column width={'32%'}>
                        <RequestContainer>
                            <RequestInfo><Icon icon={faTable}/>24.02</RequestInfo>
                            <RequestInfo><Icon icon={faClock}/>15:02</RequestInfo>
                        </RequestContainer>
                        <RequestTitle>Разбит экран у телефона Iphone 8</RequestTitle>
                        <RequestDescription>Классический «Lorem ipsum dolor sit amet…»
                            проход отнести к ремиксов римского философа Цицерона 45 г. до н.э. текст
                            De Finibus Bonorum et Malorum </RequestDescription>
                        <RequestContainer>
                            <RequestsLabels backgroundColor={'#F5C6B4'}>смартфон</RequestsLabels>
                            <RequestsLabels backgroundColor={'#F07554'}>apple</RequestsLabels>
                            <RequestsLabels backgroundColor={'#F9DC8E'}>разбит экран</RequestsLabels>
                        </RequestContainer>
                    </Column>



                    <Column width={'33%'}>
                        <Row>
                            <PersonColumn>
                                <RequestPersonImage src={'https://www.crn.ru/upload/iblock/c2a/Ivan_Ivanov.jpg'}/>
                            </PersonColumn>
                            <PersonColumn>
                                <PersonRow>
                                    <RequestPersonName>Иван Иванов</RequestPersonName>
                                        <PersonStation><PersonStationCircle backgroundColor={'#932072'}/>Планерная</PersonStation>
                                </PersonRow>
                                <PersonRow>
                                    <PersonLabel><Icon icon={faCreditCard}/> 175 заказов</PersonLabel>
                                    <PersonLabel><Icon icon={faUserClock}/> на сайте с 14.02.2019</PersonLabel>
                                </PersonRow>
                            </PersonColumn>
                        </Row>

                        <PersonContactBlock margin={'30px 0 0 0'}>
                            <PersonContactImage src={`${phone}`}/>
                            <PersonContactValue>8(800)000-00-00</PersonContactValue>
                        </PersonContactBlock>
                        <PersonContactBlock margin={'10px 0 30px 0'}>
                            <PersonContactImage src={`${email}`}/>
                            <PersonContactValue>ivanivanoff@mail.ru</PersonContactValue>
                        </PersonContactBlock>
                        <Button text={'Ответить на заявку'}/>
                    </Column>



                    <Column width={'31%'}>
                        <RequestImage src={'https://media2.24aul.ru/imgs/55050e9563d0d414743b79ac/'}/>
                    </Column>
                </Row>
            </Item>


        </Wrapper>
    )
};

export default AllRequests