import LineFooter from "./../../../assets/svg/Landing/LineFooter.svg";
import logoLanding from "./../../../assets/svg/Landing/logosite.svg";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-green-300 to-gray-50 mt-16 h-[300px]  dark:dark:bg-slate-900 dark:bg-none  ">
        <div className="flex justify-around items-start pt-8 text-[#444444E5] dark:text-white">
          <div className="rtl">
            <p>اخبار آموزشگاه</p>
            <p className="mt-5">
              برای دریافت اخبار بروز آموزشگاه ایمیل خود را وارد کنید.
            </p>
            <div className="pt-14">
              <input
                className="w-[200px] pr-2 h-[40px] rounded-r-lg"
                type="text"
                placeholder="example@gmail.com"
              />
              <button
                className="w-[60px] h-[40px] rounded-l-lg
                                     text-[#21394B] bg-BgGreen dark:bg-gray-800 dark:text-white right-0 bottom-0"
              >
                ثبت
              </button>
            </div>
          </div>

          <ul className="rtl space-y-3">
            <li>آموزشگاه</li>
            <li className="mt-5">درباره ما</li>
            <li>ارتباط با ما</li>
            <li>قوانین آموزشگاه</li>
          </ul>

          <ul className="rtl space-y-3">
            <li>خدمات</li>
            <li className="mt-5">آموزش حرفه ای</li>
            <li>مشاوره رایگان</li>
            <li>فرصت های شغلی</li>
          </ul>
        </div>

        <img className="mt-8 pl-40" src={LineFooter} alt="" />

        <div className="flex justify-around items-center mt-4">
          <div className="flex justify-around lg:justify-center gap-4 items-center mr-96">
            <FaFacebook size={25} className=" cursor-pointer" href="#" />
            <FaTwitter size={25} className=" cursor-pointer" href="#" />
            <FaInstagram size={25} className=" cursor-pointer" href="#" />
          </div>

          <div className="flex justify-center text-justify items-center dark:text-white">
            <p className="">
              © .کلیه حقوق این وب سایت برای آکادمی اچ وان محفوظ است
            </p>
            <img className="dark:fill-[#ff0000]" src={logoLanding} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export { Footer };
