import like from "./../../../assets/svg/Landing/CoursesLike.svg";
import dislike from "./../../../assets/svg/Landing/CoursesDisLike.svg";
import favorite from "./../../../assets/svg/Landing/CoursesFavo.svg";
import line from "./../../../assets/svg/Landing/Line.svg";
import noimage from "./../../../assets/noimage.png";
import starRating from "./../../../assets/svg/Landing/StarRating.svg";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { getApi } from "../../../core/api/api";
import { Link } from "react-router-dom";
import { useNewsStore } from "../../../context/zustand/NewsProvider";


const SliderArticles = () => {

  const { fetchNews, News, loading  } = useNewsStore(); 

  useEffect(() => {
    fetchNews();
  }, []);
  
  if (loading) {
    return (
      <div className="flex justify-center items-center flex-wrap mt-10">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="w-[300px] lg:w-[370px] h-[300px] rounded-3xl bg-gray-200 dark:bg-gray-700 m-4 skeleton animate-pulse"
          >
            <div className="h-[230px] w-full" />
            <div className="p-5">
              <div className="h-6 w-2/3 mb-4" />
              <div className="h-4 w-full mb-2" />
              <div className="h-4 w-5/6" />
              <div className="flex justify-between items-center mt-5">
                <div className="h-10 w-10 rounded-full" />
                <div className="h-6 w-20" />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <>
      <div className="text-center leading-10 mt-14 dark:text-white">
        <p className="text-[35px] font-bold">اخبار و مقالات</p>
        <p className="leading-10">ساختن دنیایی بهتر، یک دوره در یک زمان</p>
      </div>

      <Swiper
        slidesPerView={3}
        spaceBetween={40}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper h-[40rem]"
        breakpoints={{
          1024: {
            slidesPerView: 3,
          },

          768: {
            slidesPerView: 2,
          },

          640: {
            slidesPerView: 1,
          },
        }}
      >
        {News?.map((item) => {
          return (
            <SwiperSlide>
              <div
                key={item.id}
                className="flex justify-around items-center rounded-3xl "
              >
                <div className="relative hover:bg-amber-100 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 ... h-[420px] lg:h-[540px] w-[300px] lg:w-[370px] text-center rounded-[1.5rem] mt-11 dark:bg-gray-800 bg-[#FBF6F6] shadow-[9px_9px_12px_3px_rgba(0,_0,_0,_0.1)] text-TextGreen ">
                  <div className="h-64">
                    <img
                      className="mx-auto"
                      style={{
                        width: "100%",
                        maxHeight: "230px",
                        height: "100%",
                      }}
                      src={
                        item?.currentImageAddressTumb &&
                        /\.(jpg|jpeg|png|gif|webp)$/i.test(
                          item?.currentImageAddressTumb
                        )
                          ? item?.currentImageAddressTumb
                          : noimage
                      }
                    />
                  </div>

                  <div className="flex justify-between items-center mt-[-5rem] lg:mt-5 px-5">
                    <div className="flex justify-center items-center lg:flex gap-1">
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

                    <button className="text-TextGreen truncate ... bg-[#BFF4E4] rounded-lg hidden lg:inline-block cursor-pointer p-2 w-auto-[120px]">
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

                  <Link
                    to={
                      localStorage.getItem("token")
                        ? `/articles-details/${item?.id}`
                        : "/login"
                    }
                  >
                    {" "}
                    <p className="text-base  text-[#807A7A] mt-3 dark:text-white">
                      مشاهده جزئیات
                    </p>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="flex justify-center items-center my-[-3rem] lg:mt-2 ">
        <Link to="/news-articles">
          <button className="w-[220px] h-[60px] text-white bg-[#12926C] rounded-full dark:bg-gray-800">
            مشاهده مقالات بیشتر
          </button>
        </Link>
      </div>
    </>
  );
};

export { SliderArticles };
