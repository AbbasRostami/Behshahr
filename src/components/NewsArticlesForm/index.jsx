import React from 'react'
import { ArticlesList } from './ArticlesList';
import { ArticlesListUnder } from './articlesListUnder';
import { useState,useEffect } from 'react';
import { Field, Form, Formik } from "formik";
import searching from "./../../assets/search.svg";
import filter from "./../../assets/filter.svg";
import arrowUnder from "./../../assets/arrowUnder.svg";
import { HeaderUserlogin } from '../common/HeaderUserLogin';
import { Footer } from '../common/Footer';

const NewsArticlesForm = () => {

    const [count, setCount] = useState(0);

    // const loginUser = async () => {
    //   const userObj = {
    //     phoneOrGmail: "masg1377@gmail.com",
    //     password: "123456",
    //     rememberMe: true,
    //   };
  
    //   const user = await loginAPI(userObj);
  
    //   console.log(user);
    // };
  
    // useEffect(() => {
    //   loginUser();
    // }, []);


  return (

    <>
    <div>
        <HeaderUserlogin />
       {/* <LoginForm /> */}
       <h1 className="text-[#22445D] bg-white-500 mt-10 items-center text-3xl text-center py-8">
        لیست اخبار و مقالات
      </h1>
      <div className=" flex mt-8 bg-[#FBF6F6] py-5 rounded-3xl ">
        <button className="border-solid border-2 rounded-full h-[4rem] absolute right-[20rem] bg-[#ffffff] w-[13rem]   text-[17px] text-[#158B68] ">
          {" "}
          مرتب سازی
          <img
            className="h-[8px] absolute top-[1.7rem] ml-5"
            src={arrowUnder}
            alt=""
          />
        </button>
        <button className="border-solid border-2 rounded-full h-[4rem] absolute right-[6rem] bg-[#ffffff] w-[13rem]   text-[17px] text-[#158B68] ">
          {" "}
          مرتب سازی
          <img
            className="h-[8px] absolute top-[1.7rem] ml-5"
            src={arrowUnder}
            alt=""
          />
        </button>
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


      <div className='bg-red flex justify-evenly items-center'>
      <div className="grid grid-cols-3 grid-rows-3 gap-20">
        <ArticlesList />
        <ArticlesList />
        <ArticlesList />
        <ArticlesList />
        <ArticlesList />
        <ArticlesList />
        <ArticlesList />
        <ArticlesList />
        <ArticlesList />
      </div>
      </div>

     
          <ArticlesListUnder />
    
    </div>

    <Footer />
    </>
  )
}

export { NewsArticlesForm }
