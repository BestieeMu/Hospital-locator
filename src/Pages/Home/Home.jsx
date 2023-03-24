import React from 'react'
import AboutCom from '../../Components/AboutCom/AboutCom'
import Hero from '../../Components/Hero/Hero'
import WhyUs from '../About/WhyUs'

const Home = () => {
  return (
    <>
    
    <div className='bg h-auto mt-14'>
   <Hero />
<AboutCom />
<WhyUs />
    </div>
    </>
  )
}

export default Home