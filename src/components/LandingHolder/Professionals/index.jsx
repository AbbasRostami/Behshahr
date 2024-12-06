import React, { useEffect, useState } from "react";
import socials from "./../../../assets/svg/Landing/Socials.svg";
import { getApi } from "../../../core/api/api";

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

        {Teachers?.slice(3, 7).map((item, index) => (
          <div className="flex justify-center items-center w-[300px] h-[380px] mt-36 ">
            <div className="flex flex-col items-center ">
              <img className=" rounded-2xl" src={item?.pictureAddress} alt="" />
              <p className="text-[#086CB5] text-bold dark:text-white text-sm mt-5">
                {item?.fullName}
              </p>
              <p className="text-[#21394B] px-14 rtl text-xs mt-6 text-center dark:text-white	">
                استاد برنامه نویس
              </p>
              <img className="m-3" src={socials} alt="" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export { Professionals };
