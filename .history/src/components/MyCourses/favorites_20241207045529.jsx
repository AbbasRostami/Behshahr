import React, { useEffect, useState } from "react";
import recycle from "../../assets/recycle.svg";
import { deleteApi, getApi } from "../../core/api/api";
import moment from "jalali-moment";
import { toast } from "react-toastify";

const Favorites = () => {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(1);
  const [news, setNews] = useState([]);

  const getFavoritesCoureses = async () => {
    const path = `/SharePanel/GetMyFavoriteCourses`;
    const response = await getApi({ path });
    console.log("Favorite Courses: ", response?.data?.favoriteCourseDto);
    setData(response?.data?.favoriteCourseDto);
  };
  useEffect(() => {
    getFavoritesCoureses();
  }, []);

  const getFavoritesNews = async () => {
    const path = `/SharePanel/GetMyFavoriteNews`;
    const response = await getApi({ path });
    console.log("Favorite News: ", response?.data);
    setNews(response?.data?.myFavoriteNews);
  };
  useEffect(() => {
    getFavoritesNews();
  }, []);

  const deleteFavoriteCourses = async (favoriteId) => {
    const formData = new FormData();

    formData.append("CourseFavoriteId", favoriteId);

    console.log("CourseFavoriteId:", favoriteId);

    const path = `/Course/DeleteCourseFavorite`;
    const body = formData;
    const response = await deleteApi({ path, body });

    console.log("DeleteCourses:", response);

    if (response.data.success) {
      toast.success(response.data.message);
    }
    getFavoritesCoureses();
  };

  const deleteFavoriteNews = async (favoriteId) => {
    console.log("NewsFavoriteId:", favoriteId);

    const body = { deleteEntityId: favoriteId };

    const path = `/News/DeleteFavoriteNews/`;
    const response = await deleteApi({ path, body });

    console.log("DeleteNews:", response);

    if (response.data.success === false) {
      toast.success(response.data.message);
    }
    getFavoritesNews();
  };

  return (
    <>
      <div className="w-[45rem] lg:w-[70rem] h-[43rem] my-[1rem] border-[1px] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl">
        <div className="rounded-lg text-nowrap mt-6 mr-6 lg:mr-20 ">
          <button
            onClick={() => setShow(1)}
            className="group hover:bg-[#A4F6DE] bg-[#A4F6DE] dark:bg-gray-900 w-[21rem] lg:w-[30rem] h-[3rem] text-[#22445D] dark:text-white text-lg"
          >
            دوره های مورد علاقه من
          </button>
          <button
            onClick={() => setShow(2)}
            className="group hover:bg-[#A4F6DE]  dark:bg-gray-700 border-[2px] border-[#A4F6DE] w-[21rem] lg:w-[30rem] h-[3rem] text-[#22445D] dark:text-white text-lg"
          >
            مقالات مورد علاقه من
          </button>
        </div>

        {show === 1 ? (
          <div className="w-[43rem] lg:w-[66rem] h-[35rem] mx-auto my-[2rem] bg-[#FBF6F6] dark:bg-gray-700 border-[1px] rounded-lg shadow-2xl">
            <div className="text-nowrap text-[#22445D] dark:text-white text-[5px] text-xs lg:text-sm bg-[#A4F6DE] dark:bg-gray-900 h-[4.5rem] rounded-lg flex justify-evenly rtl gap-14 lg:gap-40 py-[1.5rem] px-[4rem]">
              <h1>نام دوره</h1>
              <h1>نوع دوره</h1>
              <h1>سطح دوره</h1>
              <h1>تاریخ به روز رسانی</h1>
              <h1>حذف</h1>
            </div>
            <br></br>
            {data?.map((item) => {
              return (
                <div className=" hover:bg-orange-100 mt-2 text-nowrap dark:bg-gray-800 dark:text-white text-[#22445D] text-[12px] bg-[#ffff] h-[3.5rem] rounded-2xl flex justify-start rtl gap-14 xl:gap-28  shadow-sm border-[1px] py-[1.2rem] px-[1.4rem] mx-[1rem]">
                  <h2 className="mr-2 w-[204px]"> {item?.courseTitle}</h2>
                  <h2 className="w-[204px]">{item?.typeName}</h2>
                  <h2 className="w-[204px]"> {item?.levelName} </h2>
                  <p className=" text-center w-[204px]">
                    {" "}
                    {moment(item?.lastUpdate).locale("fa").format("YYYY/MM/DD")}
                  </p>
                  <button
                    onClick={() => deleteFavoriteCourses(item.favoriteId)}
                    className="w-[204px] h-[2rem] my-[-0.5rem]"
                  >
                    <img
                      className=" text-[#22445D] mr-14 h-[1.5rem] "
                      src={recycle}
                      alt=""
                    />
                  </button>
                </div>
              );
            })}
          </div>
        ) : null}

        {show === 2 ? (
          <div className="w-[43rem] lg:w-[66rem] h-[35rem] mx-auto my-[2rem] bg-[#FBF6F6] dark:bg-gray-700 border-[1px] rounded-lg shadow-2xl">
            <div className="text-nowrap text-[#22445D] dark:text-white text-bold text-xs lg:text-sm bg-[#A4F6DE] dark:bg-gray-900 h-[4.5rem] rounded-lg flex justify-evenly rtl gap-14 lg:gap-40 py-[1.5rem] px-[4rem]">
              <h1>عنوان</h1>
              <h1>تعداد بازدید</h1>
              <h1>امتیاز</h1>
              <h1>آخرین به روز رسانی</h1>
              <h1>حذف</h1>
            </div>
            <br></br>
            {news?.map((item) => {
              return (
                <div className=" hover:bg-orange-100 dark:bg-gray-800 dark:text-white mt-2 text-nowrap text-[#22445D] text-[12px] bg-[#ffff] h-[3.5rem] rounded-2xl flex justify-start rtl gap-14 xl:gap-28  shadow-sm border-[1px] py-[1.2rem] px-[1.4rem] mx-[1rem]">
                  <h2 className="mr-2 truncate ... w-[204px]">{item?.title}</h2>
                  <h2 className="mr-5 w-[204px]">{item?.currentView}</h2>
                  <h2 className="mr-5 w-[204px]">{item?.currentRate} </h2>
                  <p className=" text-center w-[204px]">
                    {" "}
                    {moment(item?.updateDate).locale("fa").format("YYYY/MM/DD")}
                  </p>
                  <button
                    onClick={() => deleteFavoriteNews(item.favoriteId)}
                    className="w-[204px] h-[2rem] ml-4 my-[-0.5rem]"
                  >
                    <img
                      className="text-[#22445D] mr-14 h-[1.5rem] "
                      src={recycle}
                      alt=""
                    />
                  </button>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    </>
  );
};

export { Favorites };
