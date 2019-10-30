import React from 'react'
import styled from "styled-components";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import './slick.css'
import {data} from './data'

const Slider = require("react-slick").default;


const Title = styled.h2`
    text-align: center;
    font-size: 30px;
    margin-top: 30px;
    margin-bottom: 30px;
`;

const Wrapper = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
`;

const ServiceItem = styled.div`
    width: auto !important;
    text-align: center !important;
    background: #66CC92;
    border-radius: 50px;
    color: #fff;
    padding:5px 10px;
    margin 10px 10px;
   
`;
const ServiceItemContent = styled.span`
    padding: 0;
    text-align: center;
`

class Services extends React.Component{

render() {
    const settings = {
        className: "slider variable-width",
        dots: false,
        infinite: true,
        variableWidth: true,
        autoplay: true,
        speed: 1000,
        arrows: false,
        adaptiveHeight: true,
        slidesToScroll: 1,
        centerMode: true,
        slidesToShow: 5,
        pauseOnFocus: false,
        pauseOnHover: false,
    };


    const slickStyles = {
        width:'70%',
        textAlign: 'center'
    }

    const reverseData = [...data].reverse()
    return(
        <Wrapper>
            <Title>Lorem ipsum dolor sit amet, consectetur adipisicing elit</Title>
            <Slider {...settings} styles={slickStyles}>
                {data.map((e,index)=>{
                    return (
                        <ServiceItem key={index}>
                            <ServiceItemContent>{e}</ServiceItemContent>
                        </ServiceItem>
                    )
                })}
            </Slider>

            <Slider {...settings} styles={slickStyles}>
                {reverseData.map((e,index)=>{
                    return (
                        <ServiceItem key={index}>
                            <ServiceItemContent>{e}</ServiceItemContent>
                        </ServiceItem>
                    )
                })}
            </Slider>
        </Wrapper>
        )
    }
}

export default Services