import { Link } from 'react-router-dom';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import { useRef } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';

const ResetPassword = () => {

    //handle reset password
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    const emailRef = useRef('')




    const resetPassword = async () => {
        const email = emailRef.current.value
        if (email) {
            await sendPasswordResetEmail(email)
            alert('Sent email');
        }
        else {
            alert('Please enter your email')
        }
    }

    const handleSubmit = async event => {
        event.preventDefault()
        const email = emailRef.current.value
        await signInWithEmailAndPassword(email)

    }

    return (
        <div className='lg:max-w-7xl md-w-full mx-auto px-4 md:px-16 mt-12' >
            <h1 className='text-4xl font-bold'>Reset Password</h1>
            <p className='font-medium mt-3'>If you continue, Home IT will sent a message in your e-mail address in your profile. Click the link in the message, and enter a new password on tje page that opens</p>
            <p className='font-medium text-blue-500 mb-2 cursor-pointer'>Read More</p>

            <div className='flex w-full gap-6'>
                <h1 className='md:text-2xl mb-3'>ওটিপি কনফার্ম করুন</h1>
                <hr className='border border-gray-200 md:w-3/4 w-2/4 mt-4' />
            </div>

            <form onSubmit={handleSubmit}>
                <label className='' htmlFor="">Plese provide your Email</label>
                <br />
                <input type="email" ref={emailRef} className="md:w-2/4 mt-1 px-3 py-2 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 w-full rounded-md sm:text-sm focus:ring-1" placeholder="Email" />
                <p />
                <button onClick={resetPassword} className='bg-[#1890ff] py-2 px-3 rounded-sm mt-6  mb-6 text-white'>Sent password reset email</button>
            </form>

            <Link to='/login' className=' text-[#1890ff]'>Back to Login</Link>

        </div >
    );
};

export default ResetPassword;