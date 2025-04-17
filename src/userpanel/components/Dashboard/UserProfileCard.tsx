import { useAtomValue } from "jotai";
import { profileAtom } from "../../../context/jotai/ProfileProvider";
import introImg from "./../../../assets/introImg.svg";
import { BiIdCard, BiPhone, BiPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";

export default function UserProfileCard() {
  const data = useAtomValue(profileAtom);

  return (
    <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] items-center  h-full gap-6 w-full  mx-auto dark:hover:bg-gray-700/80 bg-white/90 backdrop-blur-md border border-gray-200 rounded-2xl hover:bg-gray-100 shadow-xl p-6 rtl dark:border-gray-800 dark:bg-gray-900 transition-all duration-300">
      <div className="flex flex-col items-center space-y-4">
        <div className="relative">
          <img
            className="w-24 h-24 object-cover rounded-full border-4 border-indigo-500 shadow-lg"
            src={data?.currentPictureAddress || introImg}
            alt={`${data?.fName ?? "کاربر"} ${data?.lName ?? ""}`}
          />
          <span className="absolute -bottom-2 -right-2 bg-indigo-500 text-white text-xs px-2 py-0.5 rounded-full shadow-sm">
            فعال
          </span>
        </div>

        <div className="text-center">
          <h2
            className="w-28 truncate text-2xl font-bold text-gray-900 dark:text-white"
            title={`${data?.fName ?? "کاربر"} ${data?.lName ?? ""}`}
          >
            {`${data?.fName ?? "کاربر"} ${data?.lName ?? ""}`}
          </h2>

          <div className="w-16 h-1 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 rounded-full mt-2 mx-auto" />
        </div>
      </div>

      <div className="space-y-5 overflow-y-auto max-h-64 md:max-h-none">
        <div className="flex items-center gap-3 bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
          <div className="shrink-0 w-8 h-8 flex items-center justify-center bg-indigo-100 dark:bg-indigo-600 text-indigo-600 dark:text-white rounded-lg">
            <MdEmail className="w-4 h-4" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-800 dark:text-gray-200 truncate">
              ایمیل
            </p>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs text-end text-gray-600 dark:text-gray-300 truncate">
              {data?.email ?? "—"}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
          <div className="shrink-0 w-8 h-8 flex items-center justify-center bg-indigo-100 dark:bg-indigo-600 text-indigo-600 dark:text-white rounded-lg">
            <BiPhoneCall className="w-4 h-4" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-800 dark:text-gray-200 truncate">
              شماره تماس
            </p>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs text-end text-gray-600 dark:text-gray-300">
              {data?.phoneNumber ?? "—"}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
          <div className="shrink-0 w-8 h-8 flex items-center justify-center bg-indigo-100 dark:bg-indigo-600 text-indigo-600 dark:text-white rounded-lg">
            <BiIdCard className="w-4 h-4" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-800 dark:text-gray-200 truncate">
              کد ملی
            </p>
          </div>
          <div className="flex-1  min-w-0">
            <p className="text-xs text-end text-gray-600 dark:text-gray-300">
              {data?.nationalCode ?? "—"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
