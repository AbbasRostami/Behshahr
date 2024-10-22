import React from "react";
import { NewsArticlesForm } from "../../components/NewsArticlesForm";
import { HeaderUserlogin } from "./../../components/common/HeaderUserLogin";
import { Footer } from "./../../components/common/Footer";

const NewsArticles = () => {
  return (
    <div>
      <div className='dark:bg-slate-900'>
      <HeaderUserlogin />
        <NewsArticlesForm />
      <Footer />
      </div>
    </div>
  );
};

export { NewsArticles };
