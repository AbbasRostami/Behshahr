import React from 'react'
import { ArticlesDetailsForm } from '../../components/ArticlesDetailsForm'
import { HeaderUserlogin } from '../../components/common/HeaderUserLogin'
import { Footer } from '../../components/common/Footer'

const ArticlesDetails = () => {
  return (
    <>
    <div className='dark:bg-slate-900'>
        <HeaderUserlogin />
          <ArticlesDetailsForm />
        <Footer />
        </div>
    </>
  )
}

export { ArticlesDetails }