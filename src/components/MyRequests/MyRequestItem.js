import React, {Component} from 'react'
import styled from "styled-components";
import {NavLink} from "react-router-dom";

const RequestItem = styled.div`
    box-shadow: 0px -4px 4px rgba(186, 186, 186, 0.1), 0px 4px 4px rgba(186, 186, 186, 0.25);
    border-radius: 20px;
    padding: 20px;
    display: flex;
    flex-direction: row;
    width: 45%;
    justify-content: space-between;
    
    @media (max-width: 768px) {
        width: 100%;
        padding: 10px;
        flex-wrap: wrap;
        margin-top: 10px;
        margin-bottom: 10px;
        border-radius: 10px;
    }
`;

const LeftColumn = styled.div`
    display: flex;
    flex-direction: column;
    width: 33%;
    justify-content: space-around;
    
     @media (max-width: 768px) {
        width: 100%;
    }
`;

const RequestName = styled.h3`
    font-size: 20px;
    line-height: 23px;
    color: #000000;
    margin-bottom: 5px;
    margin-top: 5px;
    
    @media (max-width: 768px) {
       margin-bottom: 10px;
       text-align: center;
    }

`;

const StatusContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
    
     @media (max-width: 768px) {
       margin-bottom: 10px;
       justify-content: center;
    }
`;

const Status = styled.span`
    background: #129920;
    border-radius: 50px;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 14px;
    color: #fff;
    padding: 5px 10px;
    margin-right: 10px;
`;

const CreationDate = styled.span`
    font-size: 14px;
    line-height: 24px;
`;

const RightColumn = styled.div`
    display: flex;
    flex-direction: column;
    width: 64%;
    justify-content: space-around;
     @media (max-width: 768px) {
        width: 100%;
        margin-top: 20px;
    }
`;

const RequestTitle = styled.h4`
    font-size: 25px;
    line-height: 29px;
    color: #000000;
    font-style: normal;
    font-weight: normal;
    margin-top: 5px;
    margin-bottom: 5px;
    
     @media (max-width: 768px) {
       text-align: center;
    }
`;

const Description = styled.p`
    @media (max-width: 768px) {
        padding-left: 15px;
    }
`;

const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    @media (max-width: 768px) {
       flex-direction: column;
       text-align: center;
    }
`;

const Button = styled(NavLink)`
    background: ${props => props.backgroundColor}; 
    border-radius: 5px;
    color: ${props => props.color}; 
    font-size: 15px;
    padding: 10px 20px;
    text-decoration: none;
    margin-right: ${props => props.marginRight};
    display: inline-block;
    width: ${props => props.width}
    margin-top: 10px;
    text-align: ${props => props.textAlign};
    
    @media (max-width: 768px) {
        margin: 10px 0;
    }
`;

const ButtonCount = styled.span`
    width: 20px;
    height: 20px;
    background: #FFFFFF;
    border-radius: 50px;
    color: #000;
    display: inline-block;
    text-align: center;
    margin-left: 5px;
    font-size: 13px;
`;

const Image = styled.img`
    width: 150px;
    height: 120px;
`;

class MyRequestItem extends Component {


    render() {
        return (
            <RequestItem>
                <LeftColumn width={'33%'}>
                    <RequestName>Заявка № {this.props.id}</RequestName>
                    <StatusContainer>
                        <Status>{this.props.status}</Status>
                        <CreationDate> {this.props.date} </CreationDate>
                    </StatusContainer>
                    <Image src={this.props.photo}/>
                </LeftColumn>
                <RightColumn width={"64%"}>
                    <RequestTitle>{this.props.name}</RequestTitle>
                    <Description>
                        {this.props.problem}
                    </Description>
                    <ButtonsContainer>
                        <Button color={'#fff'} backgroundColor={'#6A7BFF'} to={`/my-requests/${this.props.id}`}>Смотреть отклики
                            <ButtonCount>{this.props.answers}</ButtonCount>
                        </Button>
                        <Button textAlign={'center'} color={'#4C60FF'} backgroundColor={'#E1E5FF'} to='/'>Отменить
                            заявку</Button>
                    </ButtonsContainer>
                </RightColumn>
            </RequestItem>
        )
    }
}

export default MyRequestItem
