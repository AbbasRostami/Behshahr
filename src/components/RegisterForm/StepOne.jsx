import React from 'react'
import registerStepOne from "../../assets/registerStepOne.svg"
import home from "../../assets/home.svg";
import { Field, Formik, Form } from "formik";
import { Link } from "react-router-dom";
import { useState } from 'react';
import { PostRegisterApi } from '../../core/api/register';


const StepOne = ({setstep}) => {

  
  const registerHandler = async (values) => {
    console.log(values);

    const body = values;

    const response = await PostRegisterApi(body);
    console.log(response);
  };



    
  return (
    <div className="flex  m-auto h-[32rem] w-[50rem] mt-[5rem] shadow-[9px_9px_12px_3px_rgba(0,_0,_0,_0.1)]">
<div className="bg-[#A4F6DE] relative left-[1px] w-[25rem] rounded-l-lg ">
  <img className="m-auto h-[31rem]" src={registerStepOne} alt="" />
</div>


<div className="w-[25rem] bg-[#eeeaea] rounded-r-lg shadow-[9px_9px_12px_3px_rgba(0,_0,_0,_0.1)] ">
  <img src={home} alt="" />
  <h2 className="text-right mr-6 text-[#22445D] mt-[1.5rem] text-[23px]">
    ثبت نام 
  </h2>
  <Formik
    onSubmit={registerHandler}
    initialValues={{ phoneOrGmail: "",  rememberMe: true }}
  >
    <Form>
      <Field
        placeholder="شماره همراه   "
        className=" ml-7 border-solid border-2 border-[#158B68] text-right rounded-xl  text-[#ABA7A7] w-[22rem] h-[3rem] mt-[1.6rem] "
        type="text"
        name="phoneOrGmail"
      />
     
          
      <button
        className="w-[22rem] h-[3.4rem] bg-[#158B68] rounded-xl mt-[7.2rem] ml-7 text-[#ffff]"
        type="submit"  onClick={()=> setstep(2)}
      >
        ادامه
      </button>
    </Form>
  </Formik>

 <Link to='/'> <button className="w-[22rem] h-[3.4rem] border-solid border-[1.7px] border-[#158B68] rounded-xl mt-[0.7rem] bg-[#fff] ml-7">
    بازگشت به صفحه اصلی
  </button></Link>
  
  <Link to='/register'><h3 className="text-xs text-[#22445D] underline  text-right cursor-pointer mt-8 mr-9">
    من از قبل عضو هستم
  </h3></Link>
  
</div>
</div>  
  )
}

export { StepOne }
