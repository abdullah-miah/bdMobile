import React from 'react';
import MobileView from '../../features/Mobile/MobileView';
import SmartPhone from '../../features/Mobile/SmartPhone';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <MobileView></MobileView>
           <SmartPhone></SmartPhone>
        </div>
    );
};

export default Home;