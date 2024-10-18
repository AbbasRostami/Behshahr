import React from 'react'
import line from "../assets/line.svg"
import newsPic from "../assets/newsPick.svg"
import dislike from "../assets/dislike.svg"
import favorite from "../assets/favo.svg"
import like from "../assets/coursesLike.svg"
import profileimg from "../assets/profileimg.svg"
import starRating from "../assets/star.svg"

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

const ArticlesListUnder = () => {
  return (
    <>
    
    
    
     <div class="text-center leading-10 mt-14">
        <p class="text-[35px] font-bold">اخبار و مقالات</p>
        <p class="leading-10">ساختن دنیایی بهتر، یک دوره در یک زمان</p>
    </div>

    <Swiper navigation={true} modules={[Navigation]} className="mySwiper h-[40rem]">

          <SwiperSlide>
          
           {/* First News Card */}
          
          <div className='flex justify-around items-center px-16'>

            <div className="  flex justify-around items-center rounded-3xl ">

      <div className='relative h-[540px] w-[370px] text-center rounded-[1.5rem] mt-11 bg-[#FBF6F6] shadow-[9px_9px_12px_3px_rgba(0,_0,_0,_0.1)] text-TextGreen '>
  
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

              <p className='rtl mt-3 text-[#1A1E21] text-xl rtl text-right px-5'>آشنایی با برنامه نویسی با وردپرس</p>

        <div className='flex justify-between items-center mt-5 px-5'>

          <div className='flex justify-center items-center '>
            <img src={starRating} alt="" />
            <p className='ml-2'>4.8</p>
          </div>

          <div className='flex justify-between items-center'>
            <p className='mr-2'>جان اسمیت</p>
            <img src={profileimg} alt="" />
          </div>

        </div>

          <p className='rtl mt-5 px-5 leading-5 text-[#6D6767] text-xs text-right'> لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود.  </p>

                <img className='mt-5 px-5' src={line} alt="" />


          <p className='text-base  text-[#807A7A] mt-1'>مشاهده جزئیات</p>


</div>
              </div> 


          {/* Two News Card*/}

            <div className="  flex justify-around items-center rounded-3xl ">

<div className='relative h-[540px] w-[370px] text-center rounded-[1.5rem] mt-11 bg-[#FBF6F6] shadow-[9px_9px_12px_3px_rgba(0,_0,_0,_0.1)] text-TextGreen '>

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

        <p className='rtl mt-3 text-[#1A1E21] text-xl rtl text-right px-5'>آشنایی با برنامه نویسی با وردپرس</p>

  <div className='flex justify-between items-center mt-5 px-5'>

    <div className='flex justify-center items-center '>
      <img src={starRating} alt="" />
      <p className='ml-2'>4.8</p>
    </div>

    <div className='flex justify-between items-center'>
      <p className='mr-2'>جان اسمیت</p>
      <img src={profileimg} alt="" />
    </div>

  </div>

    <p className='rtl mt-5 px-5 leading-5 text-[#6D6767] text-xs text-right'> لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود.  </p>

          <img className='mt-5 px-5' src={line} alt="" />


    <p className='text-base  text-[#807A7A] mt-1'>مشاهده جزئیات</p>


</div>
              </div>

           {/* Three News Card*/}

             <div className="  flex justify-around items-center rounded-3xl ">

<div className='relative h-[540px] w-[370px] text-center rounded-[1.5rem] mt-11 bg-[#FBF6F6] shadow-[9px_9px_12px_3px_rgba(0,_0,_0,_0.1)] text-TextGreen '>

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

        <p className='rtl mt-3 text-[#1A1E21] text-xl rtl text-right px-5'>آشنایی با برنامه نویسی با وردپرس</p>

  <div className='flex justify-between items-center mt-5 px-5'>

    <div className='flex justify-center items-center '>
      <img src={starRating} alt="" />
      <p className='ml-2'>4.8</p>
    </div>

    <div className='flex justify-between items-center'>
      <p className='mr-2'>جان اسمیت</p>
      <img src={profileimg} alt="" />
    </div>

  </div>

    <p className='rtl mt-5 px-5 leading-5 text-[#6D6767] text-xs text-right'> لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود.  </p>

          <img className='mt-5 px-5' src={line} alt="" />


    <p className='text-base  text-[#807A7A] mt-1'>مشاهده جزئیات</p>


</div>
              </div>

              </div>
          </SwiperSlide>


          <SwiperSlide>
          
           {/* First News Card */}
          
          <div className='flex justify-around items-center px-16'>

            <div className="  flex justify-around items-center rounded-3xl ">

      <div className='relative h-[540px] w-[370px] text-center rounded-[1.5rem] mt-11 bg-[#FBF6F6] shadow-[9px_9px_12px_3px_rgba(0,_0,_0,_0.1)] text-TextGreen '>
  
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

              <p className='rtl mt-3 text-[#1A1E21] text-xl rtl text-right px-5'>آشنایی با برنامه نویسی با وردپرس</p>

        <div className='flex justify-between items-center mt-5 px-5'>

          <div className='flex justify-center items-center '>
            <img src={starRating} alt="" />
            <p className='ml-2'>4.8</p>
          </div>

          <div className='flex justify-between items-center'>
            <p className='mr-2'>جان اسمیت</p>
            <img src={profileimg} alt="" />
          </div>

        </div>

          <p className='rtl mt-5 px-5 leading-5 text-[#6D6767] text-xs text-right'> لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود.  </p>

                <img className='mt-5 px-5' src={line} alt="" />


          <p className='text-base  text-[#807A7A] mt-1'>مشاهده جزئیات</p>


</div>
              </div> 


          {/* Two News Card*/}

            <div className="  flex justify-around items-center rounded-3xl ">

<div className='relative h-[540px] w-[370px] text-center rounded-[1.5rem] mt-11 bg-[#FBF6F6] shadow-[9px_9px_12px_3px_rgba(0,_0,_0,_0.1)] text-TextGreen '>

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

        <p className='rtl mt-3 text-[#1A1E21] text-xl rtl text-right px-5'>آشنایی با برنامه نویسی با وردپرس</p>

  <div className='flex justify-between items-center mt-5 px-5'>

    <div className='flex justify-center items-center '>
      <img src={starRating} alt="" />
      <p className='ml-2'>4.8</p>
    </div>

    <div className='flex justify-between items-center'>
      <p className='mr-2'>جان اسمیت</p>
      <img src={profileimg} alt="" />
    </div>

  </div>

    <p className='rtl mt-5 px-5 leading-5 text-[#6D6767] text-xs text-right'> لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود.  </p>

          <img className='mt-5 px-5' src={line} alt="" />


    <p className='text-base  text-[#807A7A] mt-1'>مشاهده جزئیات</p>


</div>
              </div>

           {/* Three News Card*/}

             <div className="  flex justify-around items-center rounded-3xl ">

<div className='relative h-[540px] w-[370px] text-center rounded-[1.5rem] mt-11 bg-[#FBF6F6] shadow-[9px_9px_12px_3px_rgba(0,_0,_0,_0.1)] text-TextGreen '>

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

        <p className='rtl mt-3 text-[#1A1E21] text-xl rtl text-right px-5'>آشنایی با برنامه نویسی با وردپرس</p>

  <div className='flex justify-between items-center mt-5 px-5'>

    <div className='flex justify-center items-center '>
      <img src={starRating} alt="" />
      <p className='ml-2'>4.8</p>
    </div>

    <div className='flex justify-between items-center'>
      <p className='mr-2'>جان اسمیت</p>
      <img src={profileimg} alt="" />
    </div>

  </div>

    <p className='rtl mt-5 px-5 leading-5 text-[#6D6767] text-xs text-right'> لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود.  </p>

          <img className='mt-5 px-5' src={line} alt="" />


    <p className='text-base  text-[#807A7A] mt-1'>مشاهده جزئیات</p>


</div>
              </div>

              </div>
          </SwiperSlide>

          
</Swiper>

    <div className='flex justify-center items-center mt-2'>
           <button class="w-[220px] h-[60px] text-white bg-[#12926C] rounded-full ">مشاهده مقالات بیشتر</button>
      </div>
    
    
    </>
  )
}

export { ArticlesListUnder }