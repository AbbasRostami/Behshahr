import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Header } from "./../common/Header"
import { Footer } from "./../common/Footer"

import newsPic from "./../../assets/svg/ArticlesDetails/newPic.svg";
import like from "./../../assets/svg/ArticlesDetails/like.svg";
import dislike from "./../../assets/svg/ArticlesDetails/dislike.svg";
import favorite from "./../../assets/svg/ArticlesDetails/favorite.svg";
import starRating from "./../../assets/svg/ArticlesDetails/starRating.svg";
import profileimg from "./../../assets/svg/ArticlesDetails/profileimg.svg";
import line from "./../../assets/svg/ArticlesDetails/line.svg";
import articlePic from "./../../assets/svg/ArticlesDetails/articlePic.svg";
import author from "./../../assets/svg/ArticlesDetails/author.svg";
import dummy from "./../../assets/svg/ArticlesDetails/dummy.svg";
import undo from "./../../assets/svg/ArticlesDetails/undo.svg";
import eye from "./../../assets/svg/ArticlesDetails/eye.svg";
import calendar from "./../../assets/svg/ArticlesDetails/calendar.svg";
import key from "./../../assets/svg/ArticlesDetails/key.svg";
import { HeaderUserlogin } from "../common/HeaderUserLogin";


const ArticlesDetailsForm = () => {
  return (
    
<>
        <HeaderUserlogin />
      <div className="bg-[#FBF6F6] rounded-2xl w-[94%] m-auto mt-16">
        <div className="flex justify-center items">
          <img className="w-[70%]" src={articlePic} alt="" />
        </div>

        <div className="w-[78%] bg-[#fff] rounded-3xl  h-[30rem] m-auto">
          <h1 className="text-3xl text-black flex justify-center items-center my-10 py-5">
            عنوان مقاله
          </h1>
          <h1 className="text-[16px] rtl p-2 text-black text-justify leading-5">
            لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه
            دهندگان وب، تایپوگراف ها و طراحان استفاده می شود. تکه های لاتین متن
            نشان می دهد که یک پروژه در حال توسعه است. لورم ایپسوم فقط برای توسعه
            دهندگان وب نیست. طراحان گرافیک نیز از آن با نرم افزارهای مختلفی
            مانند فوتوشاپ استفاده می کنند.
          </h1>
          <br></br>
          <h1 className="text-[16px] rtl p-2 text-black text-justify leading-5">
            لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه
            دهندگان وب، تایپوگراف ها و طراحان استفاده می شود. تکه های لاتین متن
            نشان می دهد که یک پروژه در حال توسعه است. لورم ایپسوم فقط برای توسعه
            دهندگان وب نیست. طراحان گرافیک نیز از آن با نرم افزارهای مختلفی
            مانند فوتوشاپ استفاده می کنند.
          </h1>
          <br></br>
          <h1 className="text-[16px] rtl p-2 text-black text-justify leading-5">
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
          <div>
            <img
              className="h-[1.2rem] absolute left-[49.5rem] bottom-[-23rem]"
              src={author}
              alt=""
            />
            <img
              className="h-[1.2rem] absolute left-[70.5rem] bottom-[-23rem]"
              src={eye}
              alt=""
            />
            <img
              className="h-[1.2rem] absolute left-[64rem] bottom-[-23rem]"
              src={calendar}
              alt=""
            />
            <img
              className="h-[1.2rem] absolute left-[54.5rem] bottom-[-23rem]"
              src={key}
              alt=""
            />

            <img
              className="w-[1.4rem] h-[1.4rem] absolute left-[14rem] bottom-[-21.7rem]"
              src={like}
              alt=""
            />
            <img
              className="w-[1.4rem] h-[1.4rem] absolute left-[16rem] bottom-[-21.7rem]"
              src={dislike}
              alt=""
            />
            <img
              className="w-[1.4rem] h-[1.4rem] absolute left-[18rem] bottom-[-21.7rem]"
              src={favorite}
              alt=""
            />

            <h1 className=" text-[13px] text-[#126F94] text-right absolute right-[15.3rem] bottom-[-22.7rem]">
              نام نویسنده{" "}
            </h1>
            <h1 className="text-[13px] text-[#807A7A] text-right absolute right-[25rem] bottom-[-22.7rem]">
              1124
            </h1>
            <h1 className="text-[13px] text-[#807A7A] text-right absolute right-[31.5rem] bottom-[-22.7rem]">
              06 مهر 1402
            </h1>
            <h1 className="text-[13px] text-[#807A7A] text-right absolute right-[41rem] bottom-[-22.7rem]">
              کلمات کلیدی
            </h1>
          </div>
        </div>

        <div className="ml-[25rem] mt-[3rem]">
          <button className="boredr-solid boredr-2 border-[#5BE1B9] w-[20rem] h-[3rem] rounded-l text-[15px] bg-[#ffff] text-[#22445D] mt-[-48px] ">
            ثبت نظر
          </button>

          <button className="boredr-solid boredr-2 border-[#5BE1B9] w-[20rem] h-[3rem] rounded-l text-[15px] bg-[#5BE1B9] text-[#22445D] mt-[-48px] ">
            نظرات کاربران
          </button>
        </div>
        <br></br>
        <br></br>
        <div className="w-[78%] h-[10rem] bg-[#fff] rounded-3xl m-auto">
          <img
            className="w-[2.2rem] h-[2.2rem] absolute right-[14rem] my-[1rem]"
            src={dummy}
            alt=""
          />
          <img
            className="w-[1.4rem] h-[1.4rem] absolute left-[18rem] my-[1rem]"
            src={like}
            alt=""
          />
          <img
            className="w-[1.4rem] h-[1.4rem] absolute left-[16rem] my-[1rem]"
            src={dislike}
            alt=""
          />
          <img
            className="w-[1.4rem] h-[1.4rem] absolute left-[14rem] my-[1rem]"
            src={undo}
            alt=""
          />

          <h2 className="text-[20px] text-[#22445D] absolute right-[17rem] my-[1rem]">
            عنوان: عنوان نظر
          </h2>

          <h3 className="text-[14px] rtl text-[#22445D] absolute right-[17rem] my-[3.5rem]">
            لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه
            دهندگان وب، تایپوگراف ها و طراحان استفاده می شود.
          </h3>
          <h4 className="text-[14px] rtl text-[#22445D] absolute right-[17rem] my-[5rem]">
            تکه های لاتین متن نشان می دهد که یک پروژه در حال توسعه است.
          </h4>

          <h5 className="text-[14px] text-[#22445D] absolute left-[18rem] my-[8rem]">
            1403/03/16
          </h5>
          <h5 className="text-[14px] text-[#22445D] absolute left-[15rem] my-[8rem]">
            9:48
          </h5>
        </div>
        <br></br>
        <br></br>
        <div className="w-[60%] h-[10rem] bg-[#fff] rounded-3xl mx-[22rem]">
          <img
            className="w-[2.2rem] h-[2.2rem] absolute right-[18rem] my-[1rem]"
            src={dummy}
            alt=""
          />
          <img
            className="w-[1.4rem] h-[1.4rem] absolute left-[30rem] my-[1rem]"
            src={like}
            alt=""
          />
          <img
            className="w-[1.4rem] h-[1.4rem] absolute left-[28rem] my-[1rem]"
            src={dislike}
            alt=""
          />
          <img
            className="w-[1.4rem] h-[1.4rem] absolute left-[26rem] my-[1rem]"
            src={undo}
            alt=""
          />

          <h2 className="text-[20px] text-[#22445D] absolute right-[21rem] my-[1rem]">
            عنوان: عنوان نظر
          </h2>

          <h3 className="text-[14px] rtl text-[#22445D] absolute right-[21rem] my-[3.5rem]">
            لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه
            دهندگان وب، تایپوگراف ها و طراحان استفاده می شود.
          </h3>
          <h4 className="text-[14px] rtl text-[#22445D] absolute right-[21rem] my-[5rem]">
            تکه های لاتین متن نشان می دهد که یک پروژه در حال توسعه است.
          </h4>

          <h5 className="text-[14px] text-[#22445D] absolute left-[30rem] my-[8rem]">
            1403/03/16
          </h5>

          <h5 className="text-[14px] text-[#22445D] absolute left-[27rem] my-[8rem]">
            9:48
          </h5>
        </div>
        <br></br>
        <br></br>
        <div className="w-[78%] h-[10rem] bg-[#fff] rounded-3xl m-auto">
          <img
            className="w-[2.2rem] h-[2.2rem] absolute right-[14rem] my-[1rem]"
            src={dummy}
            alt=""
          />
          <img
            className="w-[1.4rem] h-[1.4rem] absolute left-[18rem] my-[1rem]"
            src={like}
            alt=""
          />
          <img
            className="w-[1.4rem] h-[1.4rem] absolute left-[16rem] my-[1rem]"
            src={dislike}
            alt=""
          />
          <img
            className="w-[1.4rem] h-[1.4rem] absolute left-[14rem] my-[1rem]"
            src={undo}
            alt=""
          />

          <h2 className="text-[20px] text-[#22445D] absolute right-[17rem] my-[1rem]">
            عنوان: عنوان نظر
          </h2>

          <h3 className="text-[14px] rtl text-[#22445D] absolute right-[17rem] my-[3.5rem]">
            لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه
            دهندگان وب، تایپوگراف ها و طراحان استفاده می شود.
          </h3>
          <h4 className="text-[14px] rtl text-[#22445D] absolute right-[17rem] my-[5rem]">
            تکه های لاتین متن نشان می دهد که یک پروژه در حال توسعه است.
          </h4>

          <h5 className="text-[14px] text-[#22445D] absolute left-[18rem] my-[8rem]">
            1403/03/16
          </h5>

          <h5 className="text-[14px] text-[#22445D] absolute left-[15rem] my-[8rem]">
            9:48
          </h5>
        </div>
        <br></br>
        <br></br>
        <div className="w-[78%] h-[10rem] bg-[#fff] rounded-3xl m-auto">
          <img
            className="w-[2.2rem] h-[2.2rem] absolute right-[14rem] my-[1rem]"
            src={dummy}
            alt=""
          />
          <img
            className="w-[1.4rem] h-[1.4rem] absolute left-[18rem] my-[1rem]"
            src={like}
            alt=""
          />
          <img
            className="w-[1.4rem] h-[1.4rem] absolute left-[16rem] my-[1rem]"
            src={dislike}
            alt=""
          />
          <img
            className="w-[1.4rem] h-[1.4rem] absolute left-[14rem] my-[1rem]"
            src={undo}
            alt=""
          />

          <h2 className="text-[20px] text-[#22445D] absolute right-[17rem] my-[1rem]">
            عنوان: عنوان نظر
          </h2>

          <h3 className="text-[14px] rtl text-[#22445D] absolute right-[17rem] my-[3.5rem]">
            لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه
            دهندگان وب، تایپوگراف ها و طراحان استفاده می شود.
          </h3>
          <h4 className="text-[14px] rtl text-[#22445D] absolute right-[17rem] my-[5rem]">
            تکه های لاتین متن نشان می دهد که یک پروژه در حال توسعه است.
          </h4>

          <h5 className="text-[14px] text-[#22445D] absolute left-[18rem] my-[8rem]">
            1403/03/16
          </h5>

          <h5 className="text-[14px] text-[#22445D] absolute left-[15rem] my-[8rem]">
            9:48
          </h5>
        </div>
        <br></br>
        <br></br>
        <br></br>
      </div>

      <div className="w-[1300px] ml-[7rem]">
        <div className="text-center leading-10 mt-[70px]">
          <p className="text-[35px] text-[#22445D] font-bold">
            {" "}
            اخبار و مقالات مشابه
          </p>
          <p className="leading-10 text-[#22445D]">
            ساختن دنیایی بهتر، یک دوره در یک زمان
          </p>
        </div>

        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper h-[40rem] "
        >
          <SwiperSlide>
            {/* First News Card */}

            <div className="flex justify-around items-center px-16">
              <div className="  flex justify-around items-center rounded-3xl ">
                <div className="relative h-[540px] w-[370px] text-center rounded-[1.5rem] mt-11 bg-[#FBF6F6] shadow-[9px_9px_12px_3px_rgba(0,_0,_0,_0.1)] text-TextGreen ">
                  <div>
                    <img
                      className="p-0 object-cover h-full w-full"
                      src={newsPic}
                      alt=""
                    />
                  </div>

                  <div className="flex justify-between items-center mt-5 px-5">
                    <div className="flex justify-center items-center ">
                      <img src={like} alt="" />
                      <img className="mx-2" src={dislike} alt="" />
                      <img src={favorite} alt="" />
                    </div>

                    <button class="text-TextGreen bg-[#BFF4E4] rounded-lg cursor-pointer p-2 w-auto-[120px]">
                      وضعیت دوره
                    </button>
                  </div>

                  <p className="rtl mt-3 text-[#1A1E21] text-xl rtl text-right px-5">
                    آشنایی با برنامه نویسی با وردپرس
                  </p>

                  <div className="flex justify-between items-center mt-5 px-5">
                    <div className="flex justify-center items-center ">
                      <img src={starRating} alt="" />
                      <p className="ml-2">4.8</p>
                    </div>

                    <div className="flex justify-between items-center">
                      <p className="mr-2">جان اسمیت</p>
                      <img src={profileimg} alt="" />
                    </div>
                  </div>

                  <p className="rtl mt-5 px-5 leading-5 text-[#6D6767] text-xs text-right">
                    {" "}
                    لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که
                    توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود.{" "}
                  </p>

                  <img className="mt-5 px-5" src={line} alt="" />

                  <p className="text-base  text-[#807A7A] mt-1">
                    مشاهده جزئیات
                  </p>
                </div>
              </div>

              {/* Two News Card*/}

              <div className="  flex justify-around items-center rounded-3xl ">
                <div className="relative h-[540px] w-[370px] text-center rounded-[1.5rem] mt-11 bg-[#FBF6F6] shadow-[9px_9px_12px_3px_rgba(0,_0,_0,_0.1)] text-TextGreen ">
                  <div>
                    <img
                      className="p-0 object-cover h-full w-full"
                      src={newsPic}
                      alt=""
                    />
                  </div>

                  <div className="flex justify-between items-center mt-5 px-5">
                    <div className="flex justify-center items-center ">
                      <img src={like} alt="" />
                      <img className="mx-2" src={dislike} alt="" />
                      <img src={favorite} alt="" />
                    </div>

                    <button class="text-TextGreen bg-[#BFF4E4] rounded-lg cursor-pointer p-2 w-auto-[120px]">
                      وضعیت دوره
                    </button>
                  </div>

                  <p className="rtl mt-3 text-[#1A1E21] text-xl rtl text-right px-5">
                    آشنایی با برنامه نویسی با وردپرس
                  </p>

                  <div className="flex justify-between items-center mt-5 px-5">
                    <div className="flex justify-center items-center ">
                      <img src={starRating} alt="" />
                      <p className="ml-2">4.8</p>
                    </div>

                    <div className="flex justify-between items-center">
                      <p className="mr-2">جان اسمیت</p>
                      <img src={profileimg} alt="" />
                    </div>
                  </div>

                  <p className="rtl mt-5 px-5 leading-5 text-[#6D6767] text-xs text-right">
                    {" "}
                    لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که
                    توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود.{" "}
                  </p>

                  <img className="mt-5 px-5" src={line} alt="" />

                  <p className="text-base  text-[#807A7A] mt-1">
                    مشاهده جزئیات
                  </p>
                </div>
              </div>

              {/* Three News Card*/}

              <div className="  flex justify-around items-center rounded-3xl ">
                <div className="relative h-[540px] w-[370px] text-center rounded-[1.5rem] mt-11 bg-[#FBF6F6] shadow-[9px_9px_12px_3px_rgba(0,_0,_0,_0.1)] text-TextGreen ">
                  <div>
                    <img
                      className="p-0 object-cover h-full w-full"
                      src={newsPic}
                      alt=""
                    />
                  </div>

                  <div className="flex justify-between items-center mt-5 px-5">
                    <div className="flex justify-center items-center ">
                      <img src={like} alt="" />
                      <img className="mx-2" src={dislike} alt="" />
                      <img src={favorite} alt="" />
                    </div>

                    <button class="text-TextGreen bg-[#BFF4E4] rounded-lg cursor-pointer p-2 w-auto-[120px]">
                      وضعیت دوره
                    </button>
                  </div>

                  <p className="rtl mt-3 text-[#1A1E21] text-xl rtl text-right px-5">
                    آشنایی با برنامه نویسی با وردپرس
                  </p>

                  <div className="flex justify-between items-center mt-5 px-5">
                    <div className="flex justify-center items-center ">
                      <img src={starRating} alt="" />
                      <p className="ml-2">4.8</p>
                    </div>

                    <div className="flex justify-between items-center">
                      <p className="mr-2">جان اسمیت</p>
                      <img src={profileimg} alt="" />
                    </div>
                  </div>

                  <p className="rtl mt-5 px-5 leading-5 text-[#6D6767] text-xs text-right">
                    {" "}
                    لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که
                    توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود.{" "}
                  </p>

                  <img className="mt-5 px-5" src={line} alt="" />

                  <p className="text-base  text-[#807A7A] mt-1">
                    مشاهده جزئیات
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            {/* First News Card */}

            <div className="flex justify-around items-center px-16">
              <div className="  flex justify-around items-center rounded-3xl ">
                <div className="relative h-[540px] w-[370px] text-center rounded-[1.5rem] mt-11 bg-[#FBF6F6] shadow-[9px_9px_12px_3px_rgba(0,_0,_0,_0.1)] text-TextGreen ">
                  <div>
                    <img
                      className="p-0 object-cover h-full w-full"
                      src={newsPic}
                      alt=""
                    />
                  </div>

                  <div className="flex justify-between items-center mt-5 px-5">
                    <div className="flex justify-center items-center ">
                      <img src={like} alt="" />
                      <img className="mx-2" src={dislike} alt="" />
                      <img src={favorite} alt="" />
                    </div>

                    <button class="text-TextGreen bg-[#BFF4E4] rounded-lg cursor-pointer p-2 w-auto-[120px]">
                      وضعیت دوره
                    </button>
                  </div>

                  <p className="rtl mt-3 text-[#1A1E21] text-xl rtl text-right px-5">
                    آشنایی با برنامه نویسی با وردپرس
                  </p>

                  <div className="flex justify-between items-center mt-5 px-5">
                    <div className="flex justify-center items-center ">
                      <img src={starRating} alt="" />
                      <p className="ml-2">4.8</p>
                    </div>

                    <div className="flex justify-between items-center">
                      <p className="mr-2">جان اسمیت</p>
                      <img src={profileimg} alt="" />
                    </div>
                  </div>

                  <p className="rtl mt-5 px-5 leading-5 text-[#6D6767] text-xs text-right">
                    {" "}
                    لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که
                    توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود.{" "}
                  </p>

                  <img className="mt-5 px-5" src={line} alt="" />

                  <p className="text-base  text-[#807A7A] mt-1">
                    مشاهده جزئیات
                  </p>
                </div>
              </div>

              {/* Two News Card*/}

              <div className="  flex justify-around items-center rounded-3xl ">
                <div className="relative h-[540px] w-[370px] text-center rounded-[1.5rem] mt-11 bg-[#FBF6F6] shadow-[9px_9px_12px_3px_rgba(0,_0,_0,_0.1)] text-TextGreen ">
                  <div>
                    <img
                      className="p-0 object-cover h-full w-full"
                      src={newsPic}
                      alt=""
                    />
                  </div>

                  <div className="flex justify-between items-center mt-5 px-5">
                    <div className="flex justify-center items-center ">
                      <img src={like} alt="" />
                      <img className="mx-2" src={dislike} alt="" />
                      <img src={favorite} alt="" />
                    </div>

                    <button class="text-TextGreen bg-[#BFF4E4] rounded-lg cursor-pointer p-2 w-auto-[120px]">
                      وضعیت دوره
                    </button>
                  </div>

                  <p className="rtl mt-3 text-[#1A1E21] text-xl rtl text-right px-5">
                    آشنایی با برنامه نویسی با وردپرس
                  </p>

                  <div className="flex justify-between items-center mt-5 px-5">
                    <div className="flex justify-center items-center ">
                      <img src={starRating} alt="" />
                      <p className="ml-2">4.8</p>
                    </div>

                    <div className="flex justify-between items-center">
                      <p className="mr-2">جان اسمیت</p>
                      <img src={profileimg} alt="" />
                    </div>
                  </div>

                  <p className="rtl mt-5 px-5 leading-5 text-[#6D6767] text-xs text-right">
                    {" "}
                    لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که
                    توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود.{" "}
                  </p>

                  <img className="mt-5 px-5" src={line} alt="" />

                  <p className="text-base  text-[#807A7A] mt-1">
                    مشاهده جزئیات
                  </p>
                </div>
              </div>

              {/* Three News Card*/}

              <div className="  flex justify-around items-center rounded-3xl ">
                <div className="relative h-[540px] w-[370px] text-center rounded-[1.5rem] mt-11 bg-[#FBF6F6] shadow-[9px_9px_12px_3px_rgba(0,_0,_0,_0.1)] text-TextGreen ">
                  <div>
                    <img
                      className="p-0 object-cover h-full w-full"
                      src={newsPic}
                      alt=""
                    />
                  </div>

                  <div className="flex justify-between items-center mt-5 px-5">
                    <div className="flex justify-center items-center ">
                      <img src={like} alt="" />
                      <img className="mx-2" src={dislike} alt="" />
                      <img src={favorite} alt="" />
                    </div>

                    <button class="text-TextGreen bg-[#BFF4E4] rounded-lg cursor-pointer p-2 w-auto-[120px]">
                      وضعیت دوره
                    </button>
                  </div>

                  <p className="rtl mt-3 text-[#1A1E21] text-xl rtl text-right px-5">
                    آشنایی با برنامه نویسی با وردپرس
                  </p>

                  <div className="flex justify-between items-center mt-5 px-5">
                    <div className="flex justify-center items-center ">
                      <img src={starRating} alt="" />
                      <p className="ml-2">4.8</p>
                    </div>

                    <div className="flex justify-between items-center">
                      <p className="mr-2">جان اسمیت</p>
                      <img src={profileimg} alt="" />
                    </div>
                  </div>

                  <p className="rtl mt-5 px-5 leading-5 text-[#6D6767] text-xs text-right">
                    {" "}
                    لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که
                    توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود.{" "}
                  </p>

                  <img className="mt-5 px-5" src={line} alt="" />

                  <p className="text-base  text-[#807A7A] mt-1">
                    مشاهده جزئیات
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <button className="bg-[#12926C] rounded-full h-[3.5rem] w-[14rem] absolute my-[-2rem] mx-[35rem] ">
          مشاهده مقالات بیشتر
        </button>
      </div>

      <Footer />
    </>

  )
}

export { ArticlesDetailsForm }