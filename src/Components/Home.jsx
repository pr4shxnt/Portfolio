import React from 'react'
import Homemain from './Homemain'
import Intro from './Intro'
import Skills from './Skills/Skills'
import Contact from './Forms/Contact'
import Projects from './Projects'
import ScrollToTop from './ScrollToTop'

const Home = () => {
  return (
    <div className='' id='home'>

        <div className="h-screen">

      <Homemain/>
      </div>
      <Intro/>
      <div className="md:px-32 pt-16  text-center flex flex-col">
        <h1 className='text-white text-4xl font-bold'>Projects</h1>
        <p className='text-gray-400  mb-10'>These are The projects built by me till now.</p>
<Projects/></div>
      <Skills/>

      <Contact/>
    </div>
  )
}

export default Home
