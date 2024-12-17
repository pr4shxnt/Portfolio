import React from 'react'
import Homemain from './Homemain'
import Intro from './Intro'
import Skills from './Skills'
import Contact from './Forms/Contact'


const Home = () => {
  return (
    <div className='' id='home'>
        <div className="h-screen">
      <Homemain/>
      </div>
      <Intro/>
      <Skills/>
      <Contact/>
    </div>
  )
}

export default Home
