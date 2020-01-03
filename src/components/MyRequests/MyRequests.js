import React from 'react'
import styled from "styled-components";
import MyRequestItem from "./MyRequestItem";
import {loadRequest} from "../../redux/user-action-creators";
import {connect} from 'react-redux';
import Loader from "../Loader/Loader";
import {filterActive,filterDelete} from "../../redux/user-action-creators";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 100px 30px 180px 30px;
    background-color: #FCFCFE;
`;

const Title = styled.h3`
    font-size: 30px;
    text-align: left;
    margin-top: 0;
    margin-bottom: 0;
`;

const SortItem = styled.a`
    color: #3249FF;
    //border-bottom: 1px solid #3249FF;
    font-weight: normal;
    font-size: 17px;
    line-height: 18px;
    margin: 0 10px;
    
    :hover {
        cursor: pointer;
        border-bottom: 1px solid #3249FF;
    }
`;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 20px;
    margin-bottom: 20px;
    flex-wrap: wrap;
`;

const SortContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    margin-bottom: 20px;
    flex-wrap: wrap;
`;

const SortText = styled.span`
    color: #969696;
    font-size: 17px;
    line-height: 19px
`;

class MyRequests extends React.Component {

    componentDidMount() {
        this.props.onRequestsLoad()
    }

    render() {
        const data = this.props.requestItems;
        console.log(data)
        return (
            <Wrapper>
                <Title>Мои заявки</Title>
                <SortContainer>
                    <SortText>Показывать:</SortText>
                    <SortItem>все</SortItem>
                    <SortItem onClick={this.props.onFilterActive}>активные</SortItem>
                    <SortItem onClick={this.props.onFilterDelete}>удаленные</SortItem>
                </SortContainer>
                {data.length > 0 ? (
                <Container>
                    {data.map((e,index) => {
                        return (<MyRequestItem key={index} id={e.id} status={e.status} date={e.date} name={e.type + ' ' + e.brand + ' ' + e.model}
                                               problem={e.desc} photo={e.file ? e.file : 'https://via.placeholder.com/150'} answers={e.answers ? e.answers : '0'}/>)
                    })}
                </Container>) : (<Loader/>)
                }
            </Wrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        requestItems: state.request.requestItems
    }
};

function mapDispatchToProps(dispatch) {
    return {
        onRequestsLoad: () => dispatch(loadRequest()),
        onFilterDelete: () => dispatch({type: 'FILTER_DELETE_REQUESTS'}),
        onFilterActive: () => dispatch({type: 'FILTER_ACTIVE_REQUESTS'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyRequests)