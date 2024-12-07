import courses1 from "./../../assets/svg/Landing/courses1.svg";
import like from "./../../assets/svg/Landing/coursesLike.svg";
import dislike from "./../../assets/svg/ArticlesDetails/dislike.svg";
import favorite from "./../../assets/svg/Landing/CoursesFavo.svg";
import star from "./../../assets/svg/Landing/StarRating.svg";
import profileimg from "./../../assets/svg/ArticlesDetails/profileimg.svg";
import line from "./../../assets/svg/ArticlesDetails/line.svg";
import newsPic from "./../../assets/svg/Landing/newspic.svg"
import { getArticlesListTop } from "../../core/api/getArticlesList";
import { useEffect, useState } from "react";
import { getApi } from "../../core/api/api";
import { SliderArticles } from "../common/SliderArticles";
import { BiDislike, BiLike } from "react-icons/bi";
import { FaRegStar } from "react-icons/fa";
import moment from "moment";
import { Link } from "react-router-dom";

const ArticlesCard = ({ item, addLike, addDislike, addStarRatng }) => {
  return (
    <>
      <div className="flex  items-center w-[22rem]  ">
        <div className="flex items-center rounded-3xl ">
          <div className="relative hover:bg-slate-200 h-[6200px] w-[320px] lg:w-[400px] text-center rounded-[1.5rem] mt-11 dark:bg-gray-800 bg-[#FBF6F6]  shadow-[9px_9px_12px_3px_rgba(0,_0,_0,_0.1)] text-TextGreen ">
            <div>
              <img
                className="rounded-t-lg p-0 object-cover h-[20rem] w-full"
                src={item?.addUserProfileImage}
                alt=""
              />
            </div>

            <div className="flex justify-between items-center mt-5 px-5">
              <div className="flex justify-center items-center ">
                <div>
                  {/* <img src={like} alt="" /> */}
                  <BiLike
                    size={26}
                    onClick={() => addLike(item?.id)}
                    className={
                      item?.currentUserIsLike
                        ? "text-green-600"
                        : "text-gray-500"
                    }
                  />
                  <p className=" hover:text-slate-950">
                    {" "}
                    {item?.currentLikeCount}{" "}
                  </p>
                </div>
                <div>
                  {/* <img className="mx-8" src={dislike} alt="" /> */}
                  <BiDislike
                    size={26}
                    onClick={() => addDislike(item?.id)}
                    className={
                      item?.currentUserIsDissLike
                        ? "text-green-600"
                        : "text-gray-500"
                    }
                  />

                  <p className=" hover:text-slate-950">
                    {" "}
                    {item?.currentDissLikeCount}{" "}
                  </p>
                </div>
                <div>
                  {/* <img src={favorite} alt="" /> */}
                  <FaRegStar
                    size={26}
                    onClick={() => addStarRatng(item?.id)}
                    className={
                      item?.currentUserSetRate
                        ? "text-green-600"
                        : "text-gray-500"
                    }
                  />
                  <p className=" hover:text-slate-950"> {item?.currentRate} </p>
                </div>
              </div>

              <button class=" text-TextGreen dark:bg-gray-700 dark:text-white bg-[#BFF4E4] rounded-lg cursor-pointer p-2 w-auto-[120px]">
                {/* تاریخ دوره:{" "}
                {moment(item?.insertDate).locale("fa").format("YYYY/MM/DD")} */}
                {item.newsCatregoryName}
              </button>
            </div>

            <p className="rtl hover:text-green-500 mt-3 truncate ... text-[#1A1E21] text-xl rtl text-right px-5 dark:text-white">
              {item?.title}
            </p>

            <div className="flex justify-between items-center mt-5 px-5 dark:text-white">
              <div className="flex justify-center items-center ">
                <img src={star} alt="" />
                <p className="ml-2 hover:text-slate-950">
                  {" "}
                  {item?.currentRate}{" "}
                </p>
              </div>

              <div className="flex justify-between items-center">
                <p className="mr-2 hover:text-slate-950">
                  {" "}
                  {item?.addUserFullName}
                </p>
              </div>
            </div>

            <p className="rtl mt-5 px-5 hover:text-green-500 leading-5 text-[#6D6767] truncate ... text-xs text-right dark:text-white">
              {item?.miniDescribe}
            </p>

            <p className="ltr mt-5 px-5 hover:text-green-500 leading-5 text-[#6D6767] truncate ... text-xs text-right dark:text-white">
              تاریخ دوره:{" "}
              {moment(item?.insertDate).locale("fa").format("YYYY/MM/DD")}
            </p>

            <img className="mt-5 px-5" src={line} alt="" />

            <Link to={localStorage.getItem('token') ? `/articles-details/${item?.id}` : '/login'}><p className="text-base  text-[#807A7A] mt-3 cursor-pointer hover:text-green-500 dark:text-white">
              مشاهده جزئیات
            </p></Link> 
          </div>
        </div>
      </div>
    </>
  );
};

export { ArticlesCard };
