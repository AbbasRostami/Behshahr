import React from 'react'
import { Header } from './../../components/common/Header'
import { TopDescription } from '../../components/LandingHolder/Top-Description'
import { OurServices } from '../../components/LandingHolder/OurServices'
import { Statistics } from '../../components/LandingHolder/Statistics'
import { Category } from '../../components/LandingHolder/Category'
import { Courses } from '../../components/LandingHolder/Courses'
import { Professionals } from '../../components/LandingHolder/Professionals'
import { NewsArticles } from '../../components/LandingHolder/News-articles'
import { Suggestions } from '../../components/LandingHolder/Suggestions'
import { Footer } from '../../components/common/Footer'

const Landing = () => {
  return (
    <>
        <div className='dark:bg-slate-900'>
        <Header />
        <TopDescription />
        <OurServices />
        <Statistics />
        <Category />
        <Courses />
        <Professionals />
        <NewsArticles />
        <Suggestions />
        <Footer />
        </div>
    </>
  )
}

export { Landing }