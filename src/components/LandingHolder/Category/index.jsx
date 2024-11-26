import React from "react";
import categorty1 from "./../../../assets/svg/Landing/category1.svg";
import categorty2 from "./../../../assets/svg/Landing/category2.svg";
import categorty3 from "./../../../assets/svg/Landing/category3.svg";
import categorty4 from "./../../../assets/svg/Landing/category4.svg";
import categorty5 from "./../../../assets/svg/Landing/category5.svg";

const Category = () => {
  return (
    <>
      <div class="text-center leading-10 dark:text-white">
        <p class="text-[35px] font-bold mt-10">دسته بندی</p>
        <p class="leading-10">ما فرصت آماده شدن برای زندگی را فراهم می کنیم</p>
      </div>

      <div className="mt-16 mx-2 lg:mx-16 flex justify-around items-center gap-1 h-[230px] ">
        <div className="p-8 lg:p-10 text-center rounded-md transition ease-in-out hover:-translate-y-1 hover:scale-110  duration-500 ... dark:bg-gray-800 dark:text-white flex flex-col items-center bg-[#FBF6F6]  text-TextGreen">
          <img src={categorty1} alt="" />
          <p class="mt-4 rtl w-[4rem] text-black dark:text-white lg:w-full">
            دوره های طراحی UI/UX
          </p>
          <p className="font-medium text-2xl mt-5 text-black dark:text-white">
            28
          </p>
        </div>

        <div className="p-8 lg:p-10 text-center rounded-md transition ease-in-out hover:-translate-y-1 hover:scale-110  duration-500 ... dark:bg-gray-800 dark:text-white flex flex-col items-center bg-[#FBF6F6] text-TextGreen">
          <img src={categorty2} alt="" />
          <p class="mt-4 rtl w-[4rem] text-black dark:text-white lg:w-full">
            دوره های طراحی UI/UX
          </p>
          <p className="font-medium text-2xl mt-5 text-black dark:text-white">
            182
          </p>
        </div>

        <div className="p-8 lg:p-10 text-center rounded-md transition ease-in-out hover:-translate-y-1 hover:scale-110  duration-500 ... dark:bg-gray-800 dark:text-white flex flex-col items-center bg-[#FBF6F6] text-TextGreen">
          <img src={categorty3} alt="" />
          <p class="mt-4 rtl w-[4rem] text-black dark:text-white lg:w-full">
            دوره های طراحی UI/UX
          </p>
          <p className="font-medium text-2xl mt-5 text-black dark:text-white">
            81
          </p>
        </div>

        <div className="p-8 lg:p-10 text-center rounded-md transition ease-in-out hover:-translate-y-1 hover:scale-110  duration-500 ... dark:bg-gray-800 dark:text-white flex flex-col items-center bg-[#FBF6F6] text-TextGreen">
          <img src={categorty4} alt="" />
          <p class="mt-4 rtl w-[4rem] text-black dark:text-white lg:w-full">
            دوره های طراحی UI/UX
          </p>
          <p className="font-medium text-2xl mt-5 text-black dark:text-white">
            52
          </p>
        </div>

        <div className="p-8 lg:p-10 text-center rounded-md transition ease-in-out hover:-translate-y-1 hover:scale-110  duration-500 ... dark:bg-gray-800 dark:text-white flex flex-col items-center bg-[#FBF6F6] text-TextGreen">
          <img src={categorty5} alt="" />
          <p class="mt-4 rtl w-[4rem] text-black dark:text-white lg:w-full">
            دوره های طراحی UI/UX
          </p>
          <p className="font-medium text-2xl mt-5 text-black dark:text-white">
            52
          </p>
        </div>
      </div>
    </>
  );
};

export { Category };
