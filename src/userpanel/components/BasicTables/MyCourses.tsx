import { useEffect, useMemo, useState } from "react";
import { MdCheckCircle, MdCancel } from "react-icons/md";

import { getApi } from "../../../core/api/api";
import DataTable, { TableColumn } from "react-data-table-component";
import { BiBadge, BiSearch } from "react-icons/bi";
import { useTheme } from "../../../context/context/ThemeContext";
type MyCoursesType = {
  tumbImageAddress: string;
  courseTitle: string;
  fullName: string;
  termName: string;
  statusName: string;
  paymentStatus: string;
  levelName: string;
  isActive: boolean;
};
interface ApiResponse {
  data: {
    listOfMyCourses: MyCoursesType[];
  };
}

export default function MyCourses() {
  const [data, setData] = useState<MyCoursesType[]>([]);
  const { theme } = useTheme();
  const getMyCourses = async () => {
    const path = `/SharePanel/GetMyCourses?PageNumber=1&RowsOfPage=10&SortingCol=DESC&SortType=LastUpdate&Query=s`;
    const response = (await getApi({ path })) as ApiResponse;
    setData(response?.data.listOfMyCourses);
  };
  useEffect(() => {
    getMyCourses();
  }, []);

  const columns: TableColumn<MyCoursesType>[] = useMemo(
    () => [
      {
        name: "تعداد",
        width: "60px",
        cell: (row, index) => <div className="font-bold">{index + 1}</div>,
        sortable: false,
      },
      {
        name: "🖼️ تصویر",
        width: "120px",
        cell: (row) => (
          <img
            src={row.tumbImageAddress.replaceAll("\\", "/")}
            alt="Course Thumbnail"
            width={80}
            height={50}
            className="rounded-lg shadow-sm border-2 border-gray-100 dark:border-gray-700"
          />
        ),
      },
      {
        name: "📚 عنوان دوره",
        selector: (row) => row.courseTitle,
        sortable: true,
        cell: (row) => (
          <span className="font-medium text-indigo-600 dark:text-indigo-300">
            {row.courseTitle}
          </span>
        ),
      },
      {
        name: "👤 مدرس",
        selector: (row) => row.fullName,
        cell: (row) => (
          <div className="flex items-center gap-2">
            <span className="text-gray-500 dark:text-gray-400">👨</span>
            <span>{row.fullName}</span>
          </div>
        ),
      },
      {
        name: "📅 ترم",
        selector: (row) => row.termName,
        cell: (row) => (
          <span className="px-2 py-1 rounded-md  dark:bg-gray-700 text-sm">
            {row.termName}
          </span>
        ),
      },
      {
        name: "🟢 وضعیت",
        selector: (row) => row.statusName,
        cell: (row) => (
          <span
            className={`text-sm ${
              row.statusName === "فعال" ? "text-green-600" : "text-yellow-600"
            }`}
          >
            ● {row.statusName}
          </span>
        ),
      },
      {
        name: "💳 پرداخت",
        selector: (row) => row.paymentStatus,
        cell: (row) => (
          <div className="flex items-center gap-2">
            <div
              className={`w-2 h-2 rounded-full ${
                row.paymentStatus === "موفق" ? "bg-green-500" : "bg-red-500"
              }`}
            />
            <span>{row.paymentStatus}</span>
          </div>
        ),
      },
      {
        name: "📊 سطح",
        selector: (row) => row.levelName,
        cell: (row) => (
          <div className="flex gap-1">
            <div className="w-fit  h-2 rounded-full">{row.levelName}</div>
          </div>
        ),
      },
      {
        name: "🔘 وضعیت",
        cell: (row) => (
          <div className="flex items-center gap-2">
            {row.isActive ? (
              <MdCheckCircle className="text-green-500" />
            ) : (
              <MdCancel className="text-red-500" />
            )}
            <span
              className={`text-sm ${
                row.isActive ? "text-green-600" : "text-red-600"
              }`}
            >
              {row.isActive ? "فعال" : "غیرفعال"}
            </span>
          </div>
        ),
        sortable: true,
      },
    ],
    []
  );

  const [filterText, setFilterText] = useState("");

  const filteredData = useMemo(() => {
    return data.filter((item) =>
      item.courseTitle.toLowerCase().includes(filterText.toLowerCase())
    );
  }, [data, filterText]);
  return (
    <div className="p-4 rtl space-y-6">
      <DataTable
        columns={columns}
        data={filteredData}
        pagination
        responsive
        theme={theme === "dark" ? "customDark" : "customLight"}
        highlightOnHover
        striped
        fixedHeader
        fixedHeaderScrollHeight="400px"
        subHeader
        subHeaderComponent={
          <div className="w-full flex flex-col gap-6 mb-8 rtl">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <h2 className="text-2xl font-black text-indigo-600 dark:text-indigo-400 pb-3 border-b-4 border-indigo-500 relative group transition-all duration-300 ease-in-out">
                🎓 دوره‌های من
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-indigo-400 transition-all group-hover:w-full duration-500 rounded"></span>
              </h2>

              <div className="relative w-full md:w-1/2 lg:w-1/3">
                <input
                  type="text"
                  className="w-full py-3 pr-12 pl-5 rounded-xl border border-indigo-300 bg-gradient-to-r from-white to-indigo-50 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
                  placeholder="جستجو در عنوان دوره..."
                  value={filterText}
                  onChange={(e) => setFilterText(e.target.value)}
                />
                <BiSearch
                  size={22}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-indigo-400 dark:text-indigo-300 group-hover:scale-110 transition-transform duration-300"
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
            <p className="text-lg font-medium">هیچ دوره فعالی وجود ندارد</p>
          </div>
        }
      />
    </div>
  );
}
