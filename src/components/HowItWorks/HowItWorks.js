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
    width: 30%;
`;

const HowItWorksTitle = styled.h3`
    font-size: 30px;
`;

const HowItWorksContent = styled.p`
    font-size: 17px;
`
const Title = styled.h2`
    text-align: center;
    font-size: 40px;
    margin-top: 30px;
    margin-bottom: 30px;
`;

const HowItWorks = () => {
    return (
        <React.Fragment>
            <Title>Как это работает?</Title>
        <Wrapper>
            <HowItWorksContainer>
                <div>
                    <HowItWorksTitle>Создаете заявку</HowItWorksTitle>
                    <HowItWorksContent>с кратким описанием работ и желаемой датой ремонта. Потратите не более 3 минут</HowItWorksContent>
                </div>
                <div>
                    <HowItWorksTitle>Получаете отклики</HowItWorksTitle>
                    <HowItWorksContent>от специализированных сервисов по SMS или в личном кабинете</HowItWorksContent>
                </div>
            </HowItWorksContainer>
            <HowItWorksContainer>
                <div>
                    <HowItWorksTitle>Сравниваете ответы</HowItWorksTitle>
                    <HowItWorksContent>наиболее подходящие по стоимости, отзывам, местоположению и другим параметрам</HowItWorksContent></div>
                <div>
                    <HowItWorksTitle>Подтверждаете запись</HowItWorksTitle>
                    <HowItWorksContent>а также все условия ремонта и можно смело ехать в автосервис</HowItWorksContent>
                </div>
            </HowItWorksContainer>
        </Wrapper>
        </React.Fragment>

    )
}

export default HowItWorks