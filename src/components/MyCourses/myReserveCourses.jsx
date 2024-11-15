import React, { useEffect, useState } from "react";
import { HeaderDashbord } from "../common/HeaderDashbord/HeaderDashbord";
import { MainDashbord } from "../common/MainDashbord/mainDashbord";

import recycle from "../../assets/recycle.svg";
import nest from "../../assets/nest.svg";
import { getApi } from "../../core/api/api";
import moment from "jalali-moment";

const MyReserveCourses = () => {
  const [data, setData] = useState([]);
  const getMyCourses = async () => {
    const path = `/SharePanel/GetMyCoursesReserve`;
    const response = await getApi({ path });
    console.log(response.data);
    setData(response?.data);
  };
  useEffect(() => {
    getMyCourses();
  }, []);

  return (
    <>
      <div className="w-[45rem] lg:w-[70rem] h-[43rem] my-[1rem] border-[1px] bg-[#ffff] dark:bg-slate-800 rounded-2xl shadow-2xl">
        <div className="w-[43rem] lg:w-[66rem] h-[40.5rem] mx-auto my-[1.3rem] bg-[#FBF6F6] dark:bg-slate-700 border-[1px] rounded-lg shadow-2xl">
          <div className="text-nowrap text-[#22445D] dark:text-white text-[5px] text-xs lg:text-sm bg-[#A4F6DE] dark:bg-slate-900 h-[4.5rem] rounded-lg flex justify-evenly rtl gap-14 lg:gap-40 py-[1.5rem] px-[3rem]">
            <h1>نام دوره</h1>
            <h1>نام دانشجو</h1>
            <h1>تاریخ شروع</h1>
            <h1>وضعیت تایید</h1>
            <h1>حذف</h1>
          </div>
          <br></br>
          {data?.map((item) => {
            return (
              <div className="mt-2 text-nowrap text-[#22445D] dark:text-white text-[12px] bg-[#ffff] dark:bg-slate-700 w-[41rem] lg:w-[64rem] h-[3.5rem] rounded-2xl flex justify-evenly rtl gap-14 lg:gap-28 shadow-sm border-[1px] py-[1.2rem] px-[1rem] mx-auto">
                <h2> {item?.courseName}</h2>
                <h2>{item?.studentName}</h2>
                {moment(item?.reserverDate).locale("fa").format("YYYY/MM/DD")}
                <h2> {item?.accept}</h2>

                <button className="bg-[#ffff] rounded-2xl w-[2.5rem] h-[2rem] mt-[-0.5rem]">
                  <img
                    className="text-[#22445D]  h-[1.5rem] mr-[0.5rem] lg:mr-[0.2rem]"
                    src={recycle}
                    alt=""
                  />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export { MyReserveCourses };
