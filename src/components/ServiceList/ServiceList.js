import React from 'react'
import styled from "styled-components";
import ServiceItem from "../ServiceItem/ServiceItem";
import {data} from "./data";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;



/*
address: [{…}]
amountOrders: 0



isDelivery: false


isFreeDiagnostics: true
isGuarantee: false
isWorkWithLegalEntity: false
name: "Рога и Копыта"
ogrn: "12346552534"
personEmail: "igor@mail.ru"
personName: "Смирнов Игорь Витальевич"
personPhone: "89269258713"
personPhoto: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD"
photo: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD"
prices: (3) [{…}, {…}, {…}]
rating: 0
status: "не подтвержден"
timeUpload: "21:55"
userRating: 0
*/

class ServiceList extends React.Component {
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