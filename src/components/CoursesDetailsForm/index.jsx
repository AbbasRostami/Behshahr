import React, { useEffect, useState } from "react";
import { Field, Form, Formik } from "formik";

import articlePic3 from "./../../assets/svg/ArticlesDetails/articlePic3.svg";
import articlePic2 from "./../../assets/svg/ArticlesDetails/artilclePic2.svg";
import courses1 from "./../../assets/svg/ArticlesDetails/courses1.svg";
import dislike from "./../../assets/svg/ArticlesDetails/dislike.svg";
import download from "./../../assets/svg/ArticlesDetails/download.svg";
import favorite from "./../../assets/svg/ArticlesDetails/favorite.svg";
import like from "./../../assets/svg/ArticlesDetails/like.svg";
import line from "./../../assets/svg/ArticlesDetails/line.svg";
import mrSmith from "./../../assets/svg/ArticlesDetails/mrSmith.svg";
import profileimg from "./../../assets/svg/ArticlesDetails/profileimg.svg";
import starRating from "./../../assets/svg/ArticlesDetails/StarRating.svg";
import { getApi, postApi } from "../../core/api/api";
import { useParams } from "react-router-dom";
import moment from "jalali-moment";
import { FaRegStar } from "react-icons/fa";
import { BiDislike, BiLike } from "react-icons/bi";
import { CoursesSlider } from "../common/SliderCourses";

const CoursesDetailsForm = () => {

  const params = useParams()

  const [details, setDeatils] = useState(null)

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




  const addLike = async (id) => {
    console.log(id)
    const path = `Course/AddCourseLike?CourseId=${id}`
    const response = await postApi({ path })
    console.log(response)
  }

  const addDislike = async (id) => {
    console.log(id)
    const path = `/Course/AddCourseDissLike?CourseId=${id}`
    const response = await postApi({ path })
    console.log(response)
  }

  const addStarRatng = async (id) => {
    console.log(id)
    const path = `/Course/SetCourseRating?CourseId=<uuid>${id}`
    const response = await postApi({ path })
    console.log(response)
  }







  return (
    <>
      <div className="flex flex-row-reverse px-16 py-[70px] gap-5">
        <div>
          <div className="min-h-screen bg-[#FBF6F6] dark:bg-gray-800 rounded-md flex justify-center p-6 rtl">
            <div className="flex flex-col w-full min-w-[300px]  gap-6">
              <div className=" flex-col rounded-md flex items-center justify-center p-6 ">
                <img
                  src={details?.imageAddress}
                  alt="image"
                  className="h-[21.5rem] w-[60rem] object-fill rounded-md"
                />
              </div>

              <div className="flex flex-col rounded-md gap-6">
                <div>
                  <div className="bg-white p-6 dark:text-white dark:bg-gray-700 rounded-md gap-5 shadow-md flex flex-col justify-between">
                    <div className="flex flex-row">
                      <h1 className="font-bold text-lg w-full">{details?.title}</h1>

                      <div className="flex flex-row-reverse gap-2 lg:gap-4 w-full">
                        <button className="text-gray-500  hover:text-green-500">
                            <BiLike size={26} onClick={() => addLike(details.courseId)} className={details?.userIsLiked ? "text-green-600" : "text-gray-500"} />
                        </button>
                        <button className="text-gray-500  hover:text-red-500">
                             <BiDislike size={26} onClick={() => addLike(details.courseId)} className={details?.currentUserDissLike ? "text-green-600" : "text-gray-500"} />
                        </button>
                        <button className="text-gray-500  hover:text-yellow-500">
                            <FaRegStar size={26} onClick={() => addLike(details.courseId)} className={details?.currentUserSetRate ? "text-green-600" : "text-gray-500"} />
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

                <div className="bg-white dark:bg-gray-700 p-6 flex-col rounded-md shadow-md">
                  <Formik
                    initialValues={{ title: "", text: "" }}
                    onSubmit={(values) => {
                      console.log(values);
                    }}
                  >
                    {() => (
                      <Form className="flex flex-col gap-4 ">
                        <div className="flex  rounded-md ">
                          <button
                            type="button"
                            className="w-1/2 py-2 border border-[#A4F6DE] rounded-r-lg text-center dark:text-white "
                          >
                            نظرات کاربران
                          </button>
                          <button
                            type="button"
                            className="w-1/2 h-16 py-2 text-center rounded-l-lg bg-[#A4F6DE] dark:bg-gray-800 dark:text-white "
                          >
                            ثبت نظر
                          </button>
                        </div>

                        <div className="flex flex-col gap-2">
                          <Field
                            name="title"
                            placeholder="عنوان"
                            className="p-2 text-black border-2 bg-[#FBF6F6] border-BgGreen rounded-md "
                          />
                          <Field
                            name="text"
                            placeholder="متن..."
                            rows="4"
                            as="textarea"
                            className="p-2  text-black border-2 bg-[#FBF6F6] border-BgGreen rounded-md "
                          />
                        </div>


                        <button
                          type="submit"
                          className="py-5 text-xl bg-BgGreen dark:bg-gray-800 dark:text-white text-black rounded-md"
                        >
                          ثبت کردن
                        </button>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="min-h-screen w-full bg-[#FBF6F6] dark:bg-gray-800 rounded-md flex justify-center p-6 rtl">
            <div className="flex flex-col w-full min-w-64 gap-6">
              {" "}
              <div className="flex flex-col transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 ... bg-white  dark:bg-gray-700 dark:text-white p-4 gap-2 rounded-md  text-[#12926C]">
                <p>مدرس دوره : <span className="text-[#22445D] dark:text-slate-300">{details?.teacherName}</span> </p>
                <p>هزینه تمام دوره : <span className="text-[#22445D] dark:text-slate-300">{details?.cost}</span> </p>
                <p>تکنولوژی دوره :  <span className="text-[#22445D] dark:text-slate-300">{details?.techs}</span> </p>
                <p>سطح دوره : <span className="text-[#22445D] dark:text-slate-300">{details?.courseLevelName}</span></p>
                <p>ظرفیت دوره : <span className="text-[#22445D] dark:text-slate-300">{details?.capacity}</span> </p>
                <p>وضعیت دوره : <span className="text-[#22445D] dark:text-slate-300">{details?.courseStatusName}</span></p>
              </div>
              <div className="bg-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 ...  dark:bg-gray-700 dark:text-white p-4 space-y-2 rounded-md  text-[#12926C]">
                <p>مدت زمان : <span className="text-[#22445D] dark:text-slate-300">{details?.commentCount}</span></p>
                <p>تعداد ویدیوها : <span className="text-[#22445D] dark:text-slate-300">{details?.capacity}</span></p>
                <p>تعداد نظرات : <span className="text-[#22445D] dark:text-slate-300">{details?.commentCount}</span></p>
                <p>امتیاز دوره : <span className="text-[#22445D] dark:text-slate-300">{details?.currentRegistrants}</span></p>
              </div>
              <div className="bg-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 ...  dark:bg-gray-700 dark:text-white p-4 space-y-2 rounded-md  text-[#12926C]">
                <p>تاریخ بروزرسانی :<span className="text-[#22445D] dark:text-slate-300"> {moment(details?.insertDate).locale('fa').format('YYYY/MM/DD')}</span></p>
                <p>شروع دوره: <span className="text-[#22445D] dark:text-slate-300"> {moment(details?.startTime).locale('fa').format('YYYY/MM/DD')}</span></p>
                <p>پایان دوره :  <span className="text-[#22445D] dark:text-slate-300">{moment(details?.endTime).locale('fa').format('YYYY/MM/DD')}</span></p>
              </div>
              <div className="md:col-span-2">
                <button className="mt-3 transition ease-in-out delay-150 dark:hover:bg-green-300 hover:-translate-y-1 hover:scale-110  duration-300 ... w-full bg-[#5BE1B9] dark:bg-gray-500 dark:text-white text-black text-md py-3 rounded-md shadow-lg text-center">
                  رزرو دوره
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>

   <CoursesSlider />

    </>
  );
};

export { CoursesDetailsForm };
