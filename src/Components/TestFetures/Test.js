import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../Firebase.init';
import AddReview from '../../Pages/AddReview/AddReview';
import Loading from '../../Pages/Loading/Loading';

const Test = () => {
    const [user] = useAuthState(auth)
    const { data: profiledata, isLoading, refetch } = useQuery('profiledata', () => fetch(`http://localhost:5000/myprofile/${user?.email}`).then(res => res.json()));
    if (isLoading) {
        return <Loading />
    }
    const { name, img } = profiledata[0]
    return (
        <div>
            {/* <AddReview img={img}></AddReview> */}




        </div>
    );
};

export default Test;