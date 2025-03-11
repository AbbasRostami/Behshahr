import moment from "jalali-moment";
import React from "react";
import { ApiResponse } from ".";
import { CourseDetailsType } from ".";
import { toast } from "react-toastify";
import { postApi } from "../../core/api/api";

interface LeftDetailsProps {
  details: CourseDetailsType | undefined;
}
const LeftDetails = ({ details }: LeftDetailsProps) => {

    console.log("sfjjkdshbfjkkdl", details);
    
  const addReserve = async (id: number) => {
    console.log(id);

    const body = {
      courseId: id,
    };
    const path = `/CourseReserve/ReserveAdd`;

    const response = (await postApi({ path, body })) as ApiResponse;
    if (response.data.success) {
      toast.success("دوره شما با موفقیت رزرو شد.");
    } else {
      toast.error("این کورس یکبار رزو شده و نمیتواند دوباره رزرو شود.");
    }
  };

  return (
    <div>
      <div className="min-h-screen w-full bg-[#FBF6F6] dark:bg-gray-800 rounded-md flex justify-center p-6 rtl">
        <div className="flex flex-col w-full min-w-64 gap-6">
          {" "}
          <div className="flex flex-col  ... bg-white  dark:bg-gray-700 dark:text-white p-4 gap-2 rounded-md  text-[#12926C]">
            <p>
              مدرس دوره :{" "}
              <span className="text-[#22445D]">{details?.teacherName}</span>{" "}
            </p>
            <p>
              هزینه تمام دوره :{" "}
              <span className="text-[#22445D]">{details?.cost}</span>{" "}
            </p>
            <p>
              تکنولوژی دوره :{" "}
              <span className="text-[#22445D]">{details?.techs}</span>{" "}
            </p>
            <p>
              سطح دوره :{" "}
              <span className="text-[#22445D]">{details?.courseLevelName}</span>
            </p>
            <p>
              ظرفیت دوره :{" "}
              <span className="text-[#22445D]">{details?.capacity}</span>{" "}
            </p>
            <p>
              وضعیت دوره :{" "}
              <span className="text-[#22445D]">
                {details?.courseStatusName}
              </span>
            </p>
          </div>
          <div className="bg-white  ...  dark:bg-gray-700 dark:text-white p-4 space-y-2 rounded-md  text-[#12926C]">
            <p>
              مدت زمان :{" "}
              <span className="text-[#22445D]">{details?.commentCount}</span>
            </p>
            <p>
              تعداد ویدیوها :{" "}
              <span className="text-[#22445D]">{details?.capacity}</span>
            </p>
            <p>
              تعداد نظرات :{" "}
              <span className="text-[#22445D]">{details?.commentCount}</span>
            </p>
            <p>
              امتیاز دوره :{" "}
              <span className="text-[#22445D]">
                {details?.currentRegistrants}
              </span>
            </p>
          </div>
          <div className="bg-white  ...  dark:bg-gray-700 dark:text-white p-4 space-y-2 rounded-md  text-[#12926C]">
            <p>
              تاریخ بروزرسانی :
              <span className="text-[#22445D]">
                {" "}
                {moment(details?.insertDate).locale("fa").format("YYYY/MM/DD")}
              </span>
            </p>
            <p>
              شروع دوره:{" "}
              <span className="text-[#22445D]">
                {" "}
                {moment(details?.startTime).locale("fa").format("YYYY/MM/DD")}
              </span>
            </p>
            <p>
              پایان دوره :{" "}
              <span className="text-[#22445D]">
                {moment(details?.endTime).locale("fa").format("YYYY/MM/DD")}
              </span>
            </p>
          </div>
          <div className="md:col-span-2">
            <button
              onClick={() => details?.courseId && addReserve(details.courseId)}
              className="mt-3 transition ease-in-out delay-150 dark:hover:bg-green-300 hover:-translate-y-1 hover:scale-110  duration-300 ... w-full bg-[#5BE1B9] dark:bg-gray-500 dark:text-white text-black text-md py-3 rounded-md shadow-lg text-center"
            >
              رزرو دوره
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftDetails;
