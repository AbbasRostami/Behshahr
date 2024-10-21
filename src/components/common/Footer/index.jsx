import React from "react";
import LineFooter from "./../../../assets/svg/Landing/LineFooter.svg";
import logoLanding from "./../../../assets/svg/Landing/logosite.svg";
import tel from "./../../../assets/svg/Landing/TelegramF.svg";
import skype from "./../../../assets/svg/Landing/SkypeF.svg";
import facebook from "./../../../assets/svg/Landing/FacebookF.svg";

const Footer = () => {
  return (
    <>
      <div class="bg-[#A4F6DE] mt-16 h-[280px]  dark:bg-slate-900 ">
        <div className="flex justify-around items-start pt-8 text-[#444444E5] dark:text-white">
          <div className="rtl">
            <p className="hover:underline">اخبار آموزشگاه</p>
            <p className="mt-5">
              برای دریافت اخبار بروز آموزشگاه ایمیل خود را وارد کنید.
            </p>
            <div className="mx-auto mt-4">
                  <div className="flex justify-center item ">
                    <input
                      type="text"
                      className=" w-full p-4  text-sm border rounded-r-lg bg-gray-50"
                      placeholder="example@gmail.com"
                      required
                    />
                    <button
                      type="submit"
                      className="text-white dark:bg-gray-800 dark:text-white rounded-l-lg bg-[#41A789] hover:bg-emerald-600  font-medium text-sm px-4 py-2"
                    >
                      ثبت
                    </button>
                  </div>
                </div>
          </div>

          <div className="rtl">
            <p className="hover:underline">آموزشگاه</p>
            <p className="mt-5 hover:underline">درباره ما</p>
            <p className="hover:underline">ارتباط با ما</p>
            <p className="hover:underline">قوانین آموزشگاه</p>
          </div>

          <div className="rtl ">
            <p className="hover:underline">خدمات</p>
            <p className="mt-5">آموزش حرفه ای</p>
            <p className="hover:underline">مشاوره رایگان</p>
            <p className="hover:underline">فرصت های شغلی</p>
          </div>
        </div>

        <img className="mt-8 pl-40" src={LineFooter} alt="" />

        <div className="flex justify-around items-center mt-4">
          <div className="flex justify-center items-center mr-96">
            <img className="dark:fill-slate-200 cursor-pointer" src={tel} alt="#" />
            <img className="dark:fill-slate-200 cursor-pointer mx-3" src={skype} alt="#" />
            <img className="dark:fill-slate-200 cursor-pointer" src={facebook} alt="#" />
          </div>

          <div className="flex justify-center items-center dark:text-white">
            <p className="rtl hover:underline">
              کلیه حقوق این وب سایت برای آکادمی اچ وان محفوظ است.©
            </p>
            <img className='' src={logoLanding} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export { Footer };
