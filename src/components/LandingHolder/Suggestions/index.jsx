import React from 'react'
import { Formik, Field, Form, ErrorMessage } from "formik";
import SugLogo from "./../../../assets/svg/Landing/SuggestionsLogo.svg"


const Suggestions = () => {
  return (
   <>
   
   <div class="text-center leading-10 mt-24">
        <p class="text-[35px] font-xl">پیشنهادات و انتقادات</p>
        <p class="leading-10 mt-3">نظرات خود را با ما درمیان بگذارید</p>
    </div>
   
   
   
        <div className='flex justify-evenly items-center mt-4 mx-28'>

            <div className='w-auto'>
            <img src={SugLogo} alt="" />
            </div>

            
                <Formik>
                   <Form >
                                <div className=' flex flex-col items-end h-full'> 

                                    <Field className="bg-[#FBF6F6] rtl placeholder-TextGray h-[50px] w-[500px] border-solid border-2 border-TextGreen rounded-md "
                                        placeholder="  نام و نام خانواگی"
                                    >
                                    </Field>

                                    <Field className="bg-[#FBF6F6] rtl placeholder-TextGray my-3 h-[50px] w-[500px] border-solid border-2 border-TextGreen rounded-md"
                                        placeholder="  ایمیل آدرس"
                                    >
                                    </Field>

                                    <Field className="bg-[#FBF6F6] rtl placeholder-TextGray items-start h-[110px] w-[500px] border-solid border-2 border-TextGreen rounded-md "
                                        placeholder="  متن..."
                                        rows="2"
                 as="textarea"
                                    >
                                    </Field>



                                    <button class="w-[100px] h-[40px]
                                    //  text-[#21394B] bg-BgGreen rounded-lg mt-8">ارسال</button>

                                </div>
                   </Form>
                </Formik>
           

        </div>
                






   
   </>
  )
}

export { Suggestions }