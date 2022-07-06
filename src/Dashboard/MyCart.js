import React, { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { VscError } from "react-icons/vsc"
import Aleart from '../Components/Aleart';
import auth from '../Firebase.init';
import useMyCartData from '../Hooks/useMyCartData';
const MyCart = () => {
  const [user] = useAuthState(auth)
  const [myCart] = useMyCartData(user?.email)
  const [alert, setAlert] = useState(false)




  return (
    <div >
      {/* card */}

      <div className=' mx-auto h-6 my-4 max-w-max px-3 rounded-full bg-blue-600 flex justify-center text-white font-bold'>
        {myCart.length} {myCart.length > 1 ? 'Courses on your Cart' : 'Course on your Cart'}
      </div>
      {
        myCart.map(data => <div key={data._id} className="md:w-[50%] cs-card-shadow rounded-lg p-2  mx-auto mb-8 relative">
          <div className='w-10 h-10 bg-[#FDFCF6] hover:bg-red-500 hover:text-white rounded-full border absolute right-2 top-2 md:top-10 flex justify-center items-center'>
            <VscError className='text-3xl' />
          </div>
          <div className="md:flex gap-2">
            <div className="md:w-[35%] md:h-36 h-[280px] border  rounded-md overflow-hidden">
              <img className='w-full h-full ' src={data.courseImage} alt="" />
            </div>
            <div className="text md:w-[65%] flex flex-col justify-between">
              <div>
                <h2 className=' font-bold text-xl '>{data.courseName.slice(0, 35)}</h2>
                <h2 className=' font-bold text-gray-400 mt-1'>{data.teacherName}</h2>
              </div>
              <div className='my-3 flex justify-between items-center'>
                <h2 className=' font-bold text-gray-600 mt-1'><span className='text-sm font-light'>৳</span> {data.coursePrice}</h2>
                <button className='bg-[#F37A50] text-white px-6 py-2 font-bold rounded-full hover:bg-blue-700 '>Check Out</button>
              </div>

            </div>
          </div>

        </div>)
      }
      {alert && <Aleart data={'Item Removed SuccessFull !'} />}
    </div>
  );
};

export default MyCart;