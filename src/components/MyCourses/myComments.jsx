import React, { useEffect, useState } from "react";
import { getApi } from "../../core/api/api";

import dislike from "./../../assets/svg/ArticlesDetails/dislike.svg";
import like from "./../../assets/svg/ArticlesDetails/like.svg";
import undo from "./../../assets/svg/ArticlesDetails/undo.svg";
import dot from "../../assets/dot.svg";
import moment from "jalali-moment";
import download from "./../../assets/svg/download.png";
import { Field, Form, Formik } from "formik";
const MyComments = () => {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [answers, setAnswers] = useState(false);
  const [showReplyForm, setShowReplyForm] = useState(false);

  const getMyComments = async () => {
    const path = `/Course/GetCourseCommnets/9b8c711d-1b27-ef11-b6c7-cc06a3e06235?Count=5`;
    const response = await getApi({ path });
    console.log(response.data);
    setData(response.data);
  };
  useEffect(() => {
    getMyComments();
  }, []);

  return (
    <>
      <div className="w-[45rem] lg:w-[70rem] h-[43rem] my-[1rem] border-[1px] bg-[#ffff] dark:bg-gray-800 rounded-2xl shadow-2xl">
        <div className="text-nowrap mt-6 mr-6 lg:mr-20">
          <button className="bg-[#A4F6DE] dark:bg-gray-900 w-[21rem] lg:w-[30rem] h-[3rem] text-[#22445D] dark:text-white text-lg">
            دوره ها
          </button>

          <button className="bg-[#ffff] dark:bg-gray-700 border-[2px] border-[#A4F6DE] w-[21rem] lg:w-[30rem] h-[3rem] text-[#22445D] dark:text-white text-lg">
            اخبار و مقالات
          </button>
        </div>
        <div className="w-[43rem] lg:w-[66rem] h-[35rem] mx-auto my-[2rem] bg-[#FBF6F6] dark:bg-gray-700 border-[1px] rounded-lg shadow-2xl">
          <div className="text-nowrap text-[#22445D] dark:text-white text-[5px] text-xs lg:text-sm bg-[#A4F6DE] dark:bg-gray-900 h-[4.5rem] rounded-lg flex justify-evenly rtl gap-14 lg:gap-24 py-[1.5rem] px-[2rem]">
            <h1>عنوان نظر</h1>
            <h1>عنوان دوره</h1>
            <h1>تعداد پاسخ</h1>
            <h1>تاریخ ارسال</h1>
            <h1>وضعیت</h1>
            <h1>جزئیات</h1>
          </div>

          <br></br>

          {data?.slice(1, 7).map((item) => {
            return (
              <div className="mt-2 text-nowrap text-[#22445D] dark:text-white text-[12px] bg-[#ffff] dark:bg-gray-700 w-[41rem] lg:w-[64rem] h-[3.5rem] rounded-2xl flex justify-evenly rtl gap-14 lg:gap-28 shadow-sm border-[1px] py-[1.2rem] px-[1rem] mx-[1rem]">
                <h2 className="truncate ... w-[6.8rem] mr-5"> {item?.author} </h2>
                <h2 className="truncate ... w-[6.8rem] mr-5"> {item?.title} </h2>
                <h2 className="w-[6.8rem] mr-10"> {item?.acceptReplysCount} </h2>
                <p className="w-[6.8rem]">
                  {moment(item?.insertDate).locale("fa").format("YYYY/MM/DD")}
                </p>
                <h2 className="w-[6.8rem]"> {item?.accept ? "تایید شده" : "تایید نشده"} </h2>

                <div>
                  <img
                    className="text-[#22445D] ml-16 w-[1.5rem] h-[1.5rem] cursor-pointer"
                    src={dot}
                    alt=""
                    onClick={() => setShow(!show)}
                  />
                </div>

                {show && (
                  <>
                    <div
                      className={`fixed  z-50 inset-0 flex justify-center items-center transition-all duration-300`}
                    >
                      {/* مودال اصلی */}
                      <div
                        className={`w-[40rem] relative lg:w-[67rem] rounded-lg shadow-lg bg-slate-100 dark:bg-slate-800 transition-all duration-300 overflow-y-auto max-h-[80vh] ${
                          answers ? "h-[30rem]" : "h-[17rem]"
                        }`}
                      >
                        <button
                          type="button"
                          className="text-gray-400 bg-transparent absolute top-0 left-2 hover:bg-gray-200 hover:text-gray-900 rounded-lg w-8 h-8 inline-flex justify-center items-center dark:hover:bg-slate-700 dark:hover:text-white"
                          onClick={() => setShow(false)}
                        >
                          <svg
                            className="w-4 h-4"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 14"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                            />
                          </svg>
                        </button>
                        <div className="w-[36rem] lg:w-[63rem] h-[11.5rem] mx-auto mb-2 rounded-lg bg-white dark:bg-slate-700">
                          <div className="flex items-center justify-between gap-2 mt-7 mr-4 ml-4">
                            <p className="text-[14px] mt-5">
                              عنوان دوره: ساخت سایت رزومه با Asp.net core رایگان
                            </p>
                            <div className="flex justify-center mt-5 items-center gap-4">
                              <img src={like} alt="like" />
                              <img src={dislike} alt="dislike" />
                              <img className="h-5" src={undo} alt="undo" />
                            </div>
                          </div>

                          <div className="flex flex-col gap-5 px-6 mt-2 border-b-[2px] border-black text-right">
                            <p className="text-[18px] mt-5 font-bold">
                              عنوان: عاالییی
                            </p>
                            <p className="text-[14px] mb-2">عالیی بود</p>
                          </div>

                          <div className="flex flex-row justify-between px-6 mt-3 text-left">
                            <p>تاریخ و ساعت ارسال: 21:29 2024/06/23</p>
                            <p>وضعیت: تایید شده</p>
                          </div>
                        </div>

                        <div
                          onClick={() => setAnswers(!answers)}
                          className="rounded-lg text-left ml-9"
                        >
                          <p className="cursor-pointer dark:hover:bg-slate-700 ">
                            پاسخ‌ها
                          </p>
                        </div>

                        {answers && (
                          <>
                            <div className="w-[50rem] h-[11.5rem] ml-8 mb-2 mr-8 rounded-lg bg-white dark:bg-slate-700">
                              <div className="flex items-center justify-between gap-2 mt-3 mr-4 ml-4">
                                <div className="flex justify-center items-center gap-3">
                                  <img
                                    className="max-w-12"
                                    src={download}
                                    alt=""
                                  />
                                  <p className="text-[14px]">اسم شخص:</p>
                                  <p>تاریخ و ساعت ارسال: 21:29 2024/06/23</p>
                                </div>

                                <div className="flex justify-center items-center gap-4">
                                  <img src={like} alt="like" />
                                  <img src={dislike} alt="dislike" />
                                  <img className="h-5" src={undo} alt="undo" />
                                </div>
                              </div>

                              <div className="flex flex-col gap-5 px-6 mt-2 text-right">
                                <p className="text-[18px] mt-5 font-bold">
                                  عنوان: پاسخ برای: ساخت سایت رزومه با Asp.net
                                  core رایگان
                                </p>
                                <p className="text-[14px] mb-2">عالیی بود</p>
                              </div>
                            </div>

                            <div
                              onClick={() => setShowReplyForm(!showReplyForm)}
                              className="flex justify-end ml-72 items-center gap-3 rounded-lg text-left"
                            >
                              <p className="cursor-pointer hover:bg-gray-200 dark:hover:bg-slate-700">
                                پاسخ‌ها
                              </p>
                              <p className="cursor-pointer hover:bg-gray-200 dark:hover:bg-slate-700">
                                پاسخ دادن
                              </p>
                            </div>

                            {showReplyForm && (
                              <div className="w-[30rem] p-5 mx-auto  dark:bg-slate-700 rounded-lg mt-3">
                                <Formik
                                  initialValues={{
                                    name: "",
                                    email: "",
                                    message: "",
                                  }}
                                  onSubmit={(values) => {
                                    console.log("Form Data:", values);
                                  }}
                                >
                                  {() => (
                                    <Form>
                                      <div className="flex flex-col gap-4">
                                        <Field
                                          name="name"
                                          placeholder="عنوان پاسخ..."
                                          className="bg-[#FBF6F6] pr-3 rtl placeholder-TextGray h-[50px] w-full border-solid border-2 border-TextGreen rounded-md"
                                        />
                                        <Field
                                          name="message"
                                          as="textarea"
                                          rows="3"
                                          placeholder="متن..."
                                          className="bg-[#FBF6F6] pr-3 rtl placeholder-TextGray h-[110px] w-full border-solid border-2 border-TextGreen rounded-md"
                                        />
                                        <button
                                          type="submit"
                                          className="w-full h-[40px] text-white bg-green-500 rounded-lg hover:bg-green-600"
                                        >
                                          پاسخ دادن
                                        </button>
                                      </div>
                                    </Form>
                                  )}
                                </Formik>
                              </div>
                            )}
                          </>
                        )}
                      </div>
                    </div>

                    <div className="opacity-40 fixed inset-0 z-40 bg-black"></div>
                  </>
                )}
              </div>
            );
          })}
        </div>
        ;
      </div>
    </>
  );
};

export { MyComments };
