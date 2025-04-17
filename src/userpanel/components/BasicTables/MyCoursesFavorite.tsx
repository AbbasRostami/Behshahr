import { useState, useMemo, useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import DataTable, { TableColumn } from "react-data-table-component";
import { toast } from "react-toastify";
import { deleteApi, getApi } from "../../../core/api/api";
import { useTheme } from "../../../context/context/ThemeContext";

interface FavoritesCoureses {
  teacheName: string;
  levelName: string;
  courseTitle: string;
  describe: string;
  tumbImageAddress: string;
  typeName: string;
  lastUpdate: string;
  courseId: string;
  favoriteId: string;
  teacherId: number;
}

interface FavoritesNews {
  title: string;
  currentImageAddressTumb: string;
  currentRate: number;
  currentView: number;
  newsId: string;
  favoriteId: string;
  currentLikeCount: number;
  updateDate: string;
}

interface ApiResponse {
  data: {
    favoriteCourseDto: FavoritesCoureses[];
    myFavoriteNews: FavoritesNews[];
    success: boolean;
    message: string;
  };
}

const MyCoursesFavorite = () => {
  const [data, setData] = useState<FavoritesCoureses[]>([]);
  const [news, setNews] = useState<FavoritesNews[]>([]);
  const [filterTextCourses, setFilterTextCourses] = useState("");
  const [filterTextNews, setFilterTextNews] = useState("");
  const [activeTab, setActiveTab] = useState<"courses" | "news">("courses");
  const { theme } = useTheme();
  const getFavoritesCoureses = async () => {
    const path = `/SharePanel/GetMyFavoriteCourses`;
    const response = (await getApi({ path })) as ApiResponse;
    setData(response?.data?.favoriteCourseDto);
  };

  useEffect(() => {
    getFavoritesCoureses();
  }, []);

  const getFavoritesNews = async () => {
    const path = `/SharePanel/GetMyFavoriteNews`;
    const response = (await getApi({ path })) as ApiResponse;
    setNews(response?.data?.myFavoriteNews);
  };

  useEffect(() => {
    getFavoritesNews();
  }, []);

  const deleteFavoriteCourses = async (favoriteId: string) => {
    const formData = new FormData();
    formData.append("CourseFavoriteId", favoriteId);

    const path = `/Course/DeleteCourseFavorite`;
    const body = formData;
    const response = (await deleteApi({ path, body })) as ApiResponse;

    if (response?.data.success) {
      toast.success(response?.data.message);
    }
    getFavoritesCoureses();
  };

  const deleteFavoriteNews = async (favoriteId: string) => {
    const body = { deleteEntityId: favoriteId };
    const path = `/News/DeleteFavoriteNews/`;
    const response = (await deleteApi({ path, body })) as ApiResponse;

    if (response?.data.success) {
      toast.success(response?.data.message);
    }
    getFavoritesNews();
  };

  const courseColumns: TableColumn<FavoritesCoureses>[] = useMemo(
    () => [
      {
        name: "تعداد",
        width: "80px",
        cell: (row, index) => <div className="font-bold">{index + 1}</div>,
        sortable: false,
      },
      {
        name: "📚 دوره",
        selector: (row) => row.courseTitle,
        sortable: true,
        cell: (row) => (
          <span className="font-medium text-indigo-600">{row.courseTitle}</span>
        ),
      },
      {
        name: "🧑‍🏫 مدرس",
        selector: (row) => row.teacheName,
      },
      {
        name: "📅 آخرین بروزرسانی",
        selector: (row) => row.lastUpdate,
        cell: (row) => new Date(row.lastUpdate).toLocaleDateString("fa-IR"),
        sortable: true,
      },
      {
        name: "✅ نوع",
        selector: (row) => row.typeName,
      },
      {
        name: "❌ حذف",
        cell: (row) => (
          <button onClick={() => deleteFavoriteCourses(row.favoriteId)}>
            <MdDelete className="text-red-600 text-2xl" />
          </button>
        ),
      },
    ],
    []
  );

  const newsColumns: TableColumn<FavoritesNews>[] = useMemo(
    () => [
      {
        name: "تعداد",
        width: "80px",
        cell: (row, index) => <div className="font-bold">{index + 1}</div>,
        sortable: false,
      },
      {
        name: "📰 عنوان خبر",
        selector: (row) => row.title,
      },
      {
        name: "👁️ بازدید",
        selector: (row) => row.currentView,
        sortable: true,
      },
      {
        name: "⭐ امتیاز",
        selector: (row) => row.currentRate.toFixed(2),
      },
      {
        name: "🗓️ تاریخ",
        selector: (row) => row.updateDate,
        cell: (row) => new Date(row.updateDate).toLocaleDateString("fa-IR"),
      },
      {
        name: "❌ حذف",
        cell: (row) => (
          <button onClick={() => deleteFavoriteNews(row.favoriteId)}>
            <MdDelete className="text-red-600 text-2xl" />
          </button>
        ),
      },
    ],
    []
  );

  const filteredCourses = useMemo(() => {
    return data.filter((item) =>
      item.courseTitle.toLowerCase().includes(filterTextCourses.toLowerCase())
    );
  }, [data, filterTextCourses]);

  const filteredNews = useMemo(() => {
    return news.filter((item) =>
      item.title.toLowerCase().includes(filterTextNews.toLowerCase())
    );
  }, [news, filterTextNews]);

  return (
    <div className="p-4 space-y-10 rtl">
      <div className="flex justify-center my-8">
        <div className="inline-flex gap-4 bg-gray-100 p-1 rounded-2xl shadow-inner border border-gray-200">
          <button
            onClick={() => setActiveTab("courses")}
            className={`relative px-6 py-2 rounded-xl font-bold transition-all duration-300 overflow-hidden
        ${
          activeTab === "courses"
            ? "bg-indigo-600 text-white shadow-md scale-105"
            : "bg-gray-200 text-gray-700 hover:bg-gray-300 hover:scale-105"
        }`}
          >
            🌟 دوره‌های موردعلاقه
            {activeTab === "courses" && (
              <span className="absolute left-0 top-0 w-full h-full rounded-xl border-2 border-indigo-300 animate-pulse"></span>
            )}
          </button>

          <button
            onClick={() => setActiveTab("news")}
            className={`relative px-6 py-2 rounded-xl font-bold transition-all duration-300 overflow-hidden
        ${
          activeTab === "news"
            ? "bg-indigo-600 text-white shadow-md scale-105"
            : "bg-gray-200 text-gray-700 hover:bg-gray-300 hover:scale-105"
        }`}
          >
            📰 اخبار موردعلاقه
            {activeTab === "news" && (
              <span className="absolute left-0 top-0 w-full h-full rounded-xl border-2 border-indigo-300 animate-pulse"></span>
            )}
          </button>
        </div>
      </div>

      {activeTab === "courses" && (
        <section>
          <DataTable
            columns={courseColumns}
            data={filteredCourses}
            pagination
            highlightOnHover
            responsive
            striped
            theme={theme === "dark" ? "customDark" : "customLight"}
            fixedHeader
            subHeader
            subHeaderComponent={
              <div className="w-full flex flex-col gap-6 mb-8 rtl">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <h2 className="text-2xl font-black text-indigo-600 dark:text-indigo-400 pb-3 border-b-4 border-indigo-500 relative group transition-all duration-300 ease-in-out">
                    🌟 دوره‌های موردعلاقه
                  </h2>
                  <div className="relative w-full md:w-1/2 lg:w-1/3">
                    <input
                      type="text"
                      className="w-full py-3 pr-12 pl-5 rounded-xl border border-indigo-300 bg-gradient-to-r from-white to-indigo-50 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
                      placeholder="جستجو در عنوان دوره..."
                      value={filterTextCourses}
                      onChange={(e) => setFilterTextCourses(e.target.value)}
                    />
                    <BiSearch
                      size={22}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-indigo-400 dark:text-indigo-300"
                    />
                  </div>
                </div>
              </div>
            }
            noDataComponent={
              <div className="flex flex-col items-center justify-center gap-4 py-12 text-gray-500 dark:text-gray-400">
                <svg
                  className="w-16 h-16 opacity-60"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="text-lg font-medium">هیچ رزروی وجود ندارد</p>
              </div>
            }
          />
        </section>
      )}

      {activeTab === "news" && (
        <section>
          <DataTable
            columns={newsColumns}
            data={filteredNews}
            pagination
            highlightOnHover
            responsive
            striped
            fixedHeader
            subHeader
            subHeaderComponent={
              <div className="w-full flex flex-col gap-6 mb-8 rtl">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <h2 className="text-2xl font-black text-indigo-600 dark:text-indigo-400 pb-3 border-b-4 border-indigo-500 relative group transition-all duration-300 ease-in-out">
                    📰 اخبار موردعلاقه
                  </h2>
                  <div className="relative w-full md:w-1/2 lg:w-1/3">
                    <input
                      type="text"
                      className="w-full py-3 pr-12 pl-5 rounded-xl border border-indigo-300 bg-gradient-to-r from-white to-indigo-50 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
                      placeholder="جستجو در عنوان خبر..."
                      value={filterTextNews}
                      onChange={(e) => setFilterTextNews(e.target.value)}
                    />
                    <BiSearch
                      size={22}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-indigo-400 dark:text-indigo-300"
                    />
                  </div>
                </div>
              </div>
            }
            noDataComponent={
              <div className="flex flex-col items-center justify-center gap-4 py-12 text-gray-500 dark:text-gray-400">
                <svg
                  className="w-16 h-16 opacity-60"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="text-lg font-medium">هیچ خبری وجود ندارد</p>
              </div>
            }
          />
        </section>
      )}
    </div>
  );
};

export default MyCoursesFavorite;
