import React from 'react';
import MainSlider from '../../components/MainSlider/MainSlider';
import { Nav } from '../../components/Nav/Nav';

const Home = () => {
    return (
        <div id='app-ol' className='home-page-oll'>
            <Nav/>
            <MainSlider />
        </div>
    );
};

export default Home;
