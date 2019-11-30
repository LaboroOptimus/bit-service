import React from 'react'
import styled from "styled-components";
import { YMaps,Map,Placemark,Clusterer } from 'react-yandex-maps';
import {mapData} from './mapData'
import Loader from "../Loader/Loader";

/*const Star = styled(FontAwesomeIcon)`
    color: #fff;
`;*/


const Wrapper = styled.div`
    height: 100vh;
    width: 100%;
`;

const mapState = { center: [55.748651510892834,37.62457701114701], zoom: 10 };

class MapComponent extends React.Component {
    state = {
        isLoad: false
    };

    render() {
        return (
            <Wrapper>
                {!this.state.isLoad ? <Loader/> : null}
            <YMaps>
                <Map state={mapState} width={'100%'} height={'100vh'} >
                    <Clusterer>
                    {mapData.map((e,index)=>{
                        return (
                            <Placemark {...e} key={index}/>
                        )
                    })}
                    </Clusterer>
                </Map>
            </YMaps>
            </Wrapper>
        );
    }
}

//https://tech.yandex.ru/maps/jsbox/2.1/balloon_html
// https://tech.yandex.com/maps/jsapi/doc/2.1/ref/reference/Placemark-docpage/#Placemark__param-properties

export default MapComponent;