import React from 'react';
import CheckoutPage from '../../Components/CheckoutPage/CheckoutPage';
import MyCourses from '../../Dashboard/AdminDashboard/MyCourses';
import MyCart from '../../Dashboard/StudentDashboard/MyCart';
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
            {/* extra  */}
             <MyCourses></MyCourses>
             <MyCart></MyCart>

        </div>
    );
};

export default About;