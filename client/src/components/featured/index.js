import React from 'react';
import Carousel from './Carousel';

const Featured = () => {
    return (
        <div style={{position:'relative'}}>
            <Carousel/>
            <div className="git_main">
            <div className="wrapper">
            Git A Job!
            </div>
            </div>

        </div>
    );
};

export default Featured;