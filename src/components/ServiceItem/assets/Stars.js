import React from 'react'
import star from './assets/star.png'
import styled from "styled-components";

const StarsContainer = styled.div`
    margin-left: 5px;
`;

const Star = styled.img`
   padding-top: 12px;
`;

function Stars(props) {
    return (
        <StarsContainer>
            <Star src={star}/>
        </StarsContainer>
    )
}

export default Stars