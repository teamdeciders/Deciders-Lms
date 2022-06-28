import React from "react";
import { FaUserAlt } from "react-icons/fa";
const Whyus = () => {
  return (
    <div>
      <div className='lg:max-w-7xl md-w-full mt-24  mx-auto px-4  md:px-16 '>
        <h2 className="text-2xl md:text-4xl lg:text-4xl text-center font-bold">
          কেন <span className=" text-[#CEC051]">Decicers Lms</span> থেকে কোর্স টি করবেন
        </h2>
        <p className="text-center w-full lg:w-[702px] mx-auto mt-5">
          Consider your interests. Think about your interests. ...
          Discuss your career goals. Discuss your career aspirations, and talk about how the course aligns with your career goals. ...
          Highlight your strengths. ...
          Focus on positive reasons. ...
          Be enthusiastic.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 mt-14 mx-auto">
          <div className="rounded-xl p-2 bg-[#F5FCFF] hover:bg-[#D9F5FF] h-[293px] w-full max-w-md mx-auto csm-shadow text-center">
            <div className="text-4xl flex justify-center my-6 ">
              <img src="https://10minuteschool.com/assets/icons/home-page/amader-orjon/teacher.png" alt="" />
            </div>
            <div>
              <h2 className="text-xl font-bold">Expert and professional mentor</h2>
              <p className="mt-3 px-5 ">
                Each course is created by an experienced and professional marketer in the market.
              </p>
            </div>
          </div>

          <div className="rounded-xl p-2 bg-[#F5FCFF] hover:bg-[#D9F5FF] h-[293px] csm-shadoww-full max-w-md mx-auto text-center">
            <div className="text-4xl flex justify-center my-6 ">
              {/* <FaUserAlt className="text-[#CEC051]" /> */}
              <img src="https://10minuteschool.com/assets/icons/home-page/amader-orjon/student.png" alt="" />
            </div>
            <div>
              <h2 className="text-xl font-bold">Skill development</h2>
              <p className="mt-3 px-5 ">
                {" "}
                Each course has a shelf and career development opportunities.
              </p>
            </div>
          </div>

          <div className="rounded-xl p-2 bg-[#F5FCFF] hover:bg-[#D9F5FF] h-[293px] csm-shadow w-full max-w-md mx-auto text-center">
            <div className="text-4xl flex justify-center my-6 ">
              {/* <FaUserAlt className="text-[#CEC051]" /> */}
              <img src="https://10minuteschool.com/assets/icons/home-page/amader-orjon/content.png" alt="" />
            </div>
            <div>
              <h2 className="text-xl font-bold">Update course module </h2>
              <p className="mt-3 px-5 ">
                {" "}
                Create each course following the International Course Curriculum
              </p>
            </div>
          </div>

          <div className="rounded-xl p-2 bg-[#F5FCFF] hover:bg-[#D9F5FF] h-[293px] csm-shadow w-full max-w-md mx-auto text-center">
            <div className="text-4xl flex justify-center my-6 ">
              {/* <FaUserAlt className="text-[#C0EEE9]" /> */}
              <div className="bg-[#C7F0F5] w-20 h-20 rounded-full flex items-center justify-center">
                <img className=" w-16 h-16 " src="https://img.icons8.com/clouds/344/certificate.png" alt="" />
              </div>

            </div>
            <div>
              <h2 className="text-xl font-bold">Certification</h2>
              <p className="mt-3 px-5 ">
                {" "}
                There is a certificate at the end of each course. Certificates in the online portfolio
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whyus;
