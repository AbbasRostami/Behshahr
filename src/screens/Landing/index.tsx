import { TopDescription } from "../../components/LandingHolder/Top-Description";
import { OurServices } from "../../components/LandingHolder/OurServices";
import { Category } from "../../components/LandingHolder/Category";
import { Suggestions } from "../../components/LandingHolder/Suggestions";
import { Statistics } from "../../components/LandingHolder/Statistics";
import { Professionals } from "../../components/LandingHolder/Professionals";
import { Courses } from "../../components/LandingHolder/Courses";
import { NewsArticles } from "../../components/LandingHolder/News-articles";

const Landing = () => {
  return (
    <>
      <div className="dark:bg-slate-900">
        <TopDescription />
        <OurServices />
        <Statistics />
        <Category />
        <Courses />
        <Professionals />
        <NewsArticles />
        <Suggestions />
      </div>
    </>
  );
};

export default Landing;
