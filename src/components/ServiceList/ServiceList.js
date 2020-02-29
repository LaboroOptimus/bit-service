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
        console.log('приходит', this.props.data);
        return (
            <Wrapper>
                {this.props.data.map((e, index) => {
                    return (
                        <ServiceItem
                            index={index}
                            id={e.id}
                           // url={e.url}
                            name={e.name}
                          //  description={e.serviceDescription}
                           rating={e.rating}
                           address={e.address}
                            isFreeDiagnostics={e.isFreeDiagnostics}
                            isGuarantee={e.isGuarantee}
                            personName={e.personName}
                            personPhoto={e.personPhoto}
                            personEmail={e.personEmail}
                           // station={e.serviceStation}
                            prices={e.prices}

                            isSafeDeal={e.safedeal}
                            isProStatus={e.prostatus}
                        />
                    )
                })}
            </Wrapper>
        )
    }
}

export default ServiceList