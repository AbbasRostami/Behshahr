import { useAtomValue } from "jotai";
import { profileAtom } from "../../../context/jotai/ProfileProvider";
import introImg from "./../../../assets/introImg.svg";

export default function EcommerceMetrics() {
  const data = useAtomValue(profileAtom);

  return (
    <div className="flex flex-col rtl h-full w-full items-center shadow-xl bg-white border  border-gray-200 dark:hover:bg-gray-700/80 transition-all duration-300  rounded-2xl md:flex-col  hover:bg-gray-100  dark:border-gray-800 dark:bg-gray-900 ">
      <img
        className="object-cover w-full rounded-t-lg h-65 md:h-auto md:w-50 md:rounded-none md:rounded-s-lg"
        src={introImg}
        alt="خوش آمدید"
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <p className="mb-3 text-2xl font-extrabold tracking-wide text-gray-900 dark:text-white">
          {`سلام ${data?.fName ?? "دوست"} عزیز 👋`}
        </p>
        <p className="mb-4 text-md font-medium text-gray-700 leading-relaxed dark:text-gray-400 ">
          از دیدن شما در پنل کاربری‌مون خوشحالیم! 🎉{" "}
          <span className="font-semibold text-indigo-600">
            با تکمیل پروفایل‌تون
          </span>
          ، تجربه‌ای کامل‌تر و حرفه‌ای‌تر از خدمات ما خواهید داشت. با ما همراه
          باشید و از امکانات ویژه بهره‌مند شوید. 🚀
        </p>
      </div>
    </div>
  );
}
