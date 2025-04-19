import React, { useEffect, useRef, useState } from "react";
import { Form, Link } from "react-router-dom";
import { Button, Menu, MenuItem } from "@mui/material";
import { RxHamburgerMenu } from "react-icons/rx";
import { Field, Formik } from "formik";
import logoLanding from "./../../../assets/svg/Landing/logosite.svg";
import seachIcon from "./../../../assets/svg/Landing/searchicon.svg";
import courses1 from "./../../../assets/courses1.svg";
import { getApi } from "../../../core/api/api";
import { useAtomValue, useSetAtom } from "jotai";
import { BsPersonCircle } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { IoSearch } from "react-icons/io5";
import {
  getEditProfAtom,
  profileAtom,
} from "../../../context/jotai/ProfileProvider";
import { NavLink } from "react-router-dom";
import { ThemeToggleButton } from "../../../context/context/ThemeContext";

interface CoursesData {
  title: string;
  cost: number;
  levelName: number;
}
interface ApiResponse {
  data: {
    courseFilterDtos: CoursesData[];
  };
}

const Header: React.FC = () => {
  const [show, setShow] = useState(false);
  const [datas, setDatas] = useState<CoursesData[]>([]);

  const [modal, setModal] = useState(false);

  const GetCouresesTop = async (params: {
    PageNumber?: number;
    Query: string;
  }) => {
    const path = `/Home/GetCoursesWithPagination`;
    const response = (await getApi({
      path,
      params: { params: { ...params, RowsOfPage: 9 } },
    })) as ApiResponse;
    console.log(response?.data);
    setDatas(response?.data?.courseFilterDtos);
  };

  useEffect(() => {
    GetCouresesTop({ Query: "" });
  }, []);

  const data = useAtomValue(profileAtom);
  const getEditProf = useSetAtom(getEditProfAtom);

  console.log("data atom:", data);

  useEffect(() => {
    getEditProf();
  }, []);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const fallbackRef = useRef<HTMLDivElement | null>(null);
  return (
    <div className=" bg-gradient-to-r from-green-300 to-gray-50 dark:dark:bg-slate-900 dark:bg-none">
      <div className="flex justify-between items-center px-20 h-20">
        <div className="flex justify-center items-center gap-2">
          {localStorage.getItem("token") ? (
            <>
              <div className="dropdown">
                <button onClick={() => setModal(!modal)}>
                  {data?.currentPictureAddress &&
                  data.currentPictureAddress !== "Not-set" ? (
                    <>
                      <img
                        ref={imgRef}
                        src={data.currentPictureAddress}
                        alt="Profile Picture"
                        className="rounded-full w-9 h-9 border-2 object-cover"
                        onError={() => {
                          imgRef.current?.classList.add("hidden");
                          fallbackRef.current?.classList.remove("hidden");
                        }}
                      />
                      <div ref={fallbackRef} className="hidden">
                        <BsPersonCircle color="#6d6dc3" size={33} />
                      </div>
                    </>
                  ) : (
                    <BsPersonCircle color="#6d6dc3" size={44} />
                  )}
                </button>
                <ul
                  tabIndex={0}
                  className="dropdown-content text-right z-50 dark:bg-slate-700 dark:text-white rtl menu bg-base-100 rounded-box  w-52 p-2 shadow-sm"
                >
                  <li>
                    <Link to="/dashbord">
                      <p className="cursor-pointer text-right  rounded-lg  dark:hover:bg-slate-600">
                        پنل دانشجو
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link to="/editProfile">
                      <p className="cursor-pointer text-right rounded-lg  dark:hover:bg-slate-600">
                        ویرایش پروفایل
                      </p>
                    </Link>
                  </li>
                  <li>
                    <p
                      onClick={() => {
                        localStorage.removeItem("token");
                        window.location.href = "/login";
                      }}
                      className="cursor-pointer text-right rounded-lg dark:hover:bg-slate-600"
                    >
                      خروج
                    </p>
                  </li>
                </ul>
              </div>

              <div onClick={() => setShow(!show)} className="">
                <IoSearch
                  size={40}
                  color="#21cd8f"
                  className="cursor-pointer"
                />
              </div>

              {/* <div className="w-[12%] h-32 py-3 px-3 absolute top-16 left-24 bg-white dark:bg-gray-700 rounded-xl shadow-md dark:shadow-slate-500 flex flex-col gap-3 rtl inset-0 z-50 outline-none focus:outline-none">
                    <Link to="/dashbord">
                      <p className="cursor-pointer dark:text-white rounded-lg hover:bg-green-200 dark:hover:bg-slate-600">
                        پنل دانشجو
                      </p>
                    </Link>
                    <Link to="/editProfile">
                      <p className="cursor-pointer dark:text-white rounded-lg hover:bg-green-200 dark:hover:bg-slate-600">
                        ویرایش پروفایل
                      </p>
                    </Link>
                    <p
                      onClick={() => {
                        localStorage.removeItem("token");
                        window.location.href = "/login";
                      }}
                      className="cursor-pointer dark:text-white rounded-lg hover:bg-green-200 dark:hover:bg-slate-600"
                    >
                      خروج
                    </p>
                  </div> */}
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="text-[#22445D] bg-[#00DF9D] dark:bg-gray-800 dark:text-white rounded-lg cursor-pointer p-2">
                  ورود / ثبت نام
                </button>
              </Link>
              <div className="">
                <img src={seachIcon} alt="" />
              </div>
            </>
          )}

          <ThemeToggleButton variant="admin" />
        </div>

        {show && (
          <>
            <div className="w-[45%] h-52 mx-auto mt-64 flex flex-col gap-3 justify-center items-center fixed inset-0 z-50 outline-none focus:outline-none bg-white dark:bg-slate-800 rounded-lg shadow-sm">
              <button
                type="button"
                className="text-gray-400 bg-transparent absolute left-0 bottom-44 hover:bg-gray-200 hover:text-gray-900 rounded-lg w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-700 dark:hover:text-white"
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

              <Formik
                initialValues={{
                  search: "",
                }}
                onSubmit={(values) => {
                  console.log(values);
                }}
              >
                <Form>
                  <div className="relative">
                    <Field
                      name="search"
                      type="text"
                      className="rtl p-4 dark:text-white border-green-800 w-[20rem] lg:w-[40rem] text-sm text-gray-900 border dark:bg-gray-700 rounded-lg shadow-xl bg-gray-100"
                      placeholder="جستجو..."
                      required
                      // onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      //   filterDataHanlder({
                      //     PageNumber: 1,
                      //     Query: e.target.value,
                      //   })
                      // }
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
                        <g>
                          <g>
                            <path d="M0,203.25c0,112.1,91.2,203.2,203.2,203.2c51.6,0,98.8-19.4,134.7-51.2l129.5,129.5c2.4,2.4,5.5,3.6,8.7,3.6 s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-129.6-129.5c31.8-35.9,51.2-83,51.2-134.7c0-112.1-91.2-203.2-203.2-203.2 S0,91.15,0,203.25z M381.9,203.25c0,98.5-80.2,178.7-178.7,178.7s-178.7-80.2-178.7-178.7s80.2-178.7,178.7-178.7 S381.9,104.65,381.9,203.25z"></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                </Form>
              </Formik>
              {datas.slice(0, 1).map((item) => {
                return (
                  <div className="w-[95%] h-20 mx-auto flex flex-nowrap gap-8 rtl px-6 justify-between items-center bg-slate-200 dark:bg-slate-700 dark:text-white rounded-lg shadow-sm">
                    <img className="h-12" src={courses1} alt="" />
                    <p> {item.title}</p>
                    <p> {item.cost} </p>
                    <p> {item.levelName} </p>
                  </div>
                );
              })}
            </div>

            <div className="opacity-40 fixed inset-0 z-40 bg-black"></div>
          </>
        )}

        <div className="justify-between items-center gap-2 dark:text-white hidden lg:flex">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `w-24 text-center rounded-lg cursor-pointer p-1 
         hover:bg-[#9e969657] hover:text-[#158B68] 
         transition-all duration-500 ease-in-out
         ${isActive ? "bg-[#9e969657] text-[#158B68] scale-105" : "scale-100"}`
            }
          >
            درباره ما
          </NavLink>

          <NavLink
            to="/news-articles"
            className={({ isActive }) =>
              `w-24 text-center rounded-lg cursor-pointer p-1 
         hover:bg-[#9e969657] hover:text-[#158B68] 
         transition-all duration-500 ease-in-out
         ${isActive ? "bg-[#9e969657] text-[#158B68] scale-105" : "scale-100"}`
            }
          >
            مقالات
          </NavLink>

          <NavLink
            to="/courses-list"
            className={({ isActive }) =>
              `w-24 text-center rounded-lg cursor-pointer p-1 
         hover:bg-[#9e969657] hover:text-[#158B68] 
         transition-all duration-500 ease-in-out
         ${isActive ? "bg-[#9e969657] text-[#158B68] scale-105" : "scale-100"}`
            }
          >
            دوره‌ها
          </NavLink>

          <NavLink
            to="/"
            className={({ isActive }) =>
              `w-24 text-center rounded-lg cursor-pointer p-1 
         hover:bg-[#9e969657] hover:text-[#158B68] 
         transition-all duration-500 ease-in-out
         ${isActive ? "bg-[#9e969657] text-[#158B68] scale-105" : "scale-100"}`
            }
          >
            صفحه اصلی
          </NavLink>
        </div>

        <div className="flex justify-center items-center dark:text-white">
          <Link to="/">
            <span className="cursor-pointer">آکادمی اچ وان</span>
          </Link>

          <Link to="/">
            <img className="h-10 cursor-pointer" src={logoLanding} alt="" />
          </Link>
        </div>

        <ResponsiveMenu />
      </div>
    </div>
  );
};

export function ResponsiveMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div className="block lg:hidden">
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          className="!text-black"
        >
          <RxHamburgerMenu size={20} />
        </Button>
      </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Link to="/">
          <MenuItem onClick={handleClose}>صفحه اصلی</MenuItem>
        </Link>

        <Link to="/courses-list">
          <MenuItem onClick={handleClose}>دوره ها</MenuItem>
        </Link>

        <Link to="/news-articles">
          <MenuItem onClick={handleClose}>مقالات</MenuItem>
        </Link>

        <Link to="/about">
          <MenuItem onClick={handleClose}>درباره ما</MenuItem>
        </Link>
      </Menu>
    </>
  );
}
export { Header };
