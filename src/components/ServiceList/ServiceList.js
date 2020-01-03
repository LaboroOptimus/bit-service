import React from 'react'
import styled from "styled-components";
import ServiceItem from "../ServiceItem/ServiceItem";
import {data} from "./data";

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
                {data.map((e, index) => {
                    return (
                        <ServiceItem
                            index={index}
                            id={e.id}
                            url={e.url}
                            name={e.serviceName}
                            description={e.serviceDescription}
                            rating={e.serviceRating}
                            address={e.serviceAddress}
                            phone={e.servicePhone}
                            station={e.serviceStation}
                            advantages={e.serviceAdvantages}
                            email={e.serviceEmail}
                            prices={e.servicePrices}
                            city={e.city}
                            safedeal={e.isSafeDeal}
                            prostatus={e.isProStatus}
                        />
                    )
                })}
            </Wrapper>
        )
    }
}

export default ServiceList