import React from 'react'
import line from "./../../../assets/svg/Landing/Line.svg"
import newsPic from "./../../../assets/svg/Landing/newspic.svg"
import dislike from "./../../../assets/svg/Landing/CoursesDisLike.svg"
import favorite from "./../../../assets/svg/Landing/CoursesFavo.svg"
import like from "./../../../assets/svg/Landing/CoursesLike.svg"
import profileimg from "./../../../assets/svg/Landing/ProfileImage.svg"
import starRating from "./../../../assets/svg/Landing/StarRating.svg"

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

const NewsArticles = () => {
  return (
    <>
    
    
    
     <div class="text-center leading-10 mt-14 dark:text-white">
        <p class="text-[35px] font-bold">اخبار و مقالات</p>
        <p class="leading-10">ساختن دنیایی بهتر، یک دوره در یک زمان</p>
    </div>

    <Swiper navigation={true} modules={[Navigation]} className="mySwiper h-[40rem]">

          <SwiperSlide>
          
           {/* First News Card */}
          
          <div className='flex justify-around items-center px-16'>

            <div className="  flex justify-around items-center rounded-3xl ">

      <div className='relative h-[540px] w-[370px] text-center rounded-[1.5rem] mt-11 dark:bg-gray-800 bg-[#FBF6F6] shadow-[9px_9px_12px_3px_rgba(0,_0,_0,_0.1)] text-TextGreen '>
  
          <div>
            <img className='p-0 object-cover h-full w-full' src={newsPic} alt="" />
          </div>



        <div className='flex justify-between items-center mt-5 px-5'>


          <div className='flex justify-center items-center '>
              <img  src={like} alt="" />
              <img className='mx-2' src={dislike} alt="" />
              <img src={favorite} alt="" />
          </div>

                  <button class="text-TextGreen bg-[#BFF4E4] rounded-lg cursor-pointer p-2 w-auto-[120px]">وضعیت دوره</button>
                  
        </div>

              <p className='rtl mt-3 text-[#1A1E21] text-xl rtl text-right px-5 dark:text-white'>آشنایی با برنامه نویسی با وردپرس</p>

        <div className='flex justify-between items-center mt-5 px-5 dark:text-white'>

          <div className='flex justify-center items-center '>
            <img src={starRating} alt="" />
            <p className='ml-2'>4.8</p>
          </div>

          <div className='flex justify-between items-center'>
            <p className='mr-2'>جان اسمیت</p>
            <img src={profileimg} alt="" />
          </div>

        </div>

          <p className='rtl mt-5 px-5 leading-5 text-[#6D6767] text-xs text-right dark:text-white'> لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود.  </p>

                <img className='mt-5 px-5' src={line} alt="" />


          <p className='text-base  text-[#807A7A] mt-1 dark:text-white'>مشاهده جزئیات</p>


</div>
              </div> 


          {/* Two News Card*/}

            <div className="  flex justify-around items-center rounded-3xl ">

<div className='relative h-[540px] w-[370px] text-center rounded-[1.5rem] mt-11 dark:bg-gray-800 bg-[#FBF6F6] shadow-[9px_9px_12px_3px_rgba(0,_0,_0,_0.1)] text-TextGreen '>

    <div>
      <img className='p-0 object-cover h-full w-full' src={newsPic} alt="" />
    </div>



  <div className='flex justify-between items-center mt-5 px-5'>


    <div className='flex justify-center items-center '>
        <img  src={like} alt="" />
        <img className='mx-2' src={dislike} alt="" />
        <img src={favorite} alt="" />
    </div>

            <button class="text-TextGreen bg-[#BFF4E4] rounded-lg cursor-pointer p-2 w-auto-[120px]">وضعیت دوره</button>
            
  </div>

        <p className='rtl mt-3 text-[#1A1E21] text-xl rtl text-right px-5 dark:text-white'>آشنایی با برنامه نویسی با وردپرس</p>

  <div className='flex justify-between items-center mt-5 px-5 dark:text-white'>

    <div className='flex justify-center items-center '>
      <img src={starRating} alt="" />
      <p className='ml-2'>4.8</p>
    </div>

    <div className='flex justify-between items-center'>
      <p className='mr-2'>جان اسمیت</p>
      <img src={profileimg} alt="" />
    </div>

  </div>

    <p className='rtl mt-5 px-5 leading-5 text-[#6D6767] text-xs text-right dark:text-white'> لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود.  </p>

          <img className='mt-5 px-5' src={line} alt="" />


    <p className='text-base  text-[#807A7A] mt-1 dark:text-white'>مشاهده جزئیات</p>


</div>
              </div>

           {/* Three News Card*/}

             <div className="  flex justify-around items-center rounded-3xl ">

<div className='relative h-[540px] w-[370px] text-center rounded-[1.5rem] mt-11 dark:bg-gray-800 bg-[#FBF6F6] shadow-[9px_9px_12px_3px_rgba(0,_0,_0,_0.1)] text-TextGreen '>

    <div>
      <img className='p-0 object-cover h-full w-full' src={newsPic} alt="" />
    </div>



  <div className='flex justify-between items-center mt-5 px-5'>


    <div className='flex justify-center items-center '>
        <img  src={like} alt="" />
        <img className='mx-2' src={dislike} alt="" />
        <img src={favorite} alt="" />
    </div>

            <button class="text-TextGreen bg-[#BFF4E4] rounded-lg cursor-pointer p-2 w-auto-[120px]">وضعیت دوره</button>
            
  </div>

        <p className='rtl mt-3 text-[#1A1E21] text-xl rtl text-right px-5 dark:text-white'>آشنایی با برنامه نویسی با وردپرس</p>

  <div className='flex justify-between items-center mt-5 px-5 dark:text-white'>

    <div className='flex justify-center items-center '>
      <img src={starRating} alt="" />
      <p className='ml-2'>4.8</p>
    </div>

    <div className='flex justify-between items-center'>
      <p className='mr-2'>جان اسمیت</p>
      <img src={profileimg} alt="" />
    </div>

  </div>

    <p className='rtl mt-5 px-5 leading-5 text-[#6D6767] text-xs text-right dark:text-white'> لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود.  </p>

          <img className='mt-5 px-5' src={line} alt="" />


    <p className='text-base  text-[#807A7A] mt-1 dark:text-white'>مشاهده جزئیات</p>


</div>
              </div>

              </div>
          </SwiperSlide>


          <SwiperSlide>
          
           {/* First News Card */}
          
          <div className='flex justify-around items-center px-16'>

            <div className="  flex justify-around items-center rounded-3xl ">

      <div className='relative h-[540px] w-[370px] text-center rounded-[1.5rem] mt-11 dark:bg-gray-800 bg-[#FBF6F6] shadow-[9px_9px_12px_3px_rgba(0,_0,_0,_0.1)] text-TextGreen '>
  
          <div>
            <img className='p-0 object-cover h-full w-full' src={newsPic} alt="" />
          </div>



        <div className='flex justify-between items-center mt-5 px-5'>


          <div className='flex justify-center items-center '>
              <img  src={like} alt="" />
              <img className='mx-2' src={dislike} alt="" />
              <img src={favorite} alt="" />
          </div>

                  <button class="text-TextGreen bg-[#BFF4E4] rounded-lg cursor-pointer p-2 w-auto-[120px]">وضعیت دوره</button>
                  
        </div>

              <p className='rtl mt-3 text-[#1A1E21] text-xl rtl text-right px-5 dark:text-white'>آشنایی با برنامه نویسی با وردپرس</p>

        <div className='flex justify-between items-center mt-5 px-5 dark:text-white'>

          <div className='flex justify-center items-center '>
            <img src={starRating} alt="" />
            <p className='ml-2'>4.8</p>
          </div>

          <div className='flex justify-between items-center'>
            <p className='mr-2'>جان اسمیت</p>
            <img src={profileimg} alt="" />
          </div>

        </div>

          <p className='rtl mt-5 px-5 leading-5 text-[#6D6767] text-xs text-right dark:text-white'> لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود.  </p>

                <img className='mt-5 px-5' src={line} alt="" />


          <p className='text-base  text-[#807A7A] mt-1 dark:text-white'>مشاهده جزئیات</p>


</div>
              </div> 


          {/* Two News Card*/}

            <div className="  flex justify-around items-center rounded-3xl ">

<div className='relative h-[540px] w-[370px] text-center rounded-[1.5rem] mt-11 dark:bg-gray-800 bg-[#FBF6F6] shadow-[9px_9px_12px_3px_rgba(0,_0,_0,_0.1)] text-TextGreen '>

    <div>
      <img className='p-0 object-cover h-full w-full' src={newsPic} alt="" />
    </div>



  <div className='flex justify-between items-center mt-5 px-5'>


    <div className='flex justify-center items-center '>
        <img  src={like} alt="" />
        <img className='mx-2' src={dislike} alt="" />
        <img src={favorite} alt="" />
    </div>

            <button class="text-TextGreen bg-[#BFF4E4] rounded-lg cursor-pointer p-2 w-auto-[120px]">وضعیت دوره</button>
            
  </div>

        <p className='rtl mt-3 text-[#1A1E21] text-xl rtl text-right px-5 dark:text-white'>آشنایی با برنامه نویسی با وردپرس</p>

  <div className='flex justify-between items-center mt-5 px-5 dark:text-white'>

    <div className='flex justify-center items-center '>
      <img src={starRating} alt="" />
      <p className='ml-2'>4.8</p>
    </div>

    <div className='flex justify-between items-center'>
      <p className='mr-2'>جان اسمیت</p>
      <img src={profileimg} alt="" />
    </div>

  </div>

    <p className='rtl mt-5 px-5 leading-5 text-[#6D6767] text-xs text-right dark:text-white'> لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود.  </p>

          <img className='mt-5 px-5' src={line} alt="" />


    <p className='text-base  text-[#807A7A] mt-1 dark:text-white'>مشاهده جزئیات</p>


</div>
              </div>

           {/* Three News Card*/}

             <div className="  flex justify-around items-center rounded-3xl ">

<div className='relative h-[540px] w-[370px] text-center rounded-[1.5rem] mt-11 dark:bg-gray-800 bg-[#FBF6F6] shadow-[9px_9px_12px_3px_rgba(0,_0,_0,_0.1)] text-TextGreen '>

    <div>
      <img className='p-0 object-cover h-full w-full' src={newsPic} alt="" />
    </div>



  <div className='flex justify-between items-center mt-5 px-5'>


    <div className='flex justify-center items-center '>
        <img  src={like} alt="" />
        <img className='mx-2' src={dislike} alt="" />
        <img src={favorite} alt="" />
    </div>

            <button class="text-TextGreen bg-[#BFF4E4] rounded-lg cursor-pointer p-2 w-auto-[120px]">وضعیت دوره</button>
            
  </div>

        <p className='rtl mt-3 text-[#1A1E21] text-xl rtl text-right px-5 dark:text-white'>آشنایی با برنامه نویسی با وردپرس</p>

  <div className='flex justify-between items-center mt-5 px-5 dark:text-white'>

    <div className='flex justify-center items-center '>
      <img src={starRating} alt="" />
      <p className='ml-2'>4.8</p>
    </div>

    <div className='flex justify-between items-center'>
      <p className='mr-2'>جان اسمیت</p>
      <img src={profileimg} alt="" />
    </div>

  </div>

    <p className='rtl mt-5 px-5 leading-5 text-[#6D6767] text-xs text-right dark:text-white'> لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود.  </p>

          <img className='mt-5 px-5' src={line} alt="" />


    <p className='text-base  text-[#807A7A] mt-1 dark:text-white'>مشاهده جزئیات</p>


</div>
              </div>

              </div>
          </SwiperSlide>

          
</Swiper>

    <div className='flex justify-center items-center mt-2 '>
           <button class="w-[220px] h-[60px] text-white bg-[#12926C] rounded-full dark:bg-gray-800">مشاهده مقالات بیشتر</button>
      </div>
    
    
    </>
  )
}

export { NewsArticles }