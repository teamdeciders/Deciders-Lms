import React from 'react';
import Header from './Header';
import HomeCatagory from './HomeCatagory';
import HomeCourse from './HomeCourse';
import LatestBlogs from './LatestBlogs';
import Whyus from './Whyus';

const Home = () => {
    return (
        <div className='md:px-14 lg:px-24'>
            <Header></Header>
            <HomeCatagory></HomeCatagory>
            <HomeCourse></HomeCourse>
            <Whyus></Whyus>
            <LatestBlogs></LatestBlogs>
        </div>
    );
};

export default Home;