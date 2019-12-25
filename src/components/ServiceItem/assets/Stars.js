import React, {Component} from 'react'
import star from './star.png'
import styled from "styled-components";

const StarsContainer = styled.div`
    margin-left: 5px;
`;

const Star = styled.img`
   padding-top: 12px;
`;

class Stars extends Component {
    render() {
        function renderStars(n) {
            let arr = []
            for (let i = 0; i < n; i++) {
                arr.push(<Star src={star}/>);
            }
            return arr;
        }
        return (
            <StarsContainer>
                {renderStars(this.props.rating)}
            </StarsContainer>
        )
    }
}

export default Stars