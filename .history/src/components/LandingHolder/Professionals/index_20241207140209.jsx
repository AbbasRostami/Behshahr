import React, { useEffect, useState } from "react";
import { getApi } from "../../../core/api/api";
import { FaBookReader, FaReact } from "react-icons/fa";
import { FaBookAtlas } from "react-icons/fa6";
const Professionals = () => {
  const [Teachers, setTeachers] = useState(null);

  const getTeachers = async (cont) => {
    const path = `/Home/GetTeachers`;
    const response = await getApi({ path });
    console.log(response?.data);
    if (response) {
      setTeachers(response.data);
      
    }
  };

  useEffect(() => {
    getTeachers();
  }, []);

  return (
    <>
      <div className="flex justify-center items-center gap-2 relative bg-gradient-to-br from-emerald-300/75 from-35% to-white h-[600px] dark:dark:bg-slate-900 dark:bg-none mt-16 ">
        <div class=" absolute top-[2rem] left-[15.5rem] lg:left-[39.5rem] text-nowrap text-center items-center ">
          <p class="text-[35px] font-bold text-black dark:text-white">
            حرفه ای های ما
          </p>
          <p class="leading-10 text-black dark:text-white">
            ساختن دنیایی بهتر، یک دوره در یک زمان
          </p>
        </div>

        {Teachers?.slice(4, 9).map((item, index) => (
          <div className="flex justify-center items-center w-[300px] h-[380px] mt-36 ">
            <div className="flex flex-col items-center ">
              <img className=" rounded-2xl" src={item?.pictureAddress} alt="" />
              <p className="text-black text-bold dark:text-white text-sm mt-5">
                {item?.fullName}
              </p>
              <div className=" mt-5 flex justify-between items-center w-16">
                <div>
                <FaBookAtlas className="dark:bg-zinc-300" size={28}/>
                <p className="ml-2 mt-1 dark:text-white">{item?.newsCount}</p>
                </div>
                <div>
                <FaBookReader className="dark:bg-zinc-300" size={28}/>
                <p className="ml-2 mt-1 dark:text-white">{item?.courseCounts}</p>
                </div>
              
              
              </div>
              
              <p className="text-[#21394B] px-14 rtl text-md mt-6 text-center dark:text-white	">
                استاد برنامه نویس
              </p>
             
            </div>
          </div>
        ))}
      </div>
     
    </>
  );
};

export { Professionals };
