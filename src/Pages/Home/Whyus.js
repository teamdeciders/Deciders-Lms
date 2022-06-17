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
          মুক্ত কৌশলগত থিম এলাকার মাধ্যমে বৈপ্লবিক উদ্ভাবনকে স্বতন্ত্রভাবে
          পুনরায় সংজ্ঞায়িত করুন।উচ্চ-দক্ষ আর্কিটেকচারের পরিবর্তে উচ্চ-প্রদান
          পরীক্ষার পদ্ধতিগুলিকে ফসফ্লুরোসেন্টলি ই-সক্ষম করে।
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 mt-14 mx-auto">
          <div className="rounded-xl p-2 bg-[#D9F5FF] h-[293px] w-full max-w-md mx-auto text-center">
            <div className="text-4xl flex justify-center my-10 ">
              <FaUserAlt className="text-[#CEC051]" />
            </div>
            <div>
              <h2 className="text-xl font-bold">Expert and professional mentor</h2>
              <p className="mt-3 px-5 ">
              Each course is created by an experienced and professional marketer in the market.
              </p>
            </div>
          </div>

          <div className="rounded-xl p-2 bg-[#F5FCFF] h-[293px] w-full max-w-md mx-auto text-center">
            <div className="text-4xl flex justify-center my-10 ">
              <FaUserAlt className="text-[#CEC051]" />
            </div>
            <div>
              <h2 className="text-xl font-bold">Skill development</h2>
              <p className="mt-3 px-5 ">
                {" "}
                Each course has a shelf and career development opportunities.
              </p>
            </div>
          </div>

          <div className="rounded-xl p-2 bg-[#F5FCFF] h-[293px] w-full max-w-md mx-auto text-center">
            <div className="text-4xl flex justify-center my-10 ">
              <FaUserAlt className="text-[#CEC051]" />
            </div>
            <div>
              <h2 className="text-xl font-bold">Update course module </h2>
              <p className="mt-3 px-5 ">
                {" "}
                Create each course following the International Course Curriculum
              </p>
            </div>
          </div>

          <div className="rounded-xl p-2 bg-[#F5FCFF] h-[293px] w-full max-w-md mx-auto text-center">
            <div className="text-4xl flex justify-center my-10 ">
              <FaUserAlt className="text-[#CEC051]" />
            </div>
            <div>
              <h2 className="text-xl font-bold">সার্টিফিকেশন</h2>
              <p className="mt-3 px-5 ">
                {" "}
                প্রতিটি কোর্স শেষে একটি সার্টিফিকেট আছে। অনলাইন পোর্টফোলিওতে
                সার্টিফিকেট......
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whyus;
