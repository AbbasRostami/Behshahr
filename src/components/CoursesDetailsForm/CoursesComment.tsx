import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { deleteApi, getApi, postApi } from '../../core/api/api';
import { ApiResponse, CommentType } from ".";
import { useParams } from 'react-router-dom';
import { Field, Form, Formik } from "formik";
import disLike from "./../../assets/svg/ArticlesDetails/dislike.svg";
import dummy from "./../../assets/svg/ArticlesDetails/dummy.svg";
import like from "./../../assets/svg/ArticlesDetails/like.svg";
import undo from "./../../assets/svg/ArticlesDetails/undo.svg"; 
import moment from 'jalali-moment';


const CoursesComment = () => {

    const [comment, setComment] = useState<CommentType[]>([]);
    const [show, setShow] = useState(1);
     const params = useParams();
console.log(params?.id);

    const getCoursesComments = async () => {
        try {
          const path = `/Course/GetCourseCommnets/${params?.id}`;
          const response = (await getApi({ path })) as ApiResponse;
          console.log("comments: ", response?.data);
    
          if (response.data.success) {
            setComment(response?.data);
          }
        } catch (error) {
          console.log(error);
        }
      };
      useEffect(() => {
        getCoursesComments();
      }, []);
    const addStarRatng = async (id: number) => {
        try {
          console.log(id);
          const path = `/Course/SetCourseRating?CourseId=<uuid>${id}`;
          const body = {};
          const response = (await postApi({ path, body })) as ApiResponse;
          console.log(response);
        } catch (error) {
          console.error("خطا در ارسال نظر:", error);
          toast.error("خطایی در ارسال نظر رخ داده است. لطفاً دوباره تلاش کنید.");
        }
      };
    
      const addLike = async (id: number) => {
        console.log(id);
        const path = `/Course/AddCourseCommentLike?CourseCommandId=${id}`;
        const response = (await postApi({ path, body: {} })) as ApiResponse;
        if (response?.data?.success) {
          toast.success("عملیات با موفقیت انجام شد.");
          getCoursesComments();
        }
        console.log(response);
      };
    
      const addDislike = async (id: number) => {
        const path = `/Course/AddCourseCommentDissLike?CourseCommandId=${id}`;
    
        try {
          const response = (await deleteApi({ path, body: {} })) as ApiResponse;
          console.log("API Response:", response);
          if (response?.data?.success) {
            toast.success("عملیات با موفقیت انجام شد.");
          } else {
            toast.error("مشکلی در حذف لایک وجود دارد.");
          }
        } catch (error) {
          console.error("Error:", error);
          toast.error("خطایی رخ داده است.");
        }
      };
      const addComments = async (values: { title: string; Describe: string }) => {
        try {
          const formData = new FormData();
          const data = {
            CourseId: params.id,
            Title: values.title,
            Describe: values.Describe,
          };
    
          Object.entries(data).forEach(([key, value]) => {
            if (value !== undefined) {
              formData.append(key, String(value));
            }
          });
    
          formData.forEach((value, key) => {
            console.log(key, ":", value);
          });
    
          const path = `/Course/AddCommentCourse`;
          const body = formData;
          const response = (await postApi({ path, body })) as ApiResponse;
    
          if (response.data.success) {
            toast.success(response.data.message);
            getCoursesComments();
          } else {
            toast.error(response.data.message || "خطایی رخ داده است.");
          }
        } catch (error) {
          console.error("خطا در ارسال نظر:", error);
          toast.error("خطایی در ارسال نظر رخ داده است. لطفاً دوباره تلاش کنید.");
        }
      };

  return (
    <>
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
              <p className="text-[14px] text-[#158B68]">
                پاسخ ها
              </p>
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
        initialValues={{
          CourseId: Number(params.id),
          title: "",
          Describe: "",
        }}
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
    </>
  );
}

export default CoursesComment;
