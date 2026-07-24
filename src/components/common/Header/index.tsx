import { Menu, MenuItem } from "@mui/material";
import { useAtomValue, useSetAtom } from "jotai";
import React, { useEffect, useRef, useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, NavLink } from "react-router-dom";

import { ThemeToggleButton } from "../../../context/context/ThemeContext";
import {
  getEditProfAtom,
  profileAtom,
} from "../../../context/jotai/ProfileProvider";
import { getApi } from "../../../core/api/api";
import courses1 from "./../../../assets/courses1.svg";
import logoLanding from "./../../../assets/svg/Landing/logosite.svg";

interface CourseItem {
  courseId: string;
  title: string;
  cost: number;
  levelName: string;
}

interface CoursesApiResponse {
  data?: {
    courseFilterDtos?: CourseItem[];
  };
}

const navLinks = [
  { to: "/", label: "صفحه اصلی" },
  { to: "/courses-list", label: "دوره‌ها" },
  { to: "/news-articles", label: "مقالات" },
  { to: "/about", label: "درباره ما" },
];

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `w-24 text-center rounded-lg cursor-pointer p-1 transition-all duration-300
   hover:bg-[#9e969657] hover:text-[#158B68]
   ${isActive ? "bg-[#9e969657] text-[#158B68] scale-105" : "scale-100"}`;

const Header: React.FC = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [courses, setCourses] = useState<CourseItem[]>([]);

  const imgRef = useRef<HTMLImageElement | null>(null);
  const fallbackRef = useRef<HTMLDivElement | null>(null);

  const profile = useAtomValue(profileAtom);
  const getProfile = useSetAtom(getEditProfAtom);

  const isLoggedIn = Boolean(localStorage.getItem("token"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  useEffect(() => {
    getProfile();
  }, []);

  useEffect(() => {
    const getCourses = async () => {
      try {
        const path = "/Home/GetCoursesWithPagination";
        const response = (await getApi({
          path,
          params: { params: { Query: "", RowsOfPage: 9 } },
        })) as CoursesApiResponse;

        setCourses(response?.data?.courseFilterDtos || []);
      } catch {}
    };

    getCourses();
  }, []);

  const filteredCourses = searchQuery.trim()
    ? courses.filter((c) =>
        c.title.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : courses.slice(0, 3);

  const hasValidAvatar =
    profile?.currentPictureAddress &&
    profile.currentPictureAddress !== "Not-set";

  return (
    <header
      dir="rtl"
      className="bg-gradient-to-r from-green-300 to-gray-50 dark:bg-none dark:bg-slate-900"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <img className="h-10 w-auto" src={logoLanding} alt="آکادمی اچ وان" />
          <span className="hidden text-lg font-semibold text-slate-700 dark:text-white sm:block">
            آکادمی اچ وان
          </span>
        </Link>

        <nav className="hidden items-center gap-1 dark:text-white lg:flex">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className={navLinkClass}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex flex-row-reverse items-center gap-3">
          {isLoggedIn ? (
            <>
              <ProfileDropdown
                profile={profile}
                imgRef={imgRef}
                fallbackRef={fallbackRef}
                hasValidAvatar={!!hasValidAvatar}
                onLogout={handleLogout}
              />

              <button
                onClick={() => setShowSearch(true)}
                aria-label="جستجو"
                className="text-[#21cd8f] transition hover:scale-110"
              >
                <IoSearch size={36} />
              </button>
            </>
          ) : (
            <Link to="/login">
              <button className="rounded-lg bg-[#00DF9D] px-4 py-2 text-sm text-[#22445D] transition hover:bg-[#00c98d] dark:bg-gray-800 dark:text-white">
                ورود / ثبت نام
              </button>
            </Link>
          )}

          <ThemeToggleButton variant="admin" />
          <ResponsiveMenu />
        </div>
      </div>

      {showSearch && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/50"
            onClick={() => setShowSearch(false)}
          />

          <div className="fixed inset-x-4 z-50 mx-auto max-w-2xl rounded-2xl bg-white p-6 shadow-2xl dark:bg-slate-800 sm:w-full">
            <button
              onClick={() => setShowSearch(false)}
              aria-label="بستن"
              className="absolute left-4 top-4 rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-700"
            >
              ✕
            </button>

            <div className="relative mt-4">
              <input
                dir="rtl"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="جستجوی دوره..."
                className="w-full rounded-xl border border-green-300 bg-gray-50 px-5 py-3 pr-12 text-sm text-gray-900 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                autoFocus
              />
              <IoSearch
                className="absolute right-4 top-1/2 -translate-y-1/2 text-green-600"
                size={20}
              />
            </div>

            <div className="mt-4 flex flex-col justify-center gap-2">
              {filteredCourses.length > 0 ? (
                filteredCourses.map((item) => (
                  <Link
                    key={item?.courseId}
                    to={`/courses-details/${item?.courseId}`}
                    onClick={() => setShowSearch(false)}
                  >
                    <div className="flex items-center justify-between gap-4 rounded-xl bg-slate-100 px-5 py-3 text-sm transition hover:bg-green-50 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600">
                      <div className="flex items-center gap-3">
                        <img
                          className="h-10 w-10 object-contain"
                          src={courses1}
                          alt=""
                        />
                        <p className="font-medium">{item?.title}</p>
                      </div>
                      <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                        <span>{item?.levelName}</span>
                        <span className="text-[#12926C] dark:text-green-400">
                          {item?.cost?.toLocaleString("fa-IR")} تومان
                        </span>
                      </div>
                    </div>
                  </Link>
                ))
              ) : (
                <p className="py-4 text-center text-sm text-gray-400">
                  دوره‌ای یافت نشد
                </p>
              )}
            </div>
          </div>
        </>
      )}
    </header>
  );
};

interface ProfileDropdownProps {
  profile: ReturnType<typeof useAtomValue<typeof profileAtom>>;
  imgRef: React.RefObject<HTMLImageElement>;
  fallbackRef: React.RefObject<HTMLDivElement>;
  hasValidAvatar: boolean;
  onLogout: () => void;
}

const ProfileDropdown = ({
  profile,
  imgRef,
  fallbackRef,
  hasValidAvatar,
  onLogout,
}: ProfileDropdownProps) => {
  return (
    <div className="dropdown">
      <button>
        {hasValidAvatar ? (
          <>
            <img
              ref={imgRef}
              src={profile!.currentPictureAddress!}
              alt="پروفایل"
              className="h-10 w-10 rounded-full border-2 border-green-300 object-cover"
              onError={() => {
                imgRef.current?.classList.add("hidden");
                fallbackRef.current?.classList.remove("hidden");
              }}
            />
            <div ref={fallbackRef} className="hidden">
              <BsPersonCircle size={35} color="#6d6dc3" />
            </div>
          </>
        ) : (
          <BsPersonCircle size={35} color="#6d6dc3" />
        )}
      </button>

      <ul className="dropdown-content menu rounded-box rtl z-50 w-52 bg-white p-2 shadow-lg dark:bg-slate-700 dark:text-white">
        <li>
          <Link
            to="/dashboard"
            className="block rounded-lg px-3 py-2 text-right hover:bg-green-50 dark:hover:bg-slate-600"
          >
            پنل دانشجو
          </Link>
        </li>
        <li>
          <Link
            to="/profile"
            className="block rounded-lg px-3 py-2 text-right hover:bg-green-50 dark:hover:bg-slate-600"
          >
            ویرایش پروفایل
          </Link>
        </li>
        <li>
          <button
            onClick={onLogout}
            className="w-full rounded-lg px-3 py-2 text-right hover:bg-red-50 dark:hover:bg-slate-600"
          >
            خروج
          </button>
        </li>
      </ul>
    </div>
  );
};

export function ResponsiveMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  return (
    <div className="block lg:hidden">
      <button
        onClick={(e) => setAnchorEl(e.currentTarget)}
        className="rounded-lg p-2 text-gray-700 transition hover:bg-green-100 dark:text-white"
        aria-label="منوی موبایل"
      >
        <RxHamburgerMenu size={22} />
      </button>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        PaperProps={{
          sx: {
            borderRadius: "12px",
            mt: 1,
            minWidth: 180,
            direction: "rtl",
          },
        }}
      >
        {navLinks.map((link) => (
          <Link key={link.to} to={link.to}>
            <MenuItem
              onClick={() => setAnchorEl(null)}
              sx={{ justifyContent: "flex-end", fontFamily: "inherit" }}
            >
              {link.label}
            </MenuItem>
          </Link>
        ))}
      </Menu>
    </div>
  );
}

export { Header };
