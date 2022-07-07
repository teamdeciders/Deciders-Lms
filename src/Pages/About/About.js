import React from 'react';
import Feedback from '../Home/Feedback';
import AboutDetails from './AboutDetails';
import AboutHeader from './AboutHeader';
import AboutHero from './AboutHero';
import OurTeachers from './OurTeachers';
import { Helmet } from 'react-helmet-async';

const About = () => {
    return (
        <div>
            <Helmet>
                <title>About Us - Deciders LMS</title>
            </Helmet>
            <AboutHeader />
            <AboutHero />
            <AboutDetails />
            <OurTeachers />
            <Feedback />


        </div>
    );
};

export default About;