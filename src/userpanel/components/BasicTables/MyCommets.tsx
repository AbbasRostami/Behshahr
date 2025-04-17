import { useState, useMemo, useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import DataTable, {
  createTheme,
  TableColumn,
} from "react-data-table-component";
import { getApi } from "../../../core/api/api";

interface MyCoursesCommentsType {
  commentId: string;
  courseId: string;
  title: string;
  describe: string;
  courseTitle: string;
  accept: boolean;
  likeCount: number;
  dislikeCount: number;
  replyCount: number;
  insertDate: string;
}

interface MyCommentsNewsType {
  commentId: string;
  newsId: string;
  title: string;
  describe: string;
  courseTitle: string;
  accept: boolean;
  likeCount: number;
  dislikeCount: number;
  replyCount: number;
  insertDate: string;
}

interface ApiReponse {
  data: {
    myCommentsDtos: MyCoursesCommentsType[];
    myNewsCommetDtos: MyCommentsNewsType[];
  };
}
import "./theme";
import { useTheme } from "../../../context/context/ThemeContext";
const MyCommets = () => {
  const [filterTextCourses, setFilterTextCourses] = useState("");
  const [filterTextNews, setFilterTextNews] = useState("");
  const [activeTab, setActiveTab] = useState<"courses" | "news">("courses");
  const { theme } = useTheme();

  const [data, setData] = useState<MyCoursesCommentsType[]>([]);
  const [dataNews, setDataNews] = useState<MyCommentsNewsType[]>([]);

  const getMyCommentsCourses = async () => {
    const path = `/SharePanel/GetMyCoursesComments`;
    const response = (await getApi({ path })) as ApiReponse;
    setData(response?.data.myCommentsDtos);
  };

  useEffect(() => {
    getMyCommentsCourses();
  }, []);

  const getMyCommentsNews = async () => {
    const path = `/SharePanel/GetMyNewsComments`;
    const response = (await getApi({ path })) as ApiReponse;
    setDataNews(response.data.myNewsCommetDtos);
  };

  useEffect(() => {
    getMyCommentsNews();
  }, []);

  const courseColumns: TableColumn<MyCoursesCommentsType>[] = useMemo(
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
        selector: (row) => row.describe,
      },
      {
        name: "📅 آخرین بروزرسانی",
        selector: (row) => row.insertDate,
        cell: (row) => new Date(row.insertDate).toLocaleDateString("fa-IR"),
        sortable: true,
      },
      {
        name: "👁️ تعداد بازدید",
        selector: (row) => row.replyCount,
        sortable: true,
      },
      {
        name: "⭐ امتیاز",
        selector: (row) => row.likeCount.toFixed(2),
      },
      {
        name: "✅ نوع",
        selector: (row) => (row.accept ? "پذیرفته شده" : "رد شده"),
      },
    ],
    []
  );

  const newsColumns: TableColumn<MyCommentsNewsType>[] = useMemo(
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
        selector: (row) => row.replyCount,
        sortable: true,
      },
      {
        name: "⭐ امتیاز",
        selector: (row) => row.likeCount.toFixed(2),
      },
      {
        name: "🗓️ تاریخ",
        selector: (row) => row.insertDate,
        cell: (row) => new Date(row.insertDate).toLocaleDateString("fa-IR"),
      },
      {
        name: "✅ وضعیت",
        selector: (row) => (row.accept ? "پذیرفته شده" : "رد شده"),
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
    return dataNews.filter((item) =>
      item.title.toLowerCase().includes(filterTextNews.toLowerCase())
    );
  }, [dataNews, filterTextNews]);

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
            🌟 دوره ها
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
            📰 اخبار و مقالات
            {activeTab === "news" && (
              <span className="absolute left-0 top-0 w-full h-full rounded-xl border-2 border-indigo-300 animate-pulse"></span>
            )}
          </button>
        </div>
      </div>

      {activeTab === "courses" && (
        <DataTable
          columns={courseColumns}
          data={filteredCourses}
          pagination
          highlightOnHover
          responsive
          striped
          fixedHeader
          subHeader
          theme={theme === "dark" ? "customDark" : "customLight"}
          subHeaderComponent={
            <div className="w-full flex flex-col gap-6 mb-8 rtl">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <h2 className="text-2xl font-black text-indigo-600 dark:text-indigo-400 pb-3 border-b-4 border-indigo-500 relative group transition-all duration-300 ease-in-out">
                  🌟 دوره ها
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
      )}

      {activeTab === "news" && (
        <DataTable
          columns={newsColumns}
          data={filteredNews}
          pagination
          highlightOnHover
          responsive
          striped
          fixedHeader
          subHeader
          theme={theme === "dark" ? "customDark" : "customLight"}
          subHeaderComponent={
            <div className="w-full flex flex-col gap-6 mb-8 rtl">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <h2 className="text-2xl font-black text-indigo-600 dark:text-indigo-400 pb-3 border-b-4 border-indigo-500 relative group transition-all duration-300 ease-in-out">
                  📰 اخبار و مقالات
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
              <p className="text-lg font-medium">هیچ کامنتی وجود ندارد</p>
            </div>
          }
        />
      )}
    </div>
  );
};

export default MyCommets;
