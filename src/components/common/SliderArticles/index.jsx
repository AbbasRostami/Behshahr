import React from 'react'
import like from "./../../../assets/coursesLike.svg";
import dislike from "./../../../assets/dislike.svg";
import favorite from "./../../../assets/favo.svg";
import line from "./../../../assets/line.svg";
import newsPic from "./../../../assets/newsPick.svg";
import profileimg from "./../../../assets/profileimg.svg";
import starRating from "./../../../assets/svg/Landing/StarRating.svg";
import { useEffect, useState } from "react";

// import Swiper core and required modules
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { getApi } from '../../../core/api/api';

const SliderArticles = () => {

    const [data, setData] = useState([]);

  const getArticles = async () => {
    const path = `/News?PageNumber=1&RowsOfPage=10&SortingCol=InsertDate&SortType=DESC`;
    const response = await getApi({ path });
    // console.log(response.data?.news);
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
      >
        {data?.map((item, index) => {
          return (
            <SwiperSlide>

              <div className="  flex justify-around items-center rounded-3xl  ">
                <div className="relative h-[540px] w-[430px] text-center rounded-[1.5rem] mt-11 dark:bg-gray-800 bg-[#FBF6F6] shadow-[9px_9px_12px_3px_rgba(0,_0,_0,_0.1)] text-TextGreen ">
                  <div className="h-64">
                    <img
                      className="p-0 object-cover h-[16rem] w-full"
                      src={item?.currentImageAddressTumb}
                      alt=""
                    />
                  </div>

                  <div className="flex justify-between items-center mt-5 px-5">
                    <div className="flex justify-center items-center gap-2 ">
                      <img src={like} alt="" />
                      <p>{item?.currentLikeCount}</p>
                      <img className="mx-2" src={dislike} alt="" />
                      <p>{item?.currentDissLikeCount}</p>

                      <img src={favorite} alt="" />
                      <p>{item?.currentRate}</p>
                      
                    </div>

                    <button class="text-TextGreen bg-[#BFF4E4] rounded-lg cursor-pointer p-2 w-auto-[120px]">
                      وضعیت دوره
                    </button>
                  </div>

                  <p className="rtl mt-3 text-[#1A1E21] text-xl rtl text-right px-5 dark:text-white">
                    {item?.title}{" "}
                  </p>

                  <div className="flex justify-between items-center mt-5 px-5 dark:text-white">
                    <div className="flex justify-center items-center ">
                      <img src={starRating} alt="" />
                      <p className="ml-2">{item?.currentRate}</p>
                    </div>

                    <div className="flex justify-between items-center">
                      <p className="mr-2"> {item?.addUserFullName} </p>
                      <img className="w-12 h-12 rounded-full" src={profileimg} alt="" />
                    </div>
                  </div>

                  <p className="rtl mt-5 px-5 leading-5 text-[#6D6767] text-xs text-right dark:text-white">
                    {item?.miniDescribe}
                  </p>

                  <img className="mt-5 px-5" src={line} alt="" />

                  <p className="text-base  text-[#807A7A] mt-1 dark:text-white">
                    مشاهده جزئیات
                  </p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="flex justify-center items-center mt-2 ">
        <button class="w-[220px] h-[60px] text-white bg-[#12926C] rounded-full dark:bg-gray-800">
          مشاهده مقالات بیشتر
        </button>
      </div>
    </>
  )
}

export  { SliderArticles }
