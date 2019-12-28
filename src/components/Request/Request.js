import React from 'react'
import styled from "styled-components";

const Wrapper = styled.div`
    padding: 100px;

`

function Request(props) {
    console.log(props.id)
    return(
        <React.Fragment>
            <Wrapper>{props.id}</Wrapper>
        </React.Fragment>
    )
}

export default Request