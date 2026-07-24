import React from "react";
import { Link } from "react-router-dom";
import topLogo from "./../../../assets/svg/Landing/toplogo.svg";

const TopDescription: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-green-300 to-gray-50 dark:bg-slate-900 dark:bg-none">
      {/* flex-col برای موبایل اضافه شد تا زیر هم بیفتن */}
      <div className="mx-auto flex flex-col items-center px-4 py-8 lg:flex-row lg:px-0 lg:py-0">
        {/* تو موبایل w-full شد که جا بشه، تو دسکتاپ همون سایز شما موند */}
        <img
          className="mb-8 w-full max-w-[300px] lg:mb-5 lg:ml-8 lg:w-[42rem] lg:max-w-none"
          src={topLogo}
          alt=""
        />

        {/* تو موبایل w-full و وسط‌چین شد، تو دسکتاپ همون w-1/3 موند */}
        <div className="mx-auto w-full text-center rtl dark:text-white lg:w-1/3 lg:text-right">
          <h1 className="mb-6 text-xl lg:mb-10 lg:text-2xl">آموزشگاه اچ وان</h1>

          <h3 className="text-justify leading-7 lg:leading-8">
            لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه
            دهندگان وب، تایپوگراف ها و طراحان استفاده می شود. تکه های لاتین متن
            نشان می دهد که یک پروژه در حال توسعه است. لورم اپسوم فقط برای توسعه
            دهندگان وب نیست. طراحان گرافیک نیز از آن با نرم افزارهای مختلفی
            مانند فوتوشاپ استفاده می کنند.
          </h3>

          {/* حاشیه‌های ثابت (mx-[8rem]) حذف شد تا تو موبایل خراب نشه، جاش با flex وسط‌چین شد */}
          <div className="mt-8 flex justify-center lg:mt-[50px] lg:justify-start">
            <Link to="/courses-list">
              <button className="h-[45px] w-[130px] rounded-full bg-[#12926C] text-white dark:bg-gray-800 dark:hover:bg-gray-700 lg:h-[60px] lg:w-[150px]">
                شروع یادگیری
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export { TopDescription };
