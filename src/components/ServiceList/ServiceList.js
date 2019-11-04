import React from 'react'
import styled from "styled-components";
import {NavLink} from "react-router-dom";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const Name = styled.h3`
    font-size: 28px;
    margin: 0;
    padding-left: 15px;
    padding-bottom: 15px;
`

const Container = styled.div`
    border: 1px solid #eee;
    border-radius: 10px;
    margin: 20px 0;
    padding: 20px 20px 40px 20px;
    width: 95%;
`;

const Content = styled.div`
    display: flex;
    flex-direction: row;
`;

const Description = styled.p`
    font-size: 16px;
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 15px;
    margin-right: 15px;
    width: ${props => props.width || '32%'};
`;
const PriceItem = styled.div`
    width: 100%;
    background: #00aee014;
    padding: 10px;
    margin: 5px 0;
    display: flex;
`;

const PriceName = styled.p`
    flex-grow:1;
    margin: 0;
`

const PriceValue = styled.span`
    
`;

const Link = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
    font-size: 18px;
    color: blue;
   
`;

const Contact = styled.h4`
    font-size: 20px;
    margin:10px 0;
`

const AdvantagesItem = styled.h4`
    font-size: 18px;
    margin: 13px 0;
`;


class ServiceList extends React.Component {
    render() {
        return (
            <Wrapper>
                <Container>
                    <Name>Сервис Плюс</Name>
                    <Content>
                        <Column width={'20%'}>
                            <img src={'http://placehold.it/200x200'}/>
                            <Contact>email@service.ru</Contact>
                            <Contact>8(800)000-00-00</Contact>
                            <Contact>ул. Ленина д.5</Contact>

                        </Column>
                        <Column width={'20%'}>
                            <AdvantagesItem>Рейтинг: 4.5 из 5</AdvantagesItem>
                            <AdvantagesItem>Бесплатная диагностика</AdvantagesItem>
                            <AdvantagesItem>Гарантия - 3 года</AdvantagesItem>
                            <AdvantagesItem>Безопасная сделка</AdvantagesItem>
                        </Column>
                        <Column width={'50%'}>
                            <Description>
                                Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum
                                является стандартной
                                "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник
                                создал большую коллекцию
                                размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.

                            </Description>

                            <PriceItem>
                                <PriceName>ремонт ноутбука</PriceName>
                                <PriceValue> от 500 рублей</PriceValue>
                            </PriceItem>

                            <PriceItem>
                                <PriceName>ремонт ноутбука</PriceName>
                                <PriceValue> от 500 рублей</PriceValue>
                            </PriceItem>

                            <PriceItem>
                                <PriceName>ремонт ноутбука</PriceName>
                                <PriceValue> от 500 рублей</PriceValue>
                            </PriceItem>

                            <PriceItem>
                                <PriceName>ремонт ноутбука</PriceName>
                                <PriceValue> от 500 рублей</PriceValue>
                            </PriceItem>

                            <Link>
                                <NavLink to={'/'}> На страницу сервиса </NavLink>
                            </Link>
                        </Column>
                    </Content>
                </Container>


                <Container>
                    <Name>Сервис Плюс</Name>
                    <Content>
                        <Column width={'20%'}>
                            <img src={'http://placehold.it/200x200'}/>
                            <Contact>email@service.ru</Contact>
                            <Contact>8(800)000-00-00</Contact>
                            <Contact>ул. Ленина д.5</Contact>

                        </Column>
                        <Column width={'20%'}>
                            <AdvantagesItem>Рейтинг: 4.5 из 5</AdvantagesItem>
                            <AdvantagesItem>Бесплатная диагностика</AdvantagesItem>
                            <AdvantagesItem>Гарантия - 3 года</AdvantagesItem>
                            <AdvantagesItem>Безопасная сделка</AdvantagesItem>
                        </Column>
                        <Column width={'50%'}>
                            <Description>
                                Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum
                                является стандартной
                                "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник
                                создал большую коллекцию
                                размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.

                            </Description>

                            <PriceItem>
                                <PriceName>ремонт ноутбука</PriceName>
                                <PriceValue> от 500 рублей</PriceValue>
                            </PriceItem>

                            <PriceItem>
                                <PriceName>ремонт ноутбука</PriceName>
                                <PriceValue> от 500 рублей</PriceValue>
                            </PriceItem>

                            <PriceItem>
                                <PriceName>ремонт ноутбука</PriceName>
                                <PriceValue> от 500 рублей</PriceValue>
                            </PriceItem>

                            <PriceItem>
                                <PriceName>ремонт ноутбука</PriceName>
                                <PriceValue> от 500 рублей</PriceValue>
                            </PriceItem>

                            <Link>
                                <NavLink to={'/'}> На страницу сервиса </NavLink>
                            </Link>
                        </Column>
                    </Content>
                </Container>
            </Wrapper>
        )
    }
}

export default ServiceList