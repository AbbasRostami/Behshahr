import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Field, Form, Formik } from "formik";

import articlePic3 from "./../../assets/articlePic33.svg";
import articlePic2 from "./../../assets/svg/ArticlesDetails/artilclePic2.svg";
import courses1 from "./../../assets/svg/ArticlesDetails/courses1.svg";
import dislike from "./../../assets/svg/ArticlesDetails/dislike.svg";
import download from "./../../assets/svg/ArticlesDetails/download.svg";
import favorite from "./../../assets/svg/ArticlesDetails/favorite.svg";
import like from "./../../assets/svg/ArticlesDetails/like.svg";
import line from "./../../assets/svg/ArticlesDetails/line.svg";
import mrSmith from "./../../assets/svg/ArticlesDetails/mrSmith.svg";
import profileimg from "./../../assets/svg/ArticlesDetails/profileimg.svg";
import starRating from "./../../assets/svg/ArticlesDetails/StarRating.svg";




const CoursesDetailsForm = () => {
  return (
    <>
    
    

    <div className="flex flex-row-reverse px-16 py-[70px] gap-5">

    <div>
        <div className="min-h-screen bg-[#FBF6F6] dark:bg-gray-800 rounded-md flex justify-center p-6 rtl">
      <div className="flex flex-col w-full min-w-[300px]  gap-6">
        <div className=" flex-col rounded-md flex items-center justify-center p-6 ">
          <img
            src={articlePic2}
            alt="image"
            className="w-full h-[340px] object-cover rounded-md"
          />
        </div>

        <div className="flex flex-col rounded-md gap-6">
          <div>
            <div className="bg-white p-6 dark:text-white dark:bg-gray-700 rounded-md gap-5 shadow-md flex flex-col justify-between">
              <div className="flex flex-row">
                <h1 className="font-bold text-lg w-full">عنوان دوره</h1>

                <div className="flex flex-row-reverse gap-4 w-full">
                  <button className="text-gray-500  hover:text-green-500">
                    <img src={like} />
                  </button>
                  <button className="text-gray-500  hover:text-red-500">
                    <img src={dislike} />
                  </button>
                  <button className="text-gray-500  hover:text-yellow-500">
                    <img src={starRating} />
                  </button>
                </div>
              </div>
              <div className="text-gray-700 dark:text-white ">
              لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود. تکه های لاتین متن نشان می دهد که یک پروژه در حال توسعه است. لورم ایپسوم فقط برای توسعه دهندگان وب نیست. طراحان گرافیک نیز از آن با نرم افزارهای مختلفی مانند فوتوشاپ استفاده می کنند. لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود. تکه های لاتین متن نشان می دهد که یک پروژه در حال توسعه است. لورم ایپسوم فقط برای توسعه دهندگان وب نیست. طراحان گرافیک نیز از آن با نرم افزارهای مختلفی مانند فوتوشاپ استفاده می کنند.

لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود. تکه های لاتین متن نشان می دهد که یک پروژه در حال توسعه است. لورم ایپسوم فقط برای توسعه دهندگان وب نیست. طراحان گرافیک نیز از آن با نرم افزارهای مختلفی مانند فوتوشاپ استفاده می کنند.
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-700 dark:text-white p-6 flex-col rounded-md shadow-md">
            <h2 className="font-bold text-lg mb-4">ویدیوهای دوره</h2>
            <div className=" flex-col rounded-md flex items-center justify-center p-6 ">
              <img
                src={articlePic3}
                alt="image"
                className="w-full h-[380px] rounded-md object-cover"
              />
            </div>
            <ul className="flex flex-col gap-4">
              <div className="flex justify-between items-center border-b pb-3 gap-20">
                <li>ویدیو اول : آشنایی با دوره</li>
                <img className="pl-6" src={download} />
              </div>

              <div className="flex justify-between items-center border-b pb-3 gap-20">
                <li className=" pb-3">ویدیو دوم  : آشنایی با جاوا اسکریپت</li>
                <img className="pl-6" src={download} />
              </div>

              <div className="flex justify-between items-center border-b pb-3 gap-20">
                <li className=" pb-3">ویدیو دوم  : آشنایی با جاوا اسکریپت</li>
                <img className="pl-6" src={download} />
              </div>


            </ul>
          </div>

          <div className="bg-white dark:bg-gray-700 p-6 flex-col rounded-md shadow-md">
          <Formik
        initialValues={{ title: '', text: '' }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {() => (
          <Form className="flex flex-col gap-4 ">
            <div className="flex  rounded-md ">
            <button
                type="button"
                className="w-1/2 py-2 border border-[#A4F6DE] rounded-r-lg text-center dark:text-white "
              >
                نظرات کاربران
              </button>
              <button
                type="button"
                className="w-1/2 h-16 py-2 text-center rounded-l-lg bg-[#A4F6DE] dark:bg-gray-800 dark:text-white "
              >
                ثبت نظر
              </button>
             
            </div>

            <div className="flex flex-col gap-2">
              <Field
                name="title"
                placeholder="عنوان"
                className="p-2 border-2 bg-[#FBF6F6] border-BgGreen rounded-md "
              />
              <Field
                name="text"
                placeholder="متن..."
                rows="4"
                 as="textarea"
                className="p-2 border-2 bg-[#FBF6F6] border-BgGreen rounded-md text-[#807A7A]"
              />
            </div>

            <button
              type="submit"
              className="py-5 text-xl bg-BgGreen dark:bg-gray-800 dark:text-white text-black rounded-md"
            >
              ثبت کردن
            </button>
          </Form>
        )}
      </Formik>
            
          </div>
        </div>
      </div>
    </div>
        </div>
      

        <div>
        <div className="min-h-screen w-full bg-[#FBF6F6] dark:bg-gray-800 rounded-md flex justify-center p-6 rtl">
      <div className="flex flex-col w-full min-w-64 gap-6">
        {" "}
        <div className="flex flex-col bg-white  dark:bg-gray-700 dark:text-white p-4 gap-2 rounded-md  text-[#12926C]">
          <p>مدرس دوره : استاد </p>
          <p>هزینه تمام دوره : 3.000.000 </p>
          <p>تکنولوژی دوره : نام تکنولوژی </p>
          <p>سطح دوره : پیشرفته</p>
          <p>ظرفیت دوره : 50 نفر</p>
          <p>وضعیت دوره : شروع ثبت نام</p> 
        </div>
        <div className="bg-white  dark:bg-gray-700 dark:text-white p-4 space-y-2 rounded-md  text-[#12926C]">
          <p>مدت زمان :</p>
          <p>تعداد ویدیوها :</p>
          <p>تعداد نظرات :</p>
          <p>امتیاز دوره : 4.5</p>
        </div>
        <div className="bg-white  dark:bg-gray-700 dark:text-white p-4 space-y-2 rounded-md  text-[#12926C]">
          <p>تاریخ بروزرسانی :</p>
          <p>شروع دوره :</p>
          <p>پایان دوره :</p>
        </div>
        <div className="md:col-span-2">
          <button className="w-full bg-[#5BE1B9] dark:bg-gray-500 dark:text-white text-black py-3 rounded-md shadow-lg text-center">
            رزرو دوره
          </button>
        </div>
        <div className="bg-white  dark:bg-gray-700 dark:text-white rounded-md  flex items-center gap-4  p-4">
          <div className="space-y-4">
            <h3 className="pr-16">درباره استاد</h3>
            <div className="flex flex-row gap-3 pr-6">
              <div className="pb-2">
                <img
                  src={mrSmith}
                  className="w-9 h-9 rounded-full object-cover"
                />
              </div>

              <h3 className="text-lg text-gray-700 dark:text-white pt-1">جان اسمیت</h3>
            </div>
            <p className="text-xs text-[#6D6767] dark:text-white">
              لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط
              توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود .
            </p>
          </div>
        </div>
      </div>
    </div>
        </div>



      </div>


 <Swiper navigation={true} modules={[Navigation]} className="mySwiper h-[40rem]">

        <SwiperSlide>
          <div className="mt-16 mx-16 flex justify-around items-center rounded-3xl ">

<div className='relative p-10 text-center rounded-md mt-11 bg-[#FBF6F6] shadow-[9px_9px_12px_3px_rgba(0,_0,_0,_0.1)] text-TextGreen h-[490px] w-[370px]'>
    <div className='absolute top-[-80px] left-[110px]'><img src={courses1} alt="" /></div>
  

  <div className='flex justify-between items-center mt-10'>


    <div className='flex justify-center items-center'>

    <img  src={like} alt="" />
    <img className='mx-2' src={dislike} alt="" />
    <img src={favorite} alt="" />

    </div>
             <button class="text-TextGreen bg-[#BFF4E4] rounded-lg cursor-pointer p-2">وضعیت دوره</button>
   </div>

   <p className='rtl mt-6 text-[#1A1E21] text-xl'>آشنایی با برنامه نویسی با وردپرس</p>

    <div className='flex justify-between items-center mt-5'>

      <div className='flex justify-center items-center'>
        <img src={starRating} alt="" />
        <p className='ml-2'>4.8</p>
      </div>
       <div className='flex justify-between items-center'>
        <p className='mr-2'>جان اسمیت</p>
        <img src={profileimg} alt="" />
       </div>

    </div>


    <p className='rtl mt-3 ml-28  text-[#41A789] text-xs '> 50 ساعت سخنرانی ( 190 ساعت ) </p>

    <p className='rtl mt-5 leading-5 text-[#6D6767] text-xs text-right'> لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود.  </p>

    <img className='mt-5' src={line} alt="" />


    <div className='flex justify-between items-center mt-5'>
      <p className='text-sm text-PriceRed rtl'> 3,000,000 تومان</p>
      <p className='text-sm text-'>: هزینه تمام دوره</p>
    </div>

    <button class="w-[240px] h-[40px] text-white bg-BgGreen rounded-lg mt-6 ">الان ثبت نام کن</button>

</div>

<div className='relative p-10 text-center rounded-md mt-11 bg-[#FBF6F6] shadow-[9px_9px_12px_3px_rgba(0,_0,_0,_0.1)] text-TextGreen h-[490px] w-[370px]'>
    <div className='absolute top-[-80px] left-[110px]'><img src={courses1} alt="" /></div>
  

  <div className='flex justify-between items-center mt-10'>


    <div className='flex justify-center items-center'>

    <img  src={like} alt="" />
    <img className='mx-2' src={dislike} alt="" />
    <img src={favorite} alt="" />

    </div>
             <button class="text-TextGreen bg-[#BFF4E4] rounded-lg cursor-pointer p-2">وضعیت دوره</button>
   </div>

   <p className='rtl mt-6 text-[#1A1E21] text-xl'>آشنایی با برنامه نویسی با وردپرس</p>

    <div className='flex justify-between items-center mt-5'>

      <div className='flex justify-center items-center'>
        <img src={starRating} alt="" />
        <p className='ml-2'>4.8</p>
      </div>
       <div className='flex justify-between items-center'>
        <p className='mr-2'>جان اسمیت</p>
        <img src={profileimg} alt="" />
       </div>

    </div>


    <p className='rtl mt-3 ml-28  text-[#41A789] text-xs '> 50 ساعت سخنرانی ( 190 ساعت ) </p>

    <p className='rtl mt-5 leading-5 text-[#6D6767] text-xs text-right'> لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود.  </p>

    <img className='mt-5' src={line} alt="" />


    <div className='flex justify-between items-center mt-5'>
      <p className='text-sm text-PriceRed rtl'> 3,000,000 تومان</p>
      <p className='text-sm text-'>: هزینه تمام دوره</p>
    </div>

    <button class="w-[240px] h-[40px] text-white bg-BgGreen rounded-lg mt-6 ">الان ثبت نام کن</button>

</div>

<div className='relative p-10 text-center rounded-md mt-11 bg-[#FBF6F6] shadow-[9px_9px_12px_3px_rgba(0,_0,_0,_0.1)] text-TextGreen h-[490px] w-[370px]'>
    <div className='absolute top-[-80px] left-[110px]'><img src={courses1} alt="" /></div>
  

  <div className='flex justify-between items-center mt-10'>


    <div className='flex justify-center items-center'>

    <img  src={like} alt="" />
    <img className='mx-2' src={dislike} alt="" />
    <img src={favorite} alt="" />

    </div>
             <button class="text-TextGreen bg-[#BFF4E4] rounded-lg cursor-pointer p-2">وضعیت دوره</button>
   </div>

   <p className='rtl mt-6 text-[#1A1E21] text-xl'>آشنایی با برنامه نویسی با وردپرس</p>

    <div className='flex justify-between items-center mt-5'>

      <div className='flex justify-center items-center'>
        <img src={starRating} alt="" />
        <p className='ml-2'>4.8</p>
      </div>
       <div className='flex justify-between items-center'>
        <p className='mr-2'>جان اسمیت</p>
        <img src={profileimg} alt="" />
       </div>

    </div>


    <p className='rtl mt-3 ml-28  text-[#41A789] text-xs '> 50 ساعت سخنرانی ( 190 ساعت ) </p>

    <p className='rtl mt-5 leading-5 text-[#6D6767] text-xs text-right'> لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود.  </p>

    <img className='mt-5' src={line} alt="" />


    <div className='flex justify-between items-center mt-5'>
      <p className='text-sm text-PriceRed rtl'> 3,000,000 تومان</p>
      <p className='text-sm text-'>: هزینه تمام دوره</p>
    </div>

    <button class="w-[240px] h-[40px] text-white bg-BgGreen rounded-lg mt-6 ">الان ثبت نام کن</button>

</div>

            </div>
        </SwiperSlide>
        

        <SwiperSlide>
          <div className="mt-16 mx-16 flex justify-around items-center rounded-3xl ">

<div className='relative p-10 text-center rounded-md mt-11 bg-[#FBF6F6] shadow-[9px_9px_12px_3px_rgba(0,_0,_0,_0.1)] text-TextGreen h-[490px] w-[370px]'>
    <div className='absolute top-[-80px] left-[110px]'><img src={courses1} alt="" /></div>
  

  <div className='flex justify-between items-center mt-10'>


    <div className='flex justify-center items-center'>

    <img  src={like} alt="" />
    <img className='mx-2' src={dislike} alt="" />
    <img src={favorite} alt="" />

    </div>
             <button class="text-TextGreen bg-[#BFF4E4] rounded-lg cursor-pointer p-2">وضعیت دوره</button>
   </div>

   <p className='rtl mt-6 text-[#1A1E21] text-xl'>آشنایی با برنامه نویسی با وردپرس</p>

    <div className='flex justify-between items-center mt-5'>

      <div className='flex justify-center items-center'>
        <img src={starRating} alt="" />
        <p className='ml-2'>4.8</p>
      </div>
       <div className='flex justify-between items-center'>
        <p className='mr-2'>جان اسمیت</p>
        <img src={profileimg} alt="" />
       </div>

    </div>


    <p className='rtl mt-3 ml-28  text-[#41A789] text-xs '> 50 ساعت سخنرانی ( 190 ساعت ) </p>

    <p className='rtl mt-5 leading-5 text-[#6D6767] text-xs text-right'> لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود.  </p>

    <img className='mt-5' src={line} alt="" />


    <div className='flex justify-between items-center mt-5'>
      <p className='text-sm text-PriceRed rtl'> 3,000,000 تومان</p>
      <p className='text-sm text-'>: هزینه تمام دوره</p>
    </div>

    <button class="w-[240px] h-[40px] text-white bg-BgGreen rounded-lg mt-6 ">الان ثبت نام کن</button>

</div>

<div className='relative p-10 text-center rounded-md mt-11 bg-[#FBF6F6] shadow-[9px_9px_12px_3px_rgba(0,_0,_0,_0.1)] text-TextGreen h-[490px] w-[370px]'>
    <div className='absolute top-[-80px] left-[110px]'><img src={courses1} alt="" /></div>
  

  <div className='flex justify-between items-center mt-10'>


    <div className='flex justify-center items-center'>

    <img  src={like} alt="" />
    <img className='mx-2' src={dislike} alt="" />
    <img src={favorite} alt="" />

    </div>
             <button class="text-TextGreen bg-[#BFF4E4] rounded-lg cursor-pointer p-2">وضعیت دوره</button>
   </div>

   <p className='rtl mt-6 text-[#1A1E21] text-xl'>آشنایی با برنامه نویسی با وردپرس</p>

    <div className='flex justify-between items-center mt-5'>

      <div className='flex justify-center items-center'>
        <img src={starRating} alt="" />
        <p className='ml-2'>4.8</p>
      </div>
       <div className='flex justify-between items-center'>
        <p className='mr-2'>جان اسمیت</p>
        <img src={profileimg} alt="" />
       </div>

    </div>


    <p className='rtl mt-3 ml-28  text-[#41A789] text-xs '> 50 ساعت سخنرانی ( 190 ساعت ) </p>

    <p className='rtl mt-5 leading-5 text-[#6D6767] text-xs text-right'> لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود.  </p>

    <img className='mt-5' src={line} alt="" />


    <div className='flex justify-between items-center mt-5'>
      <p className='text-sm text-PriceRed rtl'> 3,000,000 تومان</p>
      <p className='text-sm text-'>: هزینه تمام دوره</p>
    </div>

    <button class="w-[240px] h-[40px] text-white bg-BgGreen rounded-lg mt-6 ">الان ثبت نام کن</button>

</div>




<div className='relative p-10 text-center rounded-md mt-11 bg-[#FBF6F6] shadow-[9px_9px_12px_3px_rgba(0,_0,_0,_0.1)] text-TextGreen h-[490px] w-[370px]'>
    <div className='absolute top-[-80px] left-[110px]'><img src={courses1} alt="" /></div>
  

  <div className='flex justify-between items-center mt-10'>


    <div className='flex justify-center items-center'>

    <img  src={like} alt="" />
    <img className='mx-2' src={dislike} alt="" />
    <img src={favorite} alt="" />

    </div>
             <button class="text-TextGreen bg-[#BFF4E4] rounded-lg cursor-pointer p-2">وضعیت دوره</button>
   </div>

   <p className='rtl mt-6 text-[#1A1E21] text-xl'>آشنایی با برنامه نویسی با وردپرس</p>

    <div className='flex justify-between items-center mt-5'>

      <div className='flex justify-center items-center'>
        <img src={starRating} alt="" />
        <p className='ml-2'>4.8</p>
      </div>
       <div className='flex justify-between items-center'>
        <p className='mr-2'>جان اسمیت</p>
        <img src={profileimg} alt="" />
       </div>

    </div>


    <p className='rtl mt-3 ml-28  text-[#41A789] text-xs '> 50 ساعت سخنرانی ( 190 ساعت ) </p>

    <p className='rtl mt-5 leading-5 text-[#6D6767] text-xs text-right'> لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود.  </p>

    <img className='mt-5' src={line} alt="" />


    <div className='flex justify-between items-center mt-5'>
      <p className='text-sm text-PriceRed rtl'> 3,000,000 تومان</p>
      <p className='text-sm text-'>: هزینه تمام دوره</p>
    </div>

    <button class="w-[240px] h-[40px] text-white bg-BgGreen rounded-lg mt-6 ">الان ثبت نام کن</button>

</div>

            </div>
        </SwiperSlide>
    </Swiper>


    
    </>
  )
}

export { CoursesDetailsForm };
