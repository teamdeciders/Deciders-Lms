import React from 'react';
import contactPhoto from '../../Assets/contactUs.png';
import { FaAddressCard } from 'react-icons/fa';
import { BiMessageDetail } from "react-icons/bi";
import { TiContacts } from "react-icons/ti";
import { RiFacebookCircleLine } from "react-icons/ri";
import { FiTwitter } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";
import { Helmet } from 'react-helmet-async';

const ContactUs = () => {
    return (
        <div>
            <Helmet>
                <title>Contact Us - Deciders LMS</title>
            </Helmet>
            <div className=' border  bg-[#FDFCF6] w-full  pt-10'>
                <div className='lg:max-w-7xl md-w-full  mx-auto px-4  md:px-12 '>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-9 items-center mx-auto'>
                        <div className='flex justify-center items-center'>
                            <div className='mt-6'>
                                <h1 className='text-3xl md:text-3xl font-semibold text-center md:text-left'>Contact Us</h1>
                                <p>Connecting people with knowledge</p>
                            </div>
                        </div>
                        <div className='flex justify-center'>
                            <img src={contactPhoto} alt="Contact Us" className='w-96' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='lg:max-w-7xl w-full  mx-auto px-4  md:px-16 mt-16'>
                <div className='grid grid-cols-1 md:grid-cols-3 md:gap-x-10 gap-y-8'>
                    <div className='border p-5 shadow-lg rounded-md '>
                        <h1 className='text-3xl font-semibold'>Hello there got a project?</h1>
                        <div className='mt-8'>
                            <div className='flex gap-x-5 items-center'>
                                <div className='w-14 h-14 border border-blue-300 rounded-full flex justify-center items-center'>
                                    <FaAddressCard className='text-[#f52067] p-1 text-4xl' />
                                </div>
                                <div>
                                    <h3 className='text-xl font-bold'>Company Address :</h3>
                                    <p><small className='m-0 p-0'>3567 New Alaska, <br /> Washington,United State</small></p>
                                </div>
                            </div>

                            <div className='flex gap-x-5 items-center mt-5'>
                                <div className='w-14 h-14 border border-blue-300 rounded-full flex justify-center items-center'>
                                    < BiMessageDetail className='text-[#f52067] p-1 text-4xl' />
                                </div>
                                <div>
                                    <h3 className='text-xl font-bold'>Email Address :</h3>
                                    <p><small className='m-0 p-0'>example@email.com<br />exmtwo@email.com</small></p>
                                </div>
                            </div>

                            <div className='flex gap-x-5 items-center mt-5'>
                                <div className='w-14 h-14 border border-blue-300 rounded-full flex justify-center items-center'>
                                    <TiContacts className='text-[#f52067] p-1 text-4xl' />
                                </div>
                                <div>
                                    <h3 className='text-xl font-bold'>Contact Us :</h3>
                                    <p><small className='m-0 p-0'>+77-00-222-1111<br />+88-00-222-3333</small></p>
                                </div>
                            </div>
                            <div className='flex gap-x-7 justify-center my-7'>
                                <div className='w-10 h-10 bg-[#515FCE] flex justify-center items-center rounded-lg'>
                                    <RiFacebookCircleLine className='text-white text-3xl' />
                                </div>
                                <div className='w-10 h-10 bg-[#515FCE] flex justify-center items-center rounded-lg'>
                                    <FiTwitter className='text-white text-3xl' />
                                </div>
                                <div className='w-10 h-10 bg-[#515FCE] flex justify-center items-center rounded-lg'>
                                    <BsInstagram className='text-white text-3xl' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-2 border p-7 rounded-lg shadow-lg'>
                        <h1 className='text-3xl font-semibold mb-12'>Send Message Us</h1>
                        <div>
                            <form>
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-7'>
                                    <input type="text" name="name" className="mt-1 px-3 py-2 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 w-full rounded-md sm:text-sm focus:ring-1" placeholder="Name" />
                                    <input type="email" name="email" className="mt-1 px-3 py-2 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 w-full rounded-md sm:text-sm focus:ring-1" placeholder="Email" />
                                    <input type="number" name="phone" className="mt-1 px-3 py-2 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 w-full rounded-md sm:text-sm focus:ring-1" placeholder="Phone" />
                                    <input type="text" name="website" className="mt-1 px-3 py-2 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 w-full rounded-md sm:text-sm focus:ring-1" placeholder="Website" />
                                </div>
                                <textarea name="message" cols="30" rows="5" className="mt-7 px-3 py-2 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 w-full rounded-md sm:text-sm focus:ring-1" placeholder="Message"></textarea>
                                <input className='bg-[#515FCE] p-2 rounded-md text-white mt-9 cursor-pointer' type="submit" value="Submit Now" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;