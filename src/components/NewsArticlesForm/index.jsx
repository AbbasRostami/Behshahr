import React from "react";
import { ArticlesCard} from "./ArticlesCard";
import { useState, useEffect } from "react";
import { Field, Form, Formik } from "formik";
import searching from "./../../assets/search.svg";
import arrowUnder from "./../../assets/arrowUnder.svg";
import { getArticlesListSort } from "../../core/api/getArticlesList";
import { getArticlesListSort2 } from "../../core/api/getArticlesList";
import { getApi } from "../../core/api/api";
import { SliderArticles } from "../common/SliderArticles";

const NewsArticlesForm = () => {
  const [sort, setSort] = useState([]);
  const [sort2, setSort2] = useState([]);

  const [cards, setCards] = useState([]);
  

  const getArticlesTop = async () => {
    const path = `/News`;
    const response = await getApi({path});
    console.log(response.data?.news);
    if (response) {
      setCards(response.data?.news);
    }
  };
  useEffect(() => {
    getArticlesTop();
  }, []);


  const ArticlesSort = async () => {
    const response3 = await getArticlesListSort();
    console.log(response3);
    if (response3) {
      setSort(response3);
    }
  };
  useEffect(() => {
    ArticlesSort();
  }, []);

  const ArticlesSort2 = async () => {
    const response4 = await getArticlesListSort2();
    console.log(response4);
    if (response4) {
      setSort2(response4);
    }
  };
  useEffect(() => {
    ArticlesSort2();
  }, []);

  return (
    <>
      <div>
        {/* <LoginForm /> */}
        <h1 className="text-[#22445D] bg-white-500 mt-10 items-center text-3xl text-center py-8 dark:text-white">
          لیست اخبار و مقالات
        </h1>
        <div className=" flex mt-8 bg-[#FBF6F6] py-5 rounded-3xl dark:bg-gray-800 ">
          <select className="text-center border-solid border-2 rounded-full h-[4rem] absolute right-[20rem] bg-[#ffffff] w-[13rem]   text-[17px] text-[#158B68] ">
            <option value=""> دسته بندی</option>
            <option value="">حضوری</option>
            <option value="">ان لاین</option>

            <img className="h-[8px]  ml-5" src={arrowUnder} alt="" />
          </select>
          <select className=" text-center border-solid border-2 rounded-full h-[4rem] absolute right-[6rem] bg-[#ffffff] w-[13rem]   text-[17px] text-[#158B68] ">
            <option value="">مرتب سازی</option>
            <option value="">متوسط</option>
            <option value="">یشرفته</option>

            <img className="h-[8px]   ml-5" src={arrowUnder} alt="" />
          </select>
          <Formik>
            <Form>
              <div className=" bg-emerald-300/85 absolute ml-19  rounded-l-3xl px-4 py-1 ml-32 ">
                <img src={searching} alt="" />
              </div>
              <label>
                <Field
                  placeholder="  ....جستجو"
                  className=" rtl text-TextGreen bg-[#ffffff] rounded-2xl  px-28 py-4 ml-32 "
                  type="text"
                />
              </label>
            </Form>
          </Formik>
        </div>

        <div className=" flex justify-evenly items-center">
          <div className="grid grid-cols-3  gap-56">
            {cards.map((item ,index)=>{
              return(<ArticlesCard item={item} />)
            })}
            
      
          </div>
        </div>

        <SliderArticles />
      </div>
    </>
  );
};

export { NewsArticlesForm };
