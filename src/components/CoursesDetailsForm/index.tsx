import React, { useEffect, useState } from "react";

import { useLocation, useParams } from "react-router-dom";
import { BiDislike, BiLike } from "react-icons/bi";
import { FaRegStar } from "react-icons/fa";

import articlePic2 from "./../../assets/svg/ArticlesDetails/artilclePic2.svg";
import download from "./../../assets/svg/ArticlesDetails/download.svg";
import articlePic3 from "./../../assets/articlePic33.svg";
import moment from "jalali-moment";
import "swiper/css";
import { deleteApi, getApi, postApi } from "../../core/api/api";
import { toast } from "react-toastify";
import LeftDetails from "./LeftDetails";
import CoursesComment from "./CoursesComment";

export interface CourseDetailsType {
  teacherName: string;
  cost: number;
  techs: string;
  courseLevelName: string;
  capacity: number;
  courseStatusName: string;
  commentCount: number;
  currentRegistrants: number;
  insertDate: string;
  startTime: string;
  endTime: string;
  courseId: number;
  currentUserDissLike: boolean;
  userIsLiked: boolean;
  currentUserSetRate: boolean;
  title: string;
  describe: string;
  miniDescribe: string;
  googleSchema: string;
  imageAddress: string;
}
export interface CommentType {
  id: number;
  author: string;
  describe: string;
  likeCount: number;
  disslikeCount: number;
  acceptReplysCount: number;
  insertDate: string;
}
export interface ApiResponse {
  data: CourseDetailsType &
    CommentType[] & {
      success: boolean;
      message: string;
    };
}

const CoursesDetailsForm = () => {
  const [details, setDeatils] = useState<CourseDetailsType>();

  const params = useParams();
const location = useLocation();
console.log("location: ",location);

  const getCoursesDetails = async () => {
    try {
      const path = `/Home/GetCourseDetails?CourseId=${params?.id}`;
      const response = (await getApi({ path })) as ApiResponse;
      console.log(response?.data);
      if (response) {
        setDeatils(response?.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCoursesDetails();
  }, []);

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
                          <BiLike size={26} />
                        </button>
                        <button className="text-gray-500  hover:text-red-500">
                          <BiDislike size={26} />
                        </button>
                        <button className="text-gray-500  hover:text-yellow-500">
                          <FaRegStar size={26} />
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
                <CoursesComment />
              </div>
            </div>
          </div>
        </div>

        <LeftDetails details={details} />
      </div>
    </>
  );
};

export { CoursesDetailsForm };
