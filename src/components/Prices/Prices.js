import React from 'react'
import styled from "styled-components";

const Wrapper = styled.div`
    padding: 0 30px;
`;

const Title = styled.h2`
    const Title = styled.h2;
    font-size: 40px;
    text-align: center;
    margin-bottom: 40px;
`;

const TagContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
`;

const Tag = styled.span`
    margin-left: 10px;
    margin-right: 10px;
    color: #0095ff;
    cursor: pointer;
    text-decoration: none;
    
    :active, :hover {
    border-bottom: 1px dashed;
    }
`;

const PriceContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    margin: 0 auto;
`;
const Price = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    background:#00aee014;
    margin: 5px 0;
    padding: 20px;
    
`;

const PriceTitle = styled.p`
    flex-grow: 1;
    padding: 0;
    margin: 0;
    color: #10294c;
    font-size: 18px;
`;

const PriceValue = styled.span`
    display: inline-block;
    vertical-align: middle;
    background: #349D54;
    color: #fff;
    padding: 3px 7px;
    border-radius: 20px;
`


class Prices extends React.Component {
    render() {
        return (
            <Wrapper>
                <Title>Цены на услуги сервисных центров</Title>
                <TagContainer>
                    <Tag href={'tv'}>телевизоры</Tag>
                    <Tag href={'tv'}>ноутбуки</Tag>
                    <Tag href={'tv'}>стиральные машины</Tag>
                    <Tag href={'tv'}>посудомоечные машины</Tag>
                    <Tag href={'tv'}>холодильники</Tag>
                </TagContainer>

                <PriceContainer>
                    <Price>
                        <PriceTitle>замена дисплея</PriceTitle>
                        <PriceValue>от 300 рублей</PriceValue>
                    </Price>

                    <Price>
                        <PriceTitle>замена дисплея</PriceTitle>
                        <PriceValue>от 300 рублей</PriceValue>
                    </Price>

                    <Price>
                        <PriceTitle>замена дисплея</PriceTitle>
                        <PriceValue>от 300 рублей</PriceValue>
                    </Price>
                    <Price>
                        <PriceTitle>замена дисплея</PriceTitle>
                        <PriceValue>от 300 рублей</PriceValue>
                    </Price>
                    <Price>
                        <PriceTitle>замена дисплея</PriceTitle>
                        <PriceValue>от 300 рублей</PriceValue>
                    </Price>
                    <Price>
                        <PriceTitle>замена дисплея</PriceTitle>
                        <PriceValue>от 300 рублей</PriceValue>
                    </Price>
                    <Price>
                        <PriceTitle>замена дисплея</PriceTitle>
                        <PriceValue>от 300 рублей</PriceValue>
                    </Price>
                </PriceContainer>


            </Wrapper>
        )
    }
}

export default Prices