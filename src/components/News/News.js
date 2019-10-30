import React from 'react'
import styled from "styled-components";

const Wrapper = styled.div`
    margin: 40px 0;
    padding: 0 30px;
    display: flex;
    justify-content: space-around;
`;

const Title = styled.h2`
    const Title = styled.h2;
    font-size: 40px;
    text-align: center;
    margin-bottom: 40px;
    margin-top: 40px;
`;

const Container = styled.div`
    width: 30%;
    padding: 0 20px;  
`;

const NewsImg = styled.img`
    display: block;
    margin: 0 auto;
`

const NewsTitle = styled.h3`
    font-size: 30px;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 0 30px;
`;

const NewsContent = styled.p`
    font-size: 18px;
    padding: 0 30px;
`;


const News = () => {
    return (
        <React.Fragment>
            <Title>Новости</Title>
        <Wrapper>
            <Container>
                <NewsImg src={'http://placehold.it/300x150'}/>
                <NewsTitle>Новость</NewsTitle>
                <NewsContent>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur aut autem commodi corporis,
                    culpa ex ipsum molestiae necessitatibus, nulla qui quod sapiente tempore? Amet aut itaque minus, provident quasi vero!
                </NewsContent>
            </Container>

            <Container>
                <NewsImg src={'http://placehold.it/300x150'}/>
                <NewsTitle>Новость</NewsTitle>
                <NewsContent>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur aut autem commodi corporis,
                    culpa ex ipsum molestiae necessitatibus, nulla qui quod sapiente tempore? Amet aut itaque minus, provident quasi vero!
                </NewsContent>
            </Container>

            <Container>
                <NewsImg src={'http://placehold.it/300x150'}/>
                <NewsTitle>Новость</NewsTitle>
                <NewsContent>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur aut autem commodi corporis,
                    culpa ex ipsum molestiae necessitatibus, nulla qui quod sapiente tempore? Amet aut itaque minus, provident quasi vero!
                </NewsContent>
            </Container>
        </Wrapper>
        </React.Fragment>
    )
}

export default News