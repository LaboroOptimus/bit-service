import React, {Component} from "react";
import Navigation from "../Navigation/Navigation";
import Navtop from "../Navtop/Navtop";
import Footer from "../Footer/Footer";
import CompanyEdit from "./CompanyEdit";
import CompanyProfile from "./CompanyProfile";
import {connect} from 'react-redux'
import Loader from "../Loader/Loader";
import styled from "styled-components";

const Wrapper = styled.div`
    padding: ${props=>props.padding}
`;

class CompanyPage extends Component {
    componentDidMount() {
        this.props.onLoadPage()
    }

    render() {
        return (
            <React.Fragment>
                <Navigation/>
                <Navtop/>
                <Wrapper padding={this.props.pageMode === '' ? '200px 0px' : '0px'}>
                {this.props.pageMode === '' ? <Loader/> : this.props.pageMode === 'edit' ? <CompanyEdit/> : this.props.pageMode === 'profile' ?
                <CompanyProfile/> : null}
                </Wrapper>
               {/* {this.props.isPageLoad && this.props.isCompanyAlreadyExist ?
                    <CompanyProfile/> : <CompanyEdit/>
                }*/}
                <Footer/>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        pageMode: state.company.pageMode,
        isPageLoad: state.company.isPageLoad,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLoadPage: () => dispatch({type:'LOAD_COMPANY_PAGE'})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CompanyPage)