import React from 'react'
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 20px;
`;

const HowItWorksContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
`;

const Title = styled.h2`
    text-align: center;
    font-size: 30px;
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
                    <h3>Создаете заявку</h3>
                    <p>с кратким описанием работ и желаемой датой ремонта. Потратите не более 3 минут</p>
                </div>
                <div>
                    <h3>Получаете отклики</h3>
                    <p>от специализированных сервисов по SMS или в личном кабинете</p>
                </div>
            </HowItWorksContainer>
            <HowItWorksContainer>
                <div>
                    <h3>Сравниваете ответы</h3>
                    <p>наиболее подходящие по стоимости, отзывам, местоположению и другим параметрам</p></div>
                <div>
                    <h3>Подтверждаете запись</h3>
                    <p>а также все условия ремонта и можно смело ехать в автосервис</p>
                </div>
            </HowItWorksContainer>
        </Wrapper>
        </React.Fragment>

    )
}

export default HowItWorks