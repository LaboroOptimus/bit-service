import React from 'react'
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import email from "../ServiceItem/assets/email.png";
import phone from "../ServiceItem/assets/phone.png";
import map from "../ServiceItem/assets/map.png";


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 100px 30px;
`;

const Title = styled.h3`
    font-size: 30px;
    text-align: left;
    margin-top: 0;
    margin-bottom: 0;
`;

const SortItem = styled.a`
    color: #3249FF;
    //border-bottom: 1px solid #3249FF;
    font-weight: normal;
    font-size: 17px;
    line-height: 18px;
    margin: 0 10px;
    
    :hover {
        cursor: pointer;
        border-bottom: 1px solid #3249FF;
    }
`;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 20px;
    margin-bottom: 20px;
    flex-wrap: wrap;
`;

const SortContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    margin-bottom: 20px;
    flex-wrap: wrap;
`;

const SortText = styled.span`
    color: #969696;
    font-size: 17px;
    line-height: 19px
`;

const RequestItem = styled.div`
    box-shadow: 0px -4px 4px rgba(186, 186, 186, 0.1), 0px 4px 4px rgba(186, 186, 186, 0.25);
    border-radius: 20px;
    padding: 20px;
    display: flex;
    flex-direction: row;
    width: 45%;
    justify-content: space-between;
    
    @media (max-width: 768px) {
        width: 100%;
        padding: 10px;
        flex-wrap: wrap;
        margin-top: 10px;
        margin-bottom: 10px;
        border-radius: 10px;
    }
`;

const RequestName = styled.h3`
    font-size: 20px;
    line-height: 23px;
    color: #000000;
    margin-bottom: 5px;
    margin-top: 5px;
    
    @media (max-width: 768px) {
       margin-bottom: 10px;
       text-align: center;
    }

`;

const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    @media (max-width: 768px) {
       flex-direction: column;
       text-align: center;
    }
`;

const RequestTitle = styled.h4`
    font-size: 25px;
    line-height: 29px;
    color: #000000;
    font-style: normal;
    font-weight: normal;
    margin-top: 5px;
    margin-bottom: 5px;
    
     @media (max-width: 768px) {
       text-align: center;
    }
`;

const CreationDate = styled.span`
    font-size: 14px;
    line-height: 24px;
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

const StatusContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
    
     @media (max-width: 768px) {
       margin-bottom: 10px;
       justify-content: center;
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
`;

const Button = styled(NavLink)`
    background: ${props => props.backgroundColor}; 
    border-radius: 5px;
    color: ${props => props.color}; 
    font-size: 15px;
    padding: 10px 20px;
    text-decoration: none;
    margin-right: ${props => props.marginRight};
    display: inline-block;
    width: ${props => props.width}
    margin-top: 10px;
    text-align: ${props => props.textAlign};
    
    @media (max-width: 768px) {
        margin: 10px 0;
    }
`;

const ButtonCount = styled.span`
    width: 20px;
    height: 20px;
    background: #FFFFFF;
    border-radius: 50px;
    color: #000;
    display: inline-block;
    text-align: center;
    margin-left: 5px;
    font-size: 13px;
`;

const LeftColumn = styled.div`
    display: flex;
    flex-direction: column;
    width: 33%;
    justify-content: space-around;
    
     @media (max-width: 768px) {
        width: 100%;
    }
`;

const RightColumn = styled.div`
    display: flex;
    flex-direction: column;
    width: 64%;
    justify-content: space-around;
     @media (max-width: 768px) {
        width: 100%;
        margin-top: 20px;
    }
`;

const Description = styled.p`
    @media (max-width: 768px) {
        padding-left: 15px;
    }
`

class MyRequests extends React.Component {
    render() {
        return (
            <Wrapper>
                <Title>Мои заявки</Title>
                <SortContainer>
                    <SortText>Сортировка:</SortText>
                    <SortItem>по рейтингу</SortItem>
                    <SortItem>по цене</SortItem>
                    <SortItem>по удаленности</SortItem>
                </SortContainer>

                <Container>
                    <RequestItem>
                        <LeftColumn width={'33%'}>
                            <RequestName>Заявка № 1284129</RequestName>
                            <StatusContainer>
                                <Status>активна</Status>
                                <CreationDate> 16.11.19 </CreationDate>
                            </StatusContainer>
                            <Contact><img
                                src={email}/><ContactDescription>email@service.ru</ContactDescription></Contact>
                            <Contact><img
                                src={phone}/><ContactDescription>8(800)000-00-00</ContactDescription></Contact>
                            <Contact><img src={map}/><ContactDescription>ул. Ленина д.5</ContactDescription></Contact>

                        </LeftColumn>

                        <RightColumn width={"64%"}>
                            <RequestTitle>Ноутбук Asus X556U</RequestTitle>
                            <Description>
                                Значимость этих проблем настолько очевидна, что новая модель организационной
                                деятельности
                                требуют от нас анализа модели развития. Значимость этих проблем настолько очевидна,
                            </Description>
                            <ButtonsContainer>
                                <Button color={'#fff'} backgroundColor={'#6A7BFF'} to='/'>Смотреть отклики
                                    <ButtonCount>3</ButtonCount>
                                </Button>
                                <Button textAlign={'center'} color={'#4C60FF'} backgroundColor={'#E1E5FF'} to='/'>Отменить
                                    заявку</Button>
                            </ButtonsContainer>
                        </RightColumn>
                    </RequestItem>

                    <RequestItem>
                        <LeftColumn width={'33%'}>
                            <RequestName>Заявка № 1284129</RequestName>
                            <StatusContainer>
                                <Status>активна</Status>
                                <CreationDate> 16.11.19 </CreationDate>
                            </StatusContainer>
                            <Contact><img
                                src={email}/><ContactDescription>email@service.ru</ContactDescription></Contact>
                            <Contact><img
                                src={phone}/><ContactDescription>8(800)000-00-00</ContactDescription></Contact>
                            <Contact><img src={map}/><ContactDescription>ул. Ленина д.5</ContactDescription></Contact>

                        </LeftColumn>

                        <RightColumn width={"64%"}>
                            <RequestTitle>Ноутбук Asus X556U</RequestTitle>
                            <Description>
                                Значимость этих проблем настолько очевидна, что новая модель организационной
                                деятельности
                                требуют от нас анализа модели развития. Значимость этих проблем настолько очевидна,
                            </Description>
                            <ButtonsContainer>
                                <Button color={'#fff'} backgroundColor={'#6A7BFF'} to='/'>Смотреть отклики
                                    <ButtonCount>3</ButtonCount>
                                </Button>
                                <Button textAlign={'center'} color={'#4C60FF'} backgroundColor={'#E1E5FF'} to='/'>Отменить
                                    заявку</Button>
                            </ButtonsContainer>
                        </RightColumn>
                    </RequestItem>
                </Container>

            </Wrapper>
        )
    }
}

export default MyRequests