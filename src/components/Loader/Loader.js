import React from 'react'
import styled, {keyframes} from "styled-components";


const Wrapper = styled.div`
    position: absolute;
    top: 30%;
    left: 50%;

`;

const Box = styled.div`
    display: inline-block;
    height: 200px;
    width: 33.3%;
    float:left;
    position: relative;
    transition: all .2s ease;
    
    @media (max-width: 700px){
        width: 50%;
    }
    @media (max-width: 420px){
        width: 100%;
    }
`;
const anim = keyframes`
    0%{-webkit-transform:rotate(0deg);}
    100%{-webkit-transform:rotate(360deg);}
    0%{transform:rotate(0deg);}
    100%{transform:rotate(360deg);}
`;

const Load = styled.div`
    position: relative;
    height: 80px;
    width: 80px;
    border-radius: 80px;
    border: 3px solid  blue;
    top: 28%;
    top: -webkit-calc(50% - 43px);
    top: calc(50% - 43px);
    left: 35%;
    left: -webkit-calc(50% - 43px); 
    left: calc(50% - 43px);
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    -webkit-animation: ${anim} 3s linear infinite;
    animation: ${anim} 3s linear infinite;
    
    :after {
        content: "";
        position: absolute;
        top: -5px;
        left: 20px;
        width: 11px;
        height: 11px;
        border-radius: 10px;
        background-color: blue;
    }
`;


const Loader = ()  =>{
    return (
        <Wrapper>
        <Box>
            <Load/>
        </Box>
        </Wrapper>
    );
}

export default Loader


/*<div class="box">
			<div class="loader1"></div>
			<p>Loader 1</p>
</div>
*/