import React from "react";
import { Link } from "react-router-dom";
import { PiXCircleFill } from "react-icons/pi";

import reserved from "../../../assets/reserved.svg";
import massage from "../../../assets/massage.svg";
import counter from "../../../assets/counter.svg";
import author2 from "../../../assets/author2.svg";
import camera from "../../../assets/camera.svg";
import home2 from "../../../assets/home2.svg";
import heart from "../../../assets/heart.svg";
import exist from "../../../assets/exist.svg";
import key2 from "../../../assets/key2.svg";

const MainDashbord = ({ showMenu, setShowMenu }) => {
  return (
    <div
      className={`w-[15rem] transition-all duration-700 fixed top-0 opacity-0 invisible right-[-300px] lg:opacity-100 lg:right-0 lg:visible lg:relative h-[45rem] bg-[#A4F6DE] dark:bg-gray-700 lg:w-[20rem] ${
        showMenu ? "!opacity-100 !visible !right-0" : ""
      }`}
    >
      <div className="flex items-center justify-between px-4 py-6 lg:hidden">
        <h3 className="text-xl dark:text-white">منو</h3>
        <button onClick={() => setShowMenu(false)}>
          <PiXCircleFill size={26} className="text-[#158B68]" />
        </button>
      </div>
      <div className="w-[2.5rem] lg:w-[3.2rem] h-[2.5rem] lg:h-[3.2rem] flex flex-nowrap gap-5 rounded-full bg-[#158B68]  mt-[2rem] mx-[0.5rem] lg:mx-[4rem] my-[1.5rem]">
        <img
          className="w-[1.3rem] lg:w-[1.8rem] h-[1.3rem] lg:h-[1.8rem] mx-[0.7rem] mt-[0.7rem] "
          src={counter}
          alt=""
        />

        <Link to="/dashbord">
          <h2 className="text-[#158B68] dark:text-white text-lg lg:text-lg text-nowrap top-[3rem] right-[9rem]">
            پیشخوان
          </h2>
        </Link>
      </div>

      <div className="w-[2.5rem] lg:w-[3.2rem] h-[2.5rem] lg:h-[3.2rem] flex flex-nowrap gap-5 rounded-full bg-[#158B68] mx-[0.5rem] lg:mx-[4rem] my-[1.5rem]">
        <img
          className="w-[1.3rem] lg:w-[1.8rem] h-[1.3rem] lg:h-[1.8rem] mx-[0.7rem] my-[0.7rem]"
          src={author2}
          alt=""
        />

        <Link to="/editProfile">
          <h2 className="text-[#158B68] dark:text-white text-lg lg:text-lg text-nowrap top-[7.5rem] right-[9rem]">
            ویرایش پروفایل
          </h2>
        </Link>
      </div>

      <div className="w-[2.5rem] lg:w-[3.2rem] h-[2.5rem] lg:h-[3.2rem] flex flex-nowrap gap-5 rounded-full bg-[#158B68] mx-[0.5rem] lg:mx-[4rem] my-[1.5rem]">
        <img
          className="w-[1.3rem] lg:w-[1.8rem] h-[1.3rem] lg:h-[1.8rem] mx-[0.7rem] my-[0.7rem]"
          src={camera}
          alt=""
        />

        <Link to="/myCourses">
          <h2 className="text-[#158B68] dark:text-white text-lg lg:text-lg text-nowrap top-[11.5rem] right-[9rem]">
            دوره های من
          </h2>
        </Link>
      </div>

      <div className="w-[2.5rem] lg:w-[3.2rem] h-[2.5rem] lg:h-[3.2rem] flex flex-nowrap gap-5 rounded-full bg-[#158B68] mx-[0.5rem] lg:mx-[4rem] my-[1.5rem]">
        <img
          className="w-[1.3rem] lg:w-[1.8rem] h-[1.3rem] lg:h-[1.8rem] mx-[0.7rem] my-[0.7rem]"
          src={reserved}
          alt=""
        />

        <Link to="/myReserveCourses">
          <h2 className="text-[#158B68] dark:text-white text-lg lg:text-lg text-nowrap top-[15.5rem] right-[9rem]">
            دوره های رزرو
          </h2>
        </Link>
      </div>

      <div className="w-[2.5rem] lg:w-[3.2rem] h-[2.5rem] lg:h-[3.2rem] flex flex-nowrap gap-5 rounded-full bg-[#158B68] mx-[0.5rem] lg:mx-[4rem] my-[1.5rem]">
        <img
          className="w-[1.3rem] lg:w-[1.8rem] h-[1.3rem] lg:h-[1.8rem] mx-[0.7rem] my-[0.7rem]"
          src={heart}
          alt=""
        />

        <Link to="/favorites">
          <h2 className="text-[#158B68] dark:text-white text-lg lg:text-lg text-nowrap top-[19.5rem] right-[9rem]">
            مورد علاقه ها
          </h2>
        </Link>
      </div>

      <div className="w-[2.5rem] lg:w-[3.2rem] h-[2.5rem] lg:h-[3.2rem] flex flex-nowrap gap-5 rounded-full bg-[#158B68] mx-[0.5rem] lg:mx-[4rem] my-[1.5rem]">
        <img
          className="w-[1.3rem] lg:w-[1.8rem] h-[1.3rem] lg:h-[1.8rem] mx-[0.7rem] my-[0.7rem]"
          src={massage}
          alt=""
        />

        <Link to="/myComments">
          <h2 className="text-[#158B68] dark:text-white text-lg lg:text-lg text-nowrap top-[23.5rem] right-[9rem]">
            نظرات من
          </h2>
        </Link>
      </div>

      <div className="w-[2.5rem] lg:w-[3.2rem] h-[2.5rem] lg:h-[3.2rem] flex flex-nowrap gap-5 rounded-full bg-[#158B68] mx-[0.5rem] lg:mx-[4rem] my-[1.5rem]">
        <img
          className="w-[1.3rem] lg:w-[1.8rem] h-[1.3rem] lg:h-[1.8rem] mx-[0.7rem] my-[0.7rem]"
          src={key2}
          alt=""
        />

        <Link to="/changePassword">
          <h2 className="text-[#158B68] dark:text-white text-lg lg:text-lg text-nowrap top-[27.6rem] right-[9rem]">
            تغییر رمز
          </h2>
        </Link>
      </div>

      <div className="w-[2.5rem] lg:w-[3.2rem] h-[2.5rem] lg:h-[3.2rem] flex flex-nowrap gap-5 rounded-full bg-[#158B68] mx-[0.5rem] lg:mx-[4rem] mb-[1rem] my-[2.6rem]">
        <img
          className="w-[1.3rem] lg:w-[1.8rem] h-[1.3rem] lg:h-[1.8rem] mx-[0.7rem] my-[0.7rem]"
          src={home2}
          alt=""
        />

        <h2 className="text-[#158B68] dark:text-white text-lg lg:text-lg text-nowrap top-[37.5rem] right-[9rem]">
          بازگشت به خانه
        </h2>
      </div>

      <div className="w-[2.5rem] lg:w-[3.2rem] h-[2.5rem] lg:h-[3.2rem] flex flex-nowrap gap-5 rounded-full bg-[#158B68] mx-[0.5rem] lg:mx-[4rem]">
        <img
          className="w-[1.3rem] lg:w-[1.8rem] h-[1.3rem] lg:h-[1.8rem] mx-[0.7rem] my-[0.7rem]"
          src={exist}
          alt=""
        />

        <h2 className="text-[#158B68] dark:text-white text-lg lg:text-lg text-nowrap top-[41.5rem] right-[9rem]">
          خروج
        </h2>
      </div>
    </div>
  );
};

export { MainDashbord };
