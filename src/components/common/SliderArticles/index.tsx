import { useEffect } from "react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNewsStore } from "../../../context/zustand/NewsProvider";
import noimage from "./../../../assets/noimage.png";
import dislike from "./../../../assets/svg/Landing/CoursesDisLike.svg";
import favorite from "./../../../assets/svg/Landing/CoursesFavo.svg";
import like from "./../../../assets/svg/Landing/CoursesLike.svg";
import starRating from "./../../../assets/svg/Landing/StarRating.svg";

interface NewsRate {
  avg?: number;
  count?: number;
}

interface NewsItem {
  id: string;
  title: string;
  miniDescribe?: string;
  newsCatregoryName?: string;
  addUserFullName?: string;
  addUserProfileImage?: string;
  currentImageAddress?: string;
  currentImageAddressTumb?: string;
  currentLikeCount?: number;
  currentDissLikeCount?: number;
  currentRate?: number;
  currentView?: number;
  active?: boolean;
  newsRate?: NewsRate;
}

const toFaNumber = (value?: number) => {
  if (typeof value !== "number") return "۰";
  return value.toLocaleString("fa-IR");
};

const normalizeText = (value?: string, fallback = "") => {
  const text = value?.replace(/\s+/g, " ").trim();

  if (!text || text === "<string>") {
    return fallback;
  }

  return text;
};

const getNewsRate = (item: NewsItem) => {
  return item.currentRate ?? item.newsRate?.avg ?? 0;
};

const getNewsImage = (item: NewsItem) => {
  return (
    item.currentImageAddressTumb?.trim() ||
    item.currentImageAddress?.trim() ||
    noimage
  );
};

const LoadingCard = () => {
  return (
    <div className="overflow-hidden rounded-[1.5rem] bg-[#FBF6F6] shadow-[9px_9px_12px_3px_rgba(0,_0,_0,_0.08)] dark:bg-gray-800">
      <div className="h-[220px] w-full animate-pulse bg-gray-200 dark:bg-gray-700" />
      <div className="p-5 sm:p-6">
        <div className="mb-4 flex items-center justify-between gap-3">
          <div className="flex gap-3">
            <div className="h-10 w-10 animate-pulse rounded bg-gray-200 dark:bg-gray-700" />
            <div className="h-10 w-10 animate-pulse rounded bg-gray-200 dark:bg-gray-700" />
            <div className="h-10 w-10 animate-pulse rounded bg-gray-200 dark:bg-gray-700" />
          </div>
          <div className="h-8 w-20 animate-pulse rounded bg-gray-200 dark:bg-gray-700" />
        </div>

        <div className="h-6 w-3/4 animate-pulse rounded bg-gray-200 dark:bg-gray-700" />
        <div className="mt-4 h-4 w-full animate-pulse rounded bg-gray-200 dark:bg-gray-700" />
        <div className="mt-2 h-4 w-5/6 animate-pulse rounded bg-gray-200 dark:bg-gray-700" />

        <div className="mt-6 h-10 w-full animate-pulse rounded-xl bg-gray-200 dark:bg-gray-700" />
      </div>
    </div>
  );
};

const SliderArticles = () => {
  const { fetchNews, News, loading } = useNewsStore();

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  const newsList = ((News || []) as NewsItem[]).filter(
    (item) => item.active !== false,
  );

  if (loading) {
    return (
      <section dir="rtl" className="mt-14">
        <div className="text-center leading-10 dark:text-white">
          <p className="text-[28px] font-bold lg:text-[35px]">اخبار و مقالات</p>
          <p className="leading-8 lg:leading-10">
            ساختن دنیایی بهتر، یک مقاله در یک زمان
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

  if (!newsList.length) {
    return (
      <section dir="rtl" className="mt-14">
        <div className="text-center leading-10 dark:text-white">
          <p className="text-[28px] font-bold lg:text-[35px]">اخبار و مقالات</p>
          <p className="leading-8 lg:leading-10">
            ساختن دنیایی بهتر، یک مقاله در یک زمان
          </p>
        </div>

        <div className="mx-4 mt-10 rounded-[1.5rem] bg-[#FBF6F6] p-8 text-center text-[#22445D] dark:bg-gray-800 dark:text-white lg:mx-16">
          در حال حاضر مقاله‌ای برای نمایش وجود ندارد.
        </div>
      </section>
    );
  }

  return (
    <section dir="rtl" className="mt-14">
      <div className="text-center leading-10 dark:text-white">
        <p className="text-[28px] font-bold lg:text-[35px]">اخبار و مقالات</p>
        <p className="leading-8 lg:leading-10">
          ساختن دنیایی بهتر، یک مقاله در یک زمان
        </p>
      </div>

      <div className="mt-8 px-4 lg:px-16">
        <Swiper
          slidesPerView={1.08}
          spaceBetween={16}
          navigation
          modules={[Navigation]}
          watchOverflow
          breakpoints={{
            640: {
              slidesPerView: 1.35,
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
          className="mySwiper !overflow-visible !pb-4"
        >
          {newsList.map((item) => {
            const title = normalizeText(item.title, "بدون عنوان");
            const description = normalizeText(
              item.miniDescribe,
              "توضیحی برای این مقاله ثبت نشده است.",
            );
            const category = normalizeText(item.newsCatregoryName, "عمومی");
            const author = normalizeText(item.addUserFullName, "ناشناس");
            const imageSrc = getNewsImage(item);
            const rate = getNewsRate(item);

            return (
              <SwiperSlide key={item.id} className="!h-auto pb-4">
                <div className="mx-auto mt-10 flex h-full min-h-[430px] w-full max-w-[370px] flex-col overflow-hidden rounded-[1.5rem] bg-[#FBF6F6] shadow-[9px_9px_12px_3px_rgba(0,_0,_0,_0.1)] transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-gray-800">
                  <div className="h-[220px] w-full overflow-hidden">
                    <img
                      className="h-full w-full object-cover"
                      src={imageSrc}
                      alt={title}
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.src = noimage;
                      }}
                    />
                  </div>

                  <div className="flex justify-center flex-1 flex-col p-5 sm:p-6">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="flex flex-col items-center text-center text-[11px] text-black dark:text-white sm:text-xs">
                          <img
                            src={like}
                            alt="لایک"
                            className="h-5 w-5 object-contain"
                          />
                          <p className="mt-1">
                            {toFaNumber(item.currentLikeCount)}
                          </p>
                        </div>

                        <div className="flex flex-col items-center text-center text-[11px] text-black dark:text-white sm:text-xs">
                          <img
                            src={dislike}
                            alt="دیسلایک"
                            className="h-5 w-5 object-contain"
                          />
                          <p className="mt-1">
                            {toFaNumber(item.currentDissLikeCount)}
                          </p>
                        </div>

                        <div className="flex flex-col items-center text-center text-[11px] text-black dark:text-white sm:text-xs">
                          <img
                            src={favorite}
                            alt="بازدید"
                            className="h-5 w-5 object-contain"
                          />
                          <p className="mt-1">{toFaNumber(item.currentView)}</p>
                        </div>
                      </div>

                      <span className="max-w-[120px] truncate rounded-lg bg-[#BFF4E4] px-3 py-2 text-xs text-TextGreen">
                        {category}
                      </span>
                    </div>

                    <h3 className="mt-4 h-[56px] overflow-hidden text-right text-base leading-7 text-[#1A1E21] dark:text-white sm:text-lg">
                      {title}
                    </h3>

                    <div className="mt-4 flex items-center justify-between gap-3 dark:text-white">
                      <div className="flex items-center gap-2">
                        <img
                          src={starRating}
                          alt="امتیاز مقاله"
                          className="h-5 w-5 object-contain"
                        />
                        <p className="text-sm">{toFaNumber(rate)}</p>
                      </div>

                      <div className="flex min-w-0 items-center gap-2">
                        {item.addUserProfileImage?.trim() ? (
                          <img
                            className="h-10 w-10 rounded-full object-cover"
                            src={item.addUserProfileImage}
                            alt={author}
                            loading="lazy"
                            onError={(e) => {
                              e.currentTarget.src = noimage;
                            }}
                          />
                        ) : (
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-sm font-bold text-green-700">
                            {author.charAt(0)}
                          </div>
                        )}

                        <p className="truncate text-xs dark:text-white sm:text-sm">
                          {author}
                        </p>
                      </div>
                    </div>

                    <p className="mt-4 h-[78px] overflow-hidden text-right text-xs leading-6 text-[#6D6767] dark:text-white sm:text-sm">
                      {description}
                    </p>

                    <div className="mt-5 border-t border-green-100 dark:border-gray-700" />

                    <div>
                      <Link
                        to={
                          localStorage.getItem("token")
                            ? `/articles-details/${item.id}`
                            : "/login"
                        }
                        className="flex h-11 w-full items-center justify-center rounded-xl border border-green-600 bg-white text-sm text-[#807A7A] transition hover:bg-green-50 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
                      >
                        مشاهده جزئیات
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div className="mt-8 flex justify-center px-4">
        <Link
          to="/news-articles"
          className="flex h-[60px] w-full max-w-[220px] items-center justify-center rounded-full bg-[#12926C] text-white dark:bg-gray-800"
        >
          مشاهده مقالات بیشتر
        </Link>
      </div>
    </section>
  );
};

export { SliderArticles };

