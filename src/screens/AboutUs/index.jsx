import React from "react";
import { AboutForm } from "../../components/AboutForm";
import { Header } from "./../../components/common/Header";
import { Footer } from "./../../components/common/Footer";
const AboutUs = () => {
  return (
    <>
      <div className="dark:bg-slate-900">
        <Header />
        <AboutForm />
        <Footer />
      </div>
    </>
  );
};

export { AboutUs };
