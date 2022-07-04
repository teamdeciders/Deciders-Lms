import React, { useEffect } from 'react';
import { useState } from 'react';
import { VscError } from "react-icons/vsc"
import Aleart from '../Components/Aleart';
const MyCart = () => {


  const [alert, setAlert] = useState(false)

  const [mycourses, setMyCourses] = useState([
    {
      id: 1,
      name: 'Career Track: Full Stack Digital Marketing',
      teacher: 'Priyom Mozumdar',
      price: 4520,
      img: 'https://bohubrihi.com/wp-content/uploads/2022/04/Full-Stack-Digital-Marketing-Career-Track-Bohubrihi-620x440.png'
    },
    {
      id: 2,
      name: 'Complete Web Development Course With Jhankar Mahbub',
      teacher: 'ঝংকার মাহবুব',
      price: 8920,
      img: 'https://bohubrihi.com/wp-content/uploads/2022/04/Full-Stack-Web-MERN-Development-with-JavaScript-Bohubrihi-620x440.png'
    },


    {
      id: 3,
      name: 'Complete Web Development Course With Jhankar Mahbub',
      teacher: 'ঝংকার মাহবুব',
      price: 8920,
      img: 'https://bohubrihi.com/wp-content/uploads/2022/04/Android-App-Development-Career-Track-Bohubrihi-620x440.png'
    },
    {
      id: 4,
      name: 'Complete Web Development Course With Jhankar Mahbub',
      teacher: 'ঝংকার মাহবুব',
      price: 8920,
      img: 'https://bohubrihi.com/wp-content/uploads/2022/04/Graphic-Design-Live-Course-Bohubrihi-620x440.png'
    }


  ])

  const deleteOrder = (id) => {
    const sd = mycourses.find(d => d.id == id)
    let index = mycourses.indexOf(sd)
    mycourses.splice(index, 1)
    setMyCourses([...mycourses])
    setAlert(!alert)
    setTimeout(() => {
      setAlert(false)
    }, 2000);

  }

  return (
    <div >
      {/* card */}

      <div className=' mx-auto h-6 my-4 max-w-max px-3 rounded-full bg-blue-600 flex justify-center text-white font-bold'>
        {mycourses.length} {mycourses.length > 1 ? 'Courses on your Cart' : 'Course on your Cart'}
      </div>
      {
        mycourses.map(data => <div key={data.id} className="md:w-[50%] cs-card-shadow rounded-lg p-2  mx-auto mb-8 relative">
          <div onClick={() => deleteOrder(data.id)} className='w-10 h-10 bg-[#FDFCF6] hover:bg-red-500 hover:text-white rounded-full border absolute right-2 top-2 md:top-10 flex justify-center items-center'>
            <VscError className='text-3xl' />
          </div>
          <div className="md:flex gap-2">
            <div className="md:w-[35%] md:h-36 h-[280px] border  rounded-md overflow-hidden">
              <img className='w-full h-full ' src={data.img} alt="" />
            </div>
            <div className="text md:w-[65%] flex flex-col justify-between">
              <div>
                <h2 className=' font-bold text-xl '>{data.name}</h2>
                <h2 className=' font-bold text-gray-400 mt-1'>{data.teacher}</h2>
              </div>
              <div className='my-3 flex justify-between items-center'>
                <h2 className=' font-bold text-gray-600 mt-1'><span className='text-sm font-light'>৳</span> {data.price}</h2>
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