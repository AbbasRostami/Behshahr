import React, { useState } from "react";
import { HeaderDashbord } from "../../components/common/HeaderDashbord/HeaderDashbord";
import { MainDashbord } from "../../components/common/MainDashbord/mainDashbord";
import { Outlet } from "react-router-dom";

export const PanelLayout = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div className="dark:bg-slate-900">
        <HeaderDashbord setShowMenu={setShowMenu} showMenu={showMenu} />
        <div className="flex mx-[1rem] rtl gap-11">
          <MainDashbord setShowMenu={setShowMenu} showMenu={showMenu} />
          <Outlet />
        </div>
      </div>
    </>
  );
};
