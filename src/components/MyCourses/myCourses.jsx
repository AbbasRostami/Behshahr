import React, { useEffect, useState } from "react";
import { HeaderDashbord } from "../common/HeaderDashbord/HeaderDashbord";
import { MainDashbord } from "../common/MainDashbord/mainDashbord";

import nest from "../../assets/nest.svg";
import { getApi } from "../../core/api/api";
import { useParams } from "react-router-dom";
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
      <div className="w-[48rem] xl:w-[70rem] h-[43rem] my-[1rem] border-[1px] bg-[#ffff] rounded-2xl shadow-2xl">
        <div className="w-[45rem] xl:w-[66rem] h-[40.5rem] mx-[2rem] my-[1.3rem] bg-[#FBF6F6] border-[1px] rounded-lg shadow-2xl">
          <div className="text-nowrap text-[#22445D] text-[5px] text-xs xl:text-sm bg-[#A4F6DE] h-[4.5rem] rounded-lg flex justify-end rtl gap-14 xl:gap-24 py-[1.5rem] px-[4rem]">
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
              <div className=" mt-2 text-nowrap text-[#22445D] text-[12px] bg-[#ffff] w-[43rem] xl:w-[64rem] h-[3.5rem] rounded-2xl flex justify-end rtl gap-14 xl:gap-28 shadow-sm border-[1px] py-[1.2rem] px-[3rem] mx-[1rem]">
                <img
                  className="hidden xl:inline-block w-[4rem] h-[4rem] mx-[-4.5rem] my-[-1.2rem]"
                  src={nest}
                  alt=""
                />

                <h2> {item?.courseTitle} </h2>
                <h2> {item?.fullName} </h2>
                <h2>{item?.termName}</h2>
                <h2> {item?.levelName}</h2>
                <h2>
                  {moment(item?.lastUpdate).locale("fa").format("YYYY/MM/DD")}
                </h2>
                <h2> {item?.paymentStatus}</h2>
              </div>
            );
          })}

          <br></br>
        </div>
      </div>
    </>
  );
};

export { MyCourses };
