import React from "react";
import { Outlet } from "react-router-dom";
import { HeaderUserlogin } from "../../components/common/HeaderUserLogin";
import { Footer } from "../../components/common/Footer";
import { Header } from "../../components/common/Header";

export const MainLayout = () => {
  return (
    <>
      <div className='dark:bg-slate-900'>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};
