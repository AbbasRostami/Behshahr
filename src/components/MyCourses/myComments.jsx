import React, { useEffect, useState } from "react";
import { getApi } from "../../core/api/api";

import dislike from "./../../assets/svg/ArticlesDetails/dislike.svg";
import like from "./../../assets/svg/ArticlesDetails/like.svg";
import undo from "./../../assets/svg/ArticlesDetails/undo.svg";
import dot from "../../assets/dot.svg";
import moment from "jalali-moment";

const MyComments = () => {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);

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
                <h2 className="truncate ..."> {item?.author} </h2>
                <h2 className="truncate ... w-10"> {item?.title} </h2>
                <h2> {item?.acceptReplysCount} </h2>
                <p>
                  {moment(item?.insertDate).locale("fa").format("YYYY/MM/DD")}
                </p>
                <h2> {item?.accept ? "تایید شده" : "تایید نشده"} </h2>

                <div>
                  <img
                    className="text-[#22445D] w-[1.5rem] h-[1.5rem] cursor-pointer"
                    src={dot}
                    alt=""
                    onClick={() => setShow(!show)}
                  />
                </div>

                {show && (
                  <>
                    <div className="flex flex-col justify-center items-end fixed inset-0 z-50 outline-none focus:outline-none w-[67rem] h-[19rem] mx-auto mt-52 rounded-lg shadow-lg bg-slate-100 dark:bg-slate-800">
                      <button
                        type="button"
                        class="text-gray-400 bg-transparent absolute left-0 bottom-[17rem] hover:bg-gray-200 hover:text-gray-900 rounded-lg w-8 h-8 inline-flex justify-center items-center dark:hover:bg-slate-700 dark:hover:text-white"
                        onClick={() => setShow(false)}
                      >
                        <svg
                          class="w-4 h-4"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 14"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                          />
                        </svg>
                      </button>
                      <div className="w-[63rem] h-[14rem] mx-auto mb-5 rounded-lg bg-white dark:bg-slate-700">
                        <div className="flex items-start justify-end gap-2 mt-5 ml-4">
                          <img src={like} alt="" />
                          <img src={dislike} alt="" />
                          <img className="h-5" src={undo} alt="" />
                        </div>

                        <div className="flex flex-col gap-5 mr-6 ml-6 border-b-[2px] border-black">
                          <p className="text-[14px]">
                            عنوان دوره: ساخت سایت رزومه باAsp.net core رایگان
                          </p>
                          <p className="text-[18px]">عنوان: عاالییی</p>
                          <p className="text-[14px] mb-2">عالیی بود</p>
                        </div>

                        <div className="flex flex-row justify-between px-6 mt-3">
                          <p>تاریخ و ساعت ارسال: 21:29 2024/06/23</p>
                          <p>وضعیت تایید شده</p>
                        </div>
                      </div>

                      <div className="ml-10 cursor-pointer hover:bg-gray-200 dark:hover:bg-slate-700 rounded-lg">
                        <p>پاسخ ها</p>
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
