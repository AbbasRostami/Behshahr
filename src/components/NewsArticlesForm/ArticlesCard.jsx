import courses1 from "./../../assets/courses1.svg";
import like from "./../../assets/coursesLike.svg";
import dislike from "./../../assets/dislike.svg";
import favorite from "./../../assets/favo.svg";
import star from "./../../assets/star.svg";
import profileimg from "./../../assets/profileimg.svg";
import line from "./../../assets/line.svg";
import newsPic from "./../../assets/newsPick.svg";
import { getArticlesListTop } from "../../core/api/getArticlesList";
import { useEffect, useState } from "react";
import { getApi } from "../../core/api/api";
import { SliderArticles } from "../common/SliderArticles";

const ArticlesCard = ({ item }) => {
  return (
    <>
      <div className="flex  items-center w-[22rem]  ">
        <div className="flex items-center rounded-3xl ">
          <div className="relative hover:bg-slate-200 h-[598px] w-[320px] lg:w-[430px] text-center rounded-[1.5rem] mt-11 dark:bg-gray-800 bg-[#FBF6F6]  shadow-[9px_9px_12px_3px_rgba(0,_0,_0,_0.1)] text-TextGreen ">
            <div>
              <img
                className="rounded-t-lg p-0 object-cover h-[20rem] w-full"
                src={item?.currentImageAddressTumb}
                alt=""
              />
            </div>

            <div className="flex justify-between items-center mt-5 px-5">
              <div className="flex justify-center items-center ">
                <div>
                  <img src={like} alt="" />
                  <p className=" hover:text-slate-950">
                    {" "}
                    {item?.currentLikeCount}{" "}
                  </p>
                </div>
                <div>
                  <img className="mx-8" src={dislike} alt="" />
                  <p className=" hover:text-slate-950">
                    {" "}
                    {item?.currentDissLikeCount}{" "}
                  </p>
                </div>
                <div>
                  <img src={favorite} alt="" />
                  <p className=" hover:text-slate-950"> {item?.currentRate} </p>
                </div>
              </div>

              <button class=" text-TextGreen dark:bg-gray-700 dark:text-white bg-[#BFF4E4] rounded-lg cursor-pointer p-2 w-auto-[120px]">
                وضعیت دوره
              </button>
            </div>

            <p className="rtl hover:text-green-500 mt-3 text-[#1A1E21] text-xl rtl text-right px-5 dark:text-white">
              {item?.title}
            </p>

            <div className="flex justify-between items-center mt-5 px-5 dark:text-white">
              <div className="flex justify-center items-center ">
                <img src={star} alt="" />
                <p className="ml-2 hover:text-slate-950">
                  {" "}
                  {item?.currentUserRateNumber}{" "}
                </p>
              </div>

              <div className="flex justify-between items-center">
                <p className="mr-2 hover:text-slate-950">
                  {" "}
                  {item?.addUserFullName}
                </p>
                <img src={profileimg} alt="" />
              </div>
            </div>

            <p className="rtl mt-5 px-5 hover:text-green-500 leading-5 text-[#6D6767] truncate ... text-xs text-right dark:text-white">
              {item?.miniDescribe}
            </p>

            <img className="mt-5 px-5" src={line} alt="" />

            <p className="text-base  text-[#807A7A] mt-3 cursor-pointer hover:text-green-500 dark:text-white">
              مشاهده جزئیات
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export { ArticlesCard };
