import React, { useEffect, useState } from 'react'
import './App.css'
import {Navbar} from './components/Navbar'
import Hero from './components/hero'
import Contact from './components/Contact'
import Projects from './components/Projects'


function App() {
  const [isLoaded,setIsLoaded]=useState(false)

  useEffect(()=>{
    setIsLoaded(true)
  },[])
  return (

    <div className={`app ${isLoaded ? "loaded" : ""}`}>
      <Navbar/>
      <Hero/>
      <Projects/>
      <Contact/>
      <>
      <p>&copy; 2025 Adil. All rights reserved</p>
      </>
    </div>
  )
}

export default App
