import React, { useCallback, useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { toast } from "react-toastify";
import { getApi, postApi } from "../../core/api/api";
import {
  ActionResponse,
  CourseFilterState,
  CourseItem,
  CoursesApiResponse,
} from "../../types/coursesList";
import { CoursesSlider } from "../common/SliderCourses";
import { CourseCard } from "./CourseCard";
import { FilterSidebar } from "./FilterSidebar";

const ROWS_PER_PAGE = 9;

const initialFilter: CourseFilterState = {
  PageNumber: 1,
  RowsOfPage: ROWS_PER_PAGE,
};

const CoursesListForm: React.FC = () => {
  const [courses, setCourses] = useState<CourseItem[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState<string | null>(null);
  const [filter, setFilter] = useState<CourseFilterState>(initialFilter);
  const [priceRange, setPriceRange] = useState([0, 20000000]);
  const [showFilter, setShowFilter] = useState(false);

  const totalPages = Math.ceil(totalCount / ROWS_PER_PAGE);

  const fetchCourses = useCallback(async (params: CourseFilterState) => {
    try {
      setLoading(true);
      const path = "/Home/GetCoursesWithPagination";
      const response = (await getApi({ path, params })) as CoursesApiResponse;

      const list = (response?.data?.courseFilterDtos || []).filter(
        (c: any) => c.active !== false && c.isDelete !== true,
      );

      setCourses(list);
      setTotalCount(response?.data?.totalCount || 0);
    } catch {
      toast.error("خطا در دریافت دوره‌ها.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCourses(filter);
  }, [filter, fetchCourses]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFilter((prev) => ({
        ...prev,
        PageNumber: 1,
        CostDown: priceRange[0],
        CostUp: priceRange[1],
      }));
    }, 500);
    return () => clearTimeout(timer);
  }, [priceRange]);

  const updateFilter = (newParams: Partial<CourseFilterState>) => {
    setFilter((prev) => ({ ...prev, PageNumber: 1, ...newParams }));
  };

  const clearFilter = () => {
    setFilter(initialFilter);
    setPriceRange([0, 20000000]);
  };

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setFilter((prev) => ({ ...prev, PageNumber: page }));
  };

  // اکشن‌ها
  const handleAction = async (path: string, id: string, msg: string) => {
    if (!localStorage.getItem("token")) {
      toast.info("ابتدا وارد حساب کاربری شوید.");
      return;
    }
    try {
      setActionLoading(id);
      const response = (await postApi({ path })) as ActionResponse;
      if (response?.data?.success) {
        toast.success(msg);
        fetchCourses(filter);
      } else {
        toast.info(response?.data?.message || "عملیات انجام نشد.");
      }
    } catch {
      toast.error("خطا در انجام عملیات.");
    } finally {
      setActionLoading(null);
    }
  };

  const onLike = (id: string) =>
    handleAction(`/Course/AddCourseLike?CourseId=${id}`, id, "لایک ثبت شد.");
  const onDislike = (id: string) =>
    handleAction(
      `/Course/AddCourseDissLike?CourseId=${id}`,
      id,
      "دیسلایک ثبت شد.",
    );
  const onRate = (id: string) =>
    handleAction(
      `/Course/SetCourseRating?CourseId=${id}`,
      id,
      "امتیاز ثبت شد.",
    );

  const onReserve = async (id: string) => {
    if (!localStorage.getItem("token")) {
      toast.info("ابتدا وارد حساب کاربری شوید.");
      return;
    }
    try {
      setActionLoading(id);
      const path = "/CourseReserve/ReserveAdd";
      const body = { courseId: id };
      const response = (await postApi({ path, body })) as ActionResponse;
      if (response?.data?.success) {
        toast.success("دوره با موفقیت رزرو شد.");
      } else {
        toast.error(response?.data?.message || "رزرو انجام نشد.");
      }
    } catch {
      toast.error("خطا در رزرو دوره.");
    } finally {
      setActionLoading(null);
    }
  };

  return (
    <section dir="rtl" className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <h1 className="mt-6 text-center text-2xl font-bold text-[#22445D] dark:text-white lg:text-3xl">
        لیست دوره‌ها
      </h1>

      <div className="mt-8 flex flex-col gap-4 rounded-2xl bg-[#FBF6F6] p-4 shadow-[0_4px_20px_rgba(0,0,0,0.06)] dark:bg-gray-800 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-xs">
          <input
            type="text"
            placeholder="جستجوی دوره..."
            className="w-full rounded-xl border border-green-200 bg-white py-3 pl-10 pr-4 text-sm outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            onChange={(e) => {
              const val = e.target.value.trim();
              updateFilter(val ? { Query: val } : { Query: undefined });
            }}
          />
          <IoSearch
            className="absolute left-3 top-1/2 -translate-y-1/2 text-green-600"
            size={18}
          />
        </div>

        <div className="flex items-center gap-3">
          <select
            className="rounded-xl border border-green-200 bg-white px-4 py-3 text-sm text-[#158B68] outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            onChange={(e) => {
              const val = e.target.value;
              updateFilter(
                val
                  ? { SortingCol: val, SortType: "DESC" }
                  : { SortingCol: undefined, SortType: undefined },
              );
            }}
          >
            <option value="">مرتب سازی</option>
            <option value="cost">قیمت</option>
            <option value="likeCount">پسندیده‌ترین</option>
            <option value="currentRegistrants">محبوب‌ترین</option>
          </select>

          <button
            onClick={() => setShowFilter(true)}
            className="rounded-xl border border-green-200 bg-white p-3 text-green-700 transition hover:bg-green-50 dark:border-gray-600 dark:bg-gray-700 dark:text-green-300 lg:hidden"
          >
            <FaFilter size={18} />
          </button>
        </div>
      </div>

      <div className="mt-8 flex flex-row-reverse gap-6">
        <div className="min-h-[400px] flex-1 rounded-2xl bg-[#FBF6F6] p-4 shadow-[0_4px_20px_rgba(0,0,0,0.06)] dark:bg-gray-800 sm:p-6">
          {loading ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: ROWS_PER_PAGE }).map((_, i) => (
                <div
                  key={i}
                  className="h-[200px] animate-pulse rounded-2xl bg-gray-200 dark:bg-gray-700"
                />
              ))}
            </div>
          ) : !courses.length ? (
            <div className="flex min-h-[300px] items-center justify-center text-gray-500 dark:text-gray-400">
              دوره‌ای یافت نشد.
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {courses.map((item) => (
                <CourseCard
                  key={item.courseId}
                  item={item}
                  onLike={onLike}
                  onDislike={onDislike}
                  onRate={onRate}
                  onReserve={onReserve}
                  actionLoading={actionLoading}
                />
              ))}
            </div>
          )}

          {/* پیجینیشن */}
          {totalPages > 1 && (
            <div className="mt-8 flex items-center justify-center gap-2">
              <button
                onClick={() => goToPage(filter.PageNumber - 1)}
                disabled={filter.PageNumber <= 1}
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-sm text-[#158B68] shadow transition hover:bg-green-50 disabled:opacity-40 dark:bg-gray-700 dark:text-green-400"
              >
                ❮
              </button>

              {Array.from({ length: totalPages }).map((_, i) => {
                const page = i + 1;
                const isActive = page === filter.PageNumber;
                const show =
                  page === 1 ||
                  page === totalPages ||
                  Math.abs(page - filter.PageNumber) <= 1;
                const showDots =
                  !show && (page === 2 || page === totalPages - 1);

                if (!show && !showDots) return null;

                if (showDots) {
                  return (
                    <span
                      key={`dots-${page}`}
                      className="flex h-10 w-10 items-center justify-center text-gray-400"
                    >
                      …
                    </span>
                  );
                }

                return (
                  <button
                    key={page}
                    onClick={() => goToPage(page)}
                    className={`flex h-10 w-10 items-center justify-center rounded-xl text-sm font-medium shadow transition ${
                      isActive
                        ? "bg-[#158B68] text-white"
                        : "bg-white text-[#158B68] hover:bg-green-50 dark:bg-gray-700 dark:text-green-400"
                    }`}
                  >
                    {page}
                  </button>
                );
              })}

              <button
                onClick={() => goToPage(filter.PageNumber + 1)}
                disabled={filter.PageNumber >= totalPages}
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-sm text-[#158B68] shadow transition hover:bg-green-50 disabled:opacity-40 dark:bg-gray-700 dark:text-green-400"
              >
                ❯
              </button>
            </div>
          )}
        </div>

        <FilterSidebar
          filter={filter}
          priceRange={priceRange}
          showMobile={showFilter}
          onFilterChange={updateFilter}
          onPriceChange={setPriceRange}
          onClear={clearFilter}
          onClose={() => setShowFilter(false)}
        />
      </div>

      <div className="!max-w-6xl overflow-hidden">
        <CoursesSlider />
      </div>
    </section>
  );
};

export { CoursesListForm };
