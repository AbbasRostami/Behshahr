import { useCallback, useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { toast } from "react-toastify";
import { getApi, postApi } from "../../core/api/api";
import { ActionApiResponse, NewsApiResponse, NewsType } from "../../types/news";
import { SliderArticles } from "../common/SliderArticles";
import { ArticlesCard } from "./ArticlesCard";

const ROWS_PER_PAGE = 9;

interface FilterState {
  PageNumber: number;
  RowsOfPage: number;
  SortingCol?: string;
  SortType?: string;
  Query?: string;
  NewsCategoryId?: string;
}

const NewsArticlesForm = () => {
  const [cards, setCards] = useState<NewsType[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState<string | null>(null);

  const [filter, setFilter] = useState<FilterState>({
    PageNumber: 1,
    RowsOfPage: ROWS_PER_PAGE,
  });

  const totalPages = Math.ceil(totalCount / ROWS_PER_PAGE);

  const fetchArticles = useCallback(async (params: FilterState) => {
    try {
      setLoading(true);

      const path = "/News";
      const response = (await getApi({
        path,
        params,
      })) as NewsApiResponse;

      setCards(response?.data?.news || []);
      setTotalCount(response?.data?.totalCount || 0);
    } catch {
      toast.error("خطا در دریافت مقالات.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchArticles(filter);
  }, [filter, fetchArticles]);

  const updateFilter = (newParams: Partial<FilterState>) => {
    setFilter((prev) => ({
      ...prev,
      PageNumber: 1,
      ...newParams,
    }));
  };

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setFilter((prev) => ({ ...prev, PageNumber: page }));
  };

  const handleAction = async (
    actionPath: string,
    id: string,
    successMsg: string,
  ) => {
    if (!localStorage.getItem("token")) {
      toast.info("ابتدا وارد حساب کاربری شوید.");
      return;
    }

    try {
      setActionLoading(id);

      const response = (await postApi({
        path: actionPath,
      })) as ActionApiResponse;

      if (response?.data?.success) {
        toast.success(successMsg);
        fetchArticles(filter);
        return;
      }

      if (response?.status === 400 && response?.data?.message) {
        toast.warning(response.data.message);
        return;
      }

      toast.info(response?.data?.message || "عملیات انجام نشد.");
    } catch {
      toast.error("خطا در انجام عملیات.");
    } finally {
      setActionLoading(null);
    }
  };

  const addLike = (id: string) =>
    handleAction(`/News/NewsLike/${id}`, id, "لایک شما ثبت شد.");

  const addDislike = (id: string) =>
    handleAction(`/News/NewsDissLike/${id}`, id, "دیسلایک شما ثبت شد.");

  const addStarRating = (id: string) =>
    handleAction(
      `/News/NewsRate?NewsId=${id}&RateNumber=2`,
      id,
      "امتیاز شما ثبت شد.",
    );

  return (
    <section dir="rtl" className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <h1 className="mt-6 text-center text-2xl font-bold text-[#22445D] dark:text-white lg:text-3xl">
        لیست اخبار و مقالات
      </h1>

      <div className="mt-8 flex flex-col gap-4 rounded-2xl bg-[#FBF6F6] p-4 shadow-[0_4px_20px_rgba(0,0,0,0.06)] dark:bg-gray-800 sm:flex-row sm:items-center sm:justify-between sm:p-5">
        <div className="relative w-full sm:max-w-xs">
          <input
            type="text"
            placeholder="جستجو..."
            className="w-full rounded-xl border border-green-200 bg-white py-3 pl-10 pr-4 text-sm text-gray-900 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
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

        <div className="flex flex-wrap gap-3">
          <select
            className="rounded-xl border-2 border-green-200 bg-white px-4 py-3 text-sm text-[#158B68] outline-none transition focus:border-green-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
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
            <option value="InsertDate">جدیدترین</option>
            <option value="CurrentView">پربازدیدترین</option>
            <option value="CurrentRate">بالاترین امتیاز</option>
            <option value="CurrentLikeCount">محبوب‌ترین</option>
          </select>

          <select
            className="rounded-xl border-2 border-green-200 bg-white px-4 py-3 text-sm text-[#158B68] outline-none transition focus:border-green-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            onChange={(e) => {
              const val = e.target.value;
              updateFilter(
                val ? { NewsCategoryId: val } : { NewsCategoryId: undefined },
              );
            }}
          >
            <option value="">همه دسته‌بندی‌ها</option>
          </select>
        </div>
      </div>

      <div className="mt-8 min-h-[400px] rounded-2xl bg-[#FBF6F6] p-4 shadow-[0_4px_20px_rgba(0,0,0,0.06)] dark:bg-gray-800 sm:p-6">
        {loading ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: ROWS_PER_PAGE }).map((_, i) => (
              <div
                key={i}
                className="h-[230px] animate-pulse rounded-[1.5rem] bg-gray-200 dark:bg-gray-700"
              />
            ))}
          </div>
        ) : !cards.length ? (
          <div className="flex min-h-[300px] items-center justify-center text-gray-500 dark:text-gray-400">
            مقاله‌ای یافت نشد.
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((item) => (
              <ArticlesCard
                key={item.id}
                item={item}
                onLike={addLike}
                onDislike={addDislike}
                onRate={addStarRating}
                loading={actionLoading === item.id}
              />
            ))}
          </div>
        )}
      </div>

      {totalPages > 1 && (
        <div className="mt-8 flex items-center justify-center gap-2">
          <button
            onClick={() => goToPage(filter.PageNumber - 1)}
            disabled={filter.PageNumber <= 1}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-sm text-[#158B68] shadow transition hover:bg-green-50 disabled:cursor-not-allowed disabled:opacity-40 dark:bg-gray-800 dark:text-green-400"
          >
            ❮
          </button>

          {Array.from({ length: totalPages }).map((_, i) => {
            const page = i + 1;
            const isActive = page === filter.PageNumber;

            // نمایش حداکثر 5 صفحه + ...
            const showPage =
              page === 1 ||
              page === totalPages ||
              Math.abs(page - filter.PageNumber) <= 1;

            const showDots =
              !showPage && (page === 2 || page === totalPages - 1);

            if (!showPage && !showDots) return null;

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
                    : "bg-white text-[#158B68] hover:bg-green-50 dark:bg-gray-800 dark:text-green-400"
                }`}
              >
                {page}
              </button>
            );
          })}

          <button
            onClick={() => goToPage(filter.PageNumber + 1)}
            disabled={filter.PageNumber >= totalPages}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-sm text-[#158B68] shadow transition hover:bg-green-50 disabled:cursor-not-allowed disabled:opacity-40 dark:bg-gray-800 dark:text-green-400"
          >
            ❯
          </button>
        </div>
      )}

      <div className="!max-w-6xl mt-16 overflow-hidden">
        <SliderArticles />
      </div>
    </section>
  );
};

export { NewsArticlesForm };
