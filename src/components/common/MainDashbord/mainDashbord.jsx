import React from 'react'
import { Link } from "react-router-dom";

import counter from "../../assets/counter.svg";
import author2 from "../../assets/author2.svg";
import camera from "../../assets/camera.svg";
import reserved from "../../assets/reserved.svg";
import heart from "../../assets/heart.svg";
import massage from "../../assets/massage.svg";
import key2 from "../../assets/key2.svg";
import home2 from "../../assets/home2.svg";
import exist from "../../assets/exist.svg";

const MainDashbord = () => {
  return (
    <div className="w-[20rem] h-[45rem] bg-[#A4F6DE]">
    <div className="w-[3.2rem] h-[3.2rem] flex flex-nowrap gap-5 rounded-full bg-[#158B68] mt-[2rem] mx-[4rem] my-[1.5rem]">
      <img
        className="h-[1.8rem] mx-[0.7rem] mt-[0.7rem]"
        src={counter}
        alt=""
      />

      <h2 className="text-[#158B68] text-xl text-nowrap top-[3rem] right-[9rem]">
        پیشخوان
      </h2>
    </div>

    <div className="w-[3.2rem] h-[3.2rem] flex flex-nowrap gap-5 rounded-full bg-[#158B68]  mx-[4rem] my-[1.5rem]">
      <img
        className="w-[1.8rem] h-[1.8rem] mx-[0.7rem] my-[0.7rem]"
        src={author2}
        alt=""
      />

      <Link to="/editProfile">
      <h2 className="text-[#158B68] text-xl text-nowrap top-[7.5rem] right-[9rem]">
        ویرایش پروفایل
      </h2>
      </Link>
    </div>

    <div className="w-[3.2rem] h-[3.2rem] flex flex-nowrap gap-5 rounded-full bg-[#158B68] mx-[4rem] my-[1.5rem]">
      <img
        className="w-[1.8rem] h-[1.8rem] mx-[0.7rem] my-[0.7rem]"
        src={camera}
        alt=""
      />

      <Link to="/myCourses">
        <h2 className="text-[#158B68] text-xl text-nowrap top-[11.5rem] right-[9rem]">
          دوره های من
        </h2>
      </Link>
    </div>

    <div className="w-[3.2rem] h-[3.2rem] flex flex-nowrap gap-5 rounded-full bg-[#158B68] mx-[4rem] my-[1.5rem]">
      <img
        className="h-[1.8rem] mx-[0.7rem] my-[0.7rem]"
        src={reserved}
        alt=""
      />

      <Link to="/myReserveCourses">
        <h2 className="text-[#158B68] text-xl text-nowrap top-[15.5rem] right-[9rem]">
          دوره های رزرو
        </h2>
      </Link>
    </div>

    <div className="w-[3.2rem] h-[3.2rem] flex flex-nowrap gap-5 rounded-full bg-[#158B68] mx-[4rem] my-[1.5rem]">
      <img
        className="w-[1.8rem] h-[1.8rem] mx-[0.7rem] my-[0.7rem]"
        src={heart}
        alt=""
      />

      <Link to="/favorites">
        <h2 className="text-[#158B68] text-xl text-nowrap top-[19.5rem] right-[9rem]">
          مورد علاقه ها
        </h2>
      </Link>
    </div>

    <div className="w-[3.2rem] h-[3.2rem] flex flex-nowrap gap-5 rounded-full bg-[#158B68] mx-[4rem] my-[1.5rem]">
      <img
        className="h-[1.8rem] mx-[0.7rem] my-[0.7rem]"
        src={massage}
        alt=""
      />

      <Link to="/myComments">
        <h2 className="text-[#158B68] text-xl text-nowrap top-[23.5rem] right-[9rem]">
          نظرات من
        </h2>
      </Link>
    </div>

    <div className="w-[3.2rem] h-[3.2rem] flex flex-nowrap gap-5 rounded-full bg-[#158B68] mx-[4rem] my-[1.5rem]">
      <img
        className="h-[1.8rem] mx-[0.7rem] my-[0.7rem]"
        src={key2}
        alt=""
      />

      <Link to="/changePassword">
        <h2 className="text-[#158B68] text-xl text-nowrap top-[27.6rem] right-[9rem]">
          تغییر رمز
        </h2>
      </Link>
    </div>

    <div className="w-[3.2rem] h-[3.2rem] flex flex-nowrap gap-5 rounded-full bg-[#158B68] mx-[4rem] mb-[1rem] my-[2.6rem]">
      <img
        className="h-[1.8rem] mx-[0.7rem] my-[0.7rem]"
        src={home2}
        alt=""
      />

      <h2 className="text-[#158B68] text-xl text-nowrap top-[37.5rem] right-[9rem]">
        بازگشت به خانه
      </h2>
    </div>

    <div className="w-[3.2rem] h-[3.2rem] flex flex-nowrap gap-5 rounded-full bg-[#158B68] mx-[4rem]">
      <img
        className="h-[1.8rem] mx-[0.7rem] my-[0.7rem]"
        src={exist}
        alt=""
      />

      <h2 className="text-[#158B68] text-xl text-nowrap top-[41.5rem] right-[9rem]">
        خروج
      </h2>
    </div>
  </div>
  )
}

export {MainDashbord}