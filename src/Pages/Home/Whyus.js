import React from "react";
import { FaUserAlt } from "react-icons/fa";
const Whyus = () => {
  return (
    <div>
      <div className='lg:max-w-7xl md-w-full  mx-auto px-4  md:px-16 mt-6'>
        <h2 className="text-2xl md:text-4xl lg:text-4xl text-center font-bold">
          কেন <span className=" text-[#CEC051]">ABC</span> থেকে কোর্স টি করবেন
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
              <h2 className="text-xl font-bold">বিশেষজ্ঞ এবং পেশাদার মেন্টর</h2>
              <p className="mt-3 px-5 ">
                মার্কেটে অভিজ্ঞ এবং পেশাদার একজনমেন্টর দ্বারা প্রতিটি কোর্স তৈরি
                করা হয়েছে।
              </p>
            </div>
          </div>

          <div className="rounded-xl p-2 bg-[#F5FCFF] h-[293px] w-full max-w-md mx-auto text-center">
            <div className="text-4xl flex justify-center my-10 ">
              <FaUserAlt className="text-[#CEC051]" />
            </div>
            <div>
              <h2 className="text-xl font-bold">দক্ষতা উন্নয়ন</h2>
              <p className="mt-3 px-5 ">
                {" "}
                প্রতিটি কোর্সে একটি শেল্ফ এবং ক্যারিয়ার বিকাশের সুযোগ রয়েছে।
              </p>
            </div>
          </div>

          <div className="rounded-xl p-2 bg-[#F5FCFF] h-[293px] w-full max-w-md mx-auto text-center">
            <div className="text-4xl flex justify-center my-10 ">
              <FaUserAlt className="text-[#CEC051]" />
            </div>
            <div>
              <h2 className="text-xl font-bold">আপডেট কোর্স মডিউল </h2>
              <p className="mt-3 px-5 ">
                {" "}
                আন্তর্জাতিক কোর্স কারিকুলাম অনুসরণ করা প্রতিটি কোর্স তৈরি করা
                হয়েছে।
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
