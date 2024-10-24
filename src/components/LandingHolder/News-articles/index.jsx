import React from "react";
import line from "./../../../assets/svg/Landing/Line.svg";
import newsPic from "./../../../assets/svg/Landing/newspic.svg";
import dislike from "./../../../assets/svg/Landing/CoursesDisLike.svg";
import favorite from "./../../../assets/svg/Landing/CoursesFavo.svg";
import like from "./../../../assets/svg/Landing/CoursesLike.svg";
import profileimg from "./../../../assets/svg/Landing/ProfileImage.svg";
import starRating from "./../../../assets/svg/Landing/StarRating.svg";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { SliderArticles } from "../../common/SliderArticles";

const NewsArticles = () => {
  return (
    <>
     <SliderArticles />
    </>
  );
};

export { NewsArticles };
