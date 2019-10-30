import React from 'react'
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 40px;
    margin-bottom: 60px;
`;

const HowItWorksContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 35%;
`;

const HowItWorksTitle = styled.h3`
    font-size: 30px;
`;

const HowItWorksContent = styled.p`
    font-size: 17px;
    padding-right: 60px;
`
const Title = styled.h2`
    text-align: center;
    font-size: 40px;
    margin-top: 30px;
    margin-bottom: 30px;
`;
const Time = styled.span`
    font-size: 15px;
    color: #fff;
    background-color:#ff3a00;
    border-radius: 20px;
    font-weight: normal;
    padding: 3px 5px;
`;

const HowItWorks = () => {
    return (
        <React.Fragment>
            <Title>Как это работает?</Title>
        <Wrapper>
            <HowItWorksContainer>
                <div>
                    <HowItWorksTitle>Создаете заявку <Time>~ 3 минуты</Time></HowItWorksTitle>
                    <HowItWorksContent>с кратким описанием работ и желаемой датой ремонта. Потратите не более 3 минут</HowItWorksContent>
                </div>
                <div>
                    <HowItWorksTitle>Получаете отклики <Time>~ 15 минут</Time></HowItWorksTitle>
                    <HowItWorksContent>от специализированных сервисов по SMS или в личном кабинете</HowItWorksContent>
                </div>
            </HowItWorksContainer>
            <HowItWorksContainer>
                <div>
                    <HowItWorksTitle>Сравниваете ответы <Time>~ 10 минут</Time></HowItWorksTitle>
                    <HowItWorksContent>наиболее подходящие по стоимости, отзывам, местоположению и другим параметрам</HowItWorksContent></div>
                <div>
                    <HowItWorksTitle>Подтверждаете запись <Time>~ 1 минута</Time></HowItWorksTitle>
                    <HowItWorksContent>а также все условия ремонта и можно смело ехать в автосервис</HowItWorksContent>
                </div>
            </HowItWorksContainer>
        </Wrapper>
        </React.Fragment>

    )
}

export default HowItWorks