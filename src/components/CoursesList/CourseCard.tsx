import React from "react";
import { BiDislike, BiLike } from "react-icons/bi";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CourseItem } from "../../types/coursesList";
import person from "./../../assets/download.png";
import noimage from "./../../assets/noimage.png";

interface CourseCardProps {
  item: CourseItem;
  onLike: (id: string) => void;
  onDislike: (id: string) => void;
  onRate: (id: string) => void;
  onReserve: (id: string) => void;
  actionLoading: string | null;
}

const formatPrice = (cost: number) => {
  if (!cost) return "رایگان";
  return `${cost.toLocaleString("fa-IR")} تومان`;
};

const getCourseDescription = (item: CourseItem) => {
  if (item.miniDescribe?.trim()) return item.miniDescribe;
  const desc = item.describe || "";
  try {
    const parsed = JSON.parse(desc);
    if (Array.isArray(parsed?.blocks)) {
      return (
        parsed.blocks
          .map((b: any) => b?.data?.text || "")
          .filter(Boolean)
          .join(" ")
          .replace(/<[^>]*>/g, " ")
          .trim() || "توضیحی ثبت نشده."
      );
    }
  } catch {}
  return desc.replace(/<[^>]*>/g, " ").trim() || "توضیحی ثبت نشده.";
};

const CourseCard: React.FC<CourseCardProps> = ({
  item,
  onLike,
  onDislike,
  onRate,
  onReserve,
  actionLoading,
}) => {
  const isLoading = actionLoading === item.courseId;
  const description = getCourseDescription(item);
  const detailsPath = localStorage.getItem("token")
    ? `/courses-details/${item.courseId}`
    : "/login";

  const imageSrc =
    item.tumbImageAddress?.trim() || item.imageAddress?.trim() || noimage;

  return (
    <div
      className={`flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-gray-700 ${
        isLoading ? "pointer-events-none opacity-60" : ""
      }`}
    >
      <div className="h-[180px] w-full overflow-hidden bg-green-50 dark:bg-gray-600">
        <img
          src={imageSrc}
          alt={item.title}
          className="h-full w-full object-cover"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = noimage;
          }}
        />
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <button
              onClick={() => onLike(item.courseId)}
              className="flex flex-col items-center gap-1 transition hover:scale-110"
            >
              <BiLike
                size={20}
                className={
                  item.userIsLiked ? "text-green-600" : "text-gray-400"
                }
              />
              <span className="text-xs text-gray-500 dark:text-gray-300">
                {item.likeCount}
              </span>
            </button>

            <button
              onClick={() => onDislike(item.courseId)}
              className="flex flex-col items-center gap-1 transition hover:scale-110"
            >
              <BiDislike
                size={20}
                className={
                  item.currentUserDissLike ? "text-red-500" : "text-gray-400"
                }
              />
              <span className="text-xs text-gray-500 dark:text-gray-300">
                {item.dissLikeCount}
              </span>
            </button>

            <button
              onClick={() => onRate(item.courseId)}
              className="flex flex-col items-center gap-1 transition hover:scale-110"
            >
              <FaRegStar
                size={18}
                className={
                  item.courseRate?.avg ? "text-yellow-500" : "text-gray-400"
                }
              />
              <span className="text-xs text-gray-500 dark:text-gray-300">
                {item.courseRate?.avg || 0}
              </span>
            </button>
          </div>

          <span className="max-w-[110px] truncate rounded-lg bg-[#BFF4E4] px-3 py-1.5 text-xs text-[#12926C] dark:bg-green-900/30 dark:text-green-300">
            {item.statusName || "نامشخص"}
          </span>
        </div>

        <h3 className="mt-3 line-clamp-2 text-right text-base font-bold leading-7 text-[#1A1E21] dark:text-white">
          {item.title}
        </h3>

        <div className="mt-3 flex items-center justify-between dark:text-white">
          <span className="rounded-lg bg-green-50 px-2 py-1 text-xs text-green-700 dark:bg-green-900/30 dark:text-green-300">
            {item.levelName}
          </span>

          <div className="flex items-center gap-2">
            <span className="truncate text-xs">{item.teacherName}</span>
            <img
              src={person}
              alt={item.teacherName}
              className="h-8 w-8 rounded-full object-cover"
            />
          </div>
        </div>

        <p className="mt-2 text-right text-xs text-[#41A789]">
          {item.currentRegistrants} ثبت‌نامی
          {item.capacity ? ` از ${item.capacity} نفر` : ""}
        </p>

        <p className="mt-2 line-clamp-2 text-right text-xs leading-6 text-[#6D6767] dark:text-gray-300">
          {description}
        </p>

        <div className="mt-4 border-t border-green-100 pt-3 dark:border-gray-600">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500 dark:text-gray-400">
              هزینه تمام دوره:
            </span>
            <span className="font-medium text-[#12926C] dark:text-green-400">
              {formatPrice(item.cost)}
            </span>
          </div>
        </div>

        <div className="mt-auto flex flex-col gap-2 pt-4 sm:flex-row">
          <button
            onClick={() => onReserve(item.courseId)}
            className="h-10 w-full rounded-xl bg-[#5BE1B9] text-sm text-[#1A1E21] transition hover:bg-[#49d2aa] dark:border dark:border-green-600 dark:bg-gray-900 dark:text-white"
          >
            رزرو دوره
          </button>
          <Link
            to={detailsPath}
            className="flex h-10 w-full items-center justify-center rounded-xl border border-green-600 bg-[#eee] text-sm text-[#1A1E21] transition hover:bg-green-50 dark:bg-gray-800 dark:text-white"
          >
            جزئیات دوره
          </Link>
        </div>
      </div>
    </div>
  );
};

export { CourseCard };
