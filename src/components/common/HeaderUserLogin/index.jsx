import React from 'react'
import logoSite from "./../../../assets/svg/Landing/logoSite.svg"
// import seachIcon from "./../../../assets/svg/Landing/searchicon.svg"
import serach from "./../../../assets/svg/Landing/search.svg"
import topProfile from "./../../../assets/svg/Landing/topProfile.svg"
import topIcon from "./../../../assets/svg/Landing/topicon.svg"

const HeaderUserlogin = () => {
  return (
    <div className="bg-emerald-300/85 ">
    <div className="flex justify-between items-center container  mx-auto px-20 h-20">
    <div className="flex ">
    

      <div className="absolute left-[3.2rem] top-0"><img src={topProfile} alt="" /></div>
      <div className="absolute left-[8.7rem] top-[0.8rem]"><img className="h-[2.7rem] w-[2rem]" src={topIcon} alt="" /></div>
      <div className="absolute left-[12rem] top-3"><img className="h-[3rem] w-[2rem]" src={serach} alt="" /></div>
    </div>

    <div className="flex justify-between items-center ">
      <span className="cursor-pointer" >درباره ما</span>
      <span className="ml-10 cursor-pointer">مقالات</span>
      <span className="mx-10 cursor-pointer">دوره ها</span>
     <div className="bg-[#5f5d5d57] w-24 text-center rounded-lg text-[#158B68] cursor-pointer items-center p-1">صفحه اصلی </div>
    </div>

    <div className="flex justify-center items-center">
      <span className="cursor-pointer">آکادمی اچ وان</span>
      <div ><img className="h-10" src={logoSite} alt=""/></div>
    </div>
 
</div>
</div>
  )
}

export { HeaderUserlogin }