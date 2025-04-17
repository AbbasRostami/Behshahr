import { useEffect, useRef, useState } from "react";
import { getApi } from "../../../core/api/api";
import { Swiper, SwiperSlide } from "swiper/react";
import { CiImageOff } from "react-icons/ci";
import "swiper/css";
// import "./styles.css";
import { Autoplay } from "swiper/modules";
interface CourseType {
  teacherName: string;
  statusName: string;
  cost: string;
  tumbImageAddress: string;
  courseId: string;
  title: string;
  likeCount: number;
  typeName: string;
  classRoomName: string;
  currentPictureAddress: string;
}

interface ApiResponse {
  data: CourseType[];
}

export default function NewCoursesSlider() {
  const [datas, setDatas] = useState<CourseType[]>([]);

  const getMyCourses = async () => {
    const path = `/Home/GetCoursesTop?Count=20`;
    const response = (await getApi({ path })) as ApiResponse;
    setDatas(response?.data || []);
  };

  useEffect(() => {
    getMyCourses();
  }, []);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const fallbackRef = useRef<HTMLDivElement | null>(null);
  return (
    <div className="shadow-xl transition-all duration-300 h-full rounded-2xl bg-white/90 border hover:bg-gray-100 border-gray-200 dark:border-gray-800  dark:hover:bg-gray-700/80 dark:bg-gray-900 p-4 space-y-4">
      {/* عنوان بخش */}
      <div className="mb-4">
        <h2 className="text-lg rtl font-bold text-gray-800 dark:text-white  pb-1 border-gray-200 dark:border-gray-700">
          جدیدترین دوره‌ها
        </h2>
        <p className="text-theme-sm rtl text-gray-500 dark:text-gray-400">
          دوره‌هایی که اخیراً به آکادمی اضافه شده‌اند را مشاهده کنید
        </p>
      </div>

      {/* اسلایدر */}
      <Swiper
        className="mySwiper"
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{
          delay: 3000, // هر ۳ ثانیه اسلاید بعدی
          disableOnInteraction: false, // بعد از تعامل کاربر، ادامه بده
        }}
        modules={[Autoplay]} // فعال‌سازی ماژول
      >
        {datas?.map((item) => (
          <SwiperSlide key={item.courseId}>
            <div className="flex flex-row-reverse items-center gap-6 rtl bg-blue-100/50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow hover:shadow-xl transition-all duration-300 p-4 hover:scale-[1.01]">
              {/* تصویر کورس */}
              {item?.tumbImageAddress &&
              item.tumbImageAddress !== "Not-set" ? (
                <>
                  <img
                    ref={imgRef}
                    src={item.tumbImageAddress}
                    alt="Profile Picture"
                    className="rounded-full w-32 h-32 border-2 object-cover"
                    onError={() => {
                      imgRef.current?.classList.add("hidden");
                      fallbackRef.current?.classList.remove("hidden");
                    }}
                  />
                  <div ref={fallbackRef} className="hidden">
                    <CiImageOff className="rounded-full w-32 h-32 text-gray-400 dark:text-gray-600" />
                  </div>
                </>
              ) : (
                <CiImageOff className="rounded-full w-32 h-32 text-gray-400 dark:text-gray-600" />
              )}

              {/* اطلاعات کورس */}
              <div className="flex flex-col justify-center space-y-1 w-full">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white truncate">
                  {item.title}
                </h3>

                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                  <span className="text-indigo-500 dark:text-indigo-300">
                    👨‍🏫
                  </span>
                  مدرس: {item.teacherName}
                </div>

                <div className="flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400">
                  <span>📅</span>
                  وضعیت: {item.statusName}
                </div>

                <div className="flex items-center gap-2 text-sm text-indigo-700 dark:text-indigo-400 font-bold">
                  <span>💰</span>
                  قیمت: {Number(item.cost).toLocaleString()} تومان
                </div>

                {/* تعداد لایک‌ها */}
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                  <span>❤️</span>
                  لایک‌ها: {item.likeCount}
                </div>

                {/* نوع دوره */}
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                  <span>📚</span>
                  نوع: {item.typeName}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
