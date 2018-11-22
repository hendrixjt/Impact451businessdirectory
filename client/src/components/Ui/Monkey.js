import React from 'react';
import { Link } from 'react-router-dom';

import monkeylogo from '../../resources/images/Final.jpg';

export const Monkey = (props) => {

    const template = <div
        className="img_cover"
        style={{
            
            width: props.width,
            height: props.height,
            background: `url(${monkeylogo}) no-repeat`
            
        }}
    ></div>

    if (props.link) {
        return (
            <Link to={props.linkTo} className="link_logo">
            {template}
            </Link>
        )
    } else {
        return template
    }
}
