import moment from "jalali-moment";
import React from "react";
import { BiDislike, BiLike } from "react-icons/bi";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { NewsType } from "../../types/news";
import noimage from "./../../assets/noimage.png";
import star from "./../../assets/svg/Landing/StarRating.svg";

interface ArticlesCardProps {
  item: NewsType;
  onLike: (id: string) => void;
  onDislike: (id: string) => void;
  onRate: (id: string) => void;
  loading?: boolean;
}

const ArticlesCard: React.FC<ArticlesCardProps> = ({
  item,
  onLike,
  onDislike,
  onRate,
  loading,
}) => {
  const imageSrc =
    item.currentImageAddressTumb?.trim() ||
    item.currentImageAddress?.trim() ||
    item.addUserProfileImage?.trim() ||
    noimage;

  const detailsPath = localStorage.getItem("token")
    ? `/articles-details/${item.id}`
    : "/login";

  const formattedDate = moment(item?.insertDate).format("jYYYY/jMM/jDD");

  return (
    <div className="w-full">
      <div
        className={`flex h-full flex-col overflow-hidden rounded-[1.5rem] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-gray-800 ${
          loading ? "pointer-events-none opacity-60" : ""
        }`}
      >
        <div className="h-[200px] w-full overflow-hidden sm:h-[240px]">
          <img
            className="h-full w-full object-cover"
            src={imageSrc}
            alt={item.title}
            loading="lazy"
            onError={(e) => {
              e.currentTarget.src = noimage;
            }}
          />
        </div>

        <div className="flex flex-1 flex-col p-4 sm:p-5">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-4">
              <button
                onClick={() => onLike(item.id)}
                className="flex flex-col items-center gap-1 transition hover:scale-110"
                title="لایک"
              >
                <BiLike
                  size={22}
                  className={
                    item.currentUserIsLike
                      ? "text-green-600"
                      : "text-gray-400 hover:text-green-500"
                  }
                />
                <span className="text-xs text-gray-600 dark:text-gray-300">
                  {item.currentLikeCount}
                </span>
              </button>

              <button
                onClick={() => onDislike(item.id)}
                className="flex flex-col items-center gap-1 transition hover:scale-110"
                title="دیسلایک"
              >
                <BiDislike
                  size={22}
                  className={
                    item.currentUserIsDissLike
                      ? "text-red-500"
                      : "text-gray-400 hover:text-red-400"
                  }
                />
                <span className="text-xs text-gray-600 dark:text-gray-300">
                  {item.currentDissLikeCount}
                </span>
              </button>

              <button
                onClick={() => onRate(item.id)}
                className="flex flex-col items-center gap-1 transition hover:scale-110"
                title="امتیاز"
              >
                <FaRegStar
                  size={20}
                  className={
                    item.currentUserSetRate
                      ? "text-yellow-500"
                      : "text-gray-400 hover:text-yellow-400"
                  }
                />
                <span className="text-xs text-gray-600 dark:text-gray-300">
                  {item.currentRate}
                </span>
              </button>
            </div>

            <span className="max-w-[120px] truncate rounded-lg bg-[#BFF4E4] px-3 py-1.5 text-xs text-[#12926C] dark:bg-green-900/30 dark:text-green-300">
              {item.newsCatregoryName || "عمومی"}
            </span>
          </div>

          <h3 className="mt-4 line-clamp-2 text-right text-base font-bold leading-7 text-[#1A1E21] dark:text-white sm:text-lg">
            {item.title}
          </h3>

          <div className="mt-3 flex items-center justify-between text-sm dark:text-white">
            <div className="flex items-center gap-1.5">
              <img src={star} alt="امتیاز" className="h-4 w-4" />
              <span>{item.currentRate}</span>
            </div>
            <span className="truncate text-xs text-gray-500 dark:text-gray-400">
              {item.addUserFullName || "ناشناس"}
            </span>
          </div>

          <p className="mt-3 line-clamp-2 text-right text-xs leading-6 text-[#6D6767] dark:text-gray-300 sm:text-sm">
            {item.miniDescribe || "توضیحی ثبت نشده است."}
          </p>

          <p className="mt-3 text-right text-xs text-gray-400">
            تاریخ انتشار:{" "}
            <span className="text-gray-600 dark:text-gray-300">
              {formattedDate}
            </span>
          </p>

          <div className="mt-4 border-t border-green-100 pt-4 dark:border-gray-700">
            <Link
              to={detailsPath}
              className="block text-center text-sm text-[#158B68] transition hover:text-green-700 dark:text-green-400"
            >
              مشاهده جزئیات
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ArticlesCard };
