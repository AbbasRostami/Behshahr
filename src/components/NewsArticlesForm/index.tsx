import { ArticlesCard } from "./ArticlesCard";
import { useState, useEffect } from "react";
import arrowUnder from "./../../assets/arrow.svg";
import { getApi, postApi } from "../../core/api/api";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { SliderArticles } from "../common/SliderArticles";

export interface NewsType {
  addUserProfileImage: string;
  currentUserIsLike: number;
  currentLikeCount: number;
  currentUserIsDissLike: number;
  currentDissLikeCount: number;
  currentUserSetRate: number;
  currentRate: number;
  newsCatregoryName: string;
  title: string;
  miniDescribe: string;
  insertDate: string;
  id: number;
  addUserFullName: string;
}

interface ApiResponse {
  data: {
    news: NewsType[];
    success: boolean;
  };
}
const NewsArticlesForm = () => {
  const [cards, setCards] = useState<NewsType[]>();
  const [filter, setFilter] = useState<Record<string, string | number>>({});

  const params = useParams();

  const getArticlesTop = async (params?: Record<string, string | number>) => {
    const path = "/News";

   
    const response = (await getApi({
      path,
      params: {
        ...params,
        RowsOfPage: 9,
      },
    })) as ApiResponse;

    console.log("News: ", response?.data?.news);
    if (response) {
      setCards(response?.data?.news);
    }
  };

  useEffect(() => {
    getArticlesTop();
  }, []);

  const filterDataHanlder = (newParams: Record<string, string | number>) => {
    setFilter({ PageNumber: 1, ...filter, ...newParams });

    const allFilter = {
      PageNumber: 1,
      ...filter,
      ...newParams,
    };

    console.log("filter", allFilter);
    getArticlesTop(allFilter);
  };

  const addLike = async (id: number) => {
    console.log(id);
    const path = `News/NewsLike/${id}`;
    const response = (await postApi({ path })) as ApiResponse;
    if (response?.data?.success) {
      filterDataHanlder({});
      toast.success("عملیات با موفقیت انجام شد.");
    }
    console.log(response);
  };

  const addDislike = async (id: number) => {
    console.log(id);
    const path = `/News/NewsDissLike/${id}`;
    const response = (await postApi({ path })) as ApiResponse;
    if (response?.data?.success) {
      filterDataHanlder({});
      toast.success("عملیات با موفقیت انجام شد.");
    }
    console.log(response);
  };

  const addStarRatng = async (id: number) => {
    console.log(id);
    const path = `/News/NewsRate?NewsId=${id}&RateNumber=2`;
    const response = (await postApi({ path })) as ApiResponse;
    if (response?.data?.success) {
      filterDataHanlder({});
      toast.success("عملیات با موفقیت انجام شد.");
    }
    console.log(response);
  };

  return (
    <>
      <div>
        <h1 className="text-[#22445D] mt-10 text-3xl text-center py-8 dark:text-white">
          لیست اخبار و مقالات
        </h1>
        <div className=" flex justify-evenly gap-6 rtl items-center mx-8 bg-[#FBF6F6] shadow-[9px_9px_12px_3px_rgba(0,1,_0.5,_0.2)] py-5 rounded-3xl dark:bg-gray-800 ">
          <select className=" dark:bg-gray-800 dark:text-white text-center border-solid border-2 rounded-2xl h-[3.5rem] lg:h-[3.7rem] mr-9 bg-[#ffffff] w-[10rem] lg:w-[15rem] text-[17px] text-[#158B68] ">
            <option value="">دسته بندی</option>
            <option value="">حضوری</option>
            <option value="">آنلاین</option>

            <img className="h-[8px]  ml-5" src={arrowUnder} alt="" />
          </select>
          <select
            className=" dark:bg-gray-800 dark:text-white text-center border-solid border-2 rounded-2xl h-[3.5rem] lg:h-[3.7rem] lg:ml-[520px] bg-[#ffffff] w-[10rem] lg:w-[15rem] text-[17px] text-[#158B68] "
            id=""
            onChange={(e) => {
              filterDataHanlder({
                PageNumber: 1,
                SortingCol: e.target.value,
                SortType: "DESC",
              });
            }}
          >
            <option value="">مرتب سازی</option>
            <option value="">متوسط</option>
            <option value="">پیشرفته</option>

            <img className="h-[8px] ml-5" src={arrowUnder} alt="" />
          </select>
          <div className="relative ml-10">
            <input
              type="text"
              className="rtl p-4 dark:border-white dark:text-white border-green-800 w-72 lg:w-80 text-sm text-gray-900 border dark:bg-gray-800 rounded-2xl bg-gray-50"
              placeholder="جستجو..."
              required
              onChange={(e) => {
                if (e.target.value === "") {
                  filterDataHanlder({ PageNumber: 1 });
                } else {
                  filterDataHanlder({
                    PageNumber: 1,
                    Query: e.target.value, 
                  });
                }
              }}
            />

            <svg
              className="absolute bottom-[6px] left-[12px]"
              fill="#158B68"
              height="40px"
              width="40px"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="-53.72 -53.72 595.84 595.84"
              xmlSpace="preserve"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g>
                  {" "}
                  <g>
                    {" "}
                    <path d="M0,203.25c0,112.1,91.2,203.2,203.2,203.2c51.6,0,98.8-19.4,134.7-51.2l129.5,129.5c2.4,2.4,5.5,3.6,8.7,3.6 s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-129.6-129.5c31.8-35.9,51.2-83,51.2-134.7c0-112.1-91.2-203.2-203.2-203.2 S0,91.15,0,203.25z M381.9,203.25c0,98.5-80.2,178.7-178.7,178.7s-178.7-80.2-178.7-178.7s80.2-178.7,178.7-178.7 S381.9,104.65,381.9,203.25z"></path>{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </svg>
          </div>
        </div>

        <div className="items-center h-[207rem] lg:h-[130rem] m-4 lg:m-6 dark:bg-gray-800 bg-[#FBF6F6] mt-10 rounded-2xl shadow-[9px_9px_12px_3px_rgba(0,1,_0.5,_0.2)] ">
          <div className="grid grid-cols-2 gap-72 lg:gap-0 lg:grid-cols-3 ml-6 lg:ml-16">
            {cards?.map((item) => {
              return (
                <ArticlesCard
                  key={item.id}
                  item={item}
                  addLike={addLike}
                  addDislike={addDislike}
                  addStarRatng={addStarRatng}
                  filter={filter}
                />
              );
            })}
          </div>
        </div>

        <SliderArticles />
      </div>
    </>
  );
};

export { NewsArticlesForm };
