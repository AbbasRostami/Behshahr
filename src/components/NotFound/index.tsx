import React from "react";
import { Link } from "react-router-dom";
import notFound from "../../assets/notFound.svg";

const NotFound: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 py-10">
      <img
        src={notFound}
        alt="صفحه یافت نشد"
        className="w-full max-w-lg sm:max-w-xl lg:max-w-2xl"
      />

      <Link
        to="/"
        className="mt-8 flex h-14 w-full max-w-[200px] items-center justify-center rounded-xl bg-[#158B68] text-lg font-bold text-white transition hover:bg-[#12926C]"
      >
        بازگشت به خانه
      </Link>
    </div>
  );
};

export default NotFound;
