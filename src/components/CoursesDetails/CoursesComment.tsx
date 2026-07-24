import { Field, Form, Formik } from "formik";
import moment from "jalali-moment";
import React, { useCallback, useEffect, useState } from "react";
import { BiDislike, BiLike } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { MdReply } from "react-icons/md";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { deleteApi, getApi, postApi } from "../../core/api/api";
import {
  ActionResponse,
  CommentsApiResponse,
  CourseCommentType,
} from "../../types/courseDetails";
import noimage from "./../../assets/noimage.png";

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
        : "border-2 border-[#A4F6DE] bg-white text-gray-600 hover:bg-green-50 dark:border-green-800 dark:bg-gray-800 dark:text-white"
    }`}
  >
    {label}
  </button>
);

interface CommentCardProps {
  comment: CourseCommentType;
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
  const formattedDate = moment(comment.insertDate)
    .locale("fa")
    .format("jYYYY/jMM/jDD");
  const hasAvatar = comment.pictureAddress?.trim();

  return (
    <div
      className={`rounded-2xl bg-white p-5 shadow-sm dark:bg-gray-700 ${
        isLoading ? "pointer-events-none opacity-60" : ""
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          {hasAvatar ? (
            <img
              src={comment.pictureAddress}
              alt={comment.author}
              className="h-10 w-10 rounded-full object-cover"
              onError={(e) => {
                e.currentTarget.src = noimage;
              }}
            />
          ) : (
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">
              <FaUser size={16} />
            </div>
          )}
          <div>
            <h4 className="text-sm font-bold text-[#1A1E21] dark:text-white">
              {comment.author || "ناشناس"}
            </h4>
            <span className="text-xs text-gray-400">{formattedDate}</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => onLike(comment.id)}
            className="flex flex-col items-center gap-1 transition hover:scale-110"
          >
            <BiLike
              size={20}
              className={
                comment.currentUserIsLike ? "text-green-600" : "text-gray-400"
              }
            />
            <span className="text-xs text-gray-500 dark:text-gray-300">
              {comment.likeCount}
            </span>
          </button>

          <button
            onClick={() => onDislike(comment.id)}
            className="flex flex-col items-center gap-1 transition hover:scale-110"
          >
            <BiDislike
              size={20}
              className={
                comment.currentUserIsDissLike ? "text-red-500" : "text-gray-400"
              }
            />
            <span className="text-xs text-gray-500 dark:text-gray-300">
              {comment.disslikeCount}
            </span>
          </button>

          {typeof comment.acceptReplysCount === "number" && (
            <div className="flex flex-col items-center gap-1">
              <MdReply size={20} className="text-gray-400" />
              <span className="text-xs text-gray-500 dark:text-gray-300">
                {comment.acceptReplysCount}
              </span>
            </div>
          )}
        </div>
      </div>

      <div className="mt-3 border-t border-green-50 pt-3 dark:border-gray-600">
        <p className="text-xs font-semibold text-green-800 dark:text-green-400">
          {comment.title}
        </p>
        <p className="mt-2 min-h-[50px] text-sm leading-7 text-gray-700 dark:text-gray-200">
          {comment.describe}
        </p>
      </div>

      <div className="mt-3 flex gap-4 text-xs text-[#158B68]">
        <button className="transition hover:text-green-800">پاسخ دادن</button>
        <button className="transition hover:text-green-800">پاسخ‌ها</button>
      </div>
    </div>
  );
};

const CoursesComment: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [comments, setComments] = useState<CourseCommentType[]>([]);
  const [activeTab, setActiveTab] = useState<"form" | "comments">("form");
  const [actionLoading, setActionLoading] = useState<string | null>(null);
  const [submitLoading, setSubmitLoading] = useState(false);

  const fetchComments = useCallback(async () => {
    if (!id) return;
    try {
      const path = `/Course/GetCourseCommnets/${id}`;
      const response = (await getApi({ path })) as CommentsApiResponse;
      if (Array.isArray(response?.data)) {
        setComments(response.data);
      }
    } catch {}
  }, [id]);

  useEffect(() => {
    fetchComments();
  }, [fetchComments]);

  const handleLike = async (commentId: string) => {
    try {
      setActionLoading(commentId);
      const path = `/Course/AddCourseCommentLike?CourseCommandId=${commentId}`;
      const response = (await postApi({ path, body: {} })) as ActionResponse;
      if (response?.data?.success) {
        toast.success("لایک ثبت شد.");
        fetchComments();
      } else {
        toast.info(response?.data?.message || "عملیات انجام نشد.");
      }
    } catch {
      toast.error("خطا در ثبت لایک.");
    } finally {
      setActionLoading(null);
    }
  };

  const handleDislike = async (commentId: string) => {
    try {
      setActionLoading(commentId);
      const path = `/Course/AddCourseCommentDissLike?CourseCommandId=${commentId}`;
      const response = (await deleteApi({ path, body: {} })) as ActionResponse;
      if (response?.data?.success) {
        toast.success("دیسلایک ثبت شد.");
        fetchComments();
      } else {
        toast.info(response?.data?.message || "عملیات انجام نشد.");
      }
    } catch {
      toast.error("خطا در ثبت دیسلایک.");
    } finally {
      setActionLoading(null);
    }
  };

  const handleAddComment = async (
    values: { title: string; describe: string },
    { resetForm }: { resetForm: () => void },
  ) => {
    if (!values.title.trim() || !values.describe.trim()) {
      toast.warning("لطفاً عنوان و متن نظر را وارد کنید.");
      return;
    }

    try {
      setSubmitLoading(true);

      const formData = new FormData();
      formData.append("CourseId", id || "");
      formData.append("Title", values.title);
      formData.append("Describe", values.describe);

      const path = "/Course/AddCommentCourse";
      const body = formData;
      const response = (await postApi({ path, body })) as ActionResponse;

      if (response?.data?.success) {
        toast.success(response.data.message || "نظر ثبت شد.");
        resetForm();
        setActiveTab("comments");
        fetchComments();
      } else {
        toast.error(response?.data?.message || "خطا در ثبت نظر.");
      }
    } catch {
      toast.error("خطایی در ارسال نظر رخ داد.");
    } finally {
      setSubmitLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <TabButton
          label="ثبت نظر"
          active={activeTab === "form"}
          onClick={() => setActiveTab("form")}
        />
        <TabButton
          label={`نظرات (${comments.length})`}
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
                onLike={handleLike}
                onDislike={handleDislike}
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
        <Formik
          initialValues={{ title: "", describe: "" }}
          onSubmit={handleAddComment}
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
              disabled={submitLoading}
              className="h-12 w-full rounded-xl bg-[#A4F6DE] text-sm font-medium text-[#1A1E21] transition hover:bg-green-200 disabled:opacity-50 dark:bg-green-900/40 dark:text-white"
            >
              {submitLoading ? "در حال ارسال..." : "ثبت نظر"}
            </button>
          </Form>
        </Formik>
      )}
    </div>
  );
};

export default CoursesComment;
