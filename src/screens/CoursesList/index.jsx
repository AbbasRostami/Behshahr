import React from 'react'
import { CoursesListForm } from '../../components/CoursesListForm'
import { Footer } from '../../components/common/Footer'
import { HeaderUserlogin } from '../../components/common/HeaderUserLogin'

const CoursesList = () => {
  return (
    <div>
      <div className='dark:bg-slate-900'>
       <HeaderUserlogin />
         <CoursesListForm />
      <Footer />
      </div>
    </div>
  )
}

export { CoursesList }
