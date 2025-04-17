import { useAtomValue } from "jotai";
import { profileAtom } from "../../../context/jotai/ProfileProvider";
import {
  BsInstagram,
  BsPersonCircle,
  BsTelegram,
  BsTwitterX,
} from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { useRef } from "react";
import { CiImageOff } from "react-icons/ci";

export default function UserMetaCard() {
  const data = useAtomValue(profileAtom);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const fallbackRef = useRef<HTMLDivElement | null>(null);
  return (
    <>
      <div className="p-5 border rtl border-gray-200 rounded-2xl dark:border-gray-800 lg:p-6">
        <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
          <div className="flex flex-col items-center w-full gap-6 xl:flex-row">
            <div className="w-20 h-20 overflow-hidden border border-gray-200 rounded-full dark:border-gray-800">
              {data?.currentPictureAddress &&
              data?.currentPictureAddress !== "Not-set" ? (
                <>
                  <img
                    ref={imgRef}
                    src={data?.currentPictureAddress}
                    alt="Profile Picture"
                    className="rounded-full w-32 h-32 border-2 object-cover"
                    onError={() => {
                      imgRef.current?.classList.add("hidden");
                      fallbackRef.current?.classList.remove("hidden");
                    }}
                  />
                  <div ref={fallbackRef} className="hidden">
                    <BsPersonCircle className="rounded-full w-full h-full text-gray-400 dark:text-gray-600" />
                  </div>
                </>
              ) : (
                <BsPersonCircle className="rounded-full w-full h-full text-gray-400 dark:text-gray-600" />
              )}
            </div>
            <div className="order-3 xl:order-2">
              <h4 className="mb-2  text-lg font-semibold text-center text-gray-800 dark:text-white/90 xl:text-center">
                {data?.fName} {data?.lName}
              </h4>
              <div className="flex flex-col items-center rtl gap-1 text-center xl:flex-row xl:gap-3 xl:text-left">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {data?.userAbout || "About Me"}
                </p>
                <div className="hidden h-3.5 w-px bg-gray-300 dark:bg-gray-700 xl:block"></div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {data?.homeAdderess || "Home Address"}
                </p>
              </div>
            </div>
            <div className="flex items-center order-2 gap-2 grow xl:order-3 xl:justify-end">
              <a
                href={data?.telegramLink}
                target="_blank"
                rel="noopener"
                className="flex h-11 w-11 items-center justify-center gap-2 cursor-pointer rounded-full border border-gray-300 bg-white text-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200"
              >
                <BsTelegram />
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener"
                className="flex h-11 w-11 items-center justify-center gap-2 rounded-full border border-gray-300 bg-white text-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200"
              >
                <BsTwitterX />
              </a>

              <a
                href={data?.linkdinProfile}
                target="_blank"
                rel="noopener"
                className="flex h-11 w-11 items-center justify-center cursor-pointer gap-2 rounded-full border border-gray-300 bg-white text-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200"
              >
                <FaLinkedin />
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener"
                className="flex h-11 w-11 items-center justify-center gap-2 rounded-full border border-gray-300 bg-white text-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200"
              >
                <BsInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
