import React, { useEffect, useState } from "react";
import { getApi } from "../../core/api/api";
import moment from "jalali-moment";

const MyCourses = () => {
  const [data, setData] = useState([]);
  const getMyCourses = async () => {
    const path = `/SharePanel/GetMyCourses?PageNumber=1&RowsOfPage=10&SortingCol=DESC&SortType=LastUpdate&Query=s`;
    const response = await getApi({ path });
    console.log(response.data.listOfMyCourses);
    setData(response.data.listOfMyCourses);
  };
  useEffect(() => {
    getMyCourses();
  }, []);

  return (
    <>
      <div className="w-[45rem] lg:w-[70rem] h-[43rem] my-[1rem] border-[1px] bg-[#ffff] dark:bg-gray-800 rounded-2xl shadow-2xl">
        <div className="w-[43rem] lg:w-[66rem] h-[40.5rem] mx-auto my-[1.3rem] bg-[#FBF6F6] dark:bg-gray-700 border-[1px] rounded-lg shadow-2xl">
          <div className="text-nowrap text-[#22445D] dark:text-white text-[5px] text-xs lg:text-sm bg-[#A4F6DE] dark:bg-gray-900 h-[4.5rem] rounded-lg flex justify-evenly rtl gap-14 lg:gap- py-[1.5rem] px-[4rem]">
            <h1>نام دوره</h1>
            <h1>نام استاد</h1>
            <h1>نام ترم</h1>
            <h1>سطح دوره</h1>
            <h1>تاریخ شروع</h1>
            <h1>وضعیت پرداخت</h1>
          </div>
          <br></br>
          {data.map((item) => {
            return (
              <div className=" mt-2 text-nowrap text-[#22445D] text-[12px] bg-[#ffff] w-[43rem] xl:w-[64rem] h-[3.5rem] rounded-2xl flex justify-evenly rtl gap-14 xl:gap-4 shadow-sm border-[1px] py-[1.2rem] px-[3rem] mx-[1rem]">
                <h2 className="w-[10rem] mr-3"> {item?.courseTitle} </h2>
                <h2 className="w-[10rem]"> {item?.fullName} </h2>
                <h2 className="w-[10rem]">{item?.termName}</h2>
                <h2 className="w-[10rem]"> {item?.levelName}</h2>
                <h2 className="w-[10rem]">
                  {moment(item?.lastUpdate).locale("fa").format("YYYY/MM/DD")}
                </h2>
                <h2 className="w-[10rem] text-center pl-10"> {item?.paymentStatus}</h2>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export { MyCourses };
