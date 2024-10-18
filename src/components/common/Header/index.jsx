import React from "react"
import logoLanding from "./../../../assets/svg/Landing/logosite.svg"
import seachIcon from "./../../../assets/svg/Landing/searchicon.svg"

const Header = () => {
  return (

  <div class="bg-emerald-300/85">
    <div class="flex justify-between items-center container mx-auto px-20 h-20">
    <div class="flex justify-center items-center">
    <button class="text-[#22445D] bg-[#00DF9D] rounded-lg cursor-pointer p-2">ورود / ثبت نام</button>
      <div class=""><img src={seachIcon} alt="" /></div>
    </div>

    <div class="flex justify-between items-center ">
      <span class="hover:bg-[#9e969657] hover:text-[#158B68] w-24 text-center rounded-lg cursor-pointer items-center p-1" >درباره ما</span>
      <span class="hover:bg-[#9e969657] hover:text-[#158B68] w-24 text-center rounded-lg cursor-pointer items-center p-1">مقالات</span>
      <span class="hover:bg-[#9e969657] hover:text-[#158B68] w-24 text-center rounded-lg cursor-pointer items-center p-1">دوره ها</span>
      <span class="hover:bg-[#9e969657] hover:text-[#158B68] w-24 text-center rounded-lg cursor-pointer items-center p-1">صفحه اصلی </span>
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