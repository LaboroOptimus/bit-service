import React from 'react'
import styled from "styled-components";

const Input = styled.input`
    webkit-letter-spacing: 0.28px;
    -moz-letter-spacing: 0.28px;
    -ms-letter-spacing: 0.28px;
    letter-spacing: 0.28px;
    padding: 10px 15px;
    vertical-align: middle;
    border: 1px solid #dbdbdb;
    background: #fff;
    outline: 0;
    width: ${props=>props.width ? props.width : '100%'};
    height: ${props=>props.height ? props.height : 'auto'}
    resize: none;
    margin-bottom: 16px;
    font-style: normal;
    font-weight: normal;
    line-height: 29px;
    font-size: 14px;
    color: #000000;
    border-radius: 10px;
    margin-right: 10px;
    margin-left: ${props=>props.marginLeft ? props.marginLeft : '0'}
    
    :active, :focus {
        border: 1px solid #368594;
    }
`;

export default function TextField(props) {
    return (
        <Input
            placeholder={props.placeholder}
            onChange={props.onChange}
            data-validation={props.dataValidation}
            data-validation-func={props.dataValidationFunc}
            name={props.name}
            value={props.value}
            width={props.width}
            height={props.height}
            marginLeft={props.marginLeft}
        />
    )
}