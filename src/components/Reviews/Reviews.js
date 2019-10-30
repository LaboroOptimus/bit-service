import React from 'react'
import styled from "styled-components";

const Slider = require("react-slick").default;

const Title = styled.h2`
    const Title = styled.h2;
    font-size: 40px;
    text-align: center;
    margin-bottom: 40px;
`;

const Wrapper = styled.div`
   margin: 40px 0;
   padding: 0 30px;  
`;

const ReviewBlock = styled.div`
    width: 50% !important;
    margin-top: 20px;
    margin-bottom: 20px;
    border-radius: 20px;
    padding: 20px 10px;
    border: 1px solid #eee;
    -webkit-box-shadow: -2px 2px 22px -4px rgba(0,0,0,0.05);
    -moz-box-shadow: -2px 2px 22px -4px rgba(0,0,0,0.05);
    -ms-box-shadow: -2px 2px 22px -4px rgba(0,0,0,0.05);
    -o-box-shadow: -2px 2px 22px -4px rgba(0,0,0,0.05);
    box-shadow: -2px 2px 22px -4px rgba(0,0,0,0.05);
`;
const ReviewContent = styled.p`
    font-size: 18px;
`

const Reviews = () => {

    const settings = {
        dots: true,
        infinite: true,
        /*autoplay: true,*/
        speed: 1000,
        arrows: true,
        adaptiveHeight: true,
        slidesToScroll: 1,
        centerMode: true,
        slidesToShow: 1,


    };

    return (
        <Wrapper>
            <Title>Отзывы</Title>
            <Slider {...settings}>
                <ReviewBlock>
                    <ReviewContent>Очень быстрая реакция на заказ ремонта на сайте.
                        Девушка с приятным голосом уточнила необходимы детали и приняла в работу.
                        Спасибо.</ReviewContent>
                </ReviewBlock>
                <ReviewBlock>
                    <ReviewContent>Обратился в сервис через сайт компании производителя, удобно и просто,
                        надеюсь ремонт будет таким же быстрым, позже дополню отзыв</ReviewContent>
                </ReviewBlock>
                <ReviewBlock>
                    <ReviewContent>Сломался телефон - перестал заряжаться и превратился в кирпич.
                        При мне его за минут 20 разобрали, нашли причину, починили и очень подробно рассказали,
                        что произошло.</ReviewContent>
                </ReviewBlock>
            </Slider>
        </Wrapper>
    )
}

export default Reviews