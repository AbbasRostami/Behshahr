import React from 'react'
import { Header } from '../common/Header'
import { Footer } from '../common/Footer/Footer'
import { Formik, Field, Form } from "formik";


const AboutForm = () => {
  return (
    <div>

      <Header />






      <div className='flex justify-around items-center'>

          <div>

          <Formik>
                   <Form >
                                <div className=' flex flex-col items-center mt-10 w-[37rem] h-[30rem] relative rounded-[1.5rem]
                                                          shadow-[9px_9px_12px_3px_rgba(0,_0,_0,_0.1)] bg-[#FBF6F6]'> 

                                    <Field className="bg-[#FFFFFF] rtl mt-10 placeholder-[#807A7A] h-[50px] w-[450px] border-solid border border-TextGreen rounded-md "
                                        placeholder="  نام و نام خانواگی"
                                    >
                                    </Field>

                                    <Field className="bg-[#FFFFFF] rtl mt-5 placeholder-[#807A7A]  h-[50px] w-[450px] border-solid border border-TextGreen rounded-md"
                                        placeholder="  ایمیل آدرس"
                                    >
                                    </Field>

                                    <Field className="bg-[#FFFFFF] rtl my-5 placeholder-[#807A7A]  h-[50px] w-[450px] border-solid border border-TextGreen rounded-md"
                                        placeholder="  شماره تماس"
                                    >
                                    </Field>

                                    <Field className="bg-[#FFFFFF] rtl placeholder-[#807A7A] items-start h-[160px] w-[450px] border-solid border border-TextGreen rounded-md "
                                        placeholder="  متن..."
                                    >
                                    </Field>

                                    <button class="w-[120px] h-[40px]
                                     text-[#21394B] bg-BgGreen rounded-lg absolute right-[3rem] bottom-4">ارسال</button>

                                </div>
                   </Form>
                </Formik>
          </div>

vv


          <div>

          </div>


      </div>









































      <Footer />

    </div>
  )
}

export { AboutForm }
