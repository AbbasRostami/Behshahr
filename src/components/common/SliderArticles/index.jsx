import React from "react";
import like from "./../../../assets/svg/Landing/coursesLike.svg";
import dislike from "./../../../assets/svg/Landing/CoursesDisLike.svg";
import favorite from "./../../../assets/svg/Landing/CoursesFavo.svg";
// import newsPic from "./../../../assets/svg/Landing/newspic.svg";
import line from "./../../../assets/svg/Landing/Line.svg";
import profileimg from "./../../../assets/svg/Landing/ProfileImage.svg";
import noimage from "./../../../assets/noimage.png";

import starRating from "./../../../assets/svg/Landing/StarRating.svg";
import { useEffect, useState } from "react";
import person from "./../../../assets/svg/download.png";
// import Swiper core and required modules
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { getApi } from "../../../core/api/api";
import { Link } from "react-router-dom";

const SliderArticles = () => {
  const [data, setData] = useState([]);

  const getArticles = async () => {
    const path = `/News`;
    const response = await getApi({ path });
    console.log("dskjhjh", response.data?.news);
    if (response) {
      setData(response.data?.news);
    }
  };
  useEffect(() => {
    getArticles();
  }, []);

  return (
    <>
      <div class="text-center leading-10 mt-14 dark:text-white">
        <br />
        <br />
        <br />
        <p class="text-[35px] font-bold">اخبار و مقالات</p>
        <p class="leading-10">ساختن دنیایی بهتر، یک دوره در یک زمان</p>
      </div>
      <br />
      <br />

      <Swiper
        slidesPerView={3}
        spaceBetween={40}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper h-[40rem]"
        breakpoints={{
          // حالت LG
          1024: {
            slidesPerView: 3, // یک اسلاید در حالت LG
          },
          // حالت MD
          768: {
            slidesPerView: 2, // دو اسلاید در حالت MD
          },
          // حالت پیش‌فرض (SM)
          640: {
            slidesPerView: 1, // سه اسلاید در حالت SM
          },
        }}
      >
        {data?.map((item, index) => {
          return (
            <SwiperSlide>
              <div className="flex justify-around items-center rounded-3xl ">
                <div className="relative hover:bg-amber-100 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 ... h-[420px] lg:h-[540px] w-[300px] lg:w-[370px] text-center rounded-[1.5rem] mt-11 dark:bg-gray-800 bg-[#FBF6F6] shadow-[9px_9px_12px_3px_rgba(0,_0,_0,_0.1)] text-TextGreen ">
                  <div className="h-64">
                    <img
                      className="mx-auto"
                      style={{ width: "100%", maxHeight: "230px", height:"100%" }}
                      // src={data.currentImageAddressTumb}
                      src={
                        item?.currentImageAddressTumb &&
                        /\.(jpg|jpeg|png|gif|webp)$/i.test(
                          item?.currentImageAddressTumb
                        )
                          ? item?.currentImageAddressTumb
                          : noimage
                      }
                      top
                    />
                  </div>

                  <div className="flex justify-between items-center mt-[-5rem] lg:mt-5 px-5">
                    <div className="flex justify-center items-center hidden lg:flex gap-1">
                      <div>
                        <img src={like} alt="" />
                        <p className="text-black dark:text-white hover:text-green-400">
                          {item?.currentLikeCount}
                        </p>
                      </div>

                      <div>
                        <img className="mx-2" src={dislike} alt="" />
                        <p className="text-black dark:text-white hover:text-green-400">
                          {item?.currentDissLikeCount}
                        </p>
                      </div>

                      <div>
                        <img src={favorite} alt="" />
                        <p className="text-black dark:text-white hover:text-green-400">
                          {item?.currentRate}
                        </p>
                      </div>
                    </div>

                    <button class="text-TextGreen truncate ... bg-[#BFF4E4] rounded-lg hidden lg:inline-block cursor-pointer p-2 w-auto-[120px]">
                      {item?.newsCatregoryName}
                    </button>
                  </div>

                  <p className="rtl truncate ...  mt-[-2rem] lg:mt-3 text-[#1A1E21] text-xl rtl text-right px-5 dark:text-white">
                    {item?.title}{" "}
                  </p>

                  <div className="flex justify-between items-center mt-5 px-5 dark:text-white">
                    <div className="flex justify-center items-center">
                      <img src={starRating} alt="" />
                      <p className="ml-2">{item?.currentRate}</p>
                    </div>

                    <div className="flex justify-between items-center">
                      <p className="mr-2"> {item?.addUserFullName} </p>

                      <img
                        className="h-6 w-11 rounded-full lg:h-[3rem]"
                        src={item?.addUserProfileImage}
                        alt=""
                      />
                    </div>
                  </div>

                  <p className="rtl mt-5 px-5 leading-5 text-[#6D6767] truncate ... text-xs text-right dark:text-white">
                    {item?.miniDescribe}
                  </p>

                  <img className="mt-5 px-5" src={line} alt="" />

                <Link to={localStorage.getItem('token') ? `/articles-details/${item?.id}` : '/login'}>  <p className="text-base  text-[#807A7A] mt-3 dark:text-white">
                    مشاهده جزئیات
                  </p></Link>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="flex justify-center items-center my-[-3rem] lg:mt-2 ">
        <Link to="/news-articles">
          <button class="w-[220px] h-[60px] text-white bg-[#12926C] rounded-full dark:bg-gray-800">
            مشاهده مقالات بیشتر
          </button>
        </Link>
      </div>
    </>
  );
};

export { SliderArticles };
