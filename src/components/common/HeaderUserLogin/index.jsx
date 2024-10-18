import React from 'react'
import logoSite from "./../../../assets/svg/Landing/logoSite.svg"
// import seachIcon from "./../../../assets/svg/Landing/searchicon.svg"
import serach from "./../../../assets/svg/Landing/search.svg"
import topProfile from "./../../../assets/svg/Landing/topProfile.svg"
import topIcon from "./../../../assets/svg/Landing/topicon.svg"
import { Link } from 'react-router-dom'

const HeaderUserlogin = () => {
  return (
    <div className="bg-gradient-to-br from-emerald-300/65 from-15% to-white ">
    <div className="flex justify-between items-center container  mx-auto px-20 h-20">
    <div className="flex ">
    

      <div className="absolute left-[3.2rem] top-0"><img src={topProfile} alt="" /></div>
      <div className="absolute left-[8.7rem] top-[0.8rem]"><img className="h-[2.7rem] w-[2rem]" src={topIcon} alt="" /></div>
      <div className="absolute left-[12rem] top-3"><img className="h-[3rem] w-[2rem]" src={serach} alt="" /></div>
    </div>

    <div class="flex justify-between items-center ">
      <Link to='/about'> <span class="hover:bg-[#9e969657] hover:text-[#158B68] w-24 text-center rounded-lg cursor-pointer items-center p-1" >درباره ما</span></Link>
      <Link to='/news-articles'> <span class="hover:bg-[#9e969657] hover:text-[#158B68] mx-4 w-24 text-center rounded-lg cursor-pointer items-center p-1">مقالات</span></Link>
      <Link to=''> <span class="hover:bg-[#9e969657] hover:text-[#158B68] mr-4 w-24 text-center rounded-lg cursor-pointer items-center p-1">دوره ها</span></Link> 
      <Link to='/'> <span class="hover:bg-[#9e969657] hover:text-[#158B68] w-24 text-center rounded-lg cursor-pointer items-center p-1">صفحه اصلی </span></Link>
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