import React from 'react';

const MyCourse = () => {
    let mycourses = [
        {
            id: 1,
            name: 'Complete Web Development Course With Jhankar Mahbub',
            teacher: 'ঝংকার মাহবুব',
            img: 'https://bohubrihi.com/wp-content/uploads/2022/04/Full-Stack-Web-MERN-Development-with-JavaScript-Bohubrihi-620x440.png'
        },
        {
            id: 2,
            name: 'Career Track: Full Stack Digital Marketing',
            teacher: 'Priyom Mozumdar',
            img: 'https://bohubrihi.com/wp-content/uploads/2022/04/Full-Stack-Digital-Marketing-Career-Track-Bohubrihi-620x440.png'
        },
        {
            id: 3,
            name: 'Career Track: Android App Development',
            teacher: 'Shourob & Abdullah',
            img: 'https://bohubrihi.com/wp-content/uploads/2022/04/Android-App-Development-Career-Track-Bohubrihi-620x440.png'
        }
        

    ]
    return (
        <div >
            {/* card */}
            <div className=' mx-auto h-6 my-4 max-w-max px-3 rounded-full bg-blue-600 flex justify-center text-white font-bold'>
        {mycourses.length} Courses
      </div>
            {
                mycourses.map(data => <div className="md:w-[60%] cs-card-shadow rounded-lg p-2  mx-auto mb-8 ">
                    <div className="md:flex gap-2">
                        <div className="md:w-[35%] md:h-36 h-52 border rounded-md overflow-hidden">
                            <img className='w-full h-full ' src={data.img} alt="" />
                        </div>
                        <div className="text md:w-[65%] flex flex-col justify-between">
                            <div>
                                <h2 className=' font-bold text-xl'>{data.name}</h2>
                                <h2 className=' font-bold text-gray-400 mt-1'>{data.teacher}</h2>
                            </div>
                            <div className='my-3'>
                                <button className='bg-[#F37A50] text-white px-6 py-2 font-bold rounded-full hover:bg-blue-700 '>Continue Course</button>
                            </div>

                        </div>
                    </div>

                </div>)
            }
        </div>
    );
};

export default MyCourse;