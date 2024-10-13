import React from 'react'
import { Header } from '../../components/common/Header'
import { TopDescription } from '../../components/LandingHolder/Top-Description'
import { OurServices } from '../../components/LandingHolder/OurServices'
import { Statistics } from '../../components/LandingHolder/Statistics'
import { Category } from '../../components/LandingHolder/Category'
import { Courses } from '../../components/LandingHolder/Courses'
import { Professionals } from '../../components/LandingHolder/Professionals'
import { NewsArticles } from '../../components/LandingHolder/News-articles'
import { Suggestions } from '../../components/LandingHolder/Suggestions'

const Landing = () => {
  return (
    <div>
        
        <Header />
        <TopDescription />
        <OurServices />
        <Statistics />
        <Category />
        <Courses />
        <Professionals />
        <NewsArticles />
        <Suggestions />


    </div>
  )
}

export {Landing}