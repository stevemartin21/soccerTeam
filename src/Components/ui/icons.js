import React from 'react';

import { Link } from 'react-router-dom';

import mcitylogo from '../../Resources/images/logos/manchester_city_logo.png';

export const CityLogo = (props) => {
    const template = <div
    style={{
        height: '70 px',
        width: '70px',
        background: `url(${mcitylogo}) no-repeat`
    }}
    >Logo</div>
    if (props.link){
        return <Link  to={props.linkTo}>
            {template}
        </Link>
    } else{
        return template
    }
}