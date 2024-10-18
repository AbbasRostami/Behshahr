import React from 'react'
import our1 from './../../../assets/svg/Landing/our1.svg'
import our2 from './../../../assets/svg/Landing/our2.svg'
import our3 from './../../../assets/svg/Landing/our3.svg'
import our4 from './../../../assets/svg/Landing/our4.svg'
import our6 from './../../../assets/svg/Landing/our5.svg'
import our5 from './../../../assets/svg/Landing/our6.svg'

const OurServices = () => {
  return (

<>
    <div class="text-center leading-10">
        <p class="text-[35px] font-bold mt-10">خدمات ما</p>
        <p class="leading-10">ما فرصت آماده شدن برای زندگی را فراهم می کنیم</p>
    </div>

    <div class="px-16 py-16  text-[#22445D] grid grid-cols-3 gap-2 rtl">
        
    <div class="rounded p-5 ">
        <div class="flex justify-center items-center">
        <img src={our1} alt="" />
        <div class="mr-5 ">
        <p class="leading-10">اساتید مجرب</p>
        <p class="text-sm"> لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود .</p>
        </div>
        </div>
    </div>

    <div class="rounded p-5 ">
        <div class="flex justify-center items-center">
        <img src={our2} alt="" />
        <div class="mr-5 ">
        <p class="leading-10">مشاوره رایگان</p>
        <p class="text-sm">لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود .</p>
        </div>
        </div>
    </div>

    <div class="rounded p-5 ">
        <div class="flex justify-center items-center">
        <img src={our3} alt="" />
        <div class="mr-5 ">
        <p class="leading-10">فرصت های شغلی</p>
        <p class="text-sm">لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود .</p>
        </div>
        </div>
    </div>

    <div class="rounded p-5 ">
        <div class="flex justify-center items-center">
        <img src={our4} alt="" />
        <div class="mr-5 ">
        <p class="leading-10">ارائه مدرک معتبر</p>
        <p class="text-sm">لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود.</p>
        </div>
        </div>
    </div>

    <div class="rounded p-5 ">
        <div class="flex justify-center items-center">
        <img src={our5} alt="" />
        <div class="mr-5 ">
        <p class="leading-10">دوره های جامع و متنوع</p>
        <p class="text-sm">لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود.</p>
        </div>
        </div>
    </div>

    <div class="rounded p-5 ">
        <div class="flex justify-center items-center">
        <img src={our6} alt="" />
        <div class="mr-5 ">
        <p class="leading-10">آموزش پروژه محور</p>
        <p class="text-sm">لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود.</p>
        </div>
        </div>
    </div>



  </div>
  </>
  )
}

export { OurServices }