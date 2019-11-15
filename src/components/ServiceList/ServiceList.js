import React from 'react'
import styled from "styled-components";
import axios from 'axios'
import ServiceItem from "../ServiceItem/ServiceItem";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;


class ServiceList extends React.Component {


    componentDidMount() {
        axios.get('https://bit-ser.firebaseio.com/company.json').then(response=>{
            console.log(response)
        })
    }

    render() {
        return (
            <Wrapper>
                <ServiceItem/>
            </Wrapper>
        )
    }
}

export default ServiceList