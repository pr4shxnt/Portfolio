import React from 'react'
import Homemain from './Homemain'
import Intro from './Intro'
import Skills from './Skills/Skills'
import Contact from './Forms/Contact'
import Projects from './Projects'


const Home = () => {
  return (
    <div className='' id='home'>
        <div className="h-screen">
      <Homemain/>
      </div>
      <Intro/>

      <Skills/>
<Projects/>
      <Contact/>
    </div>
  )
}

export default Home
