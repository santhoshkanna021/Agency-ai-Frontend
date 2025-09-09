import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Services from './components/Services'
import Work from './components/Work'
import Meeting from "./components/Meeting"
import Contact from './components/Contact'
import Footer from './components/Footer'


const App = () => {
  return (
    <div>
      <Navbar />
      <Header/>
      <Services/>
      <Work/>
      <Meeting/>
      <Contact/>
      <Footer/>
      
    
    </div>
  )
}

export default App
