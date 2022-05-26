import React from 'react';
import Allparts from './Allparts';
import Banner from './Banner';
import BussinessSummary from './BussinessSummary';
import CarMotion from './CarMotion';
import Summary from './Summary';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Allparts></Allparts>
            <BussinessSummary></BussinessSummary>
            <CarMotion></CarMotion>
            <Summary></Summary>
        </div>
    );
};

export default Home;