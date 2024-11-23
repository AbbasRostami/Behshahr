import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Menu, MenuItem } from "@mui/material";
import { RxHamburgerMenu } from "react-icons/rx";

import DarkLightToggle from "../DarkMode";

import topProfile from "./../../../assets/svg/Landing/topProfile.svg";
import logoLanding from "./../../../assets/svg/Landing/logosite.svg";
import seachIcon from "./../../../assets/svg/Landing/searchicon.svg";
import topIcon from "./../../../assets/svg/Landing/topicon.svg";
import recycle from "./../../../assets/recycle.svg";

const Header = () => {
  const [show, setShow] = useState(false);
  const [modal, setModal] = useState(false);

  return (
    <>
      <div class="relative bg-gradient-to-r from-green-300 to-gray-50 dark:dark:bg-slate-900 dark:bg-none">
        <div class="flex justify-between items-center px-20 h-20">
          <div class="flex justify-center items-center">
            {localStorage.getItem("token") ? (
              <>
                <button onClick={() => setModal(!modal)}>
                  <img src={topProfile} alt="" />
                </button>

                <button onClick={() => setShow(!show)} className="relative">
                  <img className="ml-3" src={topIcon} alt="" />
                  <div className="absolute -top-2.5 right-0 bg-slate-50 w-5 rounded-full text-center">
                    3
                  </div>
                </button>
                <div class="">
                  <img src={seachIcon} alt="" />
                </div>
              </>
            ) : (
              <>
                <Link to="/login">
                  <button class="text-[#22445D] bg-[#00DF9D] dark:bg-gray-800 dark:text-white rounded-lg cursor-pointer p-2">
                    ورود / ثبت نام
                  </button>
                </Link>
                <div class="">
                  <img src={seachIcon} alt="" />
                </div>
              </>
            )}

            <DarkLightToggle />
          </div>

          {show && (
            <>
              <div className="w-[70%] h-80 mx-auto mt-60 overscroll-contain overflow-y-auto bg-white dark:bg-gray-700 rounded-lg shadow-md dark:shadow-slate-500 flex fixed inset-0 z-50 outline-none focus:outline-none">
                <button
                  type="button"
                  class="text-gray-400 bg-transparent absolute left-0 bottom-72 hover:bg-gray-200 hover:text-gray-900 rounded-lg w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
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

                <table className="w-full h-full table-auto rtl mr-10 ml-10">
                  <thead className=" h-[3rem] bg-[#fbf6f6] dark:bg-slate-700 dark:text-white border-b-[3px]">
                    <tr>
                      <th className="w-[16rem] text-right">نام دوره</th>
                      <th className="w-[16rem] text-right">تاریخ شروع</th>
                      <th className="w-[16rem] text-right">وضعیت تایید</th>
                      <th className="w-[16rem] text-right">حذف دوره</th>
                    </tr>
                  </thead>

                  <tbody className="dark:text-white">
                    <tr className="border-b-[1px]">
                      <td>این یک تست است</td>
                      <td>2024/06/23</td>
                      <td>تایید نشده</td>
                      <img
                        className="h-7 my-2 dark:bg-slate-200"
                        src={recycle}
                        alt=""
                      />
                    </tr>

                    <tr className="border-b-[1px]">
                      <td>Witchy Woman</td>
                      <td>2024/06/23</td>
                      <td>تایید نشده</td>
                      <img
                        className="h-7 my-2 dark:bg-slate-200"
                        src={recycle}
                        alt=""
                      />
                    </tr>

                    <tr className="border-b-[1px]">
                      <td>عجب ری اکتی</td>
                      <td>2024/06/23</td>
                      <td>تایید نشده</td>
                      <img
                        className="h-7 my-2 dark:bg-slate-200"
                        src={recycle}
                        alt=""
                      />
                    </tr>

                    <tr className="border-b-[1px]">
                      <td>این یک تست است</td>
                      <td>2024/06/23</td>
                      <td>تایید نشده</td>
                      <img
                        className="h-7 my-2 dark:bg-slate-200"
                        src={recycle}
                        alt=""
                      />
                    </tr>

                    <tr>
                      <td>Witchy Woman</td>
                      <td>2024/06/23</td>
                      <td>تایید نشده</td>
                      <img
                        className="h-7 my-2 dark:bg-slate-200"
                        src={recycle}
                        alt=""
                      />
                    </tr>

                    <tr>
                      <td>عجب ری اکتی</td>
                      <td>2024/06/23</td>
                      <td>تایید نشده</td>
                      <img
                        className="h-7 my-2 dark:bg-slate-200"
                        src={recycle}
                        alt=""
                      />
                    </tr>

                    <tr>
                      <td>این یک تست است</td>
                      <td>2024/06/23</td>
                      <td>تایید نشده</td>
                      <img
                        className="h-7 my-2 dark:bg-slate-200"
                        src={recycle}
                        alt=""
                      />
                    </tr>

                    <tr>
                      <td>Witchy Woman</td>
                      <td>2024/06/23</td>
                      <td>تایید نشده</td>
                      <img
                        className="h-7 my-2 dark:bg-slate-200"
                        src={recycle}
                        alt=""
                      />
                    </tr>

                    <tr>
                      <td>عجب ری اکتی</td>
                      <td>2024/06/23</td>
                      <td>تایید نشده</td>
                      <img
                        className="h-7 my-2 dark:bg-slate-200"
                        src={recycle}
                        alt=""
                      />
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="opacity-40 fixed inset-0 z-40 bg-black"></div>
            </>
          )}

          {modal && (
            <>
              <div className="w-[12%] h-32 py-3 px-3 absolute top-16 left-24 bg-white dark:bg-gray-700 rounded-xl shadow-md dark:shadow-slate-500 flex flex-col gap-3 rtl inset-0 z-50 outline-none focus:outline-none">
                <p className="cursor-pointer dark:text-white rounded-lg hover:bg-green-200 dark:hover:bg-slate-600">
                  پنل دانشجو
                </p>
                <p className="cursor-pointer dark:text-white rounded-lg hover:bg-green-200 dark:hover:bg-slate-600">
                  ویرایش پروفایل
                </p>
                <p className="cursor-pointer dark:text-white rounded-lg hover:bg-green-200 dark:hover:bg-slate-600">
                  خروج
                </p>
              </div>
            </>
          )}

          <div class="flex justify-between items-center dark:text-white hidden lg:flex">
            <Link to="/about">
              {" "}
              <span class="hover:bg-[#9e969657] hover:text-[#158B68] w-24 text-center rounded-lg cursor-pointer items-center p-1">
                درباره ما
              </span>
            </Link>

            <Link to="/news-articles">
              {" "}
              <span class="hover:bg-[#9e969657] hover:text-[#158B68] mx-4 w-24 text-center rounded-lg cursor-pointer items-center p-1">
                مقالات
              </span>
            </Link>

            <Link to="/courses-list">
              {" "}
              <span class="hover:bg-[#9e969657] hover:text-[#158B68] mr-4 w-24 text-center rounded-lg cursor-pointer items-center p-1">
                دوره ها
              </span>
            </Link>

            <Link to="/">
              {" "}
              <span class="hover:bg-[#9e969657] hover:text-[#158B68] w-24 text-center rounded-lg cursor-pointer items-center p-1">
                صفحه اصلی{" "}
              </span>
            </Link>
          </div>

          <div class="flex justify-center items-center dark:text-white">
            <Link to="/">
              <span class="cursor-pointer">آکادمی اچ وان</span>
            </Link>

            <Link to="/">
              <img class="h-10 cursor-pointer" src={logoLanding} alt="" />
            </Link>
          </div>

          <ResponsiveMenu />
        </div>
      </div>
    </>
  );
};

export function ResponsiveMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
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
        <MenuItem onClick={handleClose}>صفحه اصلی</MenuItem>
        <MenuItem onClick={handleClose}>دوره ها</MenuItem>
        <MenuItem onClick={handleClose}>مقالات</MenuItem>
        <MenuItem onClick={handleClose}>درباره ما</MenuItem>
      </Menu>
    </>
  );
}
export { Header };
