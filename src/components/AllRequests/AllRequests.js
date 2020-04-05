import React, {useEffect} from 'react';
import { connect } from "react-redux";
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

const AllRequests = (props) => {

    const { isLoad, requests } = props

    /*
    *
    *brand: "Asus"
        date: "28/12"
        desc: "Классический «Lorem "
        email: "igor@mail.ru"
        emailNotification: false
        file: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD"
        model: "X6thfs"
        phone: "+79269258713"
        phoneNotification: true
        station: "Планерная"
        status: "active"
        type: "Ноутбук"
        uid: "GS6k0Imi26Shv7CwE5KSe0uc4uY2"
        userInfo:
        city: "Москва"
        email: "igor@mail.ru"
        name: "Игорь Смирнов"
        pass: "1234567"
        phone: "+79269258713"
        role: "customer"
        station: "Планерная"
    *
    */


    useEffect(() => {
        props.loadAllRequests();
    },[isLoad]);

    return (
        <Wrapper>
          <Title>Все заявки</Title>
            {isLoad && requests.map((e, index)=>{
                return (
                    <Item key={index+e.desc}>
                        <Row>
                            <Column width={'32%'}>
                                <RequestContainer>
                                    <RequestInfo><Icon icon={faTable}/>{e.date}</RequestInfo>
                                    <RequestInfo><Icon icon={faClock}/>15:02</RequestInfo>
                                </RequestContainer>
                               {/* <RequestTitle>{e.type} + ' ' + {e.brand} + ' ' + {e.model}</RequestTitle>*/}
                                <RequestTitle>{e.type + ` ` + e.brand + ` ` +  e.model}</RequestTitle>
                                <RequestDescription>{e.desc}</RequestDescription>
                                <RequestContainer>
                                    {e.type.length !== 0 && <RequestsLabels backgroundColor={'#F5C6B4'}>{e.type}</RequestsLabels>}
                                    {e.brand.length !== 0 && <RequestsLabels backgroundColor={'#F07554'}>{e.brand}</RequestsLabels>}
                                </RequestContainer>
                            </Column>

                            <Column width={'33%'}>
                                <Row>
                                    <PersonColumn>
                                        <RequestPersonImage src={'https://www.crn.ru/upload/iblock/c2a/Ivan_Ivanov.jpg'}/>
                                    </PersonColumn>
                                    <PersonColumn>
                                        <PersonRow>
                                            <RequestPersonName>{e.userInfo.name}</RequestPersonName>
                                            <PersonStation><PersonStationCircle backgroundColor={'#932072'}/>{e.station}</PersonStation>
                                        </PersonRow>
                                        <PersonRow>
                                            <PersonLabel><Icon icon={faCreditCard}/> 175 заказов</PersonLabel>
                                            <PersonLabel><Icon icon={faUserClock}/> на сайте с {e.userInfo.dateOfReg.replace(/\s/g,'.')}</PersonLabel>
                                        </PersonRow>
                                    </PersonColumn>
                                </Row>

                                <PersonContactBlock margin={'30px 0 0 0'}>
                                    <PersonContactImage src={`${phone}`}/>
                                    <PersonContactValue>{e.phone}</PersonContactValue>
                                </PersonContactBlock>
                                <PersonContactBlock margin={'10px 0 30px 0'}>
                                    <PersonContactImage src={`${email}`}/>
                                    <PersonContactValue>{e.userInfo.email}</PersonContactValue>
                                </PersonContactBlock>
                                <Button text={'Ответить на заявку'}/>
                            </Column>
                            <Column width={'31%'}>
                                {e.file && <RequestImage src={`${e.file}`}/>}
                            </Column>
                        </Row>
                    </Item>
                )
            })}
        </Wrapper>
    )
};

const mapStateToProps = (state) => {
    return {
        requests: state.company.all_requests,
        isLoad: state.company.isRequestsLoaded,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadAllRequests: () => dispatch({type: 'LOAD_ALL_REQUESTS'})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AllRequests)