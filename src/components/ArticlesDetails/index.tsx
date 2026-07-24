import { Field, Form, Formik } from "formik";
import moment from "jalali-moment";
import { useAtomValue } from "jotai";
import React, { useCallback, useEffect, useState } from "react";
import { BiDislike, BiLike } from "react-icons/bi";
import {
  FaEye,
  FaKey,
  FaRegCalendarAlt,
  FaRegStar,
  FaUser,
} from "react-icons/fa";
import { MdReply } from "react-icons/md";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

import { profileAtom } from "../../context/jotai/ProfileProvider";
import { deleteApi, getApi, postApi } from "../../core/api/api";
import {
  ActionResponse,
  CommentDto,
  NewsDetailsApiResponse,
  NewsDetailsData,
} from "../../types/articleDetails";
import { CoursesSlider } from "../common/SliderCourses";
import noimage from "./../../assets/noimage.png";

const StatItem = ({
  icon,
  value,
  onClick,
  activeColor,
  active,
}: {
  icon: React.ReactNode;
  value: number;
  onClick?: () => void;
  activeColor?: string;
  active?: boolean;
}) => (
  <button
    onClick={onClick}
    disabled={!onClick}
    className={`flex flex-col items-center gap-1 transition hover:scale-110 ${
      onClick ? "cursor-pointer" : "cursor-default"
    }`}
  >
    <span
      className={active ? activeColor || "text-green-600" : "text-gray-400"}
    >
      {icon}
    </span>
    <span className="text-xs text-gray-600 dark:text-gray-300">{value}</span>
  </button>
);

const MetaItem = ({
  icon,
  value,
}: {
  icon: React.ReactNode;
  value: string | number;
}) => (
  <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
    <span className="text-green-700 dark:text-green-400">{icon}</span>
    <span>{value}</span>
  </div>
);

const TabButton = ({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`w-1/2 rounded-xl py-3 text-sm font-medium transition sm:text-base ${
      active
        ? "bg-[#A4F6DE] text-[#1A1E21] dark:bg-green-900/40 dark:text-white"
        : "border-2 border-[#A4F6DE] bg-white text-gray-600 hover:bg-green-50 dark:border-green-800 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
    }`}
  >
    {label}
  </button>
);

interface CommentCardProps {
  comment: CommentDto;
  onLike: (id: string) => void;
  onDislike: (id: string) => void;
  actionLoading: string | null;
}

const CommentCard = ({
  comment,
  onLike,
  onDislike,
  actionLoading,
}: CommentCardProps) => {
  const isLoading = actionLoading === comment.id;
  const formattedDate = moment(comment.inserDate)
    .locale("fa")
    .format("jYYYY/jMM/jDD");

  return (
    <div
      className={`rounded-2xl bg-white p-5 shadow-sm dark:bg-gray-700 ${
        isLoading ? "pointer-events-none opacity-60" : ""
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-sm font-bold text-green-700 dark:bg-green-900/40 dark:text-green-300">
            <FaUser />
          </div>
          <div>
            <h4 className="text-sm font-bold text-[#1A1E21] dark:text-white">
              {comment.title}
            </h4>
            <span className="text-xs text-gray-400">{formattedDate}</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <StatItem
            icon={<BiLike size={20} />}
            value={comment.likeCount}
            onClick={() => onLike(comment.id)}
          />
          <StatItem
            icon={<BiDislike size={20} />}
            value={comment.dissLikeCount}
            onClick={() => onDislike(comment.id)}
          />
          <StatItem icon={<MdReply size={20} />} value={comment.replyCount} />
        </div>
      </div>

      <p className="mt-4 min-h-[60px] text-sm leading-7 text-gray-700 dark:text-gray-200">
        {comment.describe}
      </p>

      <div className="mt-3 flex gap-4 text-xs text-[#158B68]">
        <button className="transition hover:text-green-800">پاسخ دادن</button>
        <button className="transition hover:text-green-800">پاسخ‌ها</button>
      </div>
    </div>
  );
};

interface CommentFormProps {
  newsId: string;
  userId: number;
  onSubmit: (values: {
    title: string;
    describe: string;
    newsId: string;
    userId: number;
  }) => void;
  loading?: boolean;
}

const CommentForm = ({
  newsId,
  userId,
  onSubmit,
  loading,
}: CommentFormProps) => (
  <Formik
    initialValues={{
      title: "",
      describe: "",
      newsId,
      userId,
    }}
    onSubmit={(values, { resetForm }) => {
      if (!values.title.trim() || !values.describe.trim()) {
        toast.warning("لطفاً عنوان و متن نظر را وارد کنید.");
        return;
      }
      onSubmit(values);
      resetForm();
    }}
  >
    <Form className="space-y-4">
      <Field
        name="title"
        placeholder="عنوان نظر"
        className="w-full rounded-xl border-2 border-green-200 bg-[#FBF6F6] px-4 py-3 text-right text-sm outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100 dark:border-green-800 dark:bg-slate-700 dark:text-white"
      />
      <Field
        name="describe"
        as="textarea"
        rows={5}
        placeholder="متن نظر..."
        className="w-full resize-none rounded-xl border-2 border-green-200 bg-[#FBF6F6] px-4 py-3 text-right text-sm leading-7 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100 dark:border-green-800 dark:bg-slate-700 dark:text-white"
      />
      <button
        type="submit"
        disabled={loading}
        className="h-12 w-full rounded-xl bg-[#A4F6DE] text-sm font-medium text-[#1A1E21] transition hover:bg-green-200 disabled:opacity-50 dark:bg-green-900/40 dark:text-white dark:hover:bg-green-900/60"
      >
        {loading ? "در حال ارسال..." : "ثبت نظر"}
      </button>
    </Form>
  </Formik>
);

const ArticlesDetailsForm: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const profile = useAtomValue(profileAtom);

  const [details, setDetails] = useState<NewsDetailsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<"form" | "comments">("form");
  const [actionLoading, setActionLoading] = useState<string | null>(null);
  const [submitLoading, setSubmitLoading] = useState(false);

  const fetchDetails = useCallback(async () => {
    if (!id) return;
    try {
      setLoading(true);
      const path = `/News/${id}`;
      const response = (await getApi({ path })) as NewsDetailsApiResponse;
      if (response?.data) {
        setDetails(response.data);
      }
    } catch {
      toast.error("خطا در دریافت جزئیات مقاله.");
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchDetails();
  }, [fetchDetails]);

  const handleAddComment = async (values: {
    title: string;
    describe: string;
    newsId: string;
    userId: number;
  }) => {
    try {
      setSubmitLoading(true);
      const path = "/News/CreateNewsComment";
      const body = {
        title: values.title,
        describe: values.describe,
        newsId: id,
        userId: profile?.id,
      };

      const response = (await postApi({ path, body })) as ActionResponse;

      if (response?.data?.success) {
        toast.success("نظر شما با موفقیت ثبت شد.");
        setActiveTab("comments");
        fetchDetails();
      } else {
        toast.error(response?.data?.message || "خطا در ثبت نظر.");
      }
    } catch {
      toast.error("خطایی در ارسال نظر رخ داد.");
    } finally {
      setSubmitLoading(false);
    }
  };

  const handleCommentLike = async (commentId: string) => {
    try {
      setActionLoading(commentId);
      const path = `/News/CommentLike/${commentId}`;
      const response = (await getApi({ path })) as ActionResponse;

      if (response?.data?.success) {
        toast.success("لایک ثبت شد.");
        fetchDetails();
      } else {
        toast.info(response?.data?.message || "عملیات انجام نشد.");
      }
    } catch {
      toast.error("خطا در ثبت لایک.");
    } finally {
      setActionLoading(null);
    }
  };

  const handleCommentDislike = async (commentId: string) => {
    try {
      setActionLoading(commentId);
      const path = "/News/DeleteCommentLikeNews";
      const body = { deleteEntityId: commentId };
      const response = (await deleteApi({ path, body })) as ActionResponse;

      if (response?.data?.success) {
        toast.success("دیسلایک ثبت شد.");
        fetchDetails();
      } else {
        toast.info(response?.data?.message || "عملیات انجام نشد.");
      }
    } catch {
      toast.error("خطا در ثبت دیسلایک.");
    } finally {
      setActionLoading(null);
    }
  };

  const news = details?.detailsNewsDto;
  const comments = details?.commentDtos || [];

  const imageSrc =
    news?.currentImageAddressTumb?.trim() ||
    news?.currentImageAddress?.trim() ||
    noimage;

  const formattedDate = news?.insertDate
    ? moment(news.insertDate).locale("fa").format("jYYYY/jMM/jDD")
    : "";

  if (loading) {
    return (
      <section dir="rtl" className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        <div className="animate-pulse space-y-6 rounded-[2rem] bg-[#FBF6F6] p-6 dark:bg-gray-800">
          <div className="h-[300px] w-full rounded-2xl bg-gray-200 dark:bg-gray-700 sm:h-[400px]" />
          <div className="h-8 w-2/3 rounded bg-gray-200 dark:bg-gray-700" />
          <div className="h-4 w-full rounded bg-gray-200 dark:bg-gray-700" />
          <div className="h-4 w-5/6 rounded bg-gray-200 dark:bg-gray-700" />
          <div className="h-4 w-4/6 rounded bg-gray-200 dark:bg-gray-700" />
        </div>
      </section>
    );
  }

  if (!news) {
    return (
      <section dir="rtl" className="mx-auto max-w-5xl px-4 py-10 text-center">
        <div className="rounded-2xl bg-[#FBF6F6] p-10 dark:bg-gray-800">
          <p className="text-gray-500 dark:text-gray-400">مقاله‌ای یافت نشد.</p>
        </div>
      </section>
    );
  }

  return (
    <section dir="rtl" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="space-y-6 rounded-[2rem] p-4 dark:bg-gray-800 sm:p-6 lg:p-8">
        <div className="overflow-hidden rounded-2xl">
          <img
            src={imageSrc}
            alt={news.title}
            className="h-[250px] w-full object-cover sm:h-[350px] lg:h-[420px]"
            onError={(e) => {
              e.currentTarget.src = noimage;
            }}
          />
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm dark:bg-gray-700 sm:p-6">
          <h1 className="text-center text-xl font-bold text-[#1A1E21] dark:text-white sm:text-2xl lg:text-3xl">
            {news.title}
          </h1>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <MetaItem
              icon={<FaEye size={16} />}
              value={`${news.currentView} بازدید`}
            />
            <MetaItem
              icon={<FaRegCalendarAlt size={14} />}
              value={formattedDate}
            />
            <MetaItem icon={<FaKey size={14} />} value={news.keyword} />
            <MetaItem
              icon={<FaUser size={14} />}
              value={news.addUserFullName}
            />
          </div>

          <div className="mt-6 flex items-center justify-center gap-6 border-t border-green-100 pt-6 dark:border-gray-600">
            <StatItem
              icon={<BiLike size={24} />}
              value={news.currentLikeCount}
              active={news.currentLikeCount > 0}
              activeColor="text-green-600"
            />
            <StatItem
              icon={<BiDislike size={24} />}
              value={news.currentDissLikeCount}
              active={news.currentDissLikeCount > 0}
              activeColor="text-red-500"
            />
            <StatItem
              icon={<FaRegStar size={22} />}
              value={news.currentRate}
              active={news.currentRate > 0}
              activeColor="text-yellow-500"
            />
          </div>

          <div className="mt-6 space-y-4 border-t border-green-100 pt-6 dark:border-gray-600">
            <div>
              <h3 className="text-sm font-bold text-green-800 dark:text-green-400">
                توضیحات
              </h3>
              <p className="mt-2 text-sm leading-8 text-gray-700 dark:text-gray-200">
                {news.describe || "توضیحی ثبت نشده."}
              </p>
            </div>

            {news.miniDescribe && (
              <div>
                <h3 className="text-sm font-bold text-green-800 dark:text-green-400">
                  توضیح کوتاه
                </h3>
                <p className="mt-2 text-sm leading-7 text-gray-600 dark:text-gray-300">
                  {news.miniDescribe}
                </p>
              </div>
            )}

            {news.googleTitle && (
              <div>
                <h3 className="text-sm font-bold text-green-800 dark:text-green-400">
                  عنوان گوگل
                </h3>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                  {news.googleTitle}
                </p>
              </div>
            )}

            {news.googleDescribe && (
              <div>
                <h3 className="text-sm font-bold text-green-800 dark:text-green-400">
                  توضیحات گوگل
                </h3>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                  {news.googleDescribe}
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="flex gap-2 sm:gap-3">
          <TabButton
            label="ثبت نظر"
            active={activeTab === "form"}
            onClick={() => setActiveTab("form")}
          />
          <TabButton
            label={`نظرات کاربران (${comments.length})`}
            active={activeTab === "comments"}
            onClick={() => setActiveTab("comments")}
          />
        </div>

        {activeTab === "comments" ? (
          <div className="space-y-4">
            {comments.length > 0 ? (
              comments.map((comment) => (
                <CommentCard
                  key={comment.id}
                  comment={comment}
                  onLike={handleCommentLike}
                  onDislike={handleCommentDislike}
                  actionLoading={actionLoading}
                />
              ))
            ) : (
              <div className="rounded-2xl bg-white p-8 text-center text-sm text-gray-400 dark:bg-gray-700">
                هنوز نظری ثبت نشده.
              </div>
            )}
          </div>
        ) : (
          <CommentForm
            newsId={id || ""}
            userId={profile?.id || 0}
            onSubmit={handleAddComment}
            loading={submitLoading}
          />
        )}
      </div>

      <div className="!max-w-6xl overflow-hidden">
        <CoursesSlider />
      </div>
    </section>
  );
};

export { ArticlesDetailsForm };
