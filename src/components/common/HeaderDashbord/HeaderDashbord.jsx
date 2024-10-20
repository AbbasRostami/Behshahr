import React from "react";

import logoSite from "../../../assets/logoSite.svg";
import moon from "../../../assets/moon.svg";
import pin from "../../../assets/pin.svg";
import reserved2 from "../../../assets/reserved2.svg";
import profileHeader from "../../../assets/profileHeader.svg";

const HeaderDashbord = () => {
  return (
    <div class="bg-[#A4F6DE] w-[73.6rem]">
      <div class="flex justify-between items-center container mx-auto gap-5 h-20">
        
        <img className="h-[3rem]" src={profileHeader} alt="" />
        <img className="h-[2rem]" src={reserved2} alt="" />
        <img className="h-[2rem]" src={moon} alt="" />
        <img className="h-[2rem]" src={pin} alt="" />

        <div className="flex justify-end mx-[48rem] text-[#22445D] text-nowrap">

          <span class="cursor-pointer mt-2 text-lg">آکادمی اچ وان</span>

          <div>
            <img class="h-10 mx-[1rem] " src={logoSite} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export { HeaderDashbord };
