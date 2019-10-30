import React from 'react'
import styled from "styled-components";


const Wrapper = styled.div`
    margin-top: 40px;
    margin-bottom: 40px;
    background-color: #e5e5e5;
    padding-bottom: 20px;
`;

const Title = styled.h2`
    font-size: 40px;
    text-align: center;
    padding-top: 40px;
`

const FormWrapper = styled.form`
    text-align: center;
    margin-top: 30px;
    margin-bottom: 40px;
`;

const Button = styled.button`
    color: #fff;
    border: none;
    cursor: pointer;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
    justify-content: center;
    padding: 0 15px;
    /*border-radius: 6px;*/
    -webkit-text-decoration: none;
    text-decoration: none;
    outline: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: #0095ff;
    width: 10%;
    font-size: 15px;
    font-weight: bold;
    height: 44px;
    /*border-radius: 0 6px 6px 0;*/
`;

/*const Input = styled.input`
    background-color: #fff;
    padding: 10px;
   /!* width: 50%; *!/
    box-sizing: border-box;
    border-radius: 6px;
    -webkit-text-decoration: none;
    text-decoration: none;
    outline: 0;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #333333;
    border: none;
    border-radius: 6px 0 0 6px;
`;*/

const Select = styled.select`
    background-color: #fff;
    padding: 13px 35px 13px 13px;
    box-sizing: border-box;
    /*border-radius: 6px;*/
    -webkit-text-decoration: none;
    text-decoration: none;
    outline: 0;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #333333;
    border: none;
   /* border-radius: 6px 0 0 6px; */
    margin-right: 10px;

`;


class Cta extends React.Component {

    render(){
        return(
            <Wrapper>
                <Title>1576 сервисных центров ждут Вашей заявки!</Title>
                <FormWrapper>
                    <Select>
                        <option>Холодильник</option>
                        <option>Телевизор</option>
                        <option>Ноутбук</option>
                    </Select>
                    <Select>
                        <option>Samsung</option>
                        <option>LG</option>
                        <option>Sony</option>
                    </Select>

                    <Select>
                        <option>не включается</option>
                        <option>экран гаснет</option>
                    </Select>
                    <Button type="submit">Найти</Button>
                </FormWrapper>
            </Wrapper>
        )
    }
}

export default Cta