import React from 'react'
import topLogo from "./../../../assets/svg/Landing/toplogo.svg"

const TopDescription = () => {
  return (
    <div class="bg-gradient-to-br from-emerald-300/85 from-35% to-white">

        <div class="container mx-auto flex items-center ">
            
             <div class="w-94 mb-5"><img class="mx-auto ml-8" src={topLogo} alt="" /></div>

             <div class="w-1/3 mx-auto rtl">
                <h1 class="text-2xl mb-10">آموزشگاه اچ وان</h1>
                <h3 class="leading-8	">لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود. تکه های لاتین متن نشان می دهد که یک پروژه در حال توسعه است. لورم اپسوم فقط برای توسعه دهندگان وب نیست. طراحان گرافیک نیز از آن با نرم افزارهای مختلفی مانند فوتوشاپ استفاده می کنند.</h3>
                <button class="w-[150px] h-[60px] text-white bg-[#12926C] rounded-full mt-[50px]"> شروع یادگیری</button>
             </div>
            
        </div>
    </div>
  )
}

export { TopDescription }