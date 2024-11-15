import React, { useEffect, useState } from "react";
import { HeaderDashbord } from "../common/HeaderDashbord/HeaderDashbord";
import { MainDashbord } from "../common/MainDashbord/mainDashbord";

import nest from "../../assets/nest.svg";
import dot from "../../assets/dot.svg";
import { getApi } from "../../core/api/api";
import moment from "jalali-moment";

const MyComments = () => {
  const [data, setData] = useState([]);
  const getMyComments = async () => {
    const path = `/Course/GetCourseCommnets/11a8d66a-2031-ef11-b6c8-c6ea51a59bbe?Count=5`;
    const response = await getApi({ path });
    console.log(response.data);
    setData(response.data);
  };
  useEffect(() => {
    getMyComments();
  }, []);

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
          <div className="text-nowrap text-[#22445D] dark:text-white text-[5px] text-xs lg:text-sm bg-[#A4F6DE] dark:bg-gray-900 h-[4.5rem] rounded-lg flex justify-evenly rtl gap-14 lg:gap-24 py-[1.5rem] px-[2rem]">
            <h1>عنوان نظر</h1>
            <h1>عنوان دوره</h1>
            <h1>تعداد پاسخ</h1>
            <h1>تاریخ ارسال</h1>
            <h1>وضعیت</h1>
            <h1>جزئیات</h1>
          </div>
          <br></br>
          {data?.map((item) => {
            return (
              <div className="mt-2 text-nowrap text-[#22445D] dark:text-white text-[12px] bg-[#ffff] dark:bg-gray-700 w-[41rem] lg:w-[64rem] h-[3.5rem] rounded-2xl flex justify-end rtl gap-14 lg:gap-28 shadow-sm border-[1px] py-[1.2rem] px-[6rem] mx-[1rem]">
                <h2> {item?.author} </h2>
                <h2> {item?.title} </h2>
                <h2> {item?.acceptReplysCount} </h2>
                {moment(item?.insertDate).locale("fa").format("YYYY/MM/DD")}
                <h2> {item?.accept} </h2>

                <div>
                  <img
                    className="text-[#22445D] w-[1.5rem] h-[1.5rem] absolute top-[19.7rem] left-[6rem] lg:left-[7rem]"
                    src={dot}
                    alt=""
                  />
                </div>
              </div>
            );
          })}
        </div>
        ;
      </div>
    </>
  );
};

export { MyComments };
