import React from 'react';
import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import { AiOutlineDelete } from 'react-icons/ai';
import { RiNotification2Fill } from 'react-icons/ri'
import { useQuery } from 'react-query';
import Swal from 'sweetalert2';
import UseAdmin from '../Components/Others/UseAdmin';
import auth from '../Firebase.init';
import Loading from '../Pages/Loading/Loading';



const DashboardHome = () => {
    const [user] = useAuthState(auth)
    const [admin] = UseAdmin(user)
    const [date, setDate] = useState(new Date())
    const { data: offers, isLoading, refetch } = useQuery('offers', () => fetch('http://localhost:5000/offers').then(res => res.json()));
    const { data: accouncments, aisLoading } = useQuery('accouncments', () => fetch('http://localhost:5000/announcments').then(res => res.json()));
    if (isLoading || aisLoading) {
        return <Loading />
    }
    const viewOffwrDetails = (detail, title) => {
        Swal.fire({
            title: title,
            text: detail
        })
    }
    const viewADetails = (title, detail) => {
        Swal.fire({
            title: title,
            text: detail
        })
    }
    return (
        <div >
            <div className='flex justify-center md:gap-10  gap-6 flex-col md:flex-row '>
                <div className='cs-round border  rounded-md shadow-md relative  w-full h-[380px]  md:max-w-md'>
                    <div className='bg-[#FC8B06] cs-round h-4 rounded-md absulate top-0  z-10'></div>
                    <div className="p-2 ">
                        <h3 className='font-bold'>Hot Offers</h3>
                        <div className="flex justify-center items-center flex-col md:px-5 py-3 space-y-2  ">
                            {
                                offers.map(offer => <div key={offer._id} onClick={() => viewOffwrDetails(offer.offerDetails, offer.offerTitle
                                )} className='w-full flex p-3 rounded-md border shadow'>
                                    <div className='w-[20%] text-end'>
                                        <div className='flex justify-center items-center  bg-[#FC8B06] w-12 h-12 rounded-md'>
                                            <RiNotification2Fill className='text-2xl text-white' />
                                        </div>
                                    </div>
                                    <div className='w-[70%]'>
                                        <div>{offer.offerTitle.slice(0, 25)}...</div>
                                        <div className=' '> 10 min ago</div>
                                    
                                    </div>
                                </div>)
                            }
                        </div>
                    </div>

                </div>
                <div className='cs-round rounded-md shadow-md relative  w-full h-[380px]  md:max-w-md'>
                    <div className='bg-[#41CCFF] cs-round h-4 rounded-md absulate top-0 '></div>
                    <div className="p-2">
                        <h3 className='font-bold'>Calendar</h3>
                        <div className='flex w-full justify-center flex-shrink'>
                            <DayPicker
                                mode='single'
                                selected={date}
                                onSelect={setDate}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className='md:px-11 my-4'>
                <div className='font-bold'>Accouncment</div>
                {
                    accouncments?.map(an => <div key={an._id} className='m-5 space-y-3'>
                        <div className='  border-l-8 border-blue-700'>

                            <div className='font-bold pl-4'>
                                {an?.Announcmenttitle} <span onClick={() => viewADetails(an?.Announcmenttitle, an?.Announcmentdetails)} className='inline-block font-bold text-blue-500'>Read More</span>
                            </div>
                        </div>



                    </div>)
                }
            </div>
        </div>

    );
};

export default DashboardHome;