import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Formik, Field, Form, ErrorMessage } from "formik";

import articlePic2 from "./../../assets/svg/ArticlesDetails/artilclePic2.svg";
import like from "./../../assets/svg/ArticlesDetails/like.svg";
import dislike from "./../../assets/svg/ArticlesDetails/dislike.svg";
import favorite from "./../../assets/svg/ArticlesDetails/favorite.svg";
import articlePic3 from "./../../assets/svg/ArticlesDetails/articlePic3.svg";
import line from "./../../assets/svg/ArticlesDetails/line.svg";
import download from "./../../assets/svg/ArticlesDetails/download.svg";
import mrSmith from "./../../assets/svg/ArticlesDetails/mrSmith.svg";
import profileimg from "./../../assets/svg/ArticlesDetails/profileimg.svg";
import starRating from "./../../assets/svg/ArticlesDetails/StarRating.svg";
import courses1 from "./../../assets/svg/ArticlesDetails/courses1.svg";


const CoursesDetailsForm = () => {
  return (
    <div className="flex justify-center gap-[15px] ml-[3.5rem]">
      <div className="bg-[#FBF6F6] rounded-2xl w-[18rem] h-[54.7rem]">
        <div className="w-[15.7rem] h-[13rem] bg-[#ffff] rounded-2xl absolute left-[4.7rem] top-[1rem]">
          <h1 className="text-sm text-[#12926C] text-right absolute left-[10.2rem] top-[0.8rem]">
            :مدرس دوره
          </h1>
          <h1 className="text-sm text-[#12926C] text-right absolute left-[8.7rem] top-[2.6rem]">
            :هزینه تمام دوره
          </h1>
          <h1 className="text-sm text-[#12926C] text-right absolute left-[9.3rem] top-[4.5rem]">
            :تکنولوژی دوره
          </h1>
          <h1 className="text-sm text-[#12926C] text-right absolute left-[10.4rem] top-[6.3rem]">
            :سطح دوره
          </h1>
          <h1 className="text-sm text-[#12926C] text-right absolute left-[9.8rem] top-[8.2rem]">
            :ظرفیت دوره
          </h1>
          <h1 className="text-sm text-[#12926C] text-right absolute left-[9.5rem] top-[10rem]">
            :وضعیت دوره
          </h1>

          <h2 className="text-sm text-[#22445D] absolute left-[3.5rem] top-[0.8rem]">
            نام استاد
          </h2>
          <h2 className="text-sm text-[#E11818] absolute left-[1.8rem] top-[2.6rem]">
            تومان 3.000.000
          </h2>
          <h2 className="text-sm text-[#22445D] absolute left-[2rem] top-[4.5rem]">
            نام تکنولوژی
          </h2>
          <h2 className="text-sm text-[#22445D] absolute left-[3.7rem] top-[6.3rem]">
            پیشرفته
          </h2>
          <h2 className="text-sm text-[#22445D] absolute left-[4rem] top-[8.2rem]">
            50 نفر
          </h2>
          <h2 className="text-sm text-[#22445D] absolute left-[1.5rem] top-[10rem]">
            شروع ثبت نام
          </h2>
        </div>

        <div className="w-[15.7rem] h-[9.7rem] bg-[#ffff] rounded-2xl absolute left-[4.7rem] top-[15rem]">
          <h1 className="text-sm text-[#12926C] absolute left-[10.5rem] top-[1rem]">
            :مدت زمان
          </h1>
          <h1 className="text-sm text-[#12926C] absolute left-[10.1rem] top-[2.8rem]">
            :تعداد دوره
          </h1>
          <h1 className="text-sm text-[#12926C] absolute left-[9.4rem] top-[4.7rem]">
            :تعداد نظرات
          </h1>
          <h1 className="text-sm text-[#12926C] absolute left-[10rem] top-[6.5rem]">
            :امتیاز دوره
          </h1>

          <h2 className="text-[11px] text-[#22445D] absolute left-[0.6rem] top-[1rem]">
            3 ساعت و 55 دقیقه
          </h2>
          <h2 className="text-sm text-[#22445D] absolute left-[3rem] top-[2.8rem]">
            27 ویدیو
          </h2>
          <h2 className="text-sm text-[#22445D] absolute left-[3.4rem] top-[4.7rem]">
            13 نظر
          </h2>
          <h2 className="text-sm text-[#22445D] absolute left-[4.7rem] top-[6.5rem]">
            4.5
          </h2>
        </div>

        <div className="w-[15.7rem] h-[8.2rem] bg-[#ffff] rounded-2xl absolute left-[4.7rem] top-[26rem]">
          <h1 className="text-sm text-[#12926C] absolute left-[8.3rem] top-[1rem]">
            :تاریخ بروزرسانی
          </h1>
          <h1 className="text-sm text-[#12926C] absolute left-[10rem] top-[2.8rem]">
            :شروع دوره
          </h1>
          <h1 className="text-sm text-[#12926C] absolute left-[10.2rem] top-[4.6rem]">
            :پایان دوره
          </h1>

          <h2 className="text-[13px] text-[#22445D] absolute left-[1.5rem] top-[1.2rem]">
            1402/07/06
          </h2>
          <h2 className="text-[13px] text-[#22445D] absolute left-[1.5rem] top-[3rem]">
            1402/07/06
          </h2>
          <h2 className="text-[13px] text-[#22445D] absolute left-[1.5rem] top-[4.8rem]">
            1402/07/06
          </h2>
        </div>

        <button className="border-solid border-2 border-[#5BE1B9] w-[10rem] h-[2rem] rounded-lg text-[12px] bg-[#5BE1B9] text-[#22445D] absolute left-[7.7rem] top-[35rem]">
          رزرو دوره
        </button>

        <div className="w-[15.7rem] h-[13rem] bg-[#ffff] rounded-2xl absolute left-[4.7rem] top-[40.5rem]">
          <h1 className="text-sm text-[#21394B] absolute left-[6.1rem] top-[0.7rem]">
            درباره استاد
          </h1>

          <img
            className="w-[2.5rem] h-[2.5rem] absolute left-[10.3rem] top-[3.5rem]"
            src={mrSmith}
            alt=""
          />

          <h2 className="text-[19px] text-[#8C9F9A] absolute left-[3.5rem] top-[3.8rem]">
            جان اسمیت
          </h2>
          <h3 className="text-xs text-[#6D6767] rtl absolute px-[0.7rem] top-[7.2rem]">
            لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه
            دهندگان وب، تایپوگراف ها و طراحان استفاده می شود{" "}
          </h3>
        </div>
      </div>

      <div className="bg-[#FBF6F6] rounded-2xl w-[68rem] h-[181rem] m-auto">
        <img className="w-[95%] m-auto mt-[1rem]" src={articlePic2} alt="" />

        <div className="w-[95%] bg-[#fff] rounded-3xl  h-[30rem] m-auto mt-[1rem]">
          <img
            className="w-[1.5rem] h-[1.5rem] absolute left-[25.5rem] top-[40rem]"
            src={like}
            alt=""
          />
          <img
            className="w-[1.5rem] h-[1.5rem] absolute left-[27.8rem] top-[40rem]"
            src={dislike}
            alt=""
          />
          <img
            className="w-[1.5rem] h-[1.5rem] absolute left-[30.1rem] top-[40rem]"
            src={favorite}
            alt=""
          />
          <h2 className="text-3xl text-[#22445D] ml-[55rem] my-10 py-5">
            عنوان دوره
          </h2>
          <h1 className="text-[16px] rtl p-2 text-[#22445D] text-justify leading-5">
            لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه
            دهندگان وب، تایپوگراف ها و طراحان استفاده می شود. تکه های لاتین متن
            نشان می دهد که یک پروژه در حال توسعه است. لورم ایپسوم فقط برای توسعه
            دهندگان وب نیست. طراحان گرافیک نیز از آن با نرم افزارهای مختلفی
            مانند فوتوشاپ استفاده می کنند.
          </h1>
          <br></br>
          <h1 className="text-[16px] rtl p-2 text-[#22445D] text-justify leading-5">
            لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه
            دهندگان وب، تایپوگراف ها و طراحان استفاده می شود. تکه های لاتین متن
            نشان می دهد که یک پروژه در حال توسعه است. لورم ایپسوم فقط برای توسعه
            دهندگان وب نیست. طراحان گرافیک نیز از آن با نرم افزارهای مختلفی
            مانند فوتوشاپ استفاده می کنند.
          </h1>
          <br></br>
          <h1 className="text-[16px] rtl p-2 text-[#22445D] text-justify leading-5">
            لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه
            دهندگان وب، تایپوگراف ها و طراحان استفاده می شود. تکه های لاتین متن
            نشان می دهد که یک پروژه در حال توسعه است. لورم ایپسوم فقط برای توسعه
            دهندگان وب نیست. طراحان گرافیک نیز از آن با نرم افزارهای مختلفی
            مانند فوتوشاپ استفاده می کنند. لورم ایپسوم محبوب ترین و
            استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها
            و طراحان استفاده می شود. تکه های لاتین متن نشان می دهد که یک پروژه
            در حال توسعه است. لورم ایپسوم فقط برای توسعه دهندگان وب نیست. طراحان
            گرافیک نیز از آن با نرم افزارهای مختلفی مانند فوتوشاپ استفاده می
            کنند. لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط
            توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود. تکه های
            لاتین متن نشان می دهد که یک پروژه در حال توسعه است.
          </h1>
        </div>

        <div className="w-[95%] bg-[#fff] rounded-3xl h-[64rem] m-auto mt-[1rem]">
          <h2 className="text-3xl text-[#22445D] absolute right-[10rem] top-[71rem]">
            ویدیوهای دوره
          </h2>

          <img className="w-[90%] m-auto py-[8rem]" src={articlePic3} alt="" />

          <img
            className="w-[2.5rem] h-[2.5rem] absolute left-[29.9rem] top-[114.4rem]"
            src={download}
            alt=""
          />
          <img
            className="w-[2.5rem] h-[2.5rem] absolute left-[29.9rem] top-[120.4rem]"
            src={download}
            alt=""
          />
          <img
            className="w-[2.5rem] h-[2.5rem] absolute left-[29.9rem] top-[126.4rem]"
            src={download}
            alt=""
          />

          <img
            className="w-[56.8rem] h-[1px] bg-[#8C9F9A] absolute left-[28rem] top-[117.5rem]"
            src={line}
            alt=""
          />
          <img
            className="w-[56.8rem] h-[1px] bg-[#8C9F9A] absolute left-[28rem] top-[123.5rem]"
            src={line}
            alt=""
          />
          <img
            className="w-[56.8rem] h-[1px] bg-[#8C9F9A] absolute left-[28rem] top-[129.5rem]"
            src={line}
            alt=""
          />

          <h1 className="text-2xl text-[#8C9F9A] absolute right-[10rem] top-[114.5rem]">
            ویدیو اول : آشنایی با دوره
          </h1>
          <h1 className="text-2xl text-[#8C9F9A] absolute right-[10rem] top-[120.5rem]">
            {" "}
            ویدیو دوم : آشنایی با جاوا اسکریپت
          </h1>
          <h1 className="text-2xl text-[#8C9F9A] absolute right-[10rem] top-[126.5rem]">
            {" "}
            ویدیو سوم : آشنایی با جاوا اسکریپت
          </h1>
          <h3 className="text-2xl text-[#8C9F9A] absolute left-[34rem] top-[114.5rem]">
            00:28:00
          </h3>
          <h3 className="text-2xl text-[#8C9F9A] absolute left-[34rem] top-[120.5rem]">
            00:28:00
          </h3>
          <h3 className="text-2xl text-[#8C9F9A] absolute left-[34rem] top-[126.5rem]">
            00:28:00
          </h3>
        </div>

        <div className="w-[95%] bg-[#fff] rounded-3xl h-[45rem] m-auto mt-[1rem]">
          <button className="boredr-solid boredr-2 border-[#5BE1B9] w-[28.8rem] h-[4.5rem] rounded-l text-[19px] bg-[#5BE1B9] text-[#22445D] absolute left-[27.6rem] top-[136rem]">
            ثبت نظر
          </button>

          <button className="boredr-solid boredr-2 border-[#5BE1B9] w-[28.8rem] h-[4.5rem] rounded-l text-[19px] bg-[#ffff] text-[#22445D] absolute left-[56.4rem] top-[136rem]">
            نظرات کاربران
          </button>

          <Formik>
            <Form>
              <div className=" flex flex-col items-center h-[18rem] relative">
                <Field
                  className="bg-[#FBF6F6] rtl placeholder-TextGray h-[4.7rem] w-[57.5rem] absolute top-[9.5rem] border-solid border-2 border-TextGreen rounded-md "
                  placeholder="  عنوان"
                ></Field>

                <Field
                  className="bg-[#FBF6F6] rtl placeholder-TextGray items-start h-[20rem] w-[57.5rem] absolute top-[14.3rem] mt-[1rem] border-solid border-2 border-TextGreen rounded-md "
                  placeholder="  متن..."
                ></Field>

                <button
                  class="w-[57.5rem] h-[4.7rem] text-2xl
                                     text-[#21394B] bg-BgGreen rounded-lg absolute top-[37.5rem]"
                >
                  ثبت کردن
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>

      <div className="w-[1500px] absolute top-[193rem]">
        <div class="text-center leading-10 absolute bottom-[48rem] left-[37rem]">
          <p class="text-4xl text-[#22445D] font-bold">دوره های مشابه</p>
          <p class="text-xl leading-10 text-[#22445D]">
            ساختن دنیایی بهتر، یک دوره در یک زمان
          </p>
        </div>

        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper h-[40rem]"
        >
          <SwiperSlide>
            <div className="mt-16 mx-16 flex justify-around items-center rounded-3xl ">
              <div className="relative p-10 text-center rounded-md mt-11 bg-[#FBF6F6] shadow-[9px_9px_12px_3px_rgba(0,_0,_0,_0.1)] text-TextGreen h-[490px] w-[370px]">
                <div className="absolute top-[-80px] left-[110px]">
                  <img src={courses1} alt="" />
                </div>

                <div className="flex justify-between items-center mt-10">
                  <div className="flex justify-center items-center">
                    <img src={like} alt="" />
                    <img className="mx-2" src={dislike} alt="" />
                    <img src={favorite} alt="" />
                  </div>
                  <button class="text-TextGreen bg-[#BFF4E4] rounded-lg cursor-pointer p-2">
                    وضعیت دوره
                  </button>
                </div>

                <p className="rtl mt-6 text-[#1A1E21] text-xl">
                  آشنایی با برنامه نویسی با وردپرس
                </p>

                <div className="flex justify-between items-center mt-5">
                  <div className="flex justify-center items-center">
                    <img src={starRating} alt="" />
                    <p className="ml-2">4.8</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="mr-2">جان اسمیت</p>
                    <img src={profileimg} alt="" />
                  </div>
                </div>

                <p className="rtl mt-3 ml-28  text-[#41A789] text-xs ">
                  {" "}
                  50 ساعت سخنرانی ( 190 ساعت ){" "}
                </p>

                <p className="rtl mt-5 leading-5 text-[#6D6767] text-xs text-right">
                  {" "}
                  لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط
                  توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود.{" "}
                </p>

                <img className="mt-5" src={line} alt="" />

                <div className="flex justify-between items-center mt-5">
                  <p className="text-sm text-PriceRed rtl"> 3,000,000 تومان</p>
                  <p className="text-sm text-">: هزینه تمام دوره</p>
                </div>

                <button class="w-[240px] h-[40px] text-white bg-BgGreen rounded-lg mt-6 ">
                  الان ثبت نام کن
                </button>
              </div>

              <div className="relative p-10 text-center rounded-md mt-11 bg-[#FBF6F6] shadow-[9px_9px_12px_3px_rgba(0,_0,_0,_0.1)] text-TextGreen h-[490px] w-[370px]">
                <div className="absolute top-[-80px] left-[110px]">
                  <img src={courses1} alt="" />
                </div>

                <div className="flex justify-between items-center mt-10">
                  <div className="flex justify-center items-center">
                    <img src={like} alt="" />
                    <img className="mx-2" src={dislike} alt="" />
                    <img src={favorite} alt="" />
                  </div>
                  <button class="text-TextGreen bg-[#BFF4E4] rounded-lg cursor-pointer p-2">
                    وضعیت دوره
                  </button>
                </div>

                <p className="rtl mt-6 text-[#1A1E21] text-xl">
                  آشنایی با برنامه نویسی با وردپرس
                </p>

                <div className="flex justify-between items-center mt-5">
                  <div className="flex justify-center items-center">
                    <img src={starRating} alt="" />
                    <p className="ml-2">4.8</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="mr-2">جان اسمیت</p>
                    <img src={profileimg} alt="" />
                  </div>
                </div>

                <p className="rtl mt-3 ml-28  text-[#41A789] text-xs ">
                  {" "}
                  50 ساعت سخنرانی ( 190 ساعت ){" "}
                </p>

                <p className="rtl mt-5 leading-5 text-[#6D6767] text-xs text-right">
                  {" "}
                  لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط
                  توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود.{" "}
                </p>

                <img className="mt-5" src={line} alt="" />

                <div className="flex justify-between items-center mt-5">
                  <p className="text-sm text-PriceRed rtl"> 3,000,000 تومان</p>
                  <p className="text-sm text-">: هزینه تمام دوره</p>
                </div>

                <button class="w-[240px] h-[40px] text-white bg-BgGreen rounded-lg mt-6 ">
                  الان ثبت نام کن
                </button>
              </div>

              <div className="relative p-10 text-center rounded-md mt-11 bg-[#FBF6F6] shadow-[9px_9px_12px_3px_rgba(0,_0,_0,_0.1)] text-TextGreen h-[490px] w-[370px]">
                <div className="absolute top-[-80px] left-[110px]">
                  <img src={courses1} alt="" />
                </div>

                <div className="flex justify-between items-center mt-10">
                  <div className="flex justify-center items-center">
                    <img src={like} alt="" />
                    <img className="mx-2" src={dislike} alt="" />
                    <img src={favorite} alt="" />
                  </div>
                  <button class="text-TextGreen bg-[#BFF4E4] rounded-lg cursor-pointer p-2">
                    وضعیت دوره
                  </button>
                </div>

                <p className="rtl mt-6 text-[#1A1E21] text-xl">
                  آشنایی با برنامه نویسی با وردپرس
                </p>

                <div className="flex justify-between items-center mt-5">
                  <div className="flex justify-center items-center">
                    <img src={starRating} alt="" />
                    <p className="ml-2">4.8</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="mr-2">جان اسمیت</p>
                    <img src={profileimg} alt="" />
                  </div>
                </div>

                <p className="rtl mt-3 ml-28  text-[#41A789] text-xs ">
                  {" "}
                  50 ساعت سخنرانی ( 190 ساعت ){" "}
                </p>

                <p className="rtl mt-5 leading-5 text-[#6D6767] text-xs text-right">
                  {" "}
                  لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط
                  توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود.{" "}
                </p>

                <img className="mt-5" src={line} alt="" />

                <div className="flex justify-between items-center mt-5">
                  <p className="text-sm text-PriceRed rtl"> 3,000,000 تومان</p>
                  <p className="text-sm text-">: هزینه تمام دوره</p>
                </div>

                <button class="w-[240px] h-[40px] text-white bg-BgGreen rounded-lg mt-6 ">
                  الان ثبت نام کن
                </button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="mt-16 mx-16 flex justify-around items-center rounded-3xl ">
              <div className="relative p-10 text-center rounded-md mt-11 bg-[#FBF6F6] shadow-[9px_9px_12px_3px_rgba(0,_0,_0,_0.1)] text-TextGreen h-[490px] w-[370px]">
                <div className="absolute top-[-80px] left-[110px]">
                  <img src={courses1} alt="" />
                </div>

                <div className="flex justify-between items-center mt-10">
                  <div className="flex justify-center items-center">
                    <img src={like} alt="" />
                    <img className="mx-2" src={dislike} alt="" />
                    <img src={favorite} alt="" />
                  </div>
                  <button class="text-TextGreen bg-[#BFF4E4] rounded-lg cursor-pointer p-2">
                    وضعیت دوره
                  </button>
                </div>

                <p className="rtl mt-6 text-[#1A1E21] text-xl">
                  آشنایی با برنامه نویسی با وردپرس
                </p>

                <div className="flex justify-between items-center mt-5">
                  <div className="flex justify-center items-center">
                    <img src={starRating} alt="" />
                    <p className="ml-2">4.8</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="mr-2">جان اسمیت</p>
                    <img src={profileimg} alt="" />
                  </div>
                </div>

                <p className="rtl mt-3 ml-28  text-[#41A789] text-xs ">
                  {" "}
                  50 ساعت سخنرانی ( 190 ساعت ){" "}
                </p>

                <p className="rtl mt-5 leading-5 text-[#6D6767] text-xs text-right">
                  {" "}
                  لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط
                  توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود.{" "}
                </p>

                <img className="mt-5" src={line} alt="" />

                <div className="flex justify-between items-center mt-5">
                  <p className="text-sm text-PriceRed rtl"> 3,000,000 تومان</p>
                  <p className="text-sm text-">: هزینه تمام دوره</p>
                </div>

                <button class="w-[240px] h-[40px] text-white bg-BgGreen rounded-lg mt-6 ">
                  الان ثبت نام کن
                </button>
              </div>

              <div className="relative p-10 text-center rounded-md mt-11 bg-[#FBF6F6] shadow-[9px_9px_12px_3px_rgba(0,_0,_0,_0.1)] text-TextGreen h-[490px] w-[370px]">
                <div className="absolute top-[-80px] left-[110px]">
                  <img src={courses1} alt="" />
                </div>

                <div className="flex justify-between items-center mt-10">
                  <div className="flex justify-center items-center">
                    <img src={like} alt="" />
                    <img className="mx-2" src={dislike} alt="" />
                    <img src={favorite} alt="" />
                  </div>
                  <button class="text-TextGreen bg-[#BFF4E4] rounded-lg cursor-pointer p-2">
                    وضعیت دوره
                  </button>
                </div>

                <p className="rtl mt-6 text-[#1A1E21] text-xl">
                  آشنایی با برنامه نویسی با وردپرس
                </p>

                <div className="flex justify-between items-center mt-5">
                  <div className="flex justify-center items-center">
                    <img src={starRating} alt="" />
                    <p className="ml-2">4.8</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="mr-2">جان اسمیت</p>
                    <img src={profileimg} alt="" />
                  </div>
                </div>

                <p className="rtl mt-3 ml-28  text-[#41A789] text-xs ">
                  {" "}
                  50 ساعت سخنرانی ( 190 ساعت ){" "}
                </p>

                <p className="rtl mt-5 leading-5 text-[#6D6767] text-xs text-right">
                  {" "}
                  لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط
                  توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود.{" "}
                </p>

                <img className="mt-5" src={line} alt="" />

                <div className="flex justify-between items-center mt-5">
                  <p className="text-sm text-PriceRed rtl"> 3,000,000 تومان</p>
                  <p className="text-sm text-">: هزینه تمام دوره</p>
                </div>

                <button class="w-[240px] h-[40px] text-white bg-BgGreen rounded-lg mt-6 ">
                  الان ثبت نام کن
                </button>
              </div>

              <div className="relative p-10 text-center rounded-md mt-11 bg-[#FBF6F6] shadow-[9px_9px_12px_3px_rgba(0,_0,_0,_0.1)] text-TextGreen h-[490px] w-[370px]">
                <div className="absolute top-[-80px] left-[110px]">
                  <img src={courses1} alt="" />
                </div>

                <div className="flex justify-between items-center mt-10">
                  <div className="flex justify-center items-center">
                    <img src={like} alt="" />
                    <img className="mx-2" src={dislike} alt="" />
                    <img src={favorite} alt="" />
                  </div>
                  <button class="text-TextGreen bg-[#BFF4E4] rounded-lg cursor-pointer p-2">
                    وضعیت دوره
                  </button>
                </div>

                <p className="rtl mt-6 text-[#1A1E21] text-xl">
                  آشنایی با برنامه نویسی با وردپرس
                </p>

                <div className="flex justify-between items-center mt-5">
                  <div className="flex justify-center items-center">
                    <img src={starRating} alt="" />
                    <p className="ml-2">4.8</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="mr-2">جان اسمیت</p>
                    <img src={profileimg} alt="" />
                  </div>
                </div>

                <p className="rtl mt-3 ml-28  text-[#41A789] text-xs ">
                  {" "}
                  50 ساعت سخنرانی ( 190 ساعت ){" "}
                </p>

                <p className="rtl mt-5 leading-5 text-[#6D6767] text-xs text-right">
                  {" "}
                  لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط
                  توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود.{" "}
                </p>

                <img className="mt-5" src={line} alt="" />

                <div className="flex justify-between items-center mt-5">
                  <p className="text-sm text-PriceRed rtl"> 3,000,000 تومان</p>
                  <p className="text-sm text-">: هزینه تمام دوره</p>
                </div>

                <button class="w-[240px] h-[40px] text-white bg-BgGreen rounded-lg mt-6 ">
                  الان ثبت نام کن
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="flex justify-center items-center mt-2">
          <button class="w-[220px] h-[60px] text-white bg-[#12926C] rounded-full ">
            مشاهده دوره های بیشتر
          </button>
        </div>
      </div>
    </div>
  )
}

export { CoursesDetailsForm }