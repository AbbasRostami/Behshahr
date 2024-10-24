import React from "react";
import { CoursesDetailsForm } from "../../components/CoursesDetailsForm";
import { HeaderUserlogin } from "./../../components/common/HeaderUserLogin";
import { Footer } from "./../../components/common/Footer";
const CoursesDetails = () => {
  return (
    <>
    <div className='dark:bg-slate-900'>
      <HeaderUserlogin />
      <CoursesDetailsForm />
      <Footer />
      </div>
    </>
  );
};

export { CoursesDetails };
