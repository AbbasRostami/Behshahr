import React from "react"
import logoLanding from "./../../../assets/svg/Landing/logosite.svg"
import seachIcon from "./../../../assets/svg/Landing/searchicon.svg"
import { Link } from "react-router-dom"
import DarkLightToggle from "../DarkMode"

const Header = () => {
  return (

  <div class="bg-gradient-to-r from-green-300 to-gray-50 dark:dark:bg-slate-900 dark:bg-none">
    <div class="flex justify-between items-center mx-auto px-20 h-20">
    <div class="flex justify-center items-center">
    
    <Link to='/login'><button class="text-[#22445D] bg-[#00DF9D] dark:bg-gray-800 dark:text-white rounded-lg cursor-pointer p-2">ورود / ثبت نام</button></Link>
      <div class=""><img src={seachIcon} alt="" /></div>
      <DarkLightToggle />
    </div>

    <div class="flex justify-between items-center dark:text-white">
      <Link to='/about'> <span class="hover:bg-[#9e969657] hover:text-[#158B68] w-24 text-center rounded-lg cursor-pointer items-center p-1" >درباره ما</span></Link>
      <Link to='/news-articles'> <span class="hover:bg-[#9e969657] hover:text-[#158B68] mx-4 w-24 text-center rounded-lg cursor-pointer items-center p-1">مقالات</span></Link>
      <Link to=''> <span class="hover:bg-[#9e969657] hover:text-[#158B68] mr-4 w-24 text-center rounded-lg cursor-pointer items-center p-1">دوره ها</span></Link> 
      <Link to='/'> <span class="hover:bg-[#9e969657] hover:text-[#158B68] w-24 text-center rounded-lg cursor-pointer items-center p-1">صفحه اصلی </span></Link>
    </div>

    <div class="flex justify-center items-center dark:text-white">
    <Link to='/'><span class="cursor-pointer">آکادمی اچ وان</span></Link>
    <Link to='/'><img class="h-10 cursor-pointer" src={logoLanding} alt=""/></Link>
    </div>
 
</div>
</div>

  )
}

export { Header };