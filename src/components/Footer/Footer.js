import React from 'react';
import styled from "styled-components";
import {ReactComponent as VK} from "./assets/vk.svg";
import {ReactComponent as Facebook} from "./assets/facebook.svg";
import {ReactComponent as Twitter} from "./assets/twitter.svg";
import {ReactComponent as Instagram} from "./assets/instagram.svg";
import {NavLink} from "react-router-dom";


const VkIcon = styled(VK)`
    width: 22px;
    height: 22px;
    fill: #fff;
    margin: 0 10px;
`;

const FacebookIcon = styled(Facebook)`
    width: 22px;
    height: 22px;
    fill: #fff;
     margin: 0 10px;
`;

const TwitterIcon = styled(Twitter)`
    width: 22px;
    height: 22px;
    fill: #fff;
     margin: 0 10px;
`;

const InstagramIcon = styled(Instagram)`
    width: 22px;
    height: 22px;
    fill: #fff;
     margin: 0 10px;
`;

const FooterBlock = styled.div`
    background: #383c49;
`;

const Wrapper = styled.div`
    padding:40px 40px 100px 40px;
    display: flex;
    justify-content: space-around;
    @media (max-width: 768px) {
        flex-wrap: wrap;
       }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    
    @media (max-width: 768px) {
        flex-wrap: wrap;
        width: 100%;
        margin-top: 20px;
        :not(first){
            justify-content: center;
        }
        
        :nth-child(1){
           text-align: center; 
           }
       }
       
`;

const FooterTitle = styled.h5`
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    color: #FFFFFF;
    margin-bottom: 5px;
    margin-top: 5px;
`;

const Link = styled(NavLink)`
    color: #fff;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    text-decoration: none;
    
    display: inline;
    
    :hover {
        text-decoration: underline;
    }
`;

const Contact = styled.h4`
    font-size: 28px;  
    color: #fff;  
    font-style: normal;
    font-weight: bold;
    margin: 5px 0;
`;

const SocialContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    @media (max-width: 768px) {
        justify-content: center; 
     }
`;

async function request() {
    let url = '/';
    let response = await fetch(url);
    let commits = await response; // читаем ответ в формате JSON
    console.log(commits);
}

class Footer extends React.Component{
    componentDidMount() {
        request()
    }

    render() {
        return (
            <FooterBlock>
                <Wrapper>
                    <Container>
                        <Contact>8(800)000-00-00</Contact>
                        <Contact>info@remont.ru</Contact>
                        <FooterTitle>Следите за нами в соц.сетях!</FooterTitle>
                        <SocialContainer>
                            <Link to={'/'}>
                                <VkIcon/>
                            </Link>
                            <Link to={'/'}>
                                <FacebookIcon/>
                            </Link>
                            <Link to={'/'}>
                                <InstagramIcon/>
                            </Link>
                            <Link to={'/'}>
                                <TwitterIcon/>
                            </Link>
                        </SocialContainer>
                    </Container>

                <Container>
                    <FooterTitle>Remont</FooterTitle>
                    <Link to={'/'}>Главная</Link>
                    <Link to={'/'}>Как это работает?</Link>
                    <Link to={'/'}>Поиск сервиса на карте</Link>
                    <Link to={'/'}>Регистрация</Link>
                    <Link to={'/'}>Вход на сайт</Link>
                </Container>

                <Container>
                    <FooterTitle>Информация</FooterTitle>
                    <Link to={'/'}>Информация</Link>
                    <Link to={'/'}>Оферта</Link>
                    <Link to={'/'}>Конфиденциальность</Link>
                </Container>

                <Container>
                    <FooterTitle>О компании</FooterTitle>
                    <Link to={'/'}>Блог</Link>
                    <Link to={'/'}>О проекте</Link>
                    <Link to={'/'}>Вакансии</Link>
                    <Link to={'/'}>Вопрос-ответ</Link>
                </Container>
            </Wrapper>
            </FooterBlock>
        )
    }

}



export default Footer;