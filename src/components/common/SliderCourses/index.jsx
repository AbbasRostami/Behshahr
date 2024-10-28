import React, { useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import courses1 from "./../../../assets/svg/Landing/courses1.svg";
import dislike from "./../../../assets/svg/Landing/CoursesDisLike.svg";
import favorite from "./../../../assets/svg/Landing/CoursesFavo.svg";
import like from "./../../../assets/svg/Landing/CoursesLike.svg";
import profileimg from "./../../../assets/svg/Landing/ProfileImage.svg";
import starRating from "./../../../assets/svg/Landing/StarRating.svg";
import line from "./../../../assets/svg/Landing/Line.svg";
import { useEffect } from "react";
import { getApi } from "../../../core/api/api";
import { Link } from "react-router-dom";

const CoursesSlider = () => {
  const [courses, setcourses] = useState([]);

  const getCourses = async () => {
    const path = `/Home/GetCoursesWithPagination?PageNumber=1&RowsOfPage=10&SortingCol=Active&SortType=DESC&TechCount=0`;
    const response = await getApi({ path });
    // console.log(response.data?.courseFilterDtos);
    if (response) {
      setcourses(response.data?.courseFilterDtos);
    }
  };
  useEffect(() => {
    getCourses();
  }, []);

  return (
    <>
      <div class="text-center leading-10 mt-24 dark:text-white">
        <p class="text-[35px] font-bold">دوره های ما</p>
        <p class="leading-10">ساختن دنیایی بهتر، یک دوره در یک زمان</p>
      </div>

      <Swiper
        slidesPerView={3}
        spaceBetween={15}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper h-[40rem]"
      >
        {courses?.map((item, index) => {
          return (
            <SwiperSlide>
              <div className="mt-16 mx-auto lg:mx-16 flex justify-around items-center rounded-3xl ">
                <div className="relative p-10 text-center rounded-md mt-11 bg-[#FBF6F6] dark:bg-gray-800 shadow-[9px_9px_12px_3px_rgba(0,_0,_0,_0.1)] text-TextGreen h-[390px] lg:h-[490px] w-[215px] lg:w-[370px]">
                  <div className="absolute top-[-80px] left-[110px]">
                    <img src={courses1} alt="" />
                  </div>

                  <div className="flex justify-between items-center mt-1 lg:mt-10">
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

                  <p className="rtl mt-2 lg:mt-6 text-nowrap text-[#1A1E21] mx-auto text-lg lg:text-xl dark:text-white">
                    {item?.title}
                  </p>

                  <div className="flex flex-nowrap justify-between items-center mt-2 lg:mt-5 dark:text-white">
                    <div className="flex justify-center items-center">
                      <img src={starRating} alt="" />
                      <p className="ml-2">{item?.currentRegistrants}</p>
                    </div>
                    <div className="flex rtl justify-between items-center mx-[-2rem] lg:mx-0">
                      <img
                        className="h-[2rem] lg:h-[3rem]"
                        src={profileimg}
                        alt=""
                      />
                      <p className="text-xs lg:text-lg mr-2">
                        {item?.teacherName}
                      </p>
                    </div>
                  </div>

                  <p className="rtl mt-3 ml-28 text-nowrap text-[#41A789] text-xs dark:text-white ">
                    {" "}
                    {item?.currentRegistrants} ساعت سخنرانی ( 190 ساعت ){" "}
                  </p>

                  <p className="rtl mt-5 truncate ... leading-5 text-[#6D6767] text-xs text-right text-justify dark:text-white">
                    {item?.describe}{" "}
                  </p>

                  <img className="mt-5 " src={line} alt="" />

                  <div className="flex justify-between gap-2 lg:gap-0 items-center mt-5 dark:text-white">
                    <p className="text-sm text-PriceRed rtl">{item?.cost}</p>
                    <p className="text-sm text-nowrap">: هزینه تمام دوره</p>
                  </div>

                  <Link to="/register">
                    {" "}
                    <button class="transition ease-in-out delay-150 hover:text-yellow-950 hover:text-lg hover:-translate-y-1 hover:scale-110  duration-300 ... w-[200px] lg:w-[240px] h-[30px] lg:h-[40px] text-white bg-BgGreen rounded-lg mx-[-4rem] lg:mx-0 mt-4 lg:mt-6 ">
                      الان ثبت نام کن
                    </button>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="flex justify-center items-center mt-2 ">
        <button class="w-[220px] h-[60px] text-white bg-[#12926C] dark:bg-gray-800 rounded-full ">
          مشاهده دوره های بیشتر
        </button>
      </div>
    </>
  );
};

export { CoursesSlider };
