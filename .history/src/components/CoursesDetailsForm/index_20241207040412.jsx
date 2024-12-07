import React, { useEffect, useState } from "react";
import { Field, Form, Formik } from "formik";
import { useParams } from "react-router-dom";
import { BiDislike, BiLike } from "react-icons/bi";
import { FaRegStar } from "react-icons/fa";

import disLike from "./../../assets/svg/ArticlesDetails/disLike.svg";

import dummy from "./../../assets/svg/ArticlesDetails/dummy.svg";

import like from "./../../assets/svg/ArticlesDetails/like.svg";

import undo from "./../../assets/svg/ArticlesDetails/undo.svg";

  
import articlePic2 from "./../../assets/svg/ArticlesDetails/artilclePic2.svg";
import profileimg from "./../../assets/svg/ArticlesDetails/profileimg.svg";
import starRating from "./../../assets/svg/ArticlesDetails/StarRating.svg";
import courses1 from "./../../assets/svg/ArticlesDetails/courses1.svg";
import download from "./../../assets/svg/ArticlesDetails/download.svg";
import favorite from "./../../assets/svg/ArticlesDetails/favorite.svg";
import line from "./../../assets/svg/ArticlesDetails/line.svg";
import articlePic3 from "./../../assets/articlePic33.svg";
import moment from "jalali-moment";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { getApi, postApi } from "../../core/api/api";
import { toast } from "react-toastify";
const CoursesDetailsForm = () => {
  const params = useParams();
  const [show, setShow] = useState(1);

  console.log(params?.id);

  const [details, setDeatils] = useState(null);
  const [comment, setComment] = useState(null);

  const getCoursesDetails = async () => {
    const path = `/Home/GetCourseDetails?CourseId=${params?.id}`;
    const response = await getApi({ path });
    console.log(response?.data);
    if (response) {
      setDeatils(response?.data);
    }
  };
  useEffect(() => {
    getCoursesDetails();
  }, []);

  const getCoursesComments = async () => {
    const path = `/Course/GetCourseCommnets/${params?.id}`;
    const response = await getApi({ path });
    console.log("GET Comment: ",response?.data);
    if (response) {
      setComment(response?.data);
    }
  };
  useEffect(() => {
    getCoursesComments();
  }, []);

  const addComments = async (values) => {
    const formData = new FormData();
    const data = {
      CourseId: params.id,
      Title: values.Title,
      Describe: values.Describe,
    };
    Object.entries(data).forEach(([key, value]) => formData.append(key, value));
    formData.forEach((value, key) => {
      console.log(key, ":", value);
    });

    const path = `/Course/AddCommentCourse`;
    const body = formData;
    const response = await postApi({ path, body });
    console.log(response);
    if (response.data.success) {
      toast.success(response.data.message);
      getCoursesComments();
    }
  };


  const addStarRatng = async (id) => {
    console.log(id);
    const path = `/Course/SetCourseRating?CourseId=<uuid>${id}`;
    const response = await postApi({ path });
    console.log(response);
  };

  const addReserve = async (id) => {
    console.log(id);

    const body = {
      courseId: id,
    };
    const path = `/CourseReserve/ReserveAdd`;

    const response = await postApi({ path, body });
    if (response.data.success) {
      toast.success("دوره شما با موفقیت رزرو شد.");
    } else {
      toast.error("این کورس یکبار رزو شده و نمیتواند دوباره رزرو شود.");
    }
  };

  const addLike = async (id) => {
    console.log(id);
    const path = `/Course/AddCourseCommentLike?CourseCommandId=${id}`;
    const response = await postApi({ path });
    if (response?.data?.success) {
      toast.success("عملیات با موفقیت انجام شد.");
      getCoursesComments();
    }
    console.log(response);
  };

  const addDislike = async (id) => {

    const path = `/Course/AddCourseCommentDissLike?CourseCommandId=${id}`;

    try {
      const response = await deleteApi({ path });
      console.log("API Response:", response);
      if (response?.data?.success) {
        toast.success("عملیات با موفقیت انجام شد.");
        getArticlesTop();
      } else {
        toast.error("مشکلی در حذف لایک وجود دارد.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("خطایی رخ داده است.");
    }
  };

  return (
    <>
      <div className="flex flex-row-reverse px-16 py-[70px] gap-5">
        <div>
          <div className="min-h-screen bg-[#FBF6F6] dark:bg-gray-800 rounded-md flex justify-center p-6 rtl">
            <div className="flex flex-col w-full min-w-[300px]  gap-6">
              <div className=" flex-col rounded-md flex items-center justify-center p-6 ">
                <img
                  src={
                    details?.imageAddress &&
                    /\.(jpg|jpeg|png|gif|webp)$/i.test(details?.imageAddress)
                      ? details?.imageAddress
                      : articlePic2
                  }
                  top
                  alt="image"
                  className="h-[21.5rem] w-[90rem] object-fill rounded-md"
                />
              </div>

              <div className="flex flex-col rounded-md gap-6">
                <div>
                  <div className="bg-white p-6 dark:text-white dark:bg-gray-700 rounded-md gap-5 shadow-md flex flex-col justify-between">
                    <div className="flex flex-row">
                      <h1 className="font-bold text-lg w-full">
                        {details?.title}
                      </h1>

                      <div className="flex flex-row-reverse gap-2 lg:gap-4 w-full">
                        <button className="text-gray-500  hover:text-green-500">
                          <BiLike
                            size={26}
                            onClick={() => addLike(details.courseId)}
                            className={
                              details?.userIsLiked
                                ? "text-green-600"
                                : "text-gray-500"
                            }
                          />
                        </button>
                        <button className="text-gray-500  hover:text-red-500">
                          <BiDislike
                            size={26}
                            onClick={() => addLike(details.courseId)}
                            className={
                              details?.currentUserDissLike
                                ? "text-green-600"
                                : "text-gray-500"
                            }
                          />
                        </button>
                        <button className="text-gray-500  hover:text-yellow-500">
                          <FaRegStar
                            size={26}
                            onClick={() => addLike(details.courseId)}
                            className={
                              details?.currentUserSetRate
                                ? "text-green-600"
                                : "text-gray-500"
                            }
                          />
                        </button>
                      </div>
                    </div>
                    <div className="text-gray-700 dark:text-white text-justify  ">
                      {details?.describe}
                      {details?.miniDescribe}
                      {details?.googleSchema}
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-700 dark:text-white p-6 flex-col rounded-md shadow-md">
                  <h2 className="font-bold text-lg mb-4">ویدیوهای دوره</h2>
                  <div className=" flex-col rounded-md flex items-center justify-center p-6 ">
                    <img
                      src={articlePic3}
                      alt="image"
                      className="w-full h-[380px] rounded-md object-cover"
                    />
                  </div>
                  <ul className="flex flex-col gap-4 ">
                    <div className="flex justify-between items-center border-b pb-3 gap-20">
                      <li>ویدیو اول : آشنایی با دوره</li>
                      <div className="flex justify-center items-center gap-3">
                        <p>00:28:00</p>
                        <img className="pl-6" src={download} />
                      </div>
                    </div>

                    <div className="flex justify-between items-center border-b pb-3 gap-20">
                      <li className=" pb-3">
                        ویدیو دوم : آشنایی با جاوا اسکریپت
                      </li>
                      <div className="flex justify-center items-center gap-3">
                        <p>00:45:00</p>
                        <img className="pl-6" src={download} />
                      </div>
                    </div>

                    <div className="flex justify-between items-center border-b pb-3 gap-20">
                      <li className=" pb-3">
                        ویدیو دوم : آشنایی با جاوا اسکریپت
                      </li>
                      <div className="flex justify-center items-center gap-3">
                        <p>00:29:00</p>
                        <img className="pl-6" src={download} />
                      </div>
                    </div>
                  </ul>
                </div>
                <div className="flex rounded-[15px] px-28 py-3">
                <button
                  onClick={() => setShow(1)}
                  type="button"
                  className={
                    show === 1
                      ? "w-1/2 py-4 border-[#A4F6DE] dark:bg-gray-800 dark:text-white dark:border-2 dark:hover:bg-slate-950 bg-[#A4F6DE] rounded-r-lg text-center"
                      : "w-1/2 py-4 text-center rounded-l-lg  border-[#A4F6DE] dark:bg-gray-800 dark:hover:bg-slate-950 dark:text-white bg-[#FFFFFF] border-2"
                  }
                >
                  ثبت نظر
                </button>

                <button
                  onClick={() => setShow(2)}
                  type="button"
                  className={
                    show === 2
                      ? "w-1/2 py-4  border-[#A4F6DE] dark:bg-gray-800 dark:text-white dark:border-2 dark:hover:bg-slate-950 bg-[#A4F6DE] rounded-r-lg text-center"
                      : "w-1/2 py-4 text-center rounded-l-lg  border-[#A4F6DE] dark:bg-gray-800 dark:hover:bg-slate-950 dark:text-white bg-[#FFFFFF] border-2"
                  }
                >
                  نظرات کاربران
                </button>
              </div>

              {show === 2 ? (
                <>
                  {comment?.map((comment) => {
                    return (
                      <>
                        <div className="bg-white p-2 px-7 items-end flex-col rounded-[30px] shadow-md rtl dark:bg-gray-700 dark:text-white ">
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-4 ">
                              <div>
                                <img className="w-10" src={dummy} />
                              </div>
                              <h2 className="text-[15px]">
                                عنوان : {comment?.author}
                              </h2>
                            </div>
                            <div className="flex justify-center items-center  lg:gap-4">
                              <div className="flex flex-col items-center">
                                <img
                                  onClick={() => addLike(comment.id)}
                                  src={like}
                                />
                                <p className="">{comment?.likeCount}</p>
                              </div>
                              <div className="flex flex-col items-center">
                                <img
                                  onClick={() => addDislike(comment.id)}
                                  src={disLike}
                                />
                                <p className="">{comment?.disslikeCount}</p>
                              </div>
                              <div className="flex flex-col items-center mb-1">
                                <img className="h-7" src={undo} />
                                <p>{comment?.acceptReplysCount}</p>
                              </div>
                            </div>
                          </div>
                          <div className="text-gray-700 pt-5 min-h-[90px] dark:text-white">
                          {comment?.describe}
                          </div>
                          <div className="flex flex-row items-center text-xs text-gray-500 dark:text-white rtl">
                            <span>
                              تاریخ ارسال:{" "}
                              {moment(comment?.insertDate)
                                .locale("fa")
                                .format("YYYY/MM/DD")}{" "}
                            </span>
                          </div>
                        </div>
                        <div className="p-4 pt-0 flex flex-row-reverse gap-6">
                          <p className="text-[14px] text-[#158B68]">پاسخ ها</p>
                          <p className="text-[14px] text-[#158B68]">
                            پاسخ دادن
                          </p>
                        </div>
                      </>
                    );
                  })}
                </>
              ) : null}

              {show === 1 ? (
                <>
               <Formik
                    initialValues={{ title: "", Describe: "" }}
                    onSubmit={addComments}
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
                            name="Describe"
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
        </div>
       
        <div>
          <div className="min-h-screen w-full bg-[#FBF6F6] dark:bg-gray-800 rounded-md flex justify-center p-6 rtl">
            <div className="flex flex-col w-full min-w-64 gap-6">
              {" "}
              <div className="flex flex-col  ... bg-white  dark:bg-gray-700 dark:text-white p-4 gap-2 rounded-md  text-[#12926C]">
                <p>
                  مدرس دوره :{" "}
                  <span className="text-[#22445D]">{details?.teacherName}</span>{" "}
                </p>
                <p>
                  هزینه تمام دوره :{" "}
                  <span className="text-[#22445D]">{details?.cost}</span>{" "}
                </p>
                <p>
                  تکنولوژی دوره :{" "}
                  <span className="text-[#22445D]">{details?.techs}</span>{" "}
                </p>
                <p>
                  سطح دوره :{" "}
                  <span className="text-[#22445D]">
                    {details?.courseLevelName}
                  </span>
                </p>
                <p>
                  ظرفیت دوره :{" "}
                  <span className="text-[#22445D]">{details?.capacity}</span>{" "}
                </p>
                <p>
                  وضعیت دوره :{" "}
                  <span className="text-[#22445D]">
                    {details?.courseStatusName}
                  </span>
                </p>
              </div>
              <div className="bg-white  ...  dark:bg-gray-700 dark:text-white p-4 space-y-2 rounded-md  text-[#12926C]">
                <p>
                  مدت زمان :{" "}
                  <span className="text-[#22445D]">
                    {details?.commentCount}
                  </span>
                </p>
                <p>
                  تعداد ویدیوها :{" "}
                  <span className="text-[#22445D]">{details?.capacity}</span>
                </p>
                <p>
                  تعداد نظرات :{" "}
                  <span className="text-[#22445D]">
                    {details?.commentCount}
                  </span>
                </p>
                <p>
                  امتیاز دوره :{" "}
                  <span className="text-[#22445D]">
                    {details?.currentRegistrants}
                  </span>
                </p>
              </div>
              <div className="bg-white  ...  dark:bg-gray-700 dark:text-white p-4 space-y-2 rounded-md  text-[#12926C]">
                <p>
                  تاریخ بروزرسانی :
                  <span className="text-[#22445D]">
                    {" "}
                    {moment(details?.insertDate)
                      .locale("fa")
                      .format("YYYY/MM/DD")}
                  </span>
                </p>
                <p>
                  شروع دوره:{" "}
                  <span className="text-[#22445D]">
                    {" "}
                    {moment(details?.startTime)
                      .locale("fa")
                      .format("YYYY/MM/DD")}
                  </span>
                </p>
                <p>
                  پایان دوره :{" "}
                  <span className="text-[#22445D]">
                    {moment(details?.endTime).locale("fa").format("YYYY/MM/DD")}
                  </span>
                </p>
              </div>
              <div className="md:col-span-2">
                <button
                  onClick={() => addReserve(details?.courseId)}
                  className="mt-3 transition ease-in-out delay-150 dark:hover:bg-green-300 hover:-translate-y-1 hover:scale-110  duration-300 ... w-full bg-[#5BE1B9] dark:bg-gray-500 dark:text-white text-black text-md py-3 rounded-md shadow-lg text-center"
                >
                  رزرو دوره
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { CoursesDetailsForm };
