import React from 'react'
import socials from "./../../../assets/svg/Landing/Socials.svg"
import person1 from "./../../../assets/svg/Landing/Person1.svg"
import person2 from "./../../../assets/svg/Landing/Person2.svg"
import person3 from "./../../../assets/svg/Landing/Person3.svg"


const Professionals = () => {
  return (
    <>

<div className='flex justify-center items-center relative bg-gradient-to-br from-emerald-300/75 from-35% to-white h-[600px] mt-16 '>


    <div class=" absolute top-[2rem] left-[40rem] text-center ">
        <p class="text-[35px] font-bold text-TextGray">حرفه ای های ما</p>
        <p class="leading-10 text-TextGray">ساختن دنیایی بهتر، یک دوره در یک زمان</p>
    </div>




    <div className='flex justify-center items-center w-[300px] h-[380px]  mt-36'>

<div className='flex flex-col items-center '>

    <img src={person1} alt="" />
    <p className='text-TextGray mt-5'>باب گرینفیلد</p>
    <p className='text-[#086CB5] text-sm mt-3'>استاد برنامه نویسی</p>
    <p className='text-[#21394B] rtl text-sm mt-8 text-center	'>لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود. </p>
    <img className="m-6" src={socials} alt="" />

</div>


</div>


<div className='flex justify-around items-center w-[300px] h-[380px]  mt-36 mx-28'>

<div className='flex flex-col items-center '>

    <img src={person2} alt="" />
    <p className='text-TextGray mt-5'>باب گرینفیلد</p>
    <p className='text-[#086CB5] text-sm mt-3'>استاد برنامه نویسی</p>
    <p className='text-[#21394B] rtl text-sm mt-8 text-center	'>لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود. </p>
    <img className="m-6" src={socials} alt="" />

</div>


</div>


<div className='flex justify-center items-center w-[300px] h-[380px]  mt-36'>

<div className='flex flex-col items-center '>

    <img src={person3} alt="" />
    <p className='text-TextGray mt-5'>باب گرینفیلد</p>
    <p className='text-[#086CB5] text-sm mt-3'>استاد برنامه نویسی</p>
    <p className='text-[#21394B] rtl text-sm mt-8 text-center	'>لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود. </p>
    <img className="m-6" src={socials} alt="" />

</div>


</div>


</div>

</>

  )
}

export { Professionals }