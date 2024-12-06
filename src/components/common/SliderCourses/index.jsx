import React, { useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import person from "./../../../assets/svg/download.png";

import courses1 from "./../../../assets/svg/Landing/courses1.svg";
import dislike from "./../../../assets/svg/Landing/CoursesDisLike.svg";
import favorite from "./../../../assets/svg/Landing/CoursesFavo.svg";
import like from "./../../../assets/svg/Landing/CoursesLike.svg";
import starRating from "./../../../assets/svg/Landing/StarRating.svg";
import line from "./../../../assets/svg/Landing/Line.svg";
import { useEffect } from "react";
import { getApi, postApi } from "../../../core/api/api";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Hidden } from "@mui/material";

const CoursesSlider = () => {
  const [courses, setcourses] = useState([]);

  const getCourses = async () => {
    const path = `/Home/GetCoursesWithPagination`;
    const response = await getApi({ path });
    // console.log(response.data?.courseFilterDtos);
    if (response) {
      setcourses(response.data?.courseFilterDtos);
    }
  };
  useEffect(() => {
    getCourses();
  }, []);

  const addReserve = async (id) => {
    console.log(id);

    const body = {
      courseId: id,
    };
    const path = `/CourseReserve/ReserveAdd`;
    const response = await postApi({ path, body });
    if (response.data.success) {
      toast.success("دوره شما با موفقیت رزرو شد.");
    }
  };

  return (
    <>
      <div class="text-center leading-10 mt-24 dark:text-white">
        <p class="text-[35px] font-bold">دوره های ما</p>
        <p class="leading-10">ساختن دنیایی بهتر، یک دوره در یک زمان</p>
      </div>

      <Swiper
  slidesPerView={1}
  spaceBetween={20}
  navigation={true}
  modules={[Navigation]}
  className="mySwiper h-[40rem]"
  breakpoints={{

    1024: {
      slidesPerView: 3, 
    },

    768: {
      slidesPerView: 3, 
    },

    640: {
      slidesPerView: 2, 
    },
  }}
>
        {courses?.map((item, index) => {
          return (
            <SwiperSlide>
              <div className="mt-16 mx-auto lg:mx-16 flex justify-around items-center rounded-3xl ">
                <div className="relative transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 ... hover:bg-amber-100 p-10 text-center rounded-md mt-11 bg-[#FBF6F6] dark:bg-gray-800 shadow-[9px_9px_12px_3px_rgba(0,_0,_0,_0.1)] text-TextGreen h-[390px] lg:h-[480px] w-[215px] lg:w-[380px]">
                  <div className="hidden lg:inline-block absolute top-[-80px] left-[110px]">
                    <img src={courses1} alt="" />
                  </div>

                  <div className="flex justify-between gap-20 items-center mt-1 lg:mt-10">
                    <div className="flex justify-center items-center hidden lg:flex gap-1">
                      <div>
                        <img src={like} alt="" />
                        <p>{item?.likeCount}</p>
                      </div>
                      <div>
                        <img className="mx-2" src={dislike} alt="" />
                        <p>{item?.dissLikeCount}</p>
                      </div>
                      <div>
                        <img src={favorite} alt="" />
                        <p>{item?.currentRegistrants}</p>
                      </div>
                    </div>

                    <button class="text-TextGreen bg-[#BFF4E4] rounded-lg cursor-pointer mx-auto p-2">
                      {item?.statusName}
                    </button>
                  </div>

                  <p className="rtl mt-2 text-right lg:mt-6 text-nowrap text-[#1A1E21] mx-auto text-lg lg:text-xl dark:text-white">
                    {item?.title}
                  </p>

                  <div className="flex flex-nowrap  justify-between items-center mt-2 lg:mt-5 dark:text-white">

                    <div className="flex justify-center items-center">
                      <img src={starRating} alt="" />
                      <p className="ml-2">{item?.currentRegistrants}</p>
                    </div>

                    <div className="flex rtl  justify-between items-center mx-[-2rem] ">
                      <img
                        className="h-6 w-11 rounded-full lg:h-[3rem]"
                        src={person}
                        alt=""
                      />
                      <p className=" truncate text-xs w-40 lg:text-lg mr-1">
                        {item?.teacherName}
                      </p>
                    </div>
                    
                  </div>

                  <p className="rtl mt-3 ml-28 text-right text-nowrap text-[#41A789] text-xs dark:text-white ">
                    {" "}
                    {item?.currentRegistrants} ساعت سخنرانی{" "}
                  </p>

                  <p className="rtl mt-5 truncate ... leading-5 text-[#6D6767] text-xs text-right dark:text-white">
                    {item?.describe}{" "}
                  </p>

                  <img className="mt-5 " src={line} alt="" />

                  <div className="flex justify-between gap-2 lg:gap-0 items-center mt-5 dark:text-white">
                    <p className="text-sm text-PriceRed rtl">
                      {item?.cost} تومان
                    </p>
                    <p className="text-sm text-nowrap">: هزینه تمام دوره</p>
                  </div>

                  <div className="flex justify-between items-center w-[18rem] h-[2.5rem] mt-6 lg:mt-3 -ml-3 lg:ml-2">
                    <button
                      onClick={() => addReserve(item.courseId)}
                      className="bg-[#5BE1B9] dark:bg-gray-900 dark:border-green-600 dark:border dark:text-white rounded-xl w-[10rem] h-[2.5rem] mr-4"
                    >
                      رزرو دوره
                    </button>

                    <button className=" hidden  lg:inline-block bg-[#eeeeee] dark:bg-gray-800 dark:text-white rounded-xl w-[10rem] h-[2.5rem] border-solid border border-green-600">
                      <Link
                        to={
                          localStorage.getItem("token")
                            ? `/courses-details/${item?.courseId}`
                            : "/login"
                        }
                      >
                        جزِئیات دوره
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="flex justify-center items-center ">
       <Link to="/courses-list"> <button class="w-[220px] h-[60px] text-white bg-[#12926C] dark:bg-gray-800 rounded-full ">
          مشاهده دوره های بیشتر
        </button></Link>
      </div>
    </>
  );
};

export { CoursesSlider };
