import React from 'react'
import { Field, Formik, Form } from "formik";
import { Link } from "react-router-dom";
// import { loginAPI } from "../../core/services/api/auth";
import login2Pick from "../../assets/login2Pic.svg";
import home from "../../assets/home.svg";
import loginPick from "../../assets/loginPick.svg";
import { useState } from 'react';


const LoginForm = () => {

    const loginHandler = () => {
        const loginHandler = async (values) => {
          console.log(values);
      
          const body = values;
      
          const response = await loginAPI(body);
          console.log(response);
        };
      
        
    }

    const [show, setShow] = useState(false);
  return (
    <>

{show ? 






<div className="flex  m-auto h-[32rem] w-[50rem] mt-[5rem]">
      <div onClick={()=>setShow(!show)} className="bg-[#A4F6DE] relative left-[1px] w-[25rem] rounded-l-lg">
        <img className="m-auto h-[31rem]" src={login2Pick} alt="" />
      </div>
      

      <div className="w-[25rem] bg-[#eeeaea] rounded-r-lg">
        <img src={home} alt="" />
        <h2 className="text-right mr-6 text-[#22445D] mt-[2.5rem] text-[23px]">
          ورود به سیستم
        </h2>
        <Formik
          onSubmit={loginHandler}
          initialValues={{ phoneOrGmail: "", password: "", rememberMe: true }}
        >
          <Form>
            <Field
              placeholder="کد تایید   "
              className=" ml-7 border-solid border-2 border-[#158B68] text-right rounded-xl  text-[#ABA7A7] w-[22rem] h-[3rem] mt-[1.6rem] "
              type="text"
              name="phoneOrGmail"
            />
          
            <Field
              className="h-[2px] w-[2px]"
              type="checkbox"
              name="rememberMe"
              placeholder="مرا به خاطر بسپار"
            />
            <button
              className=" ml-7 w-[22rem] h-[3.4rem] bg-[#158B68] rounded-xl mt-[7.2rem] text-[#ffff]"
              type="submit"
            >
              ادامه
            </button>
          </Form>
        </Formik>

       

        <button className="ml-7 w-[22rem] h-[3.4rem] border-solid border-[1.7px] border-[#158B68] rounded-xl mt-[0.7rem] bg-[#fff] ">
          بازگشت به صفحه اصلی
        </button>
  
      
      </div>
    </div>

: 


<div className="flex  m-auto h-[32rem] w-[50rem] mt-[5rem] ">
      <div className="bg-[#A4F6DE] relative left-[1px] w-[25rem] rounded-l-lg ">
        <img className="m-auto h-[31rem]" src={loginPick} alt="" />
      </div>
      

      <div className="w-[25rem] bg-[#eeeaea] rounded-r-lg ">
        <img src={home} alt="" />
        <h2 className="text-right mr-6 text-[#22445D] mt-[1.5rem] text-[23px]">
          ورود به سیستم
        </h2>
        <Formik
          onSubmit={loginHandler}
          initialValues={{ phoneOrGmail: "", password: "", rememberMe: true }}
        >
          <Form>
            <Field
              placeholder="شماره همراه   "
              className=" ml-7 border-solid border-2 border-[#158B68] text-right rounded-xl  text-[#ABA7A7] w-[22rem] h-[3rem] mt-[1.6rem] "
              type="text"
              name="phoneOrGmail"
            />
            <Field
              placeholder="رمز عبور   "
              className="ml-7 border-solid border-2 border-[#158B68] text-right rounded-xl  text-[#ABA7A7] w-[22rem] h-[3rem] mt-[0.7rem]"
              type="text"
              name="password"
            />

            <button
              className="w-[22rem] h-[3.4rem] bg-[#158B68] rounded-xl mt-[4.2rem] ml-7 text-[#ffff]"
              type="submit"  onClick={()=>setShow(!show)}
            >
              تایید
            </button>
          </Form>
        </Formik>

       <Link to='/'> <button className="w-[22rem] h-[3.4rem] border-solid border-[1.7px] border-[#158B68] rounded-xl mt-[0.7rem] bg-[#fff] ml-7">
          بازگشت به صفحه اصلی
        </button></Link>
        <h4 className="text-xs text-[#22445D] absolute left-[58rem] top-[32rem] cursor-pointer">
          {" "}
          فراموشی رمز
        </h4>
        <Link to='/register'><h3 className="text-xs text-[#22445D] absolute left-[67rem] top-[32rem] cursor-pointer">
          یک حساب کاربری ایجاد کنید
        </h3></Link>
        <h2 className="text-[12px] text-[#22445D] absolute right-[30.5rem] top-[20.2rem] cursor-pointer">
          مرا به خاطر بسپار
        </h2>
        
      </div>
    </div>





}
       





    

    </>
  )
}

export  {LoginForm}
