import React from 'react'
import Header from './components/header/Header'
import Category from './components/sections/Category'
import WhyChooseUs from './components/sections/WhyChooseUs'
import PartnerWithUs from './components/sections/PartnerWithUs'
import Footer from './components/sections/Footer'

const App = () => {
  return (
    <div>
      <Header/>
      <Category/>
      <WhyChooseUs/>
      <PartnerWithUs/>
      <Footer/>
    </div>
  )
}

export default App