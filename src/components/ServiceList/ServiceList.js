import React from 'react'
import styled from "styled-components";
import ServiceItem from "../ServiceItem/ServiceItem";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;


class ServiceList extends React.Component {


    componentDidMount() {

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