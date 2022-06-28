import React, { useState } from 'react';

const MyProfile = () => {
    const [active, setActive] = useState(false)
    const editProfile = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const phone = e.target.phone.value
        const address = e.target.address.value
        const updatedData = {
            name,
            phone,
            address
        }
        console.log(updatedData);
        e.target.reset()
        setActive(false)
    }
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
                        <button onClick={() => setActive(true)} className='py-2 bg-[#FC8B06] w-full rounded text-white font-bold'>Edit</button>
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
            <div className={`md:w-3/4 cs-card-shadow mx-auto w-full min-h-max rounded-md p-4 ${active ? 'block' : 'hidden'}`}>
                <h2 className='text-xl font-bold text-center'>Edit Your Profile</h2>
                <form onSubmit={editProfile} className='mt-3 ' >
                    <input name='name' className='w-full mt-4 h-11 pl-3 rounded-md in-bord mb-3' type="text" placeholder='Your Name' defaultValue={'Kamruzzaman Mayed'} />
                    <input name='phone' className='w-full h-11 pl-3 rounded-md in-bord mb-3' type="text" placeholder='Your Phone Number' />
                    <input name='address' className='w-full h-11 pl-3 rounded-md in-bord mb-3' type="text" placeholder='Your Address' />
                    <button type='submit' className='px-3  py-2  rounded-md border hover:border-transparent font-bold border-blue-700 hover:bg-[#FC8B06] hover:text-white'>Update</button>
                </form>

            </div>
        </section>
    );
};

export default MyProfile;