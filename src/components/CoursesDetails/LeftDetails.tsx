import moment from "jalali-moment";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { postApi } from "../../core/api/api";
import { ActionResponse, CourseDetailsType } from "../../types/courseDetails";

interface LeftDetailsProps {
  details: CourseDetailsType;
}

interface InfoRowProps {
  label: string;
  value: string | number | undefined;
}

const InfoRow = ({ label, value }: InfoRowProps) => (
  <div className="flex items-center justify-between gap-2 text-sm">
    <span className="text-[#12926C] dark:text-green-400">{label}</span>
    <span className="text-[#22445D] dark:text-gray-200">{value || "—"}</span>
  </div>
);

const formatDate = (date?: string) => {
  if (!date) return "—";
  return moment(date).locale("fa").format("jYYYY/jMM/jDD");
};

const formatPrice = (cost?: number) => {
  if (!cost) return "رایگان";
  return `${cost.toLocaleString("fa-IR")} تومان`;
};

const LeftDetails: React.FC<LeftDetailsProps> = ({ details }) => {
  const [reserveLoading, setReserveLoading] = useState(false);

  const addReserve = async () => {
    if (!localStorage.getItem("token")) {
      toast.info("ابتدا وارد حساب کاربری شوید.");
      return;
    }

    if (details.isCourseReseve) {
      toast.warning("این دوره قبلاً رزرو شده است.");
      return;
    }

    try {
      setReserveLoading(true);
      const path = "/CourseReserve/ReserveAdd";
      const body = { courseId: details.courseId };
      const response = (await postApi({ path, body })) as ActionResponse;

      if (response?.data?.success) {
        toast.success("دوره شما با موفقیت رزرو شد.");
      } else {
        toast.error(response?.data?.message || "رزرو انجام نشد.");
      }
    } catch {
      toast.error("خطا در رزرو دوره.");
    } finally {
      setReserveLoading(false);
    }
  };

  const infoSections = [
    {
      rows: [
        { label: "مدرس دوره", value: details.teacherName },
        { label: "هزینه دوره", value: formatPrice(details.cost) },
        { label: "سطح دوره", value: details.courseLevelName },
        { label: "ظرفیت دوره", value: `${details.capacity} نفر` },
        { label: "وضعیت دوره", value: details.courseStatusName },
      ],
    },
    {
      rows: [
        { label: "تعداد ثبت‌نامی", value: details.studentCount },
        {
          label: "امتیاز دوره",
          value: details.currentRate || details.courseRate,
        },
      ],
    },
    {
      rows: [
        { label: "شروع دوره", value: formatDate(details.startTime) },
        { label: "پایان دوره", value: formatDate(details.endTime) },
        { label: "آخرین بروزرسانی", value: formatDate(details.insertDate) },
      ],
    },
  ];

  return (
    <aside className="w-full shrink-0 lg:w-[300px]">
      <div className="sticky top-6 space-y-4">
        {infoSections.map((section, idx) => (
          <div
            key={idx}
            className="space-y-3 rounded-2xl bg-white p-5 shadow-sm dark:bg-gray-700"
          >
            {section.rows.map((row) => (
              <InfoRow key={row.label} label={row.label} value={row.value} />
            ))}
          </div>
        ))}

        {details.courseTech && details.courseTech.length > 0 && (
          <div className="rounded-2xl bg-white p-5 shadow-sm dark:bg-gray-700">
            <span className="text-sm text-[#12926C] dark:text-green-400">
              تکنولوژی‌ها
            </span>
            <div className="mt-2 flex flex-wrap gap-2">
              {details.courseTech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg bg-green-50 px-3 py-1 text-xs text-green-700 dark:bg-green-900/30 dark:text-green-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {details.isExpire && (
          <div className="rounded-xl bg-red-50 p-3 text-center text-sm text-red-600 dark:bg-red-900/20 dark:text-red-400">
            این دوره منقضی شده است.
          </div>
        )}

        {details.isCourseReseve && (
          <div className="rounded-xl bg-green-50 p-3 text-center text-sm text-green-700 dark:bg-green-900/20 dark:text-green-300">
            شما قبلاً این دوره را رزرو کرده‌اید.
          </div>
        )}

        <button
          onClick={addReserve}
          disabled={
            reserveLoading || details.isCourseReseve || details.isExpire
          }
          className="h-12 w-full rounded-xl bg-[#5BE1B9] text-sm font-medium text-[#1A1E21] shadow-lg transition hover:bg-[#49d2aa] disabled:cursor-not-allowed disabled:opacity-50 dark:bg-green-800 dark:text-white dark:hover:bg-green-700"
        >
          {reserveLoading
            ? "در حال رزرو..."
            : details.isCourseReseve
              ? "رزرو شده"
              : details.isExpire
                ? "منقضی شده"
                : "رزرو دوره"}
        </button>
      </div>
    </aside>
  );
};

export default LeftDetails;
