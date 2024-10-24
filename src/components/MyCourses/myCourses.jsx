import React, { useEffect, useState } from "react";
import { HeaderDashbord } from "../common/HeaderDashbord/HeaderDashbord";
import { MainDashbord } from "../common/MainDashbord/mainDashbord";

import nest from "../../assets/nest.svg";
import { getApi } from "../../core/api/api";

const MyCourses = () => {
  const [data , setData] =useState([])
  const getMyCourses = async()=>{
    const path = `/SharePanel/GetMyCourses?PageNumber=1&RowsOfPage=10&SortingCol=DESC&SortType=LastUpdate&Query=`
    const response =await getApi({path})
    console.log(response);
    setData(response)
    
  }
  useEffect(()=>{
    getMyCourses()
  },[])
  return (
    <>
        <div className="w-[48rem] xl:w-[70rem] h-[43rem] my-[1rem] border-[1px] bg-[#ffff] rounded-2xl shadow-2xl">
          <div className="w-[45rem] xl:w-[66rem] h-[40.5rem] mx-[2rem] my-[1.3rem] bg-[#FBF6F6] border-[1px] rounded-lg shadow-2xl">
            <div className="text-nowrap text-[#22445D] text-[5px] text-xs xl:text-sm bg-[#A4F6DE] h-[4.5rem] rounded-lg flex justify-end rtl gap-14 xl:gap-24 py-[1.5rem] px-[4rem]">
              <h1>نام دوره</h1>
              <h1>نام استاد</h1>
              <h1>نام ترم</h1>
              <h1>نام گروه</h1>
              <h1>تاریخ شروع</h1>
              <h1>وضعیت پرداخت</h1>
            </div>
            <br></br>
            <div className="text-nowrap text-[#22445D] text-[12px] bg-[#ffff] w-[43rem] xl:w-[64rem] h-[3.5rem] rounded-2xl flex justify-end rtl gap-14 xl:gap-28 shadow-sm border-[1px] py-[1.2rem] px-[3rem] mx-[1rem]">
              <img
                className="hidden xl:inline-block w-[4rem] h-[4rem] mx-[-4.5rem] my-[-1.2rem]"
                src={nest}
                alt=""
              />

              <h2>تکست جی اس</h2>
              <h2>استاد بحر</h2>
              <h2>بهار</h2>
              <h2>سه شنبه</h2>
              <h2>1403/03/16</h2>
              <h2>پرداخت نشده</h2>
            </div>

            <br></br>

            <div className="text-nowrap text-[#22445D] text-[12px] bg-[#ffff] w-[43rem] xl:w-[64rem] h-[3.5rem] rounded-2xl flex justify-end rtl gap-14 xl:gap-28 shadow-sm border-[1px] py-[1.2rem] px-[3rem] mx-[1rem]">
              <img
                className="hidden xl:inline-block w-[4rem] h-[4rem] mx-[-4.5rem] my-[-1.2rem]"
                src={nest}
                alt=""
              />

              <h2>تکست جی اس</h2>
              <h2>استاد بحر</h2>
              <h2>بهار</h2>
              <h2>سه شنبه</h2>
              <h2>1403/03/16</h2>
              <h2>پرداخت نشده</h2>
            </div>

            <br></br>

            <div className="text-nowrap text-[#22445D] text-[12px] bg-[#ffff] w-[43rem] xl:w-[64rem] h-[3.5rem] rounded-2xl flex justify-end rtl gap-14 xl:gap-28 shadow-sm border-[1px] py-[1.2rem] px-[3rem] mx-[1rem]">
              <img
                className="hidden xl:inline-block w-[4rem] h-[4rem] mx-[-4.5rem] my-[-1.2rem]"
                src={nest}
                alt=""
              />

              <h2>تکست جی اس</h2>
              <h2>استاد بحر</h2>
              <h2>بهار</h2>
              <h2>سه شنبه</h2>
              <h2>1403/03/16</h2>
              <h2>پرداخت نشده</h2>
            </div>

            <br></br>

            <div className="text-nowrap text-[#22445D] text-[12px] bg-[#ffff] w-[43rem] xl:w-[64rem] h-[3.5rem] rounded-2xl flex justify-end rtl gap-14 xl:gap-28 shadow-sm border-[1px] py-[1.2rem] px-[3rem] mx-[1rem]">
              <img
                className="hidden xl:inline-block w-[4rem] h-[4rem] mx-[-4.5rem] my-[-1.2rem]"
                src={nest}
                alt=""
              />

              <h2>تکست جی اس</h2>
              <h2>استاد بحر</h2>
              <h2>بهار</h2>
              <h2>سه شنبه</h2>
              <h2>1403/03/16</h2>
              <h2>پرداخت نشده</h2>
            </div>

            <br></br>

            <div className="text-nowrap text-[#22445D] text-[12px] bg-[#ffff] w-[43rem] xl:w-[64rem] h-[3.5rem] rounded-2xl flex justify-end rtl gap-14 xl:gap-28 shadow-sm border-[1px] py-[1.2rem] px-[3rem] mx-[1rem]">
              <img
                className="hidden xl:inline-block w-[4rem] h-[4rem] mx-[-4.5rem] my-[-1.2rem]"
                src={nest}
                alt=""
              />

              <h2>تکست جی اس</h2>
              <h2>استاد بحر</h2>
              <h2>بهار</h2>
              <h2>سه شنبه</h2>
              <h2>1403/03/16</h2>
              <h2>پرداخت نشده</h2>
            </div>

            <br></br>

            <div className="text-nowrap text-[#22445D] text-[12px] bg-[#ffff] w-[43rem] xl:w-[64rem] h-[3.5rem] rounded-2xl flex justify-end rtl gap-14 xl:gap-28 shadow-sm border-[1px] py-[1.2rem] px-[3rem] mx-[1rem]">
              <img
                className="hidden xl:inline-block w-[4rem] h-[4rem] mx-[-4.5rem] my-[-1.2rem]"
                src={nest}
                alt=""
              />

              <h2>تکست جی اس</h2>
              <h2>استاد بحر</h2>
              <h2>بهار</h2>
              <h2>سه شنبه</h2>
              <h2>1403/03/16</h2>
              <h2>پرداخت نشده</h2>
            </div>

            <div className="mx-[26rem] my-5 flex justify-center gap-6 rounded-full">
              <button className="rounded-full text-[#158B68] text-sm bg-[#BFF4E4] w-[2rem] h-[2rem]">
                1
              </button>
              <button className="rounded-full text-[#158B68] bg-[#FBF6F6] text-sm">
                2
              </button>
              <button className="rounded-full text-[#158B68] bg-[#FBF6F6] text-sm">
                3
              </button>
              <button className="rounded-full text-[#158B68] bg-[#FBF6F6] text-sm">
                4
              </button>
            </div>
          </div>
        </div>
    </>
  );
};

export { MyCourses };
