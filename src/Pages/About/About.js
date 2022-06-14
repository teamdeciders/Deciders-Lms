import React from 'react';
import Feedback from '../Home/Feedback';
import AboutDetails from './AboutDetails';
import AboutHeader from './AboutHeader';
import AboutHero from './AboutHero';
import OurTeachers from './OurTeachers';

const About = () => {
    return (
        <div>
            <AboutHeader />
            <AboutHero />
            <AboutDetails />
            <OurTeachers />
            <Feedback />
        </div>
    );
};

export default About;