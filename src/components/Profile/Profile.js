import React from 'react'
import styled from "styled-components";

const Wrapper = styled.div`
    padding: 30px;
    display: flex;
    flex-direction: column;
`;

const Title = styled.h3`
    font-size: 30px;
`;

const Container = styled.div`
    display: flex;
    flex-direction: ${props=>props.flexDirection || 'row'};
    justify-content: ${props=>props.justifyContent || 'flex-start'};
    width: ${props=>props.width || 'auto'}
    align-self: ${props=>props.alignSelf}
`;

const ImageContainer = styled.div`
    width: 10%;
`

const Img = styled.img`
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
    margin: ${props=> props.margin || '0'};
    width: ${props=>props.width};
    height: 50px;
`;

const SubTitle = styled.h3`
    font-size: 20px;
`;

const Button = styled.button`
    position: absolute;
    display: ${props=> props.display || 'none'};
    right: 160px;
    bottom: 25px;
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
    margin: 0 auto;
`;



class Profile extends React.Component {

    state = {
        changedProfile : false,
    }

    onChangeProfile = () => {
        this.setState({
            changedProfile:true,
        })
    }

    render() {
        return (
            <Wrapper>
                <Title>Профиль</Title>
                <Container>
                    <ImageContainer>
                        <Img src={'http://placehold.it/100x100'}/>
                    </ImageContainer>


                    <Container flexDirection={'column'} width={'80%'}>
                        <SubTitle>Контактная информация</SubTitle>
                        <Input onChange={this.onChangeProfile} value={'Смирнов Игорь Витальевич'}/>
                        <Container justifyContent={'space-between'}>
                            <Input onChange={this.onChangeProfile} margin={'10px 0'} value={'Москва'}/>
                            <Input onChange={this.onChangeProfile} margin={'10px 0'} value={'igor.smirnov@yandex.ru'}/>
                            <Input onChange={this.onChangeProfile} margin={'10px 0'} value={'+7(926)925-87-13'}/>
                            <Button display={this.state.changedProfile ? 'block' : 'none'}>Сохранить изменения</Button>
                        </Container>

                        <SubTitle>Уведомления</SubTitle>
                        <p><input type='checkbox'/> Уведомление по email</p>
                        <p><input type='checkbox'/> Уведомление по SMS</p>
                        <p><input type='checkbox'/> Получать новости по email</p>




                    </Container>
                </Container>
            </Wrapper>

        )
    }
}

export default Profile