import React from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { AiOutlineHome, AiOutlineShoppingCart, AiOutlineLogout } from 'react-icons/ai'
import { BiUserCircle } from 'react-icons/bi'
import { BsWallet2 } from 'react-icons/bs'
import { MdOutlineHistoryEdu } from 'react-icons/md'
import CustomLink from './CustomLink';
const Dashboard = () => {
  let name = 'Kamruzzaman Mayed'

  return (
    <div className=''>
      <div className='  bg-[#FDFCF6] w-full '>
        <div className='lg:max-w-7xl md-w-full  mx-auto px-4  md:px-12 '>
          <div className=" mx-auto md:w-[375px] py-8">
            <div className="w-[100px] h-[100px] rounded-full mx-auto bg-blue-50 border-2 border-black overflow-hidden ">
              <img className='w-full h-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwejmeEUc09aMbmR3vgKj9udJaNn9imJO0uPD1ksSgNUyL2Vu1-2rj3CYk493Ku0BPGbY&usqp=CAU" alt="" />
            </div>
            <div className='text-center'>
              <h2 className='text-2xl font-bold my-2'>{name}</h2>
            </div>
            <div className=' p-2 flex gap-6 justify-center'>
              <div className='text-center' >
                <h2 className='text-3xl font-bold'>3</h2>
                <h2 className=' font-bold text-gray-600'>Courses</h2>
              </div>
              <div className='text-center' >
                <h2 className='text-3xl font-bold'>2</h2>
                <h2 className='font-bold text-gray-600'>Completed</h2>
              </div>
              <div className='text-center' >
                <h2 className='text-3xl font-bold'>0</h2>
                <h2 className=' font-bold text-gray-600'>Certificates</h2>
              </div>

            </div>


          </div>

        </div>
      </div>
      <div className="w-full mt-8">
        <div className='lg:max-w-7xl md-w-full  mx-auto md:flex gap-2'>
          <div className='md:w-[20%]  min-h-max rounded-sm shadow-md p-2'>


            <CustomLink className="hover:bg-[#FC8B06]  " to={''}><AiOutlineHome className='inline-block text-xl' /> Home</CustomLink>
            <CustomLink className="hover:bg-[#FC8B06]" to={'myprofile'}><BiUserCircle className='inline-block text-xl' />My Profile</CustomLink>
            <CustomLink className="hover:bg-[#FC8B06]" to={'mycourse'}><MdOutlineHistoryEdu className='inline-block text-xl' />My Courses</CustomLink>
            <CustomLink className="hover:bg-[#FC8B06]" to={'mycart'}> <AiOutlineShoppingCart className='inline-block text-xl' /> My Cart</CustomLink>
            <CustomLink className="hover:bg-[#FC8B06]" to={'mywallet'}> <BsWallet2 className='inline-block text-xl' /> Wallet</CustomLink>

          </div>
          <div className='md:w-[80%] md:h-[80vh] rounded-sm  shadow-md p-2 overflow-y-scroll homecatagory'>
            {/* Out let Here */}

            <Outlet />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;