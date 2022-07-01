import React from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { AiOutlineHome, AiOutlineShoppingCart, AiOutlineLogout, AiOutlineFileAdd, AiOutlineFileText } from 'react-icons/ai'
import { BiUserCircle, BiBookBookmark, BiBookAdd } from 'react-icons/bi'
import { BsFillFileEarmarkTextFill, BsWallet2 } from 'react-icons/bs'
import { MdOutlineHistoryEdu, MdReviews } from 'react-icons/md'
import { FaUsers, FaChalkboardTeacher } from 'react-icons/fa'
import { useQuery } from 'react-query';
import CustomLink from './CustomLink';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../Firebase.init';
import UseAdmin from '../Components/Others/UseAdmin';
import Loading from '../Pages/Loading/Loading';
const Dashboard = () => {
  const [user] = useAuthState(auth)
  const [admin] = UseAdmin(user)
  const { data: profiledata, isLoading, refetch } = useQuery('profiledata', () => fetch(`http://localhost:5000/myprofile/${user?.email}`).then(res => res.json()));
  if (isLoading) {
    return <Loading />
  }
  const { name, img } = profiledata[0]
  return (
    <div className=''>
      <div className='  bg-[#FDFCF6] w-full '>
        <div className='lg:max-w-7xl md-w-full  mx-auto px-4  md:px-12 '>
          <div className=" mx-auto md:w-[375px] py-8">
            <div className="w-[100px] h-[100px] rounded-full mx-auto bg-blue-50 border-2 border-black overflow-hidden ">
              <img className='rounded-full w-full h-full ring-2' src={img ? img : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png'} alt="" />
            </div>
            <div className='text-center'>
              {name ? <p className='text-2xl font-bold my-2'>{name}</p> : <p className='text-2xl font-bold my-2'>{user?.displayName}</p>}
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
          <div className='md:w-[20%] md:max-h-max h-full rounded-sm shadow-md p-2'>


            <CustomLink className="hover:bg-[#FC8B06]  " to={''}> <span className='w-3/4 flex  items-center'><AiOutlineHome className='block text-xl mr-6' /> <span className='block'>Home</span></span> </CustomLink>
            <CustomLink className="hover:bg-[#FC8B06]" to={'myprofile'}>  <span className='w-3/4 flex  items-center'><BiUserCircle className='block  mr-6 text-xl' /> <span className='block '>My Profile</span></span></CustomLink>
            <CustomLink className="hover:bg-[#FC8B06]" to={'mycourse'}><span className='w-3/4 flex  items-center'><MdOutlineHistoryEdu className='block text-xl mr-6' /><span className='block'> My Courses </span> </span></CustomLink>
            <CustomLink className="hover:bg-[#FC8B06]" to={'addreview'}><span className='w-3/4 flex  items-center'><MdReviews className='block text-xl mr-6' /><span className='block'> Review </span> </span></CustomLink>

            {
              !admin &&
              <>
                <CustomLink className="hover:bg-[#FC8B06]" to={'mycart'}> <span className='w-3/4 flex  items-center'><AiOutlineShoppingCart className='block text-xl mr-6' /><span className='block'>  My Cart </span> </span></CustomLink>
                <CustomLink className="hover:bg-[#FC8B06]" to={'mywallet'}><span className='w-3/4 flex  items-center'> <BsWallet2 className='block text-xl mr-6' /> <span className='block'>Wallet </span> </span></CustomLink>
              </>
            }
            {
              admin && <>
                <CustomLink className="hover:bg-[#FC8B06]" to={'allcourses'}><span className='w-3/4 flex  items-center'>  <AiOutlineFileText className='block text-xl mr-6' /><span className='block'> All Courses</span> </span></CustomLink>
                <CustomLink className="hover:bg-[#FC8B06]" to={'alllessons'}><span className='w-3/4 flex  items-center'>  <BiBookBookmark className='block text-xl mr-6' /><span className='block'>  All Lessons</span> </span></CustomLink>
                <CustomLink className="hover:bg-[#FC8B06]" to={'addcourses'}> <span className='w-3/4 flex  items-center'><AiOutlineFileAdd className='inline-block text-xl mr-6' /> <span className='block'> Add Course</span> </span></CustomLink>
                <CustomLink className="hover:bg-[#FC8B06]" to={'addlessons'}> <span className='w-3/4 flex  items-center'><BiBookAdd className='inline-block text-xl  mr-6' /><span className='block'> Add Lessons</span></span></CustomLink>
                <CustomLink className="hover:bg-[#FC8B06]" to={'allteachers'}><span className='w-3/4 flex  items-center'> <FaChalkboardTeacher className='inline-block text-xl mr-6' /> <span className='block'>All Teachers</span></span></CustomLink>
                <CustomLink className="hover:bg-[#FC8B06]" to={'allstudents'}> <span className='w-3/4 flex  items-center'> <FaUsers className='inline-block text-xl mr-6' />  <span className='block'>All Students</span></span></CustomLink>
                <CustomLink className="hover:bg-[#FC8B06]" to={'allusers'}> <span className='w-3/4 flex  items-center'> <FaUsers className='inline-block text-xl mr-6' />  <span className='block'>All User</span></span></CustomLink>
              </>
            }

          </div>
          <div className='md:w-[80%] rounded-sm  shadow-md p-2 '>
            {/* Out let Here */}
            <Outlet img={img} />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;