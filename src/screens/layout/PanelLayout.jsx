import React from "react";
import { HeaderDashbord } from "../../components/common/HeaderDashbord/HeaderDashbord";
import { MainDashbord } from "../../components/common/MainDashbord/mainDashbord";
import { Outlet } from "react-router-dom";

export const PanelLayout = () => {
  return (
    <>
      <HeaderDashbord />
      <div className="flex mx-[1rem] rtl gap-11">
        <MainDashbord />
        <Outlet />
      </div>
    </>
  );
};
