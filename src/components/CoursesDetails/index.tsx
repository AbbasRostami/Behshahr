import { useCallback, useEffect, useState } from "react";
import { BiDislike, BiLike } from "react-icons/bi";
import { FaRegStar } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { getApi, postApi } from "../../core/api/api";
import {
  ActionResponse,
  CourseDetailsType,
  DetailsApiResponse,
} from "../../types/courseDetails";
import noimage from "./../../assets/noimage.png";
import CoursesComment from "./CoursesComment";
import LeftDetails from "./LeftDetails";

const getCourseDescription = (details: CourseDetailsType) => {
  const desc = details.describe || "";
  try {
    const parsed = JSON.parse(desc);
    if (Array.isArray(parsed?.blocks)) {
      return (
        parsed.blocks
          .map((b: any) => b?.data?.text || "")
          .filter(Boolean)
          .join("\n")
          .replace(/<[^>]*>/g, " ")
          .trim() || "توضیحی ثبت نشده."
      );
    }
  } catch {}
  return desc.replace(/<[^>]*>/g, " ").trim() || "توضیحی ثبت نشده.";
};

const CoursesDetailsForm = () => {
  const { id } = useParams<{ id: string }>();
  const [details, setDetails] = useState<CourseDetailsType | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchDetails = useCallback(async () => {
    if (!id) return;
    try {
      setLoading(true);
      const path = `/Home/GetCourseDetails?CourseId=${id}`;
      const response = (await getApi({ path })) as DetailsApiResponse;
      if (response?.data) {
        setDetails(response.data);
      }
    } catch {
      toast.error("خطا در دریافت جزئیات دوره.");
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchDetails();
  }, [fetchDetails]);

  const handleAction = async (path: string, msg: string) => {
    if (!localStorage.getItem("token")) {
      toast.info("ابتدا وارد حساب کاربری شوید.");
      return;
    }
    try {
      const response = (await postApi({ path })) as ActionResponse;
      if (response?.data?.success) {
        toast.success(msg);
        fetchDetails();
      } else {
        toast.info(response?.data?.message || "عملیات انجام نشد.");
      }
    } catch {
      toast.error("خطا در انجام عملیات.");
    }
  };

  const imageSrc =
    details?.tumbImageAddress?.trim() ||
    details?.imageAddress?.trim() ||
    noimage;

  const description = details ? getCourseDescription(details) : "";

  if (loading) {
    return (
      <section dir="rtl" className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-6 lg:flex-row-reverse">
          <div className="flex-1 animate-pulse space-y-6 rounded-2xl bg-[#FBF6F6] p-6 dark:bg-gray-800">
            <div className="h-[300px] w-full rounded-2xl bg-gray-200 dark:bg-gray-700" />
            <div className="h-8 w-2/3 rounded bg-gray-200 dark:bg-gray-700" />
            <div className="h-4 w-full rounded bg-gray-200 dark:bg-gray-700" />
            <div className="h-4 w-5/6 rounded bg-gray-200 dark:bg-gray-700" />
          </div>
          <div className="w-full animate-pulse space-y-4 rounded-2xl bg-[#FBF6F6] p-6 dark:bg-gray-800 lg:w-[300px]">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="h-6 w-full rounded bg-gray-200 dark:bg-gray-700"
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (!details) {
    return (
      <section dir="rtl" className="mx-auto max-w-7xl px-4 py-10 text-center">
        <div className="rounded-2xl bg-[#FBF6F6] p-10 dark:bg-gray-800">
          <p className="text-gray-500 dark:text-gray-400">دوره‌ای یافت نشد.</p>
        </div>
      </section>
    );
  }

  return (
    <section dir="rtl" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-6 lg:flex-row-reverse">
        <div className="flex-1 flex-row-reverse space-y-6">
          <div className="overflow-hidden rounded-2xl bg-[#FBF6F6] dark:bg-gray-800">
            <div className="overflow-hidden">
              <img
                src={imageSrc}
                alt={details.title}
                className="h-[250px] w-full object-cover sm:h-[350px] lg:h-[400px]"
                onError={(e) => {
                  e.currentTarget.src = noimage;
                }}
              />
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm dark:bg-gray-700 sm:p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <h1 className="text-xl font-bold text-[#1A1E21] dark:text-white sm:text-2xl">
                  {details.title}
                </h1>

                <div className="flex items-center gap-4">
                  <button
                    onClick={() =>
                      handleAction(
                        `/Course/AddCourseLike?CourseId=${id}`,
                        "لایک ثبت شد.",
                      )
                    }
                    className={`transition hover:scale-110 ${
                      details.userIsLiked
                        ? "text-green-600"
                        : "text-gray-400 hover:text-green-500"
                    }`}
                  >
                    <BiLike size={26} />
                  </button>
                  <button
                    onClick={() =>
                      handleAction(
                        `/Course/AddCourseDissLike?CourseId=${id}`,
                        "دیسلایک ثبت شد.",
                      )
                    }
                    className={`transition hover:scale-110 ${
                      details.currentUserDissLike
                        ? "text-red-500"
                        : "text-gray-400 hover:text-red-400"
                    }`}
                  >
                    <BiDislike size={26} />
                  </button>
                  <button
                    onClick={() =>
                      handleAction(
                        `/Course/SetCourseRating?CourseId=${id}`,
                        "امتیاز ثبت شد.",
                      )
                    }
                    className={`transition hover:scale-110 ${
                      details.currentUserSetRate
                        ? "text-yellow-500"
                        : "text-gray-400 hover:text-yellow-400"
                    }`}
                  >
                    <FaRegStar size={24} />
                  </button>
                </div>
              </div>

              <div className="mt-6 space-y-4 border-t border-green-100 pt-6 dark:border-gray-600">
                <p className="whitespace-pre-line text-sm leading-8 text-gray-700 dark:text-gray-200">
                  {description}
                </p>

                {details.miniDescribe && (
                  <div>
                    <h3 className="text-sm font-bold text-green-800 dark:text-green-400">
                      توضیح کوتاه
                    </h3>
                    <p className="mt-1 text-sm leading-7 text-gray-600 dark:text-gray-300">
                      {details.miniDescribe}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <CoursesComment />
        </div>

        <LeftDetails details={details} />
      </div>
    </section>
  );
};

export { CoursesDetailsForm };
