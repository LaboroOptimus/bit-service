import React from 'react'
import styled from "styled-components";

const Title = styled.h3`
    font-size: 30px;
    margin-top: 0;
`;

const Wrapper = styled.div`
    padding: 150px 30px;
`;

const FormWrapper = styled.form`
    margin-top: 30px;
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
`;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: ${props=>props.justifyContent};
`;

const Button = styled.button`
    color: #fff;
    cursor: pointer;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
    justify-content: center;
    padding: 0 15px;
    border-radius: 6px;
    -webkit-text-decoration: none;
    text-decoration: none;
    outline: none;
    border: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: #0095ff;
    font-size: 15px;
    font-weight: bold;
    height: 44px;
    align-self: center;
`;

const Select = styled.select`
    background-color: #fff;
    padding: 13px 120px 13px 13px;
    box-sizing: border-box;
    border-radius: 6px;
    border: 1px solid #eee;
    -webkit-text-decoration: none;
    text-decoration: none;
    outline: 0;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #333333;
    margin: 10px 0;
    width: 30%;
    margin-right: 10px;
`;

const Input = styled.input`
    background-color: #fff;
    padding: 13px 120px 13px 13px;
    box-sizing: border-box;
    border-radius: 6px;
    border: 1px solid #eee;
    -webkit-text-decoration: none;
    text-decoration: none;
    outline: 0;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #333333;
    margin: 10px 0;
    width: 30%;
    margin-right: 10px;
`;

const Textarea = styled.textarea`
    background-color: #fff;
    padding: 13px 120px 13px 13px;
    box-sizing: border-box;
    border-radius: 6px;
    border: 1px solid #eee;
    -webkit-text-decoration: none;
    text-decoration: none;
    outline: 0;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #333333;
    margin: 10px 0;
    width: 40%;
`;




class Request extends React.Component {
    render() {
        return (
            <Wrapper>
                <Title>Заявка на ремонт</Title>
                <FormWrapper>
                    <Container justifyContent={'flex-start'}>
                        <Select placeholder={'Выберите тип техники'}>
                            <option value="" disabled selected>Выберите тип техники</option>
                            <option>Ноутбук</option>
                            <option>Смартфон</option>
                            <option>Холодильник</option>
                            <option>Стиральная машина</option>
                            <option>Утюг</option>
                            <option>Телевизор</option>
                            <option>Посудомоечная машина</option>
                        </Select>
                        <Select placeholder={'Выберите марку техники'}>
                            <option value="" disabled selected>Выберите марку техники</option>
                            <option>LG</option>
                            <option>Samsung</option>
                            <option>Asus</option>
                            <option>Ariston</option>
                            <option>Apple</option>
                            <option>HP</option>
                        </Select>
                        <Select placeholder={'Выберите модель'}>
                            <option value="" disabled selected>Выберите модель</option>
                            <option>Модель 1</option>
                            <option>Модель 2</option>
                            <option>Модель 3</option>
                            <option>Модель 4</option>
                            <option>Модель 5</option>
                        </Select>
                    </Container>
                    <Container justifyContent={'flex-start'}>
                    <Textarea placeholder={'Опишите проблему'}/>
                    <input style={{'marginTop':'35px', 'marginLeft': '20px'}} type={'file'}/>
                        <Button>Отправить заявку</Button>
                    </Container>
                </FormWrapper>
            </Wrapper>
        )
    }
}

export default Request