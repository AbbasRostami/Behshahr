import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import DarkLightToggle from "../DarkMode";

import profileHeader from "../../../assets/profileHeader.svg";
import reserved2 from "../../../assets/reserved2.svg";
import logoSite from "../../../assets/logoSite.svg";
import pin from "../../../assets/pin.svg";

const HeaderDashbord = ({ showMenu, setShowMenu }) => {
  return (
    <div class="bg-[#A4F6DE] dark:bg-gray-700 w-[46rem] lg:w-[74.2rem]">
      <div class="flex justify-between items-center container mx-auto gap-5 h-20">
        <div className="flex items-center gap-4">
          <img className="h-[2.3rem] lg:h-[3rem]" src={profileHeader} alt="" />
          <img className="h-[1.8rem] lg:h-[2rem]" src={reserved2} alt="" />
          <DarkLightToggle />
          <img className="h-[1.8rem] lg:h-[2rem]" src={pin} alt="" />
        </div>

        <div className="flex items-center text-[#22445D] text-nowrap">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="mr-4 lg:hidden dark:bg-slate-200 rounded-sm"
          >
            <GiHamburgerMenu size={28} />
          </button>

          <span class="cursor-pointer mt-2 text-lg dark:text-white">
            آکادمی اچ وان
          </span>

          <div>
            <img class="h-10" src={logoSite} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export { HeaderDashbord };
