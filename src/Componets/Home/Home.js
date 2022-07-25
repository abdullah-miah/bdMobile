import React from 'react';
import MobileView from '../../features/Mobile/MobileView';
import SmartPhone from '../../features/Mobile/SmartPhone';
import Banner from './Banner';
import Navbar from './Navbar';

const Home = () => {
    return (
        <div>
           <Navbar></Navbar>
           <Banner></Banner>
           <MobileView></MobileView>
           <SmartPhone></SmartPhone> 
        </div>
    );
};

export default Home;