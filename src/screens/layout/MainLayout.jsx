import React from "react";
import { Outlet } from "react-router-dom";
import { HeaderUserlogin } from "../../components/common/HeaderUserLogin";
import { Footer } from "../../components/common/Footer";

export const MainLayout = () => {
  return (
    <>
      <div className='dark:bg-slate-900'>
        <HeaderUserlogin />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};
