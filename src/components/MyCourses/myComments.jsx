import React from "react";
import { HeaderDashbord } from "../common/HeaderDashbord/HeaderDashbord";
import { MainDashbord } from "../common/MainDashbord/mainDashbord";

import nest from "../../assets/nest.svg";
import dot from "../../assets/dot.svg";

const MyComments = () => {
  return (
    <>
      <div className="w-[45rem] lg:w-[70rem] h-[43rem] my-[1rem] border-[1px] bg-[#ffff] dark:bg-gray-800 rounded-2xl shadow-2xl">
        <div className="text-nowrap mt-6 mr-6 lg:mr-20">
          <button className="bg-[#A4F6DE] dark:bg-gray-900 w-[21rem] lg:w-[30rem] h-[3rem] text-[#22445D] dark:text-white text-lg">
            دوره ها
          </button>

          <button className="bg-[#ffff] dark:bg-gray-700 border-[2px] border-[#A4F6DE] w-[21rem] lg:w-[30rem] h-[3rem] text-[#22445D] dark:text-white text-lg">
            اخبار و مقالات
          </button>
        </div>

        <div className="w-[43rem] lg:w-[66rem] h-[35rem] mx-auto my-[2rem] bg-[#FBF6F6] dark:bg-gray-700 border-[1px] rounded-lg shadow-2xl">
          <div className="text-nowrap text-[#22445D] dark:text-white text-[5px] text-xs lg:text-sm bg-[#A4F6DE] dark:bg-gray-900 h-[4.5rem] rounded-lg flex justify-end rtl gap-14 lg:gap-24 py-[1.5rem] px-[4rem]">
            <h1>عنوان دوره</h1>
            <h1>عنوان نظر</h1>
            <h1>تعداد پاسخ</h1>
            <h1>وضعیت</h1>
            <h1>تاریخ ارسال</h1>
            <h1>جزئیات</h1>
          </div>
          <br></br>
          <div className="text-nowrap text-[#22445D] dark:text-white text-[12px] bg-[#ffff] dark:bg-gray-700 w-[41rem] lg:w-[64rem] h-[3.5rem] rounded-2xl flex justify-end rtl gap-14 lg:gap-28 shadow-sm border-[1px] py-[1.2rem] px-[6rem] mx-[1rem]">
            <img
              className="hidden lg:inline-block w-[4rem] h-[4rem] mx-[-3.4rem] my-[-1.4rem]"
              src={nest}
              alt=""
            />

            <h2>تکست جی اس</h2>
            <h2>بسیار عالی</h2>
            <h2>2</h2>
            <h2>تایید شده</h2>
            <h2>1403/03/16</h2>

            <div>
              <img
                className="text-[#22445D] w-[1.5rem] h-[1.5rem] absolute top-[19.7rem] left-[6rem] lg:left-[7rem]"
                src={dot}
                alt=""
              />
            </div>
          </div>

          <br></br>

          <div className="text-nowrap text-[#22445D] dark:text-white text-[12px] bg-[#ffff] dark:bg-gray-700 w-[41rem] lg:w-[64rem] h-[3.5rem] rounded-2xl flex justify-end rtl gap-14 lg:gap-28 shadow-sm border-[1px] py-[1.2rem] px-[6rem] mx-[1rem]">
            <img
              className="hidden lg:inline-block w-[4rem] h-[4rem] mx-[-3.4rem] my-[-1.4rem]"
              src={nest}
              alt=""
            />

            <h2>تکست جی اس</h2>
            <h2>بسیار عالی</h2>
            <h2>2</h2>
            <h2>تایید شده</h2>
            <h2>1403/03/16</h2>
            <div>
              <img
                className="text-[#22445D] w-[1.5rem] h-[1.5rem] absolute top-[24.7rem] left-[6rem] lg:left-[7rem]"
                src={dot}
                alt=""
              />
            </div>
          </div>

          <br></br>

          <div className="text-nowrap text-[#22445D] dark:text-white text-[12px] bg-[#ffff] dark:bg-gray-700 w-[41rem] lg:w-[64rem] h-[3.5rem] rounded-2xl flex justify-end rtl gap-14 lg:gap-28 shadow-sm border-[1px] py-[1.2rem] px-[6rem] mx-[1rem]">
            <img
              className="hidden lg:inline-block w-[4rem] h-[4rem] mx-[-3.4rem] my-[-1.4rem]"
              src={nest}
              alt=""
            />

            <h2>تکست جی اس</h2>
            <h2>بسیار عالی</h2>
            <h2>2</h2>
            <h2>تایید شده</h2>
            <h2>1403/03/16</h2>
            <div>
              <img
                className="text-[#22445D] w-[1.5rem] h-[1.5rem] absolute top-[29.7rem] left-[6rem] lg:left-[7rem]"
                src={dot}
                alt=""
              />
            </div>
          </div>

          <br></br>

          <div className="text-nowrap text-[#22445D] dark:text-white text-[12px] bg-[#ffff] dark:bg-gray-700 w-[41rem] lg:w-[64rem] h-[3.5rem] rounded-2xl flex justify-end rtl gap-14 lg:gap-28 shadow-sm border-[1px] py-[1.2rem] px-[6rem] mx-[1rem]">
            <img
              className="hidden lg:inline-block w-[4rem] h-[4rem] mx-[-3.4rem] my-[-1.4rem]"
              src={nest}
              alt=""
            />

            <h2>تکست جی اس</h2>
            <h2>بسیار عالی</h2>
            <h2>2</h2>
            <h2>تایید شده</h2>
            <h2>1403/03/16</h2>
            <div>
              <img
                className="text-[#22445D] w-[1.5rem] h-[1.5rem] absolute top-[34.7rem] left-[6rem] lg:left-[7rem]"
                src={dot}
                alt=""
              />
            </div>
          </div>

          <br></br>

          <div className="text-nowrap text-[#22445D] dark:text-white text-[12px] bg-[#ffff] dark:bg-gray-700 w-[41rem] lg:w-[64rem] h-[3.5rem] rounded-2xl flex justify-end rtl gap-14 lg:gap-28 shadow-sm border-[1px] py-[1.2rem] px-[6rem] mx-[1rem]">
            <img
              className="hidden lg:inline-block w-[4rem] h-[4rem] mx-[-3.4rem] my-[-1.4rem]"
              src={nest}
              alt=""
            />

            <h2>تکست جی اس</h2>
            <h2>بسیار عالی</h2>
            <h2>2</h2>
            <h2>تایید شده</h2>
            <h2>1403/03/16</h2>
            <div>
              <img
                className="text-[#22445D] w-[1.5rem] h-[1.5rem] absolute top-[39.7rem] left-[6rem] lg:left-[7rem]"
                src={dot}
                alt=""
              />
            </div>
          </div>

          <div className="my-5 flex justify-center gap-6">
            <button className="rounded-full text-[#158B68] dark:text-white text-sm bg-[#BFF4E4] dark:bg-gray-700 w-[2rem] h-[2rem]">
              1
            </button>
            <button className="rounded-full text-[#158B68] dark:text-white bg-[#FBF6F6] dark:bg-gray-700 text-sm">
              2
            </button>
            <button className="rounded-full text-[#158B68] dark:text-white bg-[#FBF6F6] dark:bg-gray-700 text-sm">
              3
            </button>
            <button className="rounded-full text-[#158B68] dark:text-white bg-[#FBF6F6] dark:bg-gray-700 text-sm">
              4
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export { MyComments };
