import React, { useEffect, useState } from "react";
import recycle from "../../assets/recycle.svg";
import nest from "../../assets/nest.svg";
import { getApi } from "../../core/api/api";
import moment from "jalali-moment";

const Favorites = () => {
  const [data, setData] = useState([]);
  const getFavorites = async () => {
    const path = `/SharePanel/GetMyFavoriteCourses`;
    const response = await getApi({ path });
    console.log(response?.data?.favoriteCourseDto);
    setData(response?.data?.favoriteCourseDto);
  };
  useEffect(() => {
    getFavorites();
  }, []);

  return (
    <>
      <div className="w-[45rem] lg:w-[70rem] h-[43rem] my-[1rem] border-[1px] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl">
        <div className="text-nowrap mt-6 mr-6 lg:mr-20 ">
          <button className="bg-[#A4F6DE] dark:bg-gray-900 w-[21rem] lg:w-[30rem] h-[3rem] text-[#22445D] dark:text-white text-lg">
            دوره های مورد علاقه من
          </button>
          <button className="bg-[#ffff] dark:bg-gray-700 border-[2px] border-[#A4F6DE] w-[21rem] lg:w-[30rem] h-[3rem] text-[#22445D] dark:text-white text-lg">
            مقالات مورد علاقه من
          </button>
        </div>

        <div className="w-[43rem] lg:w-[66rem] h-[35rem] mx-auto my-[2rem] bg-[#FBF6F6] dark:bg-gray-700 border-[1px] rounded-lg shadow-2xl">
          <div className="text-nowrap text-[#22445D] dark:text-white text-[5px] text-xs lg:text-sm bg-[#A4F6DE] dark:bg-gray-900 h-[4.5rem] rounded-lg flex justify-evenly rtl gap-14 lg:gap-40 py-[1.5rem] px-[4rem]">
            <h1>نام دوره</h1>
            <h1>نوع دوره</h1>
            <h1>سطح دوره</h1>
            <h1>تاریخ به روز رسانی</h1>
            <h1>حذف</h1>
          </div>
          <br></br>
          {data?.map((data) => {
            return (
              <div className="mt-2 text-nowrap text-[#22445D] text-[12px] bg-[#ffff] w-[43rem] xl:w-[64rem] h-[3.5rem] rounded-2xl flex justify-evenly rtl gap-14 xl:gap-28  shadow-sm border-[1px] py-[1.2rem] ">
                <h2> {data?.courseTitle}</h2>
                <h2>{data?.typeName}</h2>
                <h2> {data?.levelName} </h2>
                {moment(data?.lastUpdate).locale("fa").format("YYYY/MM/DD")}
                <button className="bg-[#ffff] w-[2rem] h-[2rem] my-[-0.5rem] mx-[-0.2rem]">
                  <img
                    className="text-[#22445D] h-[1.5rem] absolute top-[19.7rem] left-[6rem] xl:left-[9rem]"
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

export { Favorites };
