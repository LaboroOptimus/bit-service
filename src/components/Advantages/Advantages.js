import React from 'react'
import styled from "styled-components";
/*import fast from './assets/flame-waiting.png';*/
import fast from './assets/flame-7_.png';
import cost from './assets/flame-page-under-construction_.png'
import reliably from './assets/flame-8_.png'
import quality from './assets/flame-sign-up.png'

const Wrapper = styled.div`
    margin-top: 40px;
    margin-bottom: 40px
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 40px;
    padding-right: 40px;
`;
const Title = styled.h2`
    font-size: 40px;
    text-align: center;
    margin-bottom: 40px;
`

const Container = styled.div`
    display: flex;
    flex-direction: ${props=>props.direction};
    justify-content: center;
    margin-top: ${props=>props.marginTop};
    margin-bottom: 20px;
`;

const ImgBlock = styled.div`
    width: 40%;
    margin-right: ${props=>props.marginRight};
    margin-left: ${props=>props.marginLeft};
`;

const Img = styled.img`
    width: 100%;
`;

const AdvantagesBlock = styled.div`
    width: 40%;
    margin-left: ${props=>props.marginLeft};
    margin-right: ${props=>props.marginRight};
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const AdvantagesTitle = styled.h3`
    font-size: 30px;
    margin-top: 0;  
`;

const AdvatagesText = styled.p`
    font-size: 19px;
    margin-top: 0;  
`;


const Advantages = () => {
    return (
     <Wrapper>
         <Title>Почему стоит воспользоваться сервисом?</Title>
         <Container direction={'row'} marginTop={'20px'}>
             <ImgBlock marginRight={'20px'}>
                <Img src={fast}/>
             </ImgBlock>
             <AdvantagesBlock marginLeft={'20px'}>
                 <AdvantagesTitle>Быстро.</AdvantagesTitle>
                 <AdvatagesText>Сервисом Remont пользуются свыше 1569 сервисов из разных районов Москвы и области.
                     Среднее время обработки заявки – 15 минут. Это быстрее, чем искать сайты сервисов в Яндексе и Google и
                     уточнять цены по телефону.</AdvatagesText>
             </AdvantagesBlock>
         </Container>

         <Container marginTop={'0'} direction={'row-reverse'}>
             <ImgBlock marginLeft={'20px'}>
                 <Img src={cost}/>
             </ImgBlock>
             <AdvantagesBlock marginRight={'20px'}>
                 <AdvantagesTitle>Дешево.</AdvantagesTitle>
                 <AdvatagesText>Сервисы поборятся за Вашу заявку в режиме аукциона – это сэкономит
                     поможет получить Вам наиболее выгодное предложение. В среднем клиенты экономят от
                     15 до 40% итоговой стоимости ремонта</AdvatagesText>
             </AdvantagesBlock>
         </Container>

         <Container marginTop={'20px'} direction={'row'}>
             <ImgBlock marginRight={'20px'}>
                 <Img src={reliably}/>
             </ImgBlock>
             <AdvantagesBlock marginLeft={'20px'}>
                 <AdvantagesTitle>Надежно.</AdvantagesTitle>
                 <AdvatagesText>Сервис Remont позаботится о том, чтобы общение и ремонт у сервисных центров происходил максимально прозрачно,
                     цена не изменится во время и после ремонта. Все претензии оперативно рассматриваются специалистами 24/7.</AdvatagesText>
             </AdvantagesBlock>
         </Container>


         <Container marginTop={'20px'} direction={'row-reverse'}>
             <ImgBlock marginLeft={'20px'}>
                 <Img src={quality}/>
             </ImgBlock>
             <AdvantagesBlock marginRight={'20px'}>
                 <AdvantagesTitle>Качественно.</AdvantagesTitle>
                 <AdvatagesText>Чтобы разместиться на сайте все сервисные центры проходят тщательную проверку.
                     Если спустя некоторое время обнаружилась некачественная работа – сервисный центр бесплатно ее
                     устранит.</AdvatagesText>
             </AdvantagesBlock>
         </Container>
     </Wrapper>
    )
}

export default Advantages