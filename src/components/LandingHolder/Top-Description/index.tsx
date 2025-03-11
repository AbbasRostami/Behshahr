import React from "react";
import topLogo from "./../../../assets/svg/Landing/toplogo.svg";
import { Link } from "react-router-dom";

const TopDescription: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-green-300 to-gray-50 dark:dark:bg-slate-900 dark:bg-none ">
      <div className=" mx-auto flex items-center">
        <div className="mb-5">
          <img
            className="w-80 lg:w-[42rem] mx-auto ml-8"
            src={topLogo}
            alt=""
          />
        </div>

        <div className="w-1/3 mx-auto rtl dark:text-white">
          <h1 className="text-lg lg:text-2xl my-[2rem] lg:mb-10">
            آموزشگاه اچ وان
          </h1>
          <h3 className="text-justify leading-6 lg:leading-8">
            لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه
            دهندگان وب، تایپوگراف ها و طراحان استفاده می شود. تکه های لاتین متن
            نشان می دهد که یک پروژه در حال توسعه است. لورم اپسوم فقط برای توسعه
            دهندگان وب نیست. طراحان گرافیک نیز از آن با نرم افزارهای مختلفی
            مانند فوتوشاپ استفاده می کنند.
          </h3>
          <Link to="/courses-list">
            <button className="w-[130px] lg:w-[150px] h-[45px] lg:h-[60px] mx-[8rem] lg:mx-[2rem] text-white bg-[#12926C] dark:bg-gray-800 dark:hover:bg-gray-700 rounded-full my-[2rem] lg:mt-[50px]">
              شروع یادگیری
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export { TopDescription };
