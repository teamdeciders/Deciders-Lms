import React from 'react';

const MyProfile = () => {
    return (
        <section>
            <div className='flex justify-between md:px-3'>
                <h2 className='text-3xl font-bold'>My Profile</h2>
                <p className=''>Edit</p>
            </div>
            <div className='border mt-2'></div>
            <div className='flex justify-center items-center md:space-x-28 my-5 flex-col md:flex-row'>
                <div className='space-y-4'>
                    <div className='w-32 h-32 mt-2'>
                        <img className='rounded-full w-full h-full ring-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwejmeEUc09aMbmR3vgKj9udJaNn9imJO0uPD1ksSgNUyL2Vu1-2rj3CYk493Ku0BPGbY&usqp=CAU" alt="" />
                    </div>
                    <div className='text-center'>
                        <button className='py-2 bg-[#FC8B06] w-full rounded text-white font-bold'>Edit</button>
                    </div>
                </div>
                <div className='space-y-3'>
                    <div>
                        <p className='text-[#65A8E7] text-sm font-semibold'>Student ID:</p>
                        <p className='font-bold text-lg'>WEB5-1557</p>
                    </div>
                    <div>
                        <p className='text-[#65A8E7] text-sm font-semibold'>Full name
                        </p>
                        <p className='font-bold text-lg'>Kamruzzaman Mayed

                        </p>
                    </div>
                    <div>
                        <p className='text-[#65A8E7] text-sm font-semibold'>Email Address :
                        </p>
                        <p className='font-bold text-lg'>zamanmayed01@gmail.com

                        </p>
                    </div>
                    <div>
                        <p className='text-[#65A8E7] text-sm font-semibold'>Phone :
                        </p>
                        <p className='font-bold text-lg'>01790302448
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MyProfile;