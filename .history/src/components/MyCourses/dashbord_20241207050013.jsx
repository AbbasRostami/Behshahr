import React, { useContext, useEffect, useState } from "react";
import redDashbordImg from "../../assets/redDashbordImg.svg";
import textDashbord from "../../assets/textDashbord.svg";
import introImg from "../../assets/introImg.svg";
import { getApi } from "../../core/api/api";
import { Link } from "react-router-dom";
import { ProfileContext } from "../../context/ProfileProvider";

const Dashbord = () => {

  const {data} = useContext(ProfileContext)
  console.log("ContextData Dashboard: ", data);


   const [datas, setDatas] = useState([]);
  const getMyCourses = async () => {
    const path = `/SharePanel/GetMyCourses?PageNumber=1&RowsOfPage=10&SortingCol=DESC&SortType=LastUpdate&Query=s`;
    const response = await getApi({ path });
    console.log(response.data.listOfMyCourses);
    setDatas(response.data.listOfMyCourses);
  };
  useEffect(() => {
    getMyCourses();
  }, []);
  return (
    <>
      <div className="w-[70rem] h-[43rem] my-[1rem] border-[1px] bg-[#ffff] dark:bg-gray-800 rounded-2xl shadow-2xl grid grid-col-3 grid-rows-3 gap-4">
        <div className="flex justify-between w-[41rem] h-[10rem] rounded-lg shadow-xl border-[1px] bg-[#FBF6F6] dark:bg-gray-700 mr-[1.5rem] mt-[1rem]">
          <img
            className="h-[9rem] mt-2 mr-2 rounded-md"
            src={introImg}
            alt=""
          />

          <div>
            <h1 className="text-nowrap text-2xl text-[#22445D] dark:text-white mt-8 ml-16">
              سلام {data?.fName}, خوش آمدید
            </h1>

            <h2 className="text-wrap text-sm text-[#22445D] ml-5 dark:text-white mt-5 w-full">
              دوره شما نود جی اس توسط 11 کاربر جدید در این هفته تکمیل شد
            </h2>
          </div>
        </div>

        <div className="w-[31rem] h-[30rem] rounded-lg shadow-xl border-[1px] bg-[#FBF6F6] dark:bg-gray-700 col-span-2 row-start-2 mr-[1.5rem] mt-[-2.8rem]">
          <div className="h-[3.8rem] text-center bg-[#A4F6DE] dark:bg-gray-900 rounded-lg">
            <h1 className="text-xl text-[#22445D] dark:text-white py-[1rem]">
              اطلاعات کاربری
            </h1>

            <img
              className="h-[8rem] mr-[11rem] mt-[1.8rem] rounded-2xl"
              src={data?.currentPictureAddress}
              alt=""
            />

            <h2 className="text-lg text-[#22445D] dark:text-white mt-[1rem]">
              {data?.fName} {data?.lName}
            </h2>

            <h3 className="text-[17px] text-[#22445D] dark:text-white  mt-[1rem]">
              تلفن همراه: {data?.phoneNumber}
            </h3>

            <h4 className="text-[17px] text-[#22445D] dark:text-white  mt-[1rem]">
              ایمیل: {data?.email}
            </h4>

            <h5 className="text-[17px] text-[#22445D] dark:text-white mt-[1rem]">
              کدملی: {data?.nationalCode}
            </h5>
            <Link to="/editProfile">
              <button
                name="img"
                type="submit"
                className="bg-[#12926C] dark:bg-gray-800 w-[7rem] h-[2.5rem] mt-[1rem] rounded-full text-[#fff]"
              >
                ویرایش
              </button>
            </Link>
          </div>
        </div>

        <div className="w-[26rem] h-[10rem] rounded-lg shadow-xl border-[1px] bg-[#FBF6F6] dark:bg-gray-700 col-span-2 mr-[-1.5rem] mt-[1rem]">
          <div className="h-[2.5rem] text-center bg-[#A4F6DE] dark:bg-gray-900 rounded-lg">
            <h1 className="text-[#22445D] dark:text-white py-[0.5rem]">
              جدیدترین دوره ها
            </h1>
          </div>
          {datas?.slice(2,3).map((item) => {
            return (
              <div className="w-[25rem] h-[6.5rem] rounded-lg border-[1px] shadow-xl mx-[0.5rem] mt-[0.5rem]">
              <img
                className="h-[5.5rem] mr-[0.5rem] mt-[0.5rem]"
                src={redDashbordImg}
                alt=""
              />
  
              <h1 className="text-sm text-[#22445D] dark:text-white mr-[9rem] mt-[-5.5rem]">
                عنوان دوره
              </h1>
  
              <h2 className="text-sm text-[#22445D] dark:text-white mr-[9rem] mt-[0.5rem]">
                مدرس: نام استاد
              </h2>
  
              <h3 className="text-sm  text-[#22445D] dark:text-white mr-[9rem] mt-[0.5rem]">
                قیمت: 3.000.000 تومان
              </h3>
            </div>
);
          })}
         
        </div>

        <div className="w-[35.5rem] h-[18.5rem] rounded-lg shadow-xl border-[1px] bg-[#FBF6F6] dark:bg-gray-700 row-start-2 col-start-3 row-span-2 mr-[-36.5rem] mt-[-2.5rem]">
          <div className="h-[3.8rem] text-center bg-[#A4F6DE] dark:bg-gray-900 rounded-lg">
            <h1 className="text-xl text-[#22445D] dark:text-white py-[1rem]">
              وضعیت دوره های من
            </h1>
          </div>

          <img
            className="w-[34rem] h-[12rem] mt-[1rem]"
            src={textDashbord}
            alt=""
          />
        </div>

        <div className="w-[10rem] h-[10rem] rounded-lg shadow-xl border-[1px] bg-[#FBF6F6] dark:bg-gray-700 row-start-3 mr-[33.5rem] mt-[2.5rem]">

        <div class="relative size-40 flex flex-col">
            <svg
              class="rotate-[135deg] size-full"
              viewBox="0 0 36 36"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="18"
                cy="18"
                r="16"
                fill="none"
                class="stroke-current text-green-200 dark:text-neutral-700"
                stroke-width="1"
                stroke-dasharray="75 100"
                stroke-linecap="round"
              ></circle>

              <circle
                cx="18"
                cy="18"
                r="16"
                fill="none"
                class="stroke-current text-[#12926c] dark:text-green-500"
                stroke-width="2"
                stroke-dasharray="56.25 100"
                stroke-linecap="round"
              ></circle>
            </svg>

            <div class="absolute top-[4.5rem] right-4 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <span class="text-4xl font-bold text-[#22445d] dark:text-green-500">
                {data?.profileCompletionPercentage}%
              </span>
              
            </div>
            <h1 className="text-sm  mb-1 text-nowrap text-center text-[#22445D] dark:text-white">
            درصد تکمیل پروفایل
          </h1>
          </div>
          
          

         
        </div>
        {datas?.slice(0,1).map((item) => {
            return (
              <div className="w-[25rem] h-[10rem] rounded-lg shadow-xl border-[1px] bg-[#FBF6F6] dark:bg-gray-700 row-start-3 mr-[-0.5rem] mt-[2.5rem]">
          <div className="h-[2.5rem] text-center bg-[#A4F6DE] dark:bg-gray-900 rounded-lg">
            <h1 className="text-[#22445D] dark:text-white py-[0.5rem]">
              دوره های من
            </h1>
          </div>

          <div className="w-[24rem] h-[6.5rem] rounded-lg border-[1px] shadow-xl mx-[0.5rem] my-[0.5rem]">
            <img
              className="h-[5.5rem] mr-[0.5rem] mt-[0.5rem]"
              src={redDashbordImg}
              alt=""
            />

            <h1 className="text-sm text-[#22445D] dark:text-white mr-[9rem] mt-[-5.5rem]">
             {item?.courseTitle}
            </h1>

            <h2 className="text-sm text-[#22445D] dark:text-white mr-[9rem] mt-[0.5rem]">
              مدرس:  {item?.fullName}
            </h2>

            <h3 className="text-sm  text-[#22445D] dark:text-white mr-[9rem] mt-[0.5rem]">
            {item?.cost} تومان
            </h3>
          </div>
        </div>
            );
          })}
        
      </div>
    </>
  );
};

export { Dashbord };
