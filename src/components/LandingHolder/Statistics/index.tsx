import React, { useEffect, useState } from "react";
import { getApi } from "../../../core/api/api";
import iconCarrier1 from "./../../../assets/svg/Landing/iconCarrier-1.svg";
import iconCarrier2 from "./../../../assets/svg/Landing/iconCarrier-2.svg";
import iconCarrier3 from "./../../../assets/svg/Landing/iconCarrier-3.svg";
import iconCarrier0 from "./../../../assets/svg/Landing/iconCarrier.svg";

interface StatisticsType {
  newsCount: number;
  courseCount: number;
  studentCount: number;
  teacherCount: number;
}

interface ApiResponse {
  data: Partial<StatisticsType>;
}

const initialStatistics: StatisticsType = {
  newsCount: 0,
  courseCount: 0,
  studentCount: 0,
  teacherCount: 0,
};

const Statistics: React.FC = () => {
  const [statistics, setStatistics] =
    useState<StatisticsType>(initialStatistics);

  useEffect(() => {
    const getStatistics = async () => {
      try {
        const path = "/Home/LandingReport";
        const response = (await getApi({ path })) as ApiResponse;

        if (response?.data) {
          setStatistics({
            ...initialStatistics,
            ...response.data,
          });
        }
      } catch (error) {
        console.error("LandingReport error:", error);
      }
    };

    getStatistics();
  }, []);

  const statisticsItems = [
    {
      icon: iconCarrier1,
      title: "مقاله آموزشی",
      value: statistics.newsCount,
    },
    {
      icon: iconCarrier0,
      title: "دوره آموزشی",
      value: statistics.courseCount,
    },
    {
      icon: iconCarrier3,
      title: "دانشجو",
      value: statistics.studentCount,
    },
    {
      icon: iconCarrier2,
      title: "اساتید حرفه ای",
      value: statistics.teacherCount,
    },
  ];

  return (
    <section dir="rtl" className="mx-4 my-10 lg:mx-16">
      <div className="grid grid-cols-2 gap-4 rounded-3xl bg-BgGreen px-4 py-6 dark:bg-gray-800 md:grid-cols-4 md:px-6 lg:gap-6">
        {statisticsItems.map((item) => (
          <div
            key={item.title}
            className="flex flex-col items-center text-center"
          >
            <img
              src={item.icon}
              alt={item.title}
              className="h-14 w-14 object-contain"
            />
            <p className="mt-3 text-sm text-slate-700 dark:text-white lg:text-xl">
              {item.title}
            </p>
            <p className="mt-2 text-xl font-medium text-slate-700 dark:text-white lg:text-2xl">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export { Statistics };
