import React, { useEffect, useState } from "react";
import { Field, Form, Formik } from "formik";
import courses1 from "./../../assets/courses1.svg";
import star from "./../../assets/star.svg";
import line from "./../../assets/line.svg";
import filter2 from "./../../assets/Group 242.svg";
import filterIcon from "./../../assets/filter.svg";
import { getApi, postApi } from "../../core/api/api";
import { Box, Slider } from "@mui/material";
import { Link } from "react-router-dom";
import { BiDislike, BiLike } from "react-icons/bi";
import { FaFilter, FaRegStar } from "react-icons/fa";
import { toast } from "react-toastify";
import person from "./../../assets/download.png";
import { CoursesSlider } from "../common/SliderCourses";

interface DataCoursesType {
  courseId: number;
  userIsLiked: number;
  likeCount: number;
  currentUserDissLike: number;
  dissLikeCount: number;
  userFavorite: number;
  currentRegistrants: number;
  statusName: string;
  title: string;
  teacherName: string;
  levelName: string;
  describe: string;
  cost: number;
}

type FilterType = Record<string, string | number>;

interface ApiResponse {
  data: {
    courseFilterDtos: DataCoursesType[];
    success: boolean
  }
}

const CoursesListForm = () => {
  const [data, setData] = useState<DataCoursesType[]>([]);
  const [sort, setSort] = useState({});
  const [pagination, setPagination] = useState({});
  const [PageNumber, setPageNumber] = useState(1);
  const [level, setLevel] = useState(1);
  const [value, setValue] = React.useState([1, 20000000]);
  const [cost, setCost] = useState([]);
  const [filter, setFilter] = useState<FilterType>();
  const [show, setShow] = useState(false);

  function valuetext(value: number) {
    return `${value}`;
  }

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  useEffect(() => {
    const timeOutId = setTimeout(
      () =>
        filterDataHanlder({
          PageNumber: 1,
          CostDown: value[0],
          CostUp: value[1],
        }),
      500
    );
    return () => clearTimeout(timeOutId);
  }, [value]);

  const [isOpen, setisOpen] = useState([]);

  const GetCouresesTop = async (params: object | number = 1) => {
    const path = `/Home/GetCoursesWithPagination`;
    const response = await (getApi({
      path,
      params: { params: typeof params === 'object' ? { ...params, RowsOfPage: 9 } : { PageNumber: params, RowsOfPage: 9 } },
    })) as ApiResponse;
    console.log("courses all: ", response.data.courseFilterDtos);
    setData(response?.data.courseFilterDtos);
    setPagination(response?.data);
  };

  useEffect(() => {
    GetCouresesTop();
  }, [sort]);

  const filterDataHanlder = (newParams: {}) => {
    setFilter({ PageNumber: 1, ...filter, ...newParams });
    const allFilter = {
      PageNumber: 1,
      ...filter,
      ...newParams,
    };
    console.log("filter", allFilter);
    GetCouresesTop(allFilter);
  };

  const addLike = async (id: number) => {
    console.log(id);
    const path = `Course/AddCourseLike?CourseId=${id}`;
    const response = await (postApi({ path })) as ApiResponse;
    if (response?.data.success) {
      toast.success("عملیات با موفقیت انجام شد.");
      GetCouresesTop();
    }
    console.log(response);
  };

  const addDislike = async (id: number) => {
    console.log(id);
    const path = `/Course/AddCourseDissLike?CourseId=${id}`;
    const response = await (postApi({ path })) as ApiResponse;
    if (response?.data.success) {
      toast.success("عملیات با موفقیت انجام شد.");
      GetCouresesTop();
    }
    console.log(response);
  };

  const addfavo = async (id: number) => {
    console.log(id);
    const path = `/Course/SetCourseRating?CourseId=${id}`;
    const response = await (postApi({ path })) as ApiResponse;
    if (response?.data.success) {
      toast.success("عملیات با موفقیت انجام شد.");
      GetCouresesTop();
    }
    console.log(response);
  };

  const clearFilter = () => {
    filterDataHanlder({ PageNumber: 1, inde: "", slab: "" });
  };

  const handleChangePage = (e: number, i: number) => {
    console.log(e);
    console.log(i);
    filterDataHanlder({ PageNumber: i });
  };

  const addReserve = async (id: number) => {
    console.log(id);

    const body = {
      courseId: id,
    };
    const path = `/CourseReserve/ReserveAdd`;
    const response = await (postApi({ path, body })) as ApiResponse;
    if (response?.data.success) {
      toast.success("دوره شما با موفقیت رزرو شد.");
    }
  };
  return (
    <>
      <h1 className="bg-white-500 mt-10 text-center text-3xl mx-14 dark:text-white">
        لیست دوره ها
      </h1>
      {/* Top */}
      <div className=" flex justify-between gap-4 lg:gap-0 items-center mt-8 shadow-[9px_9px_12px_3px_rgba(0,_0,_0,_0.1)]  bg-[#FBF6F6] dark:bg-gray-800 p-5 rounded-3xl mx-8">
        <Formik
          initialValues={{}}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          <Form className="ml-10">
            <div className="relative">
              <input
                type="text"
                className="rtl p-4 dark:text-white border-green-800 w-80 text-sm text-gray-900 border dark:bg-gray-800  rounded-2xl bg-gray-50"
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
                className="absolute  bottom-[6px] left-[12px]"
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
          </Form>
        </Formik>
        <div className="relative flex justify-center items-center">
          <select
            className="dark:bg-gray-800 dark:text-white text-lg h-14 rounded-3xl rtl px-2 bg-gray-50 border border-green-800 "
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
            <option value="cost">قیمت</option>
            <option value="likeCount">پسندیده ترین ها</option>
            <option value="currentRegistrants">محبوب ترین ها</option>
          </select>
        </div>

        <button
          className="lg:hidden h-10 rounded-lg dark:bg-gray-400 mr-10"
          onClick={() => setShow(!show)}
        >
          <FaFilter size={26} />
        </button>
      </div>

      <div className="flex  justify-center items-start mx-8">
        <div className="w-full h-[170rem] lg:h-full py-4 flex flex-wrap justify-evenly  mt-20 px-5 lg:gap-10 bg-[#FBF6F6] rounded-3xl dark:bg-gray-800 shadow-[9px_9px_12px_3px_rgba(0,_0,_0,_0.1)]">
          {data.map((item, index) => {
            return (
              <div className="relative p-6 h-[410px] lg:h-[406px] w-[260px] lg:w-[311px] ml-6 text-center rounded-lg mt-24 lg:mt-20 dark:bg-gray-700 bg-[#f6fbf6] shadow-[9px_9px_12px_3px_rgba(0,_0,_0,_0.1)] text-TextGreen">
                <div className="w-[7.5rem] lg:w-full absolute top-[-80px] left-[78px]">
                  <img src={courses1} alt="" />
                </div>

                <div className="flex justify-between items-center mt-14">
                  <div className="flex justify-center items-center gap-2">
                    <div>
                      <BiLike
                        size={26}
                        onClick={() => addLike(item?.courseId)}
                        className={
                          item?.userIsLiked ? "text-green-600" : "text-gray-500"
                        }
                      />
                      <p className="text-slate-700">{item?.likeCount}</p>
                    </div>

                    <div>
                      <BiDislike
                        size={26}
                        onClick={() => addDislike(item.courseId)}
                        className={
                          item?.currentUserDissLike
                            ? "text-green-600"
                            : "text-gray-500"
                        }
                      />

                      <p className="text-slate-700"> {item?.dissLikeCount} </p>
                    </div>

                    <div>
                      <FaRegStar
                        size={26}
                        onClick={() => addfavo(item.courseId)}
                        className={
                          item?.userFavorite
                            ? "text-green-600"
                            : "text-gray-500"
                        }
                      />
                      <p className="text-slate-700">
                        {" "}
                        {item?.currentRegistrants}{" "}
                      </p>
                    </div>
                  </div>
                  <button className="text-TextGreen dark:bg-gray-800 dark:text-white bg-[#BFF4E4] rounded-lg cursor-pointer p-2">
                    {item?.statusName}
                  </button>
                </div>

                <p className="text-right mt-3 truncate dark:text-white text-[#1A1E21] text-xl">
                  {item?.title}
                </p>

                <div className="flex justify-between items-center mt-5 dark:text-white">
                  <div className="flex justify-center items-center">
                    <img src={star} alt="" />
                    <p className="ml-2">{item?.currentRegistrants}</p>
                  </div>

                  <div className="flex justify-between items-center">
                    <p className="mr-1 text-nowrap text-xs lg:text-sm">
                      {" "}
                      {item?.teacherName}
                    </p>
                    <img className=" w-10 h-8" src={person} alt="" />
                  </div>
                </div>
                <p className="rtl mt-2 ml-[10rem] text-[#41A789] text-xs text-nowrap">
                  {" "}
                  {item?.currentRegistrants} ساعت سخنرانی{" "}
                </p>
                <p className="rtl mt-2 ml-[10.5rem] text-[#41A789] text-md text-nowrap">
                  سطح دوره: {item?.levelName}
                </p>

                <p className="rtl mt-2 leading-5 dark:text-white truncate ... text-[#6D6767] text-xs text-right">
                  {item?.describe}
                </p>

                <img className="mt-1" src={line} alt="" />

                <div className="flex justify-between items-center mt-4">
                  <p className="text-sm text-PriceRed rtl ">
                    {" "}
                    {item?.cost} تومان{" "}
                  </p>
                  <p className="text-sm text-nowrap dark:text-white">
                    : هزینه تمام دوره
                  </p>
                </div>

                <div className="flex justify-between items-center w-[15rem] h-[2.5rem] mt-6 lg:mt-3 -ml-3 lg:ml-2">
                  <button
                    onClick={() => addReserve(item.courseId)}
                    className="bg-[#5BE1B9] dark:bg-gray-900 dark:border-green-600 dark:border dark:text-white rounded-xl w-[10rem] h-[2.5rem] mr-4"
                  >
                    رزرو دوره
                  </button>

                  <button className="block bg-[#eeeeee] dark:bg-gray-800 dark:text-white rounded-xl w-[10rem] h-[2.5rem] border-solid border border-green-600">
                    <Link
                      to={
                        localStorage.getItem("token")
                          ? `/courses-details/${item?.courseId}`
                          : "/login"
                      }
                    >
                      جزِئیات دوره
                    </Link>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div
          className={`flex flex-col items-center w-[21rem] h-full lg:h-[55rem] overflow-y-scroll lg:overflow-y-visible right-[-300px] lg:right-0 dark:bg-gray-800 bg-[#FBF6F6] ml-2 rounded-3xl fixed top-20 lg:top-0 lg:mt-20 transition-all duration-700 invisible opacity-0 lg:opacity-100 lg:visible lg:relative
            ${show ? "!opacity-100 !visible !right-0" : ""}`}
        >
          <button
            type="button"
            className="text-gray-400 bg-transparent mr-72 mt-1 lg:hidden hover:bg-gray-200 hover:text-gray-700 rounded-lg w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            onClick={() => setShow(false)}
          >
            <svg
              className="w-4 h-4"
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

          <img className="mt-10" src={filter2} alt="" />

          <div className="dark:text-white h-14 mt-5 w-[20rem]">
            <details open>
              <summary className="mx-3 flex justify-between">
                <svg
                  width="15"
                  height="12"
                  viewBox="0 0 22 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 2L11.1743 9.83007L2.34863 2"
                    stroke="#22445D"
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                </svg>
                تکنولوژِی
              </summary>

              <hr className="border-2 mx-2 border-[#5BE1B9] mt-2" />

              <div className="rtl mx-3 mt-5 w-[19rem] border-2 border-[#5BE1B9] rounded-xl">
                <label className="flex bg-gray-100 text-gray-700 px-3 pt-1 dark:bg-gray-700 dark:text-white cursor-pointer ">
                  <input
                    className="ml-3 size-4"
                    type="checkbox"
                    name="Country"
                  />
                  <i className="pl-2 text-md">بــک اند</i>
                </label>

                <label className="flex bg-gray-100 text-gray-700 px-3 py-1 dark:bg-gray-700 dark:text-white cursor-pointer ">
                  <input
                    className="ml-3 size-4"
                    type="checkbox"
                    name="Country"
                  />
                  <i className="pl-2 text-md">فــرانت اند</i>
                </label>

                <label className="flex bg-gray-100 text-gray-700 pb-1 px-3 dark:bg-gray-700 dark:text-white cursor-pointer ">
                  <input
                    className="ml-3 size-4"
                    type="checkbox"
                    name="Country"
                  />
                  <i className="pl-2 text-md">React Js</i>
                </label>
              </div>
            </details>

            <details className="transition duration-700 ease-in-out" open>
              <summary className="my-5 mx-3 flex justify-between">
                <svg
                  width="15"
                  height="12"
                  viewBox="0 0 22 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 2L11.1743 9.83007L2.34863 2"
                    stroke="#22445D"
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                </svg>
                نوع دوره
              </summary>

              <hr className="border-2 mx-3 border-[#5BE1B9] mt-2" />

              <div className="rtl mx-3 my-5 w-[19rem] border-2 border-[#5BE1B9] rounded-xl">
                <label className="flex bg-gray-100 text-gray-700 px-3 pt-1 dark:bg-gray-700 dark:text-white  hover:bg-green-200 cursor-pointer ">
                  <input
                    value="typeName-DESC"
                    className="ml-3 size-4"
                    type="radio"
                    onClick={() =>
                      filterDataHanlder({ PageNumber: 1, typeName: 1 })
                    }
                    checked={filter?.typeName == 1 ? true : false}
                  />
                  <i className="pl-2 text-md">حضوری</i>
                </label>

                <label className="flex bg-gray-100 text-gray-700 px-3 py-1 dark:bg-gray-700 dark:text-white  hover:bg-green-200 cursor-pointer ">
                  <input
                    value="typeName-DESC"
                    className="ml-3 size-4"
                    type="radio"
                    onClick={() =>
                      filterDataHanlder({ PageNumber: 1, typeName: 2 })
                    }
                    checked={filter?.typeName == 2 ? true : false}
                    name="Country"
                  />
                  <i className="pl-2 text-md">آنلاین</i>
                </label>

                <label className="flex bg-gray-100 text-gray-700 pb-1 px-3 dark:bg-gray-700 dark:text-white  hover:bg-green-200 cursor-pointer ">
                  <input
                    value="typeName-DESC"
                    className="ml-3 size-4"
                    type="radio"
                    onClick={() =>
                      filterDataHanlder({ PageNumber: 1, typeName: 3 })
                    }
                    checked={filter?.typeName == 3 ? true : false}
                  />
                  <i className="pl-2 text-md">آنلاین - حضوری</i>
                </label>
              </div>
            </details>

            <details open>
              <summary className="mx-3 flex justify-between">
                <svg
                  width="15"
                  height="12"
                  viewBox="0 0 22 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 2L11.1743 9.83007L2.34863 2"
                    stroke="#22445D"
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                </svg>
                سطح دوره
              </summary>
              <hr className="border-2 mx-3 border-[#5BE1B9] mt-2" />
              <div className="rtl mx-3 mt-5 w-[19rem] border-2 border-[#5BE1B9] rounded-xl">
                <label className="flex bg-gray-100 text-gray-700 px-3 pt-1 dark:bg-gray-700 dark:text-white  hover:bg-green-200 cursor-pointer ">
                  <input
                    value="levelName-DESC"
                    className="ml-3 size-4"
                    type="radio"
                    onClick={() =>
                      filterDataHanlder({ PageNumber: 1, levelName: 1 })
                    }
                    checked={filter?.levelName == 1 ? true : false}
                    name="Country"
                  />
                  <i className="pl-2 text-md">مبتدی</i>
                </label>

                <label className="flex bg-gray-100 text-gray-700 px-3 py-1 dark:bg-gray-700 dark:text-white  hover:bg-green-200 cursor-pointer ">
                  <input
                    value="levelName-DESC"
                    className="ml-3 size-4"
                    type="radio"
                    onClick={() =>
                      filterDataHanlder({ PageNumber: 1, levelName: 2 })
                    }
                    checked={filter?.levelName == 2 ? true : false}
                    name="Country"
                  />
                  <i className="pl-2 text-md">متوسط</i>
                </label>

                <label className="flex bg-gray-100 text-gray-700 pb-1 px-3 dark:bg-gray-700 dark:text-white  hover:bg-green-200 cursor-pointer ">
                  <input
                    value="levelName-DESC"
                    className="ml-3 size-4"
                    type="radio"
                    onClick={() =>
                      filterDataHanlder({ PageNumber: 1, levelName: 3 })
                    }
                    defaultChecked={filter?.levelName == 3 ? true : false}
                    name="Country"
                  />
                  <i className="pl-2 text-md">پیشرفته</i>
                </label>
              </div>
            </details>

            <details open>
              <summary className="mx-3 mt-5 flex justify-between">
                <svg
                  width="15"
                  height="12"
                  viewBox="0 0 22 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 2L11.1743 9.83007L2.34863 2"
                    stroke="#22445D"
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                </svg>
                قیمت
              </summary>

              <hr className="border-2 mx-3 border-[#5BE1B9] mt-2" />
              <div className="rtl mx-3 mt-5 w-[19rem] border-2 border-[#5BE1B9] rounded-xl">
                <Box className="px-8 my-4" sx={{ width: 300 }}>
                  <Slider
                    value={value}
                    onChange={handleChange}
                    min={1}
                    max={2000000}
                    step={5000}
                    getAriaValueText={valuetext}
                  />
                  <div className="flex justify-between items-center">
                    <p>{value[1]}</p>
                    <p>{value[0]}</p>
                  </div>
                </Box>
              </div>
            </details>

            <button
              onClick={clearFilter}
              className="bg-[#5BE1B9] mt-8 dark:bg-gray-800 dark:text-white ml-3 rounded-xl w-[10rem] h-[2.5rem] border-solid border border-green-600"
            >
              پاک کردن فیلتر ها
            </button>
          </div>
        </div>
      </div>
      <CoursesSlider />
    </>
  );
};

export { CoursesListForm };
