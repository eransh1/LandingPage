import React from 'react'
import "./App.css"
import Footer from './Footer/Footer'
import Navbar from './Navbar/Navbar'

const App = () => {
  return (
    <section id='landingPage'>
<div className='landingpage'>
  <Navbar/>
  <section className="landingPage_infoCont">
  <div className='infoCont_topHead'>
    <h2 className='landingPage_infoCont_heading'>Coming Soon</h2>
    <p className='infoCont_subtext'>From automation of people processes to creating an engaged and driven culture</p>
    </div>
    <div className='infoCont_notifyCont'>
    <div className='bigCont'>
      <input type="text" className='infoCont_input' placeholder='Please Enter Your Email Address' />
      <button className='infoCont_input_btn'>Notify Me</button>
      </div>
      
    </div>
    <p className='infoCont_notifyText'>Notify Me when app is launched</p>
  </section>
  <Footer/>
</div>
    </section>
  )
}

export default App