import React, { useContext } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import logoSite from "../../../assets/logoSite.svg";
import { ProfileContext } from "../../../context/ProfileProvider";
import DarkLightToggle from "../DarkMode";

interface HeaderDashbordProps {
  showMenu: boolean;
  setShowMenu: (value: boolean) => void;
}

const HeaderDashbord: React.FC<HeaderDashbordProps> = ({ showMenu, setShowMenu }) => {

  const {data} = useContext(ProfileContext);

  
  return (
    <div className="bg-[#A4F6DE] dark:bg-gray-700 w-[46rem] lg:w-[74.2rem]">
      <div className="flex justify-between items-center container mx-auto gap-5 h-20">
        <div className="flex items-center gap-4">
          <img className="h-[2.3rem] lg:h-[3rem] ml-5 rounded-full" src={data?.currentPictureAddress} alt="" />
          <DarkLightToggle />
        </div>

        <div className="flex items-center text-[#22445D] text-nowrap">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="mr-4 lg:hidden dark:bg-slate-200 rounded-sm"
          >
            <GiHamburgerMenu size={28} />
          </button>

          <span className="cursor-pointer mt-2 text-lg dark:text-white">
            آکادمی اچ وان
          </span>

          <div>
            <img className="h-10" src={logoSite} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export { HeaderDashbord };
