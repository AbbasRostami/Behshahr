import React from 'react'
import iconCarrier0 from "./../../../assets/svg/Landing/iconCarrier.svg"
import iconCarrier1 from "./../../../assets/svg/Landing/iconCarrier-1.svg"
import iconCarrier2 from "./../../../assets/svg/Landing/iconCarrier-2.svg"
import iconCarrier3 from "./../../../assets/svg/Landing/iconCarrier-3.svg"

const Statistics = () => {
  return (


    <div className=" bg-BgGreen mx-16 flex justify-around items-center rounded-3xl  h-[230px] dark:bg-gray-800">


        <div className='py-5 text-center text-TextGreen dark:text-white '>
            <img src={iconCarrier1} alt="" />
            <p>مقاله آموزشی</p>
            <p className='font-medium text-2xl'>28</p>
        </div>

        
        <div className='p-5 text-center text-TextGreen dark:text-white'>
        <img src={iconCarrier0} alt="" />
            <p>دوره آموزشی</p>
            <p className='font-medium text-2xl'>182</p>
        </div>


        <div className='p-5 text-center text-TextGreen dark:text-white'>
        <img src={iconCarrier3} alt="" />
            <p>داشنجو</p>
            <p className='font-medium text-2xl'>81</p>
        </div>


        <div className='p-5 text-center text-TextGreen dark:text-white'>
        <img src={iconCarrier2} alt="" />
            <p>اساتید حرفه ای</p>
            <p className='font-medium text-2xl'>52</p>
        </div>


    </div>
   
  )
}

export { Statistics }