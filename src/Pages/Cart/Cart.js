import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { ImStarFull } from 'react-icons/im'
import { Link } from 'react-router-dom';
import auth from '../../Firebase.init';
import useCourseData from '../../Hooks/useCourseData';
import useMyCartData from '../../Hooks/useMyCartData';
import Loading from '../Loading/Loading';
import CartCard from './CartCard';


const Cart = () => {
    let prices = []
    const [user] = useAuthState(auth)
    const [myCart] = useMyCartData(user?.email)
    myCart.map(data => prices.push(Number(data.coursePrice)))
    console.log(prices);
    let subtotal = prices.reduce((previusValue, currentValue) => previusValue + currentValue, 0)
    let VAT = ((5 / 100) * subtotal).toFixed(2)
    let Total = Number(subtotal) + Number(VAT)


    return (
        <div>
            <div className='  bg-[#FDFCF6] w-full  pt-10 pb-10'>
                <h2 className='text-center md:text-3xl font-bold text-2xl '>My Cart : {myCart.length}</h2>

            </div>
            <div className='lg:max-w-7xl md-w-full  mx-auto px-4  md:px-12 mt-6 '>
                <div className="md:flex gap-6 ">
                    <div className='md:w-[70%] '>

                        {
                            myCart.map(product => <CartCard key={product._id} data={product} />)
                        }


                    </div>
                    <div className='md:w-[30%] shadow p-2 max-h-72'>
                        <div className='mb-6'><h1 className='text-3xl font-extralight'>Summary</h1>
                            <hr /></div>
                        <div className='flex justify-between' >
                            <h1 className='text-xl font-bold  font-mono'>Subtotal</h1>
                            <p className='text-xl font-extrabold text-gray-800'>৳ {subtotal}</p>
                        </div>
                        <hr className='mb-6' />
                        <div className='flex justify-between' >
                            <h1 className='text-xl font-bold font-mono'>VAT</h1>
                            <p className='text-xl font-extrabold text-gray-800 ' title='VAT is 5% of Subtotal'>৳ {VAT}</p>
                        </div>
                        <hr className='mb-6' />
                        <div className='flex justify-between' >
                            <h1 className='text-xl font-bold  font-mono'>Total</h1>
                            <p className='text-xl font-extrabold text-gray-800'>৳ {Total}</p>
                        </div>
                        <hr className='mb-6' />

                        <Link to={'/checkout'} className='w-full py-3 rounded-md text-center block font-bold bg-blue-700 text-white'>Proceed to Checkout</Link>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Cart;