import React from "react"
import logoLanding from "./../../../assets/svg/Landing/logosite.svg"
import seachIcon from "./../../../assets/svg/Landing/searchicon.svg"
import { Link } from "react-router-dom"

const Header = () => {
  return (

  <div class="bg-emerald-300/85">
    <div class="flex justify-between items-center container mx-auto px-20 h-20">
    <div class="flex justify-center items-center">
    
    <Link to='/login'><button class="text-[#22445D] bg-[#00DF9D] rounded-lg cursor-pointer p-2">ورود / ثبت نام</button></Link>
      <div class=""><img src={seachIcon} alt="" /></div>
    </div>

    <div class="flex justify-between items-center ">
      <Link to='/about'> <span class="hover:bg-[#9e969657] hover:text-[#158B68] w-24 text-center rounded-lg cursor-pointer items-center p-1" >درباره ما</span></Link>
      <Link to='/news-articles'> <span class="hover:bg-[#9e969657] hover:text-[#158B68] mx-4 w-24 text-center rounded-lg cursor-pointer items-center p-1">مقالات</span></Link>
      <Link to=''> <span class="hover:bg-[#9e969657] hover:text-[#158B68] mr-4 w-24 text-center rounded-lg cursor-pointer items-center p-1">دوره ها</span></Link> 
      <Link to='/'> <span class="hover:bg-[#9e969657] hover:text-[#158B68] w-24 text-center rounded-lg cursor-pointer items-center p-1">صفحه اصلی </span></Link>
    </div>

    <div class="flex justify-center items-center">
      <span class="cursor-pointer">آکادمی اچ وان</span>
      <div ><img class="h-10" src={logoLanding} alt=""/></div>
    </div>
 
</div>
</div>

  )
}

export { Header };