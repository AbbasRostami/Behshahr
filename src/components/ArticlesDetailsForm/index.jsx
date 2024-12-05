import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { HeaderUserlogin } from "../common/HeaderUserLogin";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Field, Form, Formik } from "formik";
import { Header } from "./../common/Header";
import { Footer } from "./../common/Footer";
import "swiper/css/navigation";
import "swiper/css";

import profileimg from "./../../assets/svg/ArticlesDetails/profileimg.svg";
import starRating from "./../../assets/svg/ArticlesDetails/starRating.svg";
import articlePic from "./../../assets/svg/ArticlesDetails/articlePic.svg";
import favorite from "./../../assets/svg/ArticlesDetails/favorite.svg";
import calendar from "./../../assets/svg/ArticlesDetails/calendar.svg";
import disLike from "./../../assets/svg/ArticlesDetails/disLike.svg";
import newsPic from "./../../assets/svg/ArticlesDetails/newPic.svg";
import author from "./../../assets/svg/ArticlesDetails/author.svg";
import dummy from "./../../assets/svg/ArticlesDetails/dummy.svg";
import like from "./../../assets/svg/ArticlesDetails/like.svg";
import line from "./../../assets/svg/ArticlesDetails/line.svg";
import undo from "./../../assets/svg/ArticlesDetails/undo.svg";
import eye from "./../../assets/svg/ArticlesDetails/eye.svg";
import key from "./../../assets/svg/ArticlesDetails/key.svg";
import { getApi, postApi } from "../../core/api/api";
import { toast } from "react-toastify";

const ArticlesDetailsForm = () => {
  const [cards, setCards] = useState([]);
  const [show, setShow] = useState(1);

  const getArticlesTop = async () => {
    const path = `/News`;
    const response = await getApi({ path });
    console.log(response.data?.news);
    if (response) {
      setCards(response.data?.news);
    }
  };
  useEffect(() => {
    getArticlesTop();
  }, []);

  const addCommentsArticles = async (inputValues) => {
  
    const data = {
      describe: inputValues.describe,
      title: inputValues.title,
      newsId: "2b63aab9-6239-ef11-b6ca-c84ec5106ca4",
      userId: 40296
    }

    console.log("data:", data);

    const path = `/News/CreateNewsComment`;
    const body = data;
    const response = await postApi({ path, body });
    console.log(response);
    if (response.data.success) {
      toast.success(response.data.message);
    }
  };

  return (
    <>
      <div>
        <div className="flex flex-col px-16 py-[70px]">
          <div className="min-h-screen bg-[#FBF6F6] rounded-[40px] flex justify-center p-6 dark:bg-gray-800 ">
            <div className="flex flex-col w-full min-w-[100px] gap-6">
              <div className=" flex-col rounded-[30px] flex items-center justify-center p-6">
                <img
                  src={articlePic}
                  alt="image"
                  className="min-w-[300px] object-cover rounded-[30px]"
                />
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 flex-col rounded-[30px] shadow-md px-9">
                <h1 className="text-[30px] w-full flex flex-col items-center dark:text-white">
                  عنوان مقاله
                </h1>
                <div className="text-gray-700 dark:text-white pt-8 rtl text-justify">
                  لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط
                  توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود. تکه
                  های لاتین متن نشان می دهد که یک پروژه در حال توسعه است. لورم
                  ایپسوم فقط برای توسعه دهندگان وب نیست. طراحان گرافیک نیز از آن
                  با نرم افزارهای مختلفی مانند فوتوشاپ استفاده می کنند. لورم
                  ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه
                  دهندگان وب، تایپوگراف ها و طراحان استفاده می شود. تکه های
                  لاتین متن نشان می دهد که یک پروژه در حال توسعه است. لورم
                  ایپسوم فقط برای توسعه دهندگان وب نیست.
                  <p className="pt-8">
                    طراحان گرافیک نیز از آن با نرم افزارهای مختلفی مانند فوتوشاپ
                    استفاده می کنند. لورم ایپسوم محبوب ترین و استانداردترین متن
                    ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان
                    استفاده می شود. تکه های لاتین متن نشان می دهد که یک پروژه در
                    حال توسعه است. لورم ایپسوم فقط برای توسعه دهندگان وب نیست.
                    طراحان گرافیک نیز از آن با نرم افزارهای مختلفی مانند فوتوشاپ
                    استفاده می کنند.
                  </p>
                  <p className="pt-8">
                    لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که
                    توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود.
                    تکه های لاتین متن نشان می دهد که یک پروژه در حال توسعه است.
                    لورم ایپسوم فقط برای توسعه دهندگان وب نیست. طراحان گرافیک
                    نیز از آن با نرم افزارهای مختلفی مانند فوتوشاپ استفاده می
                    کنند. لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است
                    که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می
                    شود. تکه های لاتین متن نشان می دهد که یک پروژه در حال توسعه
                    است.
                  </p>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex justify-center items-center mr-4 gap-2 lg:gap-4">
                    <span>
                      {" "}
                      <img src={like} />
                    </span>
                    <span>
                      <img src={disLike} />
                    </span>
                    <span>
                      <img src={starRating} />
                    </span>
                  </div>

                  <div className="flex justify-center items-center gap-11 py-8">
                    <div className="flex justify-center items-center gap-2 lg:gap-3">
                      <span className="text-[13px] text-[#807A7A] ">1124</span>
                      <img src={eye} />
                    </div>

                    <div className="flex justify-center items-center gap-3">
                      <span className="text-[13px] text-[#807A7A] rtl">
                        06 مهر 1402
                      </span>
                      <img src={calendar} />
                    </div>

                    <div className="flex justify-center items-center gap-3">
                      <span className="text-[13px] text-[#807A7A] ">
                        کلمات کلیدی
                      </span>
                      <img src={key} />
                    </div>

                    <div className="flex justify-center items-center gap-3">
                      <span className="text-[13px] text-[#126F94] ">
                        نام نویسنده{" "}
                      </span>
                      <img src={author} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex rounded-[15px] px-28 py-3">
                <button
                  onClick={() => setShow(1)}
                  type="button"
                  className="w-1/2 py-4 text-center rounded-l-lg  border-[#A4F6DE] dark:bg-gray-800 dark:hover:bg-slate-950 dark:text-white bg-[#FFFFFF] border-2 "
                >
                  ثبت نظر
                </button>
                <button
                  onClick={() => setShow(2)}
                  type="button"
                  className="w-1/2 py-4  border-[#A4F6DE] dark:bg-gray-800 dark:text-white dark:border-2 dark:hover:bg-slate-950 bg-[#A4F6DE] rounded-r-lg text-center "
                >
                  نظرات کاربران
                </button>
              </div>

              {show === 2 ? (
                <>
                  <div className="bg-white p-6 px-7 items-end flex-col rounded-[30px] shadow-md rtl dark:bg-gray-700 dark:text-white ">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-4 ">
                        <div>
                          <img src={dummy} />
                        </div>
                        <h2 className="text-[15px]">عنوان : عنوان نظر</h2>
                      </div>
                      <div className="flex flex-row gap-4">
                        <img src={like} />
                        <img src={disLike} />
                        <img src={undo} />
                      </div>
                    </div>
                    <div className="text-gray-700 pt-5 min-h-[110px] dark:text-white">
                      لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که
                      توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می
                      شود. تکه های لاتین متن نشان می دهد که یک پروژه در حال
                      توسعه است. لورم ایپسوم فقط برای توسعه دهندگان وب نیست.
                      طراحان گرافیک نیز از آن با نرم افزارهای مختلفی مانند
                      فوتوشاپ استفاده می کنند. لورم ایپسوم محبوب ترین و
                      استانداردترین متن ساختگی است که توسط توسعه دهندگان وب،
                    </div>
                    <div className="flex flex-row items-center text-xs text-gray-500 dark:text-white rtl">
                      <span>1403/03/16 | 09:45 </span>
                    </div>
                  </div>
                  <div className="p-4 pt-0 flex flex-row-reverse gap-6">
                    <p className="text-[14px] text-[#158B68]">پاسخ ها</p>
                    <p className="text-[14px] text-[#158B68]">پاسخ دادن</p>
                  </div>

                  <div className="bg-white p-6 px-7 w-[37rem] lg:w-[80rem] flex-col rounded-[30px] shadow-md rtl dark:bg-gray-700 dark:text-white">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-4 ">
                        <div>
                          <img src={dummy} />
                        </div>
                        <h2 className="text-[15px]">تایتل : عنوان نظر</h2>
                      </div>
                      <div className="flex flex-row gap-4">
                        <img src={like} />
                        <img src={disLike} />
                        <img src={undo} />
                      </div>
                    </div>
                    <div className="text-gray-700 pt-5 min-h-[110px] dark:text-white">
                      لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که
                      توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می
                      شود. تکه های لاتین متن نشان می دهد که یک پروژه در حال
                      توسعه است. لورم ایپسوم فقط برای توسعه دهندگان وب نیست.
                      طراحان گرافیک نیز از آن با نرم افزارهای مختلفی مانند
                      فوتوشاپ استفاده می کنند. لورم ایپسوم محبوب ترین و
                      استانداردترین متن ساختگی است که توسط توسعه دهندگان وب،
                    </div>
                    <div className="flex flex-row items-center text-xs text-gray-500 dark:text-white rtl">
                      <span>1403/03/16 | 09:45 </span>
                    </div>
                  </div>
                  <div className="p-4 pt-0 flex flex-row-reverse gap-6">
                    <p className="text-[14px] text-[#158B68]">پاسخ ها</p>
                    <p className="text-[14px] text-[#158B68]">پاسخ دادن</p>
                  </div>

                  <div className="bg-white p-6 px-7 flex-col rounded-[30px] shadow-md dark:bg-gray-700 rtl dark:text-white">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-4 ">
                        <div>
                          <img src={dummy} />
                        </div>
                        <h2 className="text-[15px]">عنوان : عنوان نظر</h2>
                      </div>
                      <div className="flex flex-row gap-4">
                        <img src={like} />
                        <img src={disLike} />
                        <img src={undo} />
                      </div>
                    </div>
                    <div className="text-gray-700 pt-5 min-h-[110px] dark:text-white">
                      لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که
                      توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می
                      شود. تکه های لاتین متن نشان می دهد که یک پروژه در حال
                      توسعه است. لورم ایپسوم فقط برای توسعه دهندگان وب نیست.
                      طراحان گرافیک نیز از آن با نرم افزارهای مختلفی مانند
                      فوتوشاپ استفاده می کنند. لورم ایپسوم محبوب ترین و
                      استانداردترین متن ساختگی است که توسط توسعه دهندگان وب،
                    </div>
                    <div className="flex flex-row items-center text-xs text-gray-500 dark:text-white rtl">
                      <span>1403/03/16 | 09:45 </span>
                    </div>
                  </div>
                  <div className="p-4 pt-0 flex flex-row-reverse gap-6">
                    <p className="text-[14px] text-[#158B68]">پاسخ ها</p>
                    <p className="text-[14px] text-[#158B68]">پاسخ دادن</p>
                  </div>

                  <div className="bg-white p-6 px-7 flex-col rounded-[30px] shadow-md  rtl dark:bg-gray-700 dark:text-white">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-4 ">
                        <div>
                          <img src={dummy} />
                        </div>
                        <h2 className="text-[15px]">عنوان : عنوان نظر</h2>
                      </div>
                      <div className="flex flex-row gap-4">
                        <img src={like} />
                        <img src={disLike} />
                        <img src={undo} />
                      </div>
                    </div>
                    <div className="text-gray-700 pt-5 min-h-[110px] dark:text-white">
                      لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که
                      توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می
                      شود. تکه های لاتین متن نشان می دهد که یک پروژه در حال
                      توسعه است. لورم ایپسوم فقط برای توسعه دهندگان وب نیست.
                      طراحان گرافیک نیز از آن با نرم افزارهای مختلفی مانند
                      فوتوشاپ استفاده می کنند. لورم ایپسوم محبوب ترین و
                      استانداردترین متن ساختگی است که توسط توسعه دهندگان وب،
                    </div>
                    <div className="flex flex-row items-center text-xs text-gray-500 dark:text-white rtl">
                      <span>1403/03/16 | 09:45 </span>
                    </div>
                  </div>

                  <div className="p-4 pt-0 flex flex-row-reverse gap-6">
                    <p className="text-[14px] text-[#158B68]">پاسخ ها</p>
                    <p className="text-[14px] text-[#158B68]">پاسخ دادن</p>
                  </div>
                </>
              ) : null}

              {show === 1 ? (
                <>
                  <Formik
                    initialValues={{ title: "", describe: "" }}
                    onSubmit={addCommentsArticles}
                  >
                    {() => (
                      <Form className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                          <Field
                            name="title"
                            placeholder="عنوان"
                            className="p-2 border-2 rtl bg-[#FBF6F6] dark:bg-slate-700 border-BgGreen rounded-md "
                          />
                          <Field
                            name="describe"
                            placeholder="متن..."
                            rows="4"
                            as="textarea"
                            className="p-2 border-2 rtl bg-[#FBF6F6] dark:bg-slate-700 border-BgGreen rounded-md text-[#807A7A]"
                          />
                        </div>

                        <button
                          type="submit"
                          className="py-5 text-xl bg-BgGreen dark:bg-slate-900 dark:hover:bg-slate-950 text-black dark:text-white rounded-md"
                        >
                          ثبت کردن
                        </button>
                      </Form>
                    )}
                  </Formik>
                </>
              ) : null}
            </div>
          </div>
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
                      classNa
                      me="p-0 object-cover h-full w-full"
                      src={newsPic}
                      alt=""
                    />
                  </div>

                  <div className="flex justify-between items-center mt-5 px-5">
                    <div className="flex justify-center items-center ">
                      <img src={like} alt="" />
                      <img className="mx-2" src={disLike} alt="" />
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
                      <img className="mx-2" src={disLike} alt="" />
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
                      <img className="mx-2" src={disLike} alt="" />
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
                      <img className="mx-2" src={disLike} alt="" />
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
                      <img className="mx-2" src={disLike} alt="" />
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
                      <img className="mx-2" src={disLike} alt="" />
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

        <button className="bg-[#12926C] rounded-full h-[3.5rem] w-[14rem] my-[-2rem] ml-[330px] lg:ml-[660px] dark:bg-gray-800 hover:dark:bg-gray-700 dark:text-white">
          مشاهده مقالات بیشتر
        </button>
      </div>
    </>
  );
};

export { ArticlesDetailsForm };
