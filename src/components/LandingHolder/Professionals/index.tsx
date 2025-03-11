import { useEffect, useState } from "react";
import { getApi } from "../../../core/api/api";
import { FaBookReader } from "react-icons/fa";
import { FaBookAtlas } from "react-icons/fa6";
import { toast } from "react-toastify";

interface Teachers {
  courseCounts: number;
  newsCount: number;
  pictureAddress: string;
  fullName: string;
}

interface ApiRes {
  data: Teachers[];
}

const Professionals: React.FC = () => {
  const [Teachers, setTeachers] = useState<Teachers[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const getTeachers = async () => {
    setLoading(true);
    try {
      const path = `/Home/GetTeachers`;
      const response = (await getApi({ path })) as ApiRes;
      if (response?.data) {
        setTeachers(response?.data.slice(6, 10));
      }
    } catch (error) {
      console.error(error);
      toast.error("خطا در دریافت اطلاعات.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTeachers();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[600px] gap-28">
        {Array(4)
          .fill(null)
          .map((_, index) => (
            <div key={index} className="flex flex-col items-center gap-4">
              <div className="w-[120px] h-[120px] bg-slate-200 animate-pulse rounded-full skeleton"></div>
              <div className="flex flex-col gap-2">
                <div className="w-48 h-6 bg-slate-200 animate-pulse skeleton"></div>
                <div className="w-36 h-6 bg-slate-200 animate-pulse skeleton"></div>
                <div className="w-32 h-6 bg-slate-200 animate-pulse skeleton"></div>
              </div>
            </div>
          ))}
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center gap-2 relative bg-gradient-to-br from-emerald-300/75 to-white h-[600px] dark:bg-slate-900 mt-16">
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-center">
        <p className="text-[35px] font-bold text-black dark:text-white">
          حرفه‌ای‌های ما
        </p>
        <p className="leading-10 text-black dark:text-white">
          ساختن دنیایی بهتر، یک دوره در یک زمان
        </p>
      </div>

      {Teachers?.map((item) => (
        <div
          key={item.fullName}
          className="flex justify-center items-center w-[300px] h-[380px] mt-36"
        >
          <div className="flex flex-col items-center">
            <img
              className="rounded-2xl"
              src={item.pictureAddress}
              alt={item.fullName}
            />
            <p className="text-black font-bold dark:text-white text-sm mt-5">
              {item.fullName}
            </p>
            <div className="mt-5 flex justify-between items-center w-16">
              <div className="text-center">
                <FaBookAtlas className="dark:bg-zinc-300" size={28} />
                <p className="mt-1 dark:text-white">{item.newsCount}</p>
              </div>
              <div className="text-center">
                <FaBookReader className="dark:bg-zinc-300" size={28} />
                <p className="mt-1 dark:text-white">{item.courseCounts}</p>
              </div>
            </div>
            <p className="text-[#21394B] px-14 rtl text-md mt-6 text-center dark:text-white">
              استاد برنامه نویس
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export { Professionals };
