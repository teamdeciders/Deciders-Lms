import React from "react";
import { GrStar } from "react-icons/gr";
import { Link } from "react-router-dom";

const MyCourses = () => {
  return (
    <div>
      <div className=" h-[30vh]  bg-[#FDFCF6] w-full">
        <div className="lg:max-w-7xl md-w-full  mx-auto px-4  md:px-16 ">
          <h1 className="text-4xl font-bold text-center pt-20">আমার কোর্স</h1>
        </div>
      </div>

      <div className="lg:max-w-7xl md-w-full my-24  mx-auto px-4  md:px-16 ">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mx-auto">
          <div className="rounded-md shadow p-2 bg-[#F6F7FD] h-[500px] w-full max-w-xs mx-auto">
            <div className="img  h-[250px] overflow-path">
              {/* Course Image */}
              <img
                className="w-full"
                src="https://bohubrihi.com/wp-content/uploads/2022/04/Full-Stack-Web-MERN-Development-with-JavaScript-Bohubrihi-620x440.png?x20306"
                alt=""
              />
            </div>
            <div className="h-[90px]  p-2 mt-2 flex">
              <div className="w-1/4 bg-red-500 rounded-full overflow-hidden  ">
                {/* Teacher Image Image */}
                <img
                  className="w-full h-full"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX5CKyJ-XKwjSmwICNSLA5zKangbAbot-3VTz9oowmePnSAp2_qrbeVmxrVSDmen8Rov4&usqp=CAU"
                  alt=""
                />
              </div>
              <div className="w-3/4 p-2 flex justify-between ">
                <div>
                  <h2 className="text-xl font-bold"> ঝংকার মাহবুব</h2>
                  <h2 className="text-sm font-bold text-blue-600">
                    ওয়েব ডেবেলপার
                  </h2>
                </div>
                <div className="flex items-center">
                  <Link to="/course/1">
                    <button className="bg-[#B3EAFF] px-2 py-2 rounded-md font-bold hover:bg-[#515FCE] hover:text-white">
                      Buy Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="h-[140px] p-2 w-full">
              <h2 className="text-xl font-bold h-[80px]">
                কমপ্লিট ফ্রন্ট-এন্ড ডেভেলপমেন্ট শিখুন (জাভাস্ক্রিপ্ট)
              </h2>
              <hr className="mt-2 border border-[#B3EAFF]" />
              <div className=" w-full flex justify-between items-center h-[40px] p-2">
                <div className="flex">
                  <GrStar className="text-xl font-bold  text-[#FBAE5C]" />
                  <GrStar className="text-xl font-bold  text-[#FBAE5C]" />
                  <GrStar className="text-xl font-bold  text-[#FBAE5C]" />
                  <GrStar className="text-xl font-bold  text-[#FBAE5C]" />
                  <GrStar className="text-xl font-bold  text-[#FBAE5C]" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-[#515FCE]"> ৳ ৫০৫০</h2>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-md shadow p-2 bg-[#F6F7FD] h-[500px] w-full max-w-xs mx-auto">
            <div className="img  h-[250px] overflow-path">
              {/* Course Image */}
              <img
                className="w-full"
                src="https://bohubrihi.com/wp-content/uploads/2022/04/Full-Stack-Web-MERN-Development-with-JavaScript-Bohubrihi-620x440.png?x20306"
                alt=""
              />
            </div>
            <div className="h-[90px]  p-2 mt-2 flex">
              <div className="w-1/4 bg-red-500 rounded-full overflow-hidden  ">
                {/* Teacher Image Image */}
                <img
                  className="w-full h-full"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX5CKyJ-XKwjSmwICNSLA5zKangbAbot-3VTz9oowmePnSAp2_qrbeVmxrVSDmen8Rov4&usqp=CAU"
                  alt=""
                />
              </div>
              <div className="w-3/4 p-2 flex justify-between ">
                <div>
                  <h2 className="text-xl font-bold"> ঝংকার মাহবুব</h2>
                  <h2 className="text-sm font-bold text-blue-600">
                    ওয়েব ডেবেলপার
                  </h2>
                </div>
                <div className="flex items-center">
                  <Link to="/course/1">
                    <button className="bg-[#B3EAFF] px-2 py-2 rounded-md font-bold hover:bg-[#515FCE] hover:text-white">
                      Buy Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="h-[140px] p-2 w-full">
              <h2 className="text-xl font-bold h-[80px]">
                কমপ্লিট ফ্রন্ট-এন্ড ডেভেলপমেন্ট শিখুন (জাভাস্ক্রিপ্ট)
              </h2>
              <hr className="mt-2 border border-[#B3EAFF]" />
              <div className=" w-full flex justify-between items-center h-[40px] p-2">
                <div className="flex">
                  <GrStar className="text-xl font-bold  text-[#FBAE5C]" />
                  <GrStar className="text-xl font-bold  text-[#FBAE5C]" />
                  <GrStar className="text-xl font-bold  text-[#FBAE5C]" />
                  <GrStar className="text-xl font-bold  text-[#FBAE5C]" />
                  <GrStar className="text-xl font-bold  text-[#FBAE5C]" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-[#515FCE]"> ৳ ৫০৫০</h2>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-md shadow p-2 bg-[#F6F7FD] h-[500px] w-full max-w-xs mx-auto">
            <div className="img  h-[250px] overflow-path">
              {/* Course Image */}
              <img
                className="w-full"
                src="https://bohubrihi.com/wp-content/uploads/2022/04/Full-Stack-Web-MERN-Development-with-JavaScript-Bohubrihi-620x440.png?x20306"
                alt=""
              />
            </div>
            <div className="h-[90px]  p-2 mt-2 flex">
              <div className="w-1/4 bg-red-500 rounded-full overflow-hidden  ">
                {/* Teacher Image Image */}
                <img
                  className="w-full h-full"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX5CKyJ-XKwjSmwICNSLA5zKangbAbot-3VTz9oowmePnSAp2_qrbeVmxrVSDmen8Rov4&usqp=CAU"
                  alt=""
                />
              </div>
              <div className="w-3/4 p-2 flex justify-between ">
                <div>
                  <h2 className="text-xl font-bold"> ঝংকার মাহবুব</h2>
                  <h2 className="text-sm font-bold text-blue-600">
                    ওয়েব ডেবেলপার
                  </h2>
                </div>
                <div className="flex items-center">
                  <Link to="/course/1">
                    <button className="bg-[#B3EAFF] px-2 py-2 rounded-md font-bold hover:bg-[#515FCE] hover:text-white">
                      Buy Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="h-[140px] p-2 w-full">
              <h2 className="text-xl font-bold h-[80px]">
                কমপ্লিট ফ্রন্ট-এন্ড ডেভেলপমেন্ট শিখুন (জাভাস্ক্রিপ্ট)
              </h2>
              <hr className="mt-2 border border-[#B3EAFF]" />
              <div className=" w-full flex justify-between items-center h-[40px] p-2">
                <div className="flex">
                  <GrStar className="text-xl font-bold  text-[#FBAE5C]" />
                  <GrStar className="text-xl font-bold  text-[#FBAE5C]" />
                  <GrStar className="text-xl font-bold  text-[#FBAE5C]" />
                  <GrStar className="text-xl font-bold  text-[#FBAE5C]" />
                  <GrStar className="text-xl font-bold  text-[#FBAE5C]" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-[#515FCE]"> ৳ ৫০৫০</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCourses;
