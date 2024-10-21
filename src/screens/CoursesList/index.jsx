import React from 'react'
import { CoursesListForm } from '../../components/CoursesListForm'
import { Footer } from '../../components/common/Footer'
import { HeaderUserlogin } from '../../components/common/HeaderUserLogin'

const CoursesList = () => {
  return (
    <div>
       <HeaderUserlogin />
      <CoursesListForm />
      <Footer />
    </div>
  )
}

export { CoursesList }
