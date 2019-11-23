import React, {Component} from 'react';
import styled from "styled-components";
import Navigation from "../Navigation/Navigation";
import Navtop from "../Navtop/Navtop";
import Footer from "../Footer/Footer";
import {NavLink} from "react-router-dom";
import {clearReg} from "../../redux/action-creators";
import {connect} from "react-redux";
import {store} from "../../redux/store";

const Title = styled.h3`
    font-size: 30px;
    text-align: center;
    margin-top: 0;
    margin-bottom: 10px;
`;
const Wrapper = styled.div`
    padding: 200px 30px;
    display: flex;
    flex-direction: column;
`;

const Description = styled.p`
    text-align: center;
    font-size: 16px;
    padding: 0 27%;
    margin-bottom: 10px;
    margin-top: 0;
`;

const Button = styled(NavLink)`
    background: #6a7bff;
    border-radius: 5px;
    color: #fff;
    font-size: 15px;
    padding: 10px 20px;
    text-decoration: none;
    display: inline-block;
    width: 100px;
    margin: 10px auto
    text-align: center;
`;


class RegSuccessPage extends Component {

    componentDidMount() {
        store.dispatch(clearReg());
    }

    render() {
        return (
            <React.Fragment>
                <Navigation/>
                <Navtop/>
                <Wrapper>
                    <Title>Вы успешно зарегистрировались!</Title>
                    <Description>Теперь Вы можете находить сервисы рядом с вами и по параметрам, заполнить личный
                        кабинет
                        а также создать заявку на ремонт техники. Осталось только войти на сайт с данными, которые Вы
                        ввели при регистрации</Description>
                    <Button to={'/login'}>Войти на сайт</Button>
                </Wrapper>
                <Footer/>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isRegistrationSuccess: state.root.isRegistrationSuccess
    }
};

const mapDispatchToProps = dispatch => ({
     clearRegistrationSuccess: dispatch(clearReg())
});


export default connect(mapStateToProps,mapDispatchToProps)(RegSuccessPage);

