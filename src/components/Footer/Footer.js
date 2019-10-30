import React from 'react';
import styled from "styled-components";

const FooterBlock = styled.div`
    background: #383c49;
`;

const Wrapper = styled.div`
    padding: 40px;
    display: flex;
    justify-content: space-around;
`;

const Container = styled.div`
    width: 20%;
    display: flex;
    flex-direction: column;
`;
const Link = styled.a`
    color: #fff;
    font-size: 18px;
    text-decoration: none;
`;

const Contact = styled.h4`
    font-size: 25px;
    color: #fff;    
`;

const FooterTitle = styled.h3`
    font-size: 20px;
    color: #fff;
`;


class Footer extends React.Component{
    render() {
        return (
            <FooterBlock>
                <Wrapper>
                    <Container>
                        <Contact>8(800)000-00-00</Contact>
                        <Contact>info@remont.ru</Contact>
                    </Container>

                <Container>
                    <FooterTitle>Remont</FooterTitle>
                    <Link href='#'>Как это работает?</Link>
                    <Link href='#'>Личный кабинет</Link>
                    <Link href='#'>Сервисы на карте</Link>
                    <Link href='#'>Заявка на ремонт</Link>
                    <Link href='#'>Блог</Link>
                </Container>

                <Container>
                    <FooterTitle>Информация</FooterTitle>
                    <Link href='#'>Информация</Link>
                    <Link href='#'>Оферта</Link>
                    <Link href='#'>Конфиденциальность</Link>
                </Container>

                <Container>
                    <FooterTitle>О компании</FooterTitle>
                    <Link href='#'>О проекте</Link>
                    <Link href='#'>Вакансии</Link>
                    <Link href='#'>Вопрос-ответ</Link>
                </Container>
            </Wrapper>
            </FooterBlock>
        )
    }

}



export default Footer;