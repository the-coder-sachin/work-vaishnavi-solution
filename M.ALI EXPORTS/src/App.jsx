import React from 'react'
import Header from './components/header/Header'
import Category from './components/sections/Category'
import WhyChooseUs from './components/sections/WhyChooseUs'
import PartnerWithUs from './components/sections/PartnerWithUs'

const App = () => {
  return (
    <div>
      <Header/>
      <Category/>
      <WhyChooseUs/>
      <PartnerWithUs/>
    </div>
  )
}

export default App