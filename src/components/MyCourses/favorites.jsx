import React from "react";
import { HeaderDashbord } from "../common/HeaderDashbord/HeaderDashbord";
import { MainDashbord } from "../common/MainDashbord/mainDashbord";

import nest from "../../assets/nest.svg";
import recycle from "../../assets/recycle.svg";

const Favorites = () => {
  return (
    <>
      <HeaderDashbord />

      <div className="flex mx-[1rem] rtl gap-11">

        <MainDashbord />

        <div className="w-[70rem] h-[43rem] my-[1rem] border-[1px] bg-[#ffff] rounded-2xl shadow-2xl">
          <div className="text-nowrap absolute top-[7rem] right-[30rem]">
            <button className="bg-[#A4F6DE] w-[30rem] h-[3rem] text-[#22445D] text-lg">
              دوره های مورد علاقه من
            </button>
            <button className="bg-[#ffff] border-[2px] border-[#A4F6DE] w-[30rem] h-[3rem] text-[#22445D] text-lg">
              مقالات مرد علاقه من
            </button>
          </div>

          <div className="w-[66rem] h-[35rem] mx-[2rem] my-[6.5rem] bg-[#FBF6F6] border-[1px] rounded-lg shadow-2xl">
            <div className="text-nowrap text-[#22445D] text-[5px] bg-[#A4F6DE] h-[4.5rem] rounded-lg flex justify-end rtl gap-24 py-[1.5rem] px-[4rem]">
              <h1>نام دوره</h1>
              <h1>نام استاد</h1>
              <h1>نوع دوره</h1>
              <h1>سطح دوره</h1>
              <h1>تاریخ شروع</h1>
              <h1>حذف</h1>
            </div>
            <br></br>
            <div className="text-nowrap text-[#22445D] text-[12px] bg-[#ffff] w-[64rem] h-[3.5rem] rounded-2xl flex justify-end rtl gap-28 shadow-sm border-[1px] py-[1.2rem] px-[3rem] mx-[1rem]">
              <img
                className="w-[4rem] h-[4rem] mx-[-2.7rem] my-[-1.4rem]"
                src={nest}
                alt=""
              />

              <h2>تکست جی اس</h2>
              <h2>استاد بحر</h2>
              <h2>حضوری</h2>
              <h2>پیشرفته</h2>
              <h2>1403/03/16</h2>
              <button className="bg-[#ffff] w-[2rem] h-[2rem] my-[-0.5rem] mx-[-0.2rem]">
                <img
                  className="text-[#22445D] h-[1.5rem] absolute top-[19.7rem] left-[7rem]"
                  src={recycle}
                  alt=""
                />
              </button>
            </div>

            <br></br>

            <div className="text-nowrap text-[#22445D] text-[12px] bg-[#ffff] w-[64rem] h-[3.5rem] rounded-2xl flex justify-end rtl gap-28 shadow-sm border-[1px] py-[1.2rem] px-[3rem] mx-[1rem]">
              <img
                className="w-[4rem] h-[4rem] mx-[-2.7rem] my-[-1.4rem]"
                src={nest}
                alt=""
              />

              <h2>تکست جی اس</h2>
              <h2>استاد بحر</h2>
              <h2>حضوری</h2>
              <h2>پیشرفته</h2>
              <h2>1403/03/16</h2>
              <button className="bg-[#ffff] w-[2rem] h-[2rem] my-[-0.5rem] mx-[-0.2rem]">
                <img
                  className="text-[#22445D] h-[1.5rem] absolute top-[24.7rem] left-[7rem]"
                  src={recycle}
                  alt=""
                />
              </button>
            </div>

            <br></br>

            <div className="text-nowrap text-[#22445D] text-[12px] bg-[#ffff] w-[64rem] h-[3.5rem] rounded-2xl flex justify-end rtl gap-28 shadow-sm border-[1px] py-[1.2rem] px-[3rem] mx-[1rem]">
              <img
                className="w-[4rem] h-[4rem] mx-[-2.7rem] my-[-1.4rem]"
                src={nest}
                alt=""
              />

              <h2>تکست جی اس</h2>
              <h2>استاد بحر</h2>
              <h2>حضوری</h2>
              <h2>پیشرفته</h2>
              <h2>1403/03/16</h2>
              <button className="bg-[#ffff] w-[2rem] h-[2rem] my-[-0.5rem] mx-[-0.2rem]">
                <img
                  className="text-[#22445D] h-[1.5rem] absolute top-[29.7rem] left-[7rem]"
                  src={recycle}
                  alt=""
                />
              </button>
            </div>

            <br></br>

            <div className="text-nowrap text-[#22445D] text-[12px] bg-[#ffff] w-[64rem] h-[3.5rem] rounded-2xl flex justify-end rtl gap-28 shadow-sm border-[1px] py-[1.2rem] px-[3rem] mx-[1rem]">
              <img
                className="w-[4rem] h-[4rem] mx-[-2.7rem] my-[-1.4rem]"
                src={nest}
                alt=""
              />

              <h2>تکست جی اس</h2>
              <h2>استاد بحر</h2>
              <h2>حضوری</h2>
              <h2>پیشرفته</h2>
              <h2>1403/03/16</h2>
              <button className="bg-[#ffff] w-[2rem] h-[2rem] my-[-0.5rem] mx-[-0.2rem]">
                <img
                  className="text-[#22445D] h-[1.5rem] absolute top-[34.7rem] left-[7rem]"
                  src={recycle}
                  alt=""
                />
              </button>
            </div>

            <br></br>

            <div className="text-nowrap text-[#22445D] text-[12px] bg-[#ffff] w-[64rem] h-[3.5rem] rounded-2xl flex justify-end rtl gap-28 shadow-sm border-[1px] py-[1.2rem] px-[3rem] mx-[1rem]">
              <img
                className="w-[4rem] h-[4rem] mx-[-2.7rem] my-[-1.4rem]"
                src={nest}
                alt=""
              />

              <h2>تکست جی اس</h2>
              <h2>استاد بحر</h2>
              <h2>حضوری</h2>
              <h2>پیشرفته</h2>
              <h2>1403/03/16</h2>
              <button className="bg-[#ffff] w-[2rem] h-[2rem] my-[-0.5rem] mx-[-0.2rem]">
                <img
                  className="text-[#22445D] h-[1.5rem] absolute top-[39.7rem] left-[7rem]"
                  src={recycle}
                  alt=""
                />
              </button>
            </div>

            <div className=" mx-[26rem] my-5">
              <button className="rounded-full text-[#158B68] text-sm bg-[#BFF4E4]">
                1
              </button>
              <button className="rounded-full text-[#158B68] bg-[#FBF6F6] text-sm hover:[#BFF4E4]">
                2
              </button>
              <button className="rounded-full text-[#158B68] bg-[#FBF6F6] text-sm hover:[#BFF4E4]">
                3
              </button>
              <button className="rounded-full text-[#158B68] bg-[#FBF6F6] text-sm hover:[#BFF4E4]">
                4
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Favorites };
