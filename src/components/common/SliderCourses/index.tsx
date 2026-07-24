import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { getApi, postApi } from "../../../core/api/api";
import person from "./../../../assets/svg/download.png";
import courses1 from "./../../../assets/svg/Landing/courses1.svg";
import dislike from "./../../../assets/svg/Landing/CoursesDisLike.svg";
import favorite from "./../../../assets/svg/Landing/CoursesFavo.svg";
import like from "./../../../assets/svg/Landing/CoursesLike.svg";
import starRating from "./../../../assets/svg/Landing/StarRating.svg";

interface CourseRate {
  avg?: number;
  count?: number;
}

interface CoursesType {
  courseId: string;
  title: string;
  describe: string;
  miniDescribe?: string;
  teacherName: string;
  currentRegistrants: number;
  cost: number;
  likeCount: number;
  dissLikeCount: number;
  statusName?: string;
  active?: boolean;
  isDelete?: boolean;
  capacity?: number;
  courseRate?: CourseRate;
}

interface CoursesResponse {
  data?: {
    courseFilterDtos?: CoursesType[];
    success?: boolean;
  };
  success?: boolean;
  message?: string;
}

const fallbackDescription = "توضیحی برای این دوره ثبت نشده است.";

const toFaNumber = (value?: number) => {
  if (typeof value !== "number") return "۰";
  return value.toLocaleString("fa-IR");
};

const formatPrice = (value?: number) => {
  if (typeof value !== "number") return "رایگان";
  return `${value.toLocaleString("fa-IR")} تومان`;
};

const getCourseDescription = (value?: string) => {
  if (!value?.trim()) return fallbackDescription;

  try {
    const parsed = JSON.parse(value);

    if (Array.isArray(parsed?.blocks)) {
      const text = parsed.blocks
        .map((block: any) => {
          if (typeof block?.data?.text === "string") {
            return block.data.text;
          }

          if (Array.isArray(block?.data?.items)) {
            return block.data.items.join(" - ");
          }

          return "";
        })
        .filter(Boolean)
        .join(" ");

      const cleanedText = text
        .replace(/<[^>]*>/g, " ")
        .replace(/\s+/g, " ")
        .trim();
      return cleanedText || fallbackDescription;
    }
  } catch {}

  const cleanedText = value
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return cleanedText || fallbackDescription;
};

const LoadingCard = () => {
  return (
    <div className="rounded-[1.5rem] bg-[#FBF6F6] p-5 shadow-[9px_9px_12px_3px_rgba(0,_0,_0,_0.08)] dark:bg-gray-800">
      <div className="h-12 w-12 rounded-full bg-gray-200 dark:bg-gray-700" />
      <div className="mt-4 h-6 w-3/4 rounded bg-gray-200 dark:bg-gray-700" />
      <div className="mt-3 h-4 w-full rounded bg-gray-200 dark:bg-gray-700" />
      <div className="mt-2 h-4 w-5/6 rounded bg-gray-200 dark:bg-gray-700" />
      <div className="mt-6 h-10 w-full rounded-xl bg-gray-200 dark:bg-gray-700" />
    </div>
  );
};

interface CourseCardProps {
  item: CoursesType;
  reserveLoadingId: string | null;
  onReserve: (id: string) => void;
}

const CourseCard = ({ item, reserveLoadingId, onReserve }: CourseCardProps) => {
  const description =
    item.miniDescribe?.trim() || getCourseDescription(item.describe);

  const detailsPath = localStorage.getItem("token")
    ? `/courses-details/${item.courseId}`
    : "/login";

  const statisticsItems = [
    {
      icon: like,
      alt: "تعداد لایک",
      value: item.likeCount,
    },
    {
      icon: dislike,
      alt: "تعداد دیسلایک",
      value: item.dissLikeCount,
    },
    {
      icon: favorite,
      alt: "تعداد ثبت نام",
      value: item.currentRegistrants,
    },
  ];

  return (
    <div className="relative  mx-auto mt-10 flex justify-center h-full min-h-[350px] w-full max-w-[360px] flex-col rounded-[1.5rem] bg-[#FBF6F6] p-5 shadow-[9px_9px_12px_3px_rgba(0,_0,_0,_0.1)] transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-gray-800 sm:p-6 lg:mt-14 lg:min-h-[450px]">
      <div className="absolute left-1/2 top-[-60px] hidden -translate-x-1/2 lg:block">
        <img src={courses1} alt="دوره آموزشی" loading="lazy" />
      </div>

      <div className="mt-1 flex items-start justify-between gap-3 lg:mt-8">
        <div className="flex items-center gap-3">
          {statisticsItems.map((stat) => (
            <div
              key={stat.alt}
              className="flex flex-col items-center text-center text-[11px] text-[#22445D] dark:text-white sm:text-xs"
            >
              <img
                src={stat.icon}
                alt={stat.alt}
                className="h-5 w-5 object-contain"
                loading="lazy"
              />
              <p className="mt-1">{toFaNumber(stat.value)}</p>
            </div>
          ))}
        </div>

        <span className="rounded-lg bg-[#BFF4E4] px-3 py-2 text-xs text-[#12926C] sm:text-sm">
          {item.statusName || "درحال برگزاری"}
        </span>
      </div>

      <h3 className="mt-4 h-[56px] overflow-hidden break-words text-right text-base leading-7 text-[#1A1E21] dark:text-white sm:text-lg lg:h-[64px] lg:text-xl">
        {item.title}
      </h3>

      <div className="mt-4 flex items-center justify-between gap-3 dark:text-white">
        <div className="flex items-center gap-2">
          <img src={starRating} alt="امتیاز دوره" className="h-5 w-5" />
          <p className="text-sm">{toFaNumber(item.courseRate?.avg ?? 0)}</p>
        </div>

        <div className="flex min-w-0 items-center gap-2">
          <img
            className="h-10 w-10 rounded-full object-cover lg:h-12 lg:w-12"
            src={person}
            alt={item.teacherName || "استاد دوره"}
            loading="lazy"
          />
          <p className="truncate text-xs dark:text-white sm:text-sm lg:text-base">
            {item.teacherName || "استاد دوره"}
          </p>
        </div>
      </div>

      <p className="mt-3 text-right text-xs text-[#41A789] dark:text-green-300">
        {toFaNumber(item.currentRegistrants)} ثبت‌نامی
        {typeof item.capacity === "number"
          ? ` از ${toFaNumber(item.capacity)} نفر`
          : ""}
      </p>

      <p className="mt-4 h-[78px] overflow-hidden break-words text-right text-xs leading-6 text-[#6D6767] dark:text-white sm:text-sm">
        {description}
      </p>

      <div className="mt-5 border-t border-green-100 dark:border-gray-700" />

      <div className="mt-5 flex items-center justify-between gap-2 dark:text-white">
        <p className="text-sm">هزینه تمام دوره:</p>
        <p className="text-sm font-medium text-[#12926C] dark:text-green-400">
          {formatPrice(item.cost)}
        </p>
      </div>

      <div className="mt-4 flex flex-col gap-3 sm:flex-row">
        <button
          onClick={() => onReserve(item.courseId)}
          disabled={reserveLoadingId === item.courseId}
          className="h-10 w-full rounded-xl bg-[#5BE1B9] text-sm text-[#1A1E21] transition hover:bg-[#49d2aa] disabled:cursor-not-allowed disabled:opacity-70 dark:border dark:border-green-600 dark:bg-gray-900 dark:text-white"
        >
          {reserveLoadingId === item.courseId ? "در حال رزرو..." : "رزرو دوره"}
        </button>

        <Link
          to={detailsPath}
          className="flex h-10 w-full items-center justify-center rounded-xl border border-green-600 bg-[#eeeeee] text-sm text-[#1A1E21] transition hover:bg-green-50 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
        >
          جزئیات دوره
        </Link>
      </div>
    </div>
  );
};

const CoursesSlider = () => {
  const [courses, setCourses] = useState<CoursesType[]>([]);
  const [loading, setLoading] = useState(true);
  const [reserveLoadingId, setReserveLoadingId] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const getCourses = async () => {
      try {
        setLoading(true);

        const path = "/Home/GetCoursesWithPagination";
        const response = (await getApi({ path })) as CoursesResponse;

        const courseList = response?.data?.courseFilterDtos || [];

        const validCourses = courseList.filter(
          (course) => course.active !== false && course.isDelete !== true,
        );

        if (isMounted) {
          setCourses(validCourses);
        }
      } catch (error) {
        if (isMounted) {
          toast.error("خطا در دریافت اطلاعات دوره‌ها.");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    getCourses();

    return () => {
      isMounted = false;
    };
  }, []);

  const addReserve = async (id: string) => {
    if (!localStorage.getItem("token")) {
      toast.info("ابتدا وارد حساب کاربری شوید.");
      return;
    }

    try {
      setReserveLoadingId(id);

      const path = "/CourseReserve/ReserveAdd";
      const body = { courseId: id };

      const response = (await postApi({ path, body })) as CoursesResponse;
      const isSuccess = response?.success || response?.data?.success;

      if (isSuccess) {
        toast.success("دوره شما با موفقیت رزرو شد.");
        return;
      }

      toast.error("رزرو دوره انجام نشد.");
    } catch (error) {
      toast.error("خطا در رزرو دوره.");
    } finally {
      setReserveLoadingId(null);
    }
  };

  if (loading) {
    return (
      <section dir="rtl" className="mt-16 lg:mt-24">
        <div className="text-center leading-10 dark:text-white">
          <p className="text-[28px] font-bold lg:text-[35px]">دوره های ما</p>
          <p className="leading-8 lg:leading-10">
            ساختن دنیایی بهتر، یک دوره در یک زمان
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3 lg:px-16">
          {Array.from({ length: 3 }).map((_, index) => (
            <LoadingCard key={index} />
          ))}
        </div>
      </section>
    );
  }

  if (!courses.length) {
    return (
      <section dir="rtl" className="mt-16 lg:mt-24">
        <div className="text-center leading-10 dark:text-white">
          <p className="text-[28px] font-bold lg:text-[35px]">دوره های ما</p>
          <p className="leading-8 lg:leading-10">
            ساختن دنیایی بهتر، یک دوره در یک زمان
          </p>
        </div>

        <div className="mx-4 mt-10 rounded-[1.5rem] bg-[#FBF6F6] p-8 text-center text-[#22445D] dark:bg-gray-800 dark:text-white lg:mx-16">
          در حال حاضر دوره‌ای برای نمایش وجود ندارد.
        </div>
      </section>
    );
  }

  return (
    <section dir="rtl" className="mt-16 lg:mt-24">
      <div className="text-center leading-10 dark:text-white">
        <p className="text-[28px] font-bold lg:text-[35px]">دوره های ما</p>
        <p className="leading-8 lg:leading-10">
          ساختن دنیایی بهتر، یک دوره در یک زمان
        </p>
      </div>

      <div className="mt-8 px-4 lg:px-16">
        <Swiper
          slidesPerView={1.08}
          spaceBetween={16}
          navigation
          modules={[Navigation]}
          breakpoints={{
            640: {
              slidesPerView: 1.4,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
          }}
          className="!overflow-visible !pb-4"
        >
          {courses.map((item) => (
            <SwiperSlide key={item.courseId} className="!h-auto pb-4">
              <CourseCard
                item={item}
                reserveLoadingId={reserveLoadingId}
                onReserve={addReserve}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="mt-8 flex justify-center px-4">
        <Link
          to="/courses-list"
          className="flex h-[52px] w-full max-w-[220px] items-center justify-center rounded-full bg-[#12926C] text-white transition hover:bg-[#0f7d5c] dark:bg-gray-800"
        >
          مشاهده دوره های بیشتر
        </Link>
      </div>
    </section>
  );
};

export { CoursesSlider };
