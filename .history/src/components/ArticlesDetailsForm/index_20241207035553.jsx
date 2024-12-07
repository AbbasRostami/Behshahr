import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Field, Form, Formik } from "formik";
import { deleteApi, getApi, postApi } from "../../core/api/api";
import { toast } from "react-toastify";
import "swiper/css/navigation";
import "swiper/css";
import {CoursesSlider} from "./../../../src/components/common/SliderCourses"
import profileimg from "./../../assets/svg/ArticlesDetails/profileimg.svg";
import starRating from "./../../assets/svg/ArticlesDetails/starRating.svg";
import articlePic from "./../../assets/svg/ArticlesDetails/articlePic.svg";
import favorite from "./../../assets/svg/ArticlesDetails/favorite.svg";
import calendar from "./../../assets/svg/ArticlesDetails/calendar.svg";
import disLike from "./../../assets/svg/ArticlesDetails/disLike.svg";
import newsPic from "./../../assets/svg/ArticlesDetails/newPic.svg";
import dummy from "./../../assets/svg/ArticlesDetails/dummy.svg";
import like from "./../../assets/svg/ArticlesDetails/like.svg";
import line from "./../../assets/svg/ArticlesDetails/line.svg";
import undo from "./../../assets/svg/ArticlesDetails/undo.svg";
import eye from "./../../assets/svg/ArticlesDetails/eye.svg";
import key from "./../../assets/svg/ArticlesDetails/key.svg";
import { useParams } from "react-router-dom";
import { MdTitle } from "react-icons/md";
import {
  AiFillGoogleCircle,
  AiFillOpenAI,
  AiFillWindows,
} from "react-icons/ai";
import moment from "jalali-moment";
const ArticlesDetailsForm = () => {
  const [cards, setCards] = useState([]);
  const [show, setShow] = useState(1);
  const { id } = useParams();

  const getArticlesTop = async () => {
    if (!id) return;
    const path = `/News/${id}`;
    try {
      const response = await getApi({ path });
      if (response?.data) {
        setCards(response.data);
        console.log("NeWS Deatils: ", response.data);
      }
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  };

  useEffect(() => {
    getArticlesTop();
  }, [id]);

  const addCommentsArticles = async (inputValues) => {
    const data = {
      describe: inputValues.describe,
      title: inputValues.title,
      newsId: id,
      userId: 40296,
    };

    console.log("data:", data);

    const path = `/News/CreateNewsComment`;
    const body = data;
    const response = await postApi({ path, body });
    console.log(response);
    if (response.data.success) {
      toast.success("عملیات با موفقیت انجام شد.");
      getArticlesTop();
    }
  };

  const addLike = async (id) => {
    console.log(id);
    const path = `/News/CommentLike/${id}`;
    const response = await postApi({ path });
    if (response?.data?.success) {
      toast.success("عملیات با موفقیت انجام شد.");
      getArticlesTop();
    }
    console.log(response);
  };

  const addDislike = async (id) => {
    console.log("Comment ID:", id);
    const body = {
      deleteEntityId: id,
    };
    const path = `/News/DeleteCommentLikeNews`;

    try {
      const response = await deleteApi({ path, body });
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
                  {cards?.detailsNewsDto?.title} :عنوان مقاله
                </h1>
                <div className="text-gray-700 dark:text-white pt-8 rtl text-justify">
                  <div className="flex items-center">
                    <MdTitle size={37} />
                    توضیحات: {cards?.detailsNewsDto?.describe}
                  </div>
                  <div className="flex items-center mt-8">
                    <AiFillWindows size={37} />
                    توضیحات گوگل: {cards?.detailsNewsDto?.googleDescribe}
                  </div>
                  <div className="flex items-center mt-8">
                    <AiFillOpenAI size={37} />
                    عنوان گوگل: {cards?.detailsNewsDto?.googleTitle}
                  </div>
                  <div className="flex items-center mt-8">
                    <AiFillGoogleCircle size={37} />
                    توضیحات کوتاه: {cards?.detailsNewsDto?.miniDescribe}
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex justify-center items-center  lg:gap-4">
                    <div className="flex flex-col items-center">
                      <img src={like} />
                      <p className="">
                        {cards?.detailsNewsDto?.currentLikeCount}
                      </p>
                    </div>
                    <div className="flex flex-col items-center">
                      <img src={disLike} />
                      <p className="">
                        {cards?.detailsNewsDto?.currentDissLikeCount}
                      </p>
                    </div>
                    <div className="flex flex-col items-center mb-1">
                      <img className="h-7" src={starRating} />
                      <p>{cards?.detailsNewsDto?.currentRate}</p>
                    </div>
                  </div>

                  <div className="flex justify-center items-center gap-11 py-8">
                    <div className="flex justify-center items-center gap-2 lg:gap-3">
                      <span className="text-[13px] text-[#807A7A] ">
                        {cards?.detailsNewsDto?.currentView}
                      </span>
                      <img src={eye} />
                    </div>

                    <div className="flex justify-center items-center gap-3">
                      <span className="text-[13px] text-[#807A7A] rtl">
                        {moment(cards?.detailsNewsDto?.insertDate)
                          .locale("fa")
                          .format("YYYY/MM/DD")}
                      </span>
                      <img src={calendar} />
                    </div>

                    <div className="flex justify-center items-center gap-3">
                      <span className="text-[13px] text-[#807A7A] ">
                        {cards?.detailsNewsDto?.keyword}
                      </span>
                      <img src={key} />
                    </div>

                    <div className="flex justify-center items-center gap-3">
                      <span className="text-[13px] text-[#126F94] ">
                        {cards?.detailsNewsDto?.addUserFullName}
                      </span>
                    </div>
                  </div>
                </div>
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
                  {cards?.commentDtos.map((comment) => {
                    return (
                      <>
                        <div className="bg-white p-2 px-7 items-end flex-col rounded-[30px] shadow-md rtl dark:bg-gray-700 dark:text-white ">
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-4 ">
                              <div>
                                <img className="w-10" src={dummy} />
                              </div>
                              <h2 className="text-[15px]">
                                عنوان : {comment?.title}
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
                                <p className="">{comment?.dissLikeCount}</p>
                              </div>
                              <div className="flex flex-col items-center mb-1">
                                <img className="h-7" src={undo} />
                                <p>{comment?.replyCount}</p>
                              </div>
                            </div>
                          </div>
                          <div className="text-gray-700 pt-5 min-h-[90px] dark:text-white">
                            {comment?.describe}
                          </div>
                          <div className="flex flex-row items-center text-xs text-gray-500 dark:text-white rtl">
                            <span>
                              تاریخ ارسال:{" "}
                              {moment(comment?.inserDate)
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
        <CoursesSlider />
      </div>
    </>
  );
};

export { ArticlesDetailsForm };
