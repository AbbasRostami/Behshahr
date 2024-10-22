import React from "react";
import { HeaderDashbord } from "../common/HeaderDashbord/HeaderDashbord";
import { MainDashbord } from "../common/MainDashbord/mainDashbord";

import percentageDashbord from "../../assets/percentageDashbord.svg";
import redDashbordImg from "../../assets/redDashbordImg.svg";
import profileHeader from "../../assets/profileHeader.svg";
import textDashbord from "../../assets/textDashbord.svg";
import dashbordImg from "../../assets/dashbordImg.svg";

const Dashbord = () => {
  return (
    <>
      <HeaderDashbord />

      <div className="flex mx-[1.5rem] rtl gap-11">
        <MainDashbord />

        <div className="w-[70rem] h-[43rem] my-[1rem] border-[1px] bg-[#ffff] rounded-2xl shadow-2xl grid grid-col-3 grid-rows-3 gap-4">
          <div className="w-[41rem] h-[10rem] rounded-lg shadow-xl border-[1px] bg-[#FBF6F6] mx-[1.5rem] mt-[1rem]">
            <img
              className="h-[9rem] mx-[2rem] my-[0.5rem]"
              src={dashbordImg}
              alt=""
            />

            <h1 className="text-nowrap text-2xl text-[#22445D] mx-[21rem] my-[-8.5rem]">
              سلام نام کاربری خوش آمدید
            </h1>

            <h2 className="text-nowrap text-sm text-[#22445D] mx-[20rem] my-[10rem]">
              دوره شما نود جی اس توسط 11 کاربر جدید در این هفته
            </h2>

            <h3 className="text-nowrap text-sm text-[#22445D] mx-[20rem] my-[-9.4rem]">
              تکمیل شد
            </h3>
          </div>

          <div className="w-[31rem] h-[30rem] rounded-lg shadow-xl border-[1px] bg-[#FBF6F6] col-span-2 row-start-2 mx-[1.5rem] mt-[-2.8rem]">
            <div className="h-[3.8rem] text-center bg-[#A4F6DE] rounded-lg">
              <h1 className="text-xl text-[#22445D] py-[1rem]">
                اطلاعات کاربری
              </h1>

              <img
                className="h-[8rem] mx-[11rem] my-[1.8rem]"
                src={profileHeader}
                alt=""
              />

              <h2 className="text-lg text-[#22445D] text-nowrap my-[-1rem]">
                نام و نام خانوادگی
              </h2>

              <h3 className="text-[17px] text-[#22445D] text-nowrap ml-[7.8rem] my-[2rem]">
                تلفن همراه: 09111234567
              </h3>

              <h4 className="text-[17px] text-[#22445D] text-nowrap ml-[5.5rem] my-[-1rem]">
                ایمیل: example@gmail.com
              </h4>

              <h5 className="text-[17px] text-[#22445D] text-nowrap ml-[10rem] my-[2rem]">
                کدملی: 0123456789
              </h5>

              <button className="bg-[#12926C] w-[7rem] h-[2.5rem] rounded-full text-[#fff]">ویرایش</button>
            </div>
          </div>

          <div className="w-[26rem] h-[10rem] rounded-lg shadow-xl border-[1px] bg-[#FBF6F6] col-span-2 mx-[-35rem] mt-[1rem]">
            <div className="h-[2.5rem] text-center bg-[#A4F6DE] rounded-lg">
              <h1 className="text-[#22445D] py-[0.5rem]">جدیدترین دوره ها</h1>
            </div>

            <div className="w-[25rem] h-[6.5rem] rounded-lg border-[1px] shadow-xl mx-[0.5rem] my-[0.5rem]">
              <img
                className="h-[5.5rem] mx-[0.5rem] my-[0.5rem]"
                src={redDashbordImg}
                alt=""
              />

              <h1 className="text-sm text-[#22445D] mx-[9rem] my-[-5.5rem]">
                عنوان دوره
              </h1>

              <h2 className="text-sm text-[#22445D] mx-[9rem] my-[6rem]">
                مدرس: نام استاد
              </h2>

              <h3 className="text-sm text-nowrap text-[#22445D] mx-[9rem] my-[-5.5rem]">
                قیمت: 3.000.000 تومان
              </h3>
            </div>
          </div>

          <div className="w-[35.5rem] h-[18.5rem] rounded-lg shadow-xl border-[1px] bg-[#FBF6F6] row-start-2 col-start-3 row-span-2 mx-[-45.5rem] my-[-2.5rem]">
            <div className="h-[3.8rem] text-center bg-[#A4F6DE] rounded-lg">
              <h1 className="text-xl text-[#22445D] py-[1rem]">
                وضعیت دوره های من
              </h1>
            </div>

            <img className="w-[34rem] h-[12rem] my-[1rem]" src={textDashbord} alt="" />

          </div>

          <div className="w-[10rem] h-[10rem] rounded-lg shadow-xl border-[1px] bg-[#FBF6F6] row-start-3 mx-[33.5rem] my-[2.5rem]">
            <h1 className="text-sm text-nowrap text-center text-[#22445D] my-[8rem]">درصد تکمیل پروفایل</h1>

            <img className="h-[7rem] my-[-17rem] mx-[1.5rem]" src={percentageDashbord} alt="" />
          </div>

          <div className="w-[25rem] h-[10rem] rounded-lg shadow-xl border-[1px] bg-[#FBF6F6] row-start-3 mx-[-34rem] my-[2.5rem]">
            <div className="h-[2.5rem] text-center bg-[#A4F6DE] rounded-lg">
              <h1 className="text-[#22445D] py-[0.5rem]">دوره های من</h1>
            </div>

            <div className="w-[24rem] h-[6.5rem] rounded-lg border-[1px] shadow-xl mx-[0.5rem] my-[0.5rem]">
              <img
                className="h-[5.5rem] mx-[0.5rem] my-[0.5rem]"
                src={redDashbordImg}
                alt=""
              />

              <h1 className="text-sm text-[#22445D] mx-[9rem] my-[-5.5rem]">
                عنوان دوره
              </h1>

              <h2 className="text-sm text-[#22445D] mx-[9rem] my-[6rem]">
                مدرس: نام استاد
              </h2>

              <h3 className="text-sm text-nowrap text-[#22445D] mx-[9rem] my-[-5.5rem]">
                قیمت: 3.000.000 تومان
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Dashbord };
