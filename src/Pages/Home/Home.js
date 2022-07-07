import React from 'react';
import { Helmet } from 'react-helmet-async';
import Feedback from './Feedback';
import Header from './Header';
import HomeCatagory from './HomeCatagory';
import HomeCourse from './HomeCourse';
import LatestBlogs from './LatestBlogs';
import Whyus from './Whyus';

const Home = () => {

    return (
        <div className=''>
            <Helmet>
                <title>Home - Deciders LMS</title>
            </Helmet>
            <Header></Header>
            <HomeCatagory></HomeCatagory>
            <HomeCourse></HomeCourse>
            <Whyus></Whyus>
            <Feedback></Feedback>
            <LatestBlogs></LatestBlogs>
        </div>
    );
};

export default Home;