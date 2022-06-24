import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../Firebase.init';
import Loading from '../Loading/Loading';

const RequireAuth = ({ children }) => {

    const location = useLocation()
    const [user, loading] = useAuthState(auth)

    if (loading) {
        return <Loading></Loading>
    }

    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }

    //  console.log(user);
    // if(user.providerData[0]?.providerId ==='password' && !user.emailVerified){
    //     return <div>
    //         <h3 className='text-danger'> Your Email is not Verified</h3>
    //         <h4 className='text-success'> Plese Verifiy your email address</h4>

    //         <button className='btn btn-success'
    //         onClick={async () => {
    //         await sendEmailVerification();
    //         toast('Sent email');
    //      }}
    //   >
    //      Sent Verification email 
    //   </button>
    //     </div>
    // }


    return children
};

export default RequireAuth;