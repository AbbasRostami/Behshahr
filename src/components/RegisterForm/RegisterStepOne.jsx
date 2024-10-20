import React from 'react'
import { Field, Formik, Form } from "formik";
import { Link } from "react-router-dom";
import { loginAPI } from "../../core/services/api/auth";
import login2Pick from "../../assets/login2Pic.svg";
import home from "../../assets/home.svg";
import loginPick from "../../assets/loginPick.svg";
import registerStepOne from "../../assets/registerStepOne.svg"
import registerStepTwo from "../../assets/registerStepTwo.svg"
import registerStepThree from "../../assets/registerStepThree.svg"
import { useState } from 'react';
import { RegisterApi } from '../../core/api/register';



const RegisterStepOne = () => {

        const registerHandler = async (values) => {
          console.log(values);
      
          const body = values;
      
          const response = await RegisterApi(body);
          console.log(response);
        };
      
        
    

    const [show, setShow] = useState(false);
  return (
    <>

{/* 
{show ? 

<div className="flex  m-auto h-[32rem] w-[50rem] mt-[5rem] ">
      <div onClick={()=>setShow(!show)} className="bg-[#A4F6DE] relative left-[1px] w-[25rem] rounded-l-lg ">
        <img className="m-auto h-[31rem]" src={registerStepThree} alt="" />
      </div>
      

      <div className="w-[25rem] bg-[#eeeaea] rounded-r-lg shadow-[9px_9px_12px_3px_rgba(0,_0,_0,_0.1)] ">
        <img src={home} alt="" />
        <h2 className="text-right mr-6 text-[#22445D] mt-[0.8rem] text-[23px]">
          ثبت نام 
        </h2>
        <Formik
          onSubmit={loginHandler}
          initialValues={{ phoneOrGmail: "", password: "", rememberMe: true }}
        >
          <Form>
            <Field
              placeholder="شماره همراه    "
              className=" ml-7 border-solid border-2 border-[#158B68] text-right rounded-xl  text-[#ABA7A7] w-[22rem] h-[3rem] mt-[1rem] "
              type="text"
              name="phoneOrGmail"
            />
          
        
            <Field
              placeholder="ایمیل کاربر    "
              className=" ml-7 border-solid border-2 border-[#158B68] text-right rounded-xl  text-[#ABA7A7] w-[22rem] h-[3rem] mt-[1rem] "
              type="text"
              name="phoneOrGmail"
            />
          
        
            <Field
              placeholder="رمز عبور    "
              className=" ml-7 border-solid border-2 border-[#158B68] text-right rounded-xl  text-[#ABA7A7] w-[22rem] h-[3rem] mt-[1rem] "
              type="text"
              name="phoneOrGmail"
            />
          
        
            <Field
              placeholder="تکرار رمز عبور    "
              className=" ml-7 border-solid border-2 border-[#158B68] text-right rounded-xl  text-[#ABA7A7] w-[22rem] h-[3rem] mt-[1rem] "
              type="text"
              name="phoneOrGmail"
            />
          <label>
            <h2 className='text-right mr-16 mb-[-1.2rem] mt-4 '> من با اتمام اظهارات موافقم </h2>
          
            <Field
            
              placeholder="   "
              className=" rounded-xl w-[1rem] h-[1rem]  mx-[22.2rem] "
              type="checkbox"
              name="phoneOrGmail"
            />
            </label>
          
        
            <button
              className=" ml-7 w-[22rem] h-[3.4rem] bg-[#158B68] rounded-xl mt-[3rem] text-[#ffff]"
              type="submit"  onClick={()=>setShow(!show)}
            >
              ادامه
            </button>
          </Form>
        </Formik>

       
    
      
      </div>
    </div>
    :




<div className="flex  m-auto h-[32rem] w-[50rem] mt-[5rem] ">
      <div onClick={()=>setShow(!show)} className="bg-[#A4F6DE] relative left-[1px] w-[25rem] rounded-l-lg ">
        <img className="m-auto h-[31rem]" src={registerStepTwo} alt="" />
      </div>
      

      <div className="w-[25rem] bg-[#eeeaea] rounded-r-lg shadow-[9px_9px_12px_3px_rgba(0,_0,_0,_0.1)] ">
        <img src={home} alt="" />
        <h2 className="text-right mr-6 text-[#22445D] mt-[2.8rem] text-[23px]">
          ثبت نام 
        </h2>
        <Formik
          onSubmit={loginHandler}
          initialValues={{ phoneOrGmail: "", password: "", rememberMe: true }}
        >
          <Form>
            <Field
              placeholder="کد تایید    "
              className=" ml-7 border-solid border-2 border-[#158B68] text-right rounded-xl  text-[#ABA7A7] w-[22rem] h-[3rem] mt-[1.9rem] "
              type="text"
              name="phoneOrGmail"
            />
          
        
            <button
              className=" ml-7 w-[22rem] h-[3.4rem] bg-[#158B68] rounded-xl mt-[7rem] text-[#ffff]"
              type="submit"  onClick={()=>setShow(!show)}
            >
              ادامه
            </button>
          </Form>
        </Formik>

       
      <Link to='/'>
        <button className="ml-7 w-[22rem] h-[3.4rem] border-solid border-[1.7px] border-[#158B68] rounded-xl mt-[0.7rem] bg-[#fff] ">
          بازگشت به صفحه قبل
        </button>
        </Link>
      
      </div>
    </div>

&& */}


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
              type="submit"  onClick={()=>setShow(!show)}
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








       





    

    </>
  )
}

export  {RegisterStepOne}
