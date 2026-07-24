import React, { useEffect, useState } from "react";
import { FaBookReader } from "react-icons/fa";
import { FaBookAtlas } from "react-icons/fa6";
import { toast } from "react-toastify";
import { getApi } from "../../../core/api/api";
import defaultAvatar from "./../../../assets/svg/download.png";

interface Teacher {
  teacherId: number;
  courseCounts?: number;
  newsCount?: number;
  pictureAddress: string | null;
  fullName: string;
}

interface ApiRes {
  data?: Teacher[];
}

const Professionals: React.FC = () => {
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const getTeachers = async () => {
      try {
        setLoading(true);

        const path = "/Home/GetTeachers";
        const response = (await getApi({ path })) as ApiRes;

        if (isMounted) {
          setTeachers(response?.data || []);
        }
      } catch (error) {
        toast.error("خطا در دریافت اطلاعات.");
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    getTeachers();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section
      dir="rtl"
      className="mt-16 bg-gradient-to-br from-emerald-300/75 to-white px-4 py-12 dark:bg-none dark:bg-slate-900 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-[28px] font-bold text-black dark:text-white lg:text-[35px]">
            حرفه‌ای‌های ما
          </p>
          <p className="mt-2 leading-8 text-black dark:text-white lg:leading-10">
            ساختن دنیایی بهتر، یک دوره در یک زمان
          </p>
        </div>

        {loading ? (
          <div className="mt-10 grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="w-full max-w-[280px] rounded-[1.5rem] bg-white/70 p-6 shadow-[0_10px_30px_rgba(16,185,129,0.12)] dark:bg-gray-800"
              >
                <div className="mx-auto h-[120px] w-[120px] animate-pulse rounded-2xl bg-slate-200 dark:bg-gray-700" />

                <div className="mt-5 space-y-3">
                  <div className="mx-auto h-5 w-40 animate-pulse rounded bg-slate-200 dark:bg-gray-700" />
                  <div className="mx-auto h-4 w-24 animate-pulse rounded bg-slate-200 dark:bg-gray-700" />
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="h-20 animate-pulse rounded-2xl bg-slate-200 dark:bg-gray-700" />
                  <div className="h-20 animate-pulse rounded-2xl bg-slate-200 dark:bg-gray-700" />
                </div>
              </div>
            ))}
          </div>
        ) : !teachers.length ? (
          <div className="mt-10 rounded-[1.5rem] bg-white/70 p-8 text-center text-[#21394B] shadow-[0_10px_30px_rgba(16,185,129,0.12)] dark:bg-gray-800 dark:text-white">
            در حال حاضر استادی برای نمایش وجود ندارد.
          </div>
        ) : (
          <div className="mt-10 grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {teachers.map((item) => (
              <div
                key={item.teacherId}
                className="w-full max-w-[280px] rounded-[1.5rem] bg-white/80 p-6 text-center shadow-[0_10px_30px_rgba(16,185,129,0.12)] transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-gray-800"
              >
                <img
                  className="mx-auto h-[120px] w-[120px] rounded-2xl object-cover ring-4 ring-green-100 dark:ring-green-900/40"
                  src={item.pictureAddress || defaultAvatar}
                  alt={item.fullName}
                  onError={(e) => {
                    e.currentTarget.src = defaultAvatar;
                  }}
                />

                <p className="mt-5 text-base font-bold text-[#21394B] dark:text-white">
                  {item.fullName}
                </p>

                <p className="mt-2 text-sm text-[#41A789] dark:text-green-300">
                  استاد برنامه نویس
                </p>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-green-50 p-3 dark:bg-gray-700">
                    <FaBookAtlas
                      size={24}
                      className="mx-auto text-green-700 dark:text-green-400"
                    />
                    <p className="mt-2 text-xs text-[#21394B] dark:text-white">
                      مقاله
                    </p>
                    <p className="mt-1 font-bold text-[#21394B] dark:text-white">
                      {item.newsCount ?? 0}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-green-50 p-3 dark:bg-gray-700">
                    <FaBookReader
                      size={24}
                      className="mx-auto text-green-700 dark:text-green-400"
                    />
                    <p className="mt-2 text-xs text-[#21394B] dark:text-white">
                      دوره
                    </p>
                    <p className="mt-1 font-bold text-[#21394B] dark:text-white">
                      {item.courseCounts ?? 0}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export { Professionals };
