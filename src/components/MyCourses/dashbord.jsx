import React from "react";
import percentageDashbord from "../../assets/percentageDashbord.svg";
import redDashbordImg from "../../assets/redDashbordImg.svg";
import profileHeader from "../../assets/profileHeader.svg";
import textDashbord from "../../assets/textDashbord.svg";
import dashbordImg from "../../assets/dashbordImg.svg";
import { postApi } from "../../core/api/api";
import { Link } from "react-router-dom";

const Dashbord = () => {
  const Addprof = async () => {
    const path = "/SharePanel/AddProfileImage";

    const body = { name: "img" };

    const response = await postApi({ path, body });
    console.log(response);

    // if (response?.data?.success) {
    //   localStorage.setItem("token", response?.data?.token);
    //   toast.success("شما با موفقیت وارد شدید.");
    //   navigate("/");
    // } else {
    //   toast.error(response?.data?.message);
    // }
  };

  return (
    <>
      <div className="w-[70rem] h-[43rem] my-[1rem] border-[1px] bg-[#ffff] dark:bg-gray-800 rounded-2xl shadow-2xl grid grid-col-3 grid-rows-3 gap-4">
        <div className="flex justify-between w-[41rem] h-[10rem] rounded-lg shadow-xl border-[1px] bg-[#FBF6F6] dark:bg-gray-700 mr-[1.5rem] mt-[1rem]">
          <img className="h-[9rem] mt-2 mr-4" src={dashbordImg} alt="" />

          <h1 className="text-nowrap text-2xl text-[#22445D] dark:text-white mt-8 ml-16">
            سلام نام کاربری خوش آمدید
          </h1>

          <h2 className="text-wrap text-sm text-[#22445D] dark:text-white mt-20 -mr-96">
            دوره شما نود جی اس توسط 11 کاربر جدید در این هفته تکمیل شد
          </h2>
        </div>

        <div className="w-[31rem] h-[30rem] rounded-lg shadow-xl border-[1px] bg-[#FBF6F6] dark:bg-gray-700 col-span-2 row-start-2 mr-[1.5rem] mt-[-2.8rem]">
          <div className="h-[3.8rem] text-center bg-[#A4F6DE] dark:bg-gray-900 rounded-lg">
            <h1 className="text-xl text-[#22445D] dark:text-white py-[1rem]">
              اطلاعات کاربری
            </h1>

            <img
              className="h-[8rem] mr-[11rem] mt-[1.8rem]"
              src={profileHeader}
              alt=""
            />

            <h2 className="text-lg text-[#22445D] dark:text-white mt-[1rem]">
              نام و نام خانوادگی
            </h2>

            <h3 className="text-[17px] text-[#22445D] dark:text-white ml-[7.8rem] mt-[1rem]">
              تلفن همراه: 09111234567
            </h3>

            <h4 className="text-[17px] text-[#22445D] dark:text-white ml-[5.5rem] mt-[1rem]">
              ایمیل: example@gmail.com
            </h4>

            <h5 className="text-[17px] text-[#22445D] dark:text-white ml-[10rem] mt-[1rem]">
              کدملی: 0123456789
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
          <h1 className="text-sm text-nowrap text-center text-[#22445D] dark:text-white mt-[8rem]">
            درصد تکمیل پروفایل
          </h1>

          <img
            className="h-[7rem] mt-[-9rem] mr-[1.5rem]"
            src={percentageDashbord}
            alt=""
          />
        </div>

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
              عنوان دوره
            </h1>

            <h2 className="text-sm text-[#22445D] dark:text-white mr-[9rem] mt-[0.5rem]">
              مدرس: نام استاد
            </h2>

            <h3 className="text-sm  text-[#22445D] dark:text-white mr-[9rem] mt-[0.5rem]">
              قیمت: 3.000.000 تومان
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export { Dashbord };
