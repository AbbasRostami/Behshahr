import React, { useRef, useState } from 'react';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';


import courses1 from "./../../../assets/svg/Landing/courses1.svg"
import dislike from "./../../../assets/svg/Landing/CoursesDisLike.svg"
import favorite from "./../../../assets/svg/Landing/CoursesFavo.svg"
import like from "./../../../assets/svg/Landing/CoursesLike.svg"
import profileimg from "./../../../assets/svg/Landing/ProfileImage.svg"
import starRating from "./../../../assets/svg/Landing/StarRating.svg"
import line from "./../../../assets/svg/Landing/Line.svg"
const Courses = () => {
  return (
    <>

    <div class="text-center leading-10 mt-24 dark:text-white">
        <p class="text-[35px] font-bold">دوره های ما</p>
        <p class="leading-10">ساختن دنیایی بهتر، یک دوره در یک زمان</p>
    </div>


    <Swiper navigation={true} modules={[Navigation]} className="mySwiper h-[40rem]">

        <SwiperSlide>
          <div className="mt-16 mx-16 flex justify-around items-center rounded-3xl ">

<div className='relative p-10 text-center rounded-md mt-11 bg-[#FBF6F6] dark:bg-gray-800 shadow-[9px_9px_12px_3px_rgba(0,_0,_0,_0.1)] text-TextGreen h-[490px] w-[370px]'>
    <div className='absolute top-[-80px] left-[110px]'><img src={courses1} alt="" /></div>
  

  <div className='flex justify-between items-center mt-10'>


    <div className='flex justify-center items-center'>

    <img  src={like} alt="" />
    <img className='mx-2' src={dislike} alt="" />
    <img src={favorite} alt="" />

    </div>
             <button class="text-TextGreen bg-[#BFF4E4] rounded-lg cursor-pointer p-2">وضعیت دوره</button>
   </div>

   <p className='rtl mt-6 text-[#1A1E21] text-xl dark:text-white'>آشنایی با برنامه نویسی با وردپرس</p>

    <div className='flex justify-between items-center mt-5 dark:text-white'>

      <div className='flex justify-center items-center'>
        <img src={starRating} alt="" />
        <p className='ml-2'>4.8</p>
      </div>
       <div className='flex justify-between items-center '>
        <p className='mr-2'>جان اسمیت</p>
        <img src={profileimg} alt="" />
       </div>

    </div>


    <p className='rtl mt-3 ml-28  text-[#41A789] text-xs dark:text-white '> 50 ساعت سخنرانی ( 190 ساعت ) </p>

    <p className='rtl mt-5 leading-5 text-[#6D6767] text-xs text-right dark:text-white'> لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود.  </p>

    <img className='mt-5 ' src={line} alt="" />


    <div className='flex justify-between items-center mt-5 dark:text-white'>
      <p className='text-sm text-PriceRed rtl'> 3,000,000 تومان</p>
      <p className='text-sm text-'>: هزینه تمام دوره</p>
    </div>

    <button class="w-[240px] h-[40px] text-white bg-BgGreen rounded-lg mt-6 ">الان ثبت نام کن</button>

</div>

<div className='relative p-10 text-center rounded-md mt-11 bg-[#FBF6F6] dark:bg-gray-800 shadow-[9px_9px_12px_3px_rgba(0,_0,_0,_0.1)] text-TextGreen h-[490px] w-[370px]'>
    <div className='absolute top-[-80px] left-[110px]'><img src={courses1} alt="" /></div>
  

  <div className='flex justify-between items-center mt-10'>


    <div className='flex justify-center items-center'>

    <img  src={like} alt="" />
    <img className='mx-2' src={dislike} alt="" />
    <img src={favorite} alt="" />

    </div>
             <button class="text-TextGreen bg-[#BFF4E4] rounded-lg cursor-pointer p-2">وضعیت دوره</button>
   </div>

   <p className='rtl mt-6 text-[#1A1E21] text-xl dark:text-white'>آشنایی با برنامه نویسی با وردپرس</p>

    <div className='flex justify-between items-center mt-5 dark:text-white'>

      <div className='flex justify-center items-center'>
        <img src={starRating} alt="" />
        <p className='ml-2'>4.8</p>
      </div>
       <div className='flex justify-between items-center '>
        <p className='mr-2'>جان اسمیت</p>
        <img src={profileimg} alt="" />
       </div>

    </div>


    <p className='rtl mt-3 ml-28  text-[#41A789] text-xs dark:text-white '> 50 ساعت سخنرانی ( 190 ساعت ) </p>

    <p className='rtl mt-5 leading-5 text-[#6D6767] text-xs text-right dark:text-white'> لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود.  </p>

    <img className='mt-5 ' src={line} alt="" />


    <div className='flex justify-between items-center mt-5 dark:text-white'>
      <p className='text-sm text-PriceRed rtl'> 3,000,000 تومان</p>
      <p className='text-sm text-'>: هزینه تمام دوره</p>
    </div>

    <button class="w-[240px] h-[40px] text-white bg-BgGreen rounded-lg mt-6 ">الان ثبت نام کن</button>

</div>

<div className='relative p-10 text-center rounded-md mt-11 bg-[#FBF6F6] dark:bg-gray-800 shadow-[9px_9px_12px_3px_rgba(0,_0,_0,_0.1)] text-TextGreen h-[490px] w-[370px]'>
    <div className='absolute top-[-80px] left-[110px]'><img src={courses1} alt="" /></div>
  

  <div className='flex justify-between items-center mt-10'>


    <div className='flex justify-center items-center'>

    <img  src={like} alt="" />
    <img className='mx-2' src={dislike} alt="" />
    <img src={favorite} alt="" />

    </div>
             <button class="text-TextGreen bg-[#BFF4E4] rounded-lg cursor-pointer p-2">وضعیت دوره</button>
   </div>

   <p className='rtl mt-6 text-[#1A1E21] text-xl dark:text-white'>آشنایی با برنامه نویسی با وردپرس</p>

    <div className='flex justify-between items-center mt-5 dark:text-white'>

      <div className='flex justify-center items-center'>
        <img src={starRating} alt="" />
        <p className='ml-2'>4.8</p>
      </div>
       <div className='flex justify-between items-center '>
        <p className='mr-2'>جان اسمیت</p>
        <img src={profileimg} alt="" />
       </div>

    </div>


    <p className='rtl mt-3 ml-28  text-[#41A789] text-xs dark:text-white '> 50 ساعت سخنرانی ( 190 ساعت ) </p>

    <p className='rtl mt-5 leading-5 text-[#6D6767] text-xs text-right dark:text-white'> لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود.  </p>

    <img className='mt-5 ' src={line} alt="" />


    <div className='flex justify-between items-center mt-5 dark:text-white'>
      <p className='text-sm text-PriceRed rtl'> 3,000,000 تومان</p>
      <p className='text-sm text-'>: هزینه تمام دوره</p>
    </div>

    <button class="w-[240px] h-[40px] text-white bg-BgGreen rounded-lg mt-6 ">الان ثبت نام کن</button>

</div>

            </div>
        </SwiperSlide>
        

        <SwiperSlide>
          <div className="mt-16 mx-16 flex justify-around items-center rounded-3xl ">

<div className='relative p-10 text-center rounded-md mt-11 bg-[#FBF6F6] dark:bg-gray-800 shadow-[9px_9px_12px_3px_rgba(0,_0,_0,_0.1)] text-TextGreen h-[490px] w-[370px]'>
    <div className='absolute top-[-80px] left-[110px]'><img src={courses1} alt="" /></div>
  

  <div className='flex justify-between items-center mt-10'>


    <div className='flex justify-center items-center'>

    <img  src={like} alt="" />
    <img className='mx-2' src={dislike} alt="" />
    <img src={favorite} alt="" />

    </div>
             <button class="text-TextGreen bg-[#BFF4E4] rounded-lg cursor-pointer p-2">وضعیت دوره</button>
   </div>

   <p className='rtl mt-6 text-[#1A1E21] text-xl dark:text-white'>آشنایی با برنامه نویسی با وردپرس</p>

    <div className='flex justify-between items-center mt-5 dark:text-white'>

      <div className='flex justify-center items-center'>
        <img src={starRating} alt="" />
        <p className='ml-2'>4.8</p>
      </div>
       <div className='flex justify-between items-center '>
        <p className='mr-2'>جان اسمیت</p>
        <img src={profileimg} alt="" />
       </div>

    </div>


    <p className='rtl mt-3 ml-28  text-[#41A789] text-xs dark:text-white '> 50 ساعت سخنرانی ( 190 ساعت ) </p>

    <p className='rtl mt-5 leading-5 text-[#6D6767] text-xs text-right dark:text-white'> لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود.  </p>

    <img className='mt-5 ' src={line} alt="" />


    <div className='flex justify-between items-center mt-5 dark:text-white'>
      <p className='text-sm text-PriceRed rtl'> 3,000,000 تومان</p>
      <p className='text-sm text-'>: هزینه تمام دوره</p>
    </div>

    <button class="w-[240px] h-[40px] text-white bg-BgGreen rounded-lg mt-6 ">الان ثبت نام کن</button>

</div>

<div className='relative p-10 text-center rounded-md mt-11 bg-[#FBF6F6] dark:bg-gray-800 shadow-[9px_9px_12px_3px_rgba(0,_0,_0,_0.1)] text-TextGreen h-[490px] w-[370px]'>
    <div className='absolute top-[-80px] left-[110px]'><img src={courses1} alt="" /></div>
  

  <div className='flex justify-between items-center mt-10'>


    <div className='flex justify-center items-center'>

    <img  src={like} alt="" />
    <img className='mx-2' src={dislike} alt="" />
    <img src={favorite} alt="" />

    </div>
             <button class="text-TextGreen bg-[#BFF4E4] rounded-lg cursor-pointer p-2">وضعیت دوره</button>
   </div>

   <p className='rtl mt-6 text-[#1A1E21] text-xl dark:text-white'>آشنایی با برنامه نویسی با وردپرس</p>

    <div className='flex justify-between items-center mt-5 dark:text-white'>

      <div className='flex justify-center items-center'>
        <img src={starRating} alt="" />
        <p className='ml-2'>4.8</p>
      </div>
       <div className='flex justify-between items-center '>
        <p className='mr-2'>جان اسمیت</p>
        <img src={profileimg} alt="" />
       </div>

    </div>


    <p className='rtl mt-3 ml-28  text-[#41A789] text-xs dark:text-white '> 50 ساعت سخنرانی ( 190 ساعت ) </p>

    <p className='rtl mt-5 leading-5 text-[#6D6767] text-xs text-right dark:text-white'> لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود.  </p>

    <img className='mt-5 ' src={line} alt="" />


    <div className='flex justify-between items-center mt-5 dark:text-white'>
      <p className='text-sm text-PriceRed rtl'> 3,000,000 تومان</p>
      <p className='text-sm text-'>: هزینه تمام دوره</p>
    </div>

    <button class="w-[240px] h-[40px] text-white bg-BgGreen rounded-lg mt-6 ">الان ثبت نام کن</button>

</div>




<div className='relative p-10 text-center rounded-md mt-11 bg-[#FBF6F6] dark:bg-gray-800 shadow-[9px_9px_12px_3px_rgba(0,_0,_0,_0.1)] text-TextGreen h-[490px] w-[370px]'>
    <div className='absolute top-[-80px] left-[110px]'><img src={courses1} alt="" /></div>
  

  <div className='flex justify-between items-center mt-10'>


    <div className='flex justify-center items-center'>

    <img  src={like} alt="" />
    <img className='mx-2' src={dislike} alt="" />
    <img src={favorite} alt="" />

    </div>
             <button class="text-TextGreen bg-[#BFF4E4] rounded-lg cursor-pointer p-2">وضعیت دوره</button>
   </div>

   <p className='rtl mt-6 text-[#1A1E21] text-xl dark:text-white'>آشنایی با برنامه نویسی با وردپرس</p>

    <div className='flex justify-between items-center mt-5 dark:text-white'>

      <div className='flex justify-center items-center'>
        <img src={starRating} alt="" />
        <p className='ml-2'>4.8</p>
      </div>
       <div className='flex justify-between items-center '>
        <p className='mr-2'>جان اسمیت</p>
        <img src={profileimg} alt="" />
       </div>

    </div>


    <p className='rtl mt-3 ml-28  text-[#41A789] text-xs dark:text-white '> 50 ساعت سخنرانی ( 190 ساعت ) </p>

    <p className='rtl mt-5 leading-5 text-[#6D6767] text-xs text-right dark:text-white'> لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود.  </p>

    <img className='mt-5 ' src={line} alt="" />


    <div className='flex justify-between items-center mt-5 dark:text-white'>
      <p className='text-sm text-PriceRed rtl'> 3,000,000 تومان</p>
      <p className='text-sm text-'>: هزینه تمام دوره</p>
    </div>

    <button class="w-[240px] h-[40px] text-white bg-BgGreen rounded-lg mt-6 ">الان ثبت نام کن</button>

</div>

            </div>
        </SwiperSlide>
    </Swiper>

      <div className='flex justify-center items-center mt-2 '>
           <button class="w-[220px] h-[60px] text-white bg-[#12926C] dark:bg-gray-800 rounded-full ">مشاهده دوره های بیشتر</button>
      </div>

</>
  )
}

export { Courses }