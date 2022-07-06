import React, { useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import aboutheaderimage from '../../Assets/aboutheaderimage.png'
import card from '../../Assets/card1.png'
import Loading from '../../Pages/Loading/Loading';
import { useQuery } from 'react-query';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';

const CheckoutPage = () => {
    const [user] = useAuthState(auth)
    let prices = []
    //  load my cart
    // 
    const { data: myAllCart, isLoading, refetch } = useQuery('myAllCart', () => fetch(`http://localhost:5000/myallcart/${user?.email}`).then(res => res.json()));
    console.log(myAllCart);
    if (isLoading) {
        return <Loading />
    }

    myAllCart.map(data => prices.push(Number(data.coursePrice)))
    console.log(prices);
    let subtotal = prices.reduce((previusValue, currentValue) => previusValue + currentValue, 0)
    let VAT = ((5 / 100) * subtotal).toFixed(2)
    let Total = Number(subtotal) + Number(VAT)

    return (
        <div>
            <div className='  bg-[#FDFCF6] w-full  pt-10 pb-10'>
                <h2 className='text-center md:text-3xl font-bold text-2xl '>Checkout</h2>


            </div>
            <div className='lg:max-w-7xl md-w-full  mx-auto px-4  md:px-12 mt-6 '>
                <div className="md:flex gap-6  ">
                    <div className='md:w-[70%] '>
                        <form >
                            <p className='text-2xl'>Billing Details</p>
                            <label className='text-mono'>Your Name</label>
                            <input type="text" className='py-3 px-3 border border-[#515FCE] rounded w-full mb-4' placeholder='Your Full Name' defaultValue={user?.displayName} />
                            <label className='text-mono'>Your Email</label>
                            <input type="text" className='py-3 px-3 border border-[#515FCE] rounded w-full mb-4' placeholder='Your Email' defaultValue={user?.email} disabled />
                            <label className='text-mono'>Phone Number (optional)</label>
                            <input type="text" className='py-3 px-3 border border-[#515FCE] rounded w-full mb-4' placeholder='Your Phone' />
                            <p className='text-2xl '>Additional information</p>
                            <textarea className=' p-2 h-[96px] border border-[#515FCE] rounded w-full mb-4' name="" id="" ></textarea>
                            <p className='text-2xl '>Your Order</p>
                            <div className='w-full flex justify-between mt-4'>
                                <h2 className='font-bold text-[#FE5D03]'>Product</h2>
                                <h2 className='font-bold text-[#FE5D03]'>Subtotal</h2>
                            </div>
                            <hr />
                            {
                                myAllCart.map(product =>
                                    <>
                                        <div key={product._id} className='w-full flex justify-between mt-4'>
                                            <h2 className='font-bold text-gray-700'>{product.courseName}</h2>
                                            <h2 className='font-bold text-gray-700'>৳ {product.coursePrice} BDT</h2>
                                        </div>
                                        <hr /></>
                                )
                            }

                            <div className='w-full flex justify-between mt-4'>
                                <h2 className='font-bold text-[#FE5D03]'>Subtotal</h2>
                                <h2 className='font-bold text-[#FE5D03]'>৳ {subtotal} BDT</h2>
                            </div>
                            <hr />
                            <div className='w-full flex justify-between mt-4'>
                                <h2 className='font-bold text-[#FE5D03]'>VAT</h2>
                                <h2 className='font-bold text-[#FE5D03]'>৳ {VAT} BDT</h2>
                            </div>
                            <hr />
                            <div className='w-full flex justify-between mt-4'>
                                <h2 className='font-bold text-[#FE5D03]'>Total</h2>
                                <h2 className='font-bold text-[#FE5D03]'>৳ {Total} BDT</h2>
                            </div>
                            <button className='my-4 w-full bg-[#FE5D03] py-3 text-xl font-bold text-white rounded-md' type='submit'>Place Order</button>
                        </form>

                    </div>
                    <div className='md:w-[30%]  '>
                        <div>
                            <img className='mx-auto' src="https://www.oneeducation.org.uk/wp-content/uploads/2021/11/side-checkout-2.jpg" alt="" />
                        </div>
                        <div>
                            <img className='mx-auto' src="https://www.oneeducation.org.uk/wp-content/uploads/2021/11/side-checkout-1.jpg" alt="" />
                        </div>

                    </div>
                </div>


            </div>
        </div>

    );
};

export default CheckoutPage;