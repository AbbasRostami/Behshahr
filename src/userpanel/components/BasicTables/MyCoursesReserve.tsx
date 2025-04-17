import { useEffect, useMemo, useState } from "react";
import { MdCheckCircle, MdCancel, MdDelete } from "react-icons/md";
import DataTable, { TableColumn } from "react-data-table-component";
import { BiSearch } from "react-icons/bi";
import { deleteApi, getApi } from "../../../core/api/api";
import { toast } from "react-toastify";
import { useTheme } from "../../../context/context/ThemeContext";

interface MyReserveCourseType {
  reserveId: string;
  courseId: string;
  courseName: string;
  studentId: number;
  studentName: string;
  reserverDate: string;
  accept: boolean;
}

interface ApiResponse {
  data: MyReserveCourseType[] & {
    success: boolean;
    message: string;
  };
}

export default function MyCoursesReserve() {
  const [data, setData] = useState<MyReserveCourseType[]>([]);
  const [filterText, setFilterText] = useState("");
  const { theme } = useTheme();
  const getMyCourses = async () => {
    const path = `/SharePanel/GetMyCoursesReserve`;
    const response = (await getApi({ path })) as ApiResponse;
    console.log("Courses:", response?.data);
    setData(response?.data || []);
  };

  useEffect(() => {
    getMyCourses();
  }, []);

  const deleteCoursesReserve = async (reserveId: string) => {
    console.log(reserveId);

    const body = { id: reserveId };

    const path = `/CourseReserve/`;
    const response = (await deleteApi({ path, body })) as ApiResponse;

    if (response?.data.success) {
      toast.success(response?.data.message);
    }
    getMyCourses();
  };

  const columns: TableColumn<MyReserveCourseType>[] = useMemo(
    () => [
      {
        name: "تعداد",
        width: "60px",
        cell: (row, index) => <div className="font-bold">{index + 1}</div>,
        sortable: false,
      },
      {
        name: "📚 عنوان دوره",
        selector: (row) => row.courseName,
        sortable: true,
        cell: (row) => (
          <span className="font-medium text-indigo-600 dark:text-indigo-300">
            {row.courseName}
          </span>
        ),
      },
      {
        name: "👤 دانشجو",
        selector: (row) => row.studentName,
        cell: (row) => (
          <div className="flex items-center gap-2">
            <span className="text-gray-500 dark:text-gray-400">👨</span>
            <span>{row.studentName}</span>
          </div>
        ),
      },
      {
        name: "📅 تاریخ رزرو",
        selector: (row) => row.reserverDate,
        cell: (row) => (
          <span className="text-sm">
            {new Date(row.reserverDate).toLocaleDateString("fa-IR")}
          </span>
        ),
      },
      {
        name: "✔️ تایید",
        selector: (row) => row.accept,
        cell: (row) => (
          <div className="flex items-center gap-2">
            {row.accept ? (
              <MdCheckCircle className="text-green-500" />
            ) : (
              <MdCancel className="text-red-500" />
            )}
            <span
              className={`text-sm ${
                row.accept ? "text-green-600" : "text-red-600"
              }`}
            >
              {row.accept ? "تایید شده" : "در انتظار تایید"}
            </span>
          </div>
        ),
        sortable: true,
      },
      {
        name: "🗑️ حذف",
        cell: (row) => (
          <button
            onClick={() => deleteCoursesReserve(row.reserveId)}
            className="p-2 rounded-full hover:bg-red-100 dark:hover:bg-red-800 transition-colors"
            title="حذف دوره"
          >
            <MdDelete className="text-red-600 dark:text-red-400 text-3xl" />
          </button>
        ),
        ignoreRowClick: true,
        allowOverflow: true,
      },
    ],
    []
  );

  const filteredData = useMemo(() => {
    return data.filter((item) =>
      item.courseName.toLowerCase().includes(filterText.toLowerCase())
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
                📥 دوره‌های رزرو شده
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
    </div>
  );
}
