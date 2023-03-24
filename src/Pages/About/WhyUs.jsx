import React from 'react'
import fastRoot from './img/fast-root.svg'
import responsive from './img/responsive.png'
import tilldate from './img/tillDate.svg'

const WhyUs = () => {
  return (
    <>
<div className='w-full bg-gray-100 mt-20 flex pb-20 flex-col items-center justify-center why-us' style={{
 
}}>
  <h1 className='text-5xl font-bold mt-28'>Why Us</h1>
  {/* grid div  */}
<div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 place-items-center mt-28 md:w-11/12 w-full'>

{/* card start here */}
<div className='bg-white md:w-80 w-11/12 rounded-md ' style={{
  height: '450px'
}}>
  {/* card image */}
  <div className=' flex justify-center items-center h-60'>
<img src={tilldate} alt="avater" className='w-52'/>
  </div>
  {/* card description */}
  <div className='mt-10 leading-6 p-2 px-4'>
    <h3 className='text-xl font-bold'>Up To Date</h3>
    <p className='mt-5'>Our website is updated in real-time to provide you with the most accurate and up-to-date information.</p>
  </div>
</div>

<div className='bg-white md:w-80 w-11/12 rounded-md' style={{
  height: '450px'
}}>
  {/* card image */}
  <div className='flex justify-center items-center h-60'>
  <img src={fastRoot} alt="avater" className='w-52'/>
  </div>
  {/* card description */}
  <div  className='mt-10 leading-6 p-2 px-4'>
    <h3 className='text-xl font-bold'>Fast Root</h3>
    <p className='mt-5'>We provide directions to the nearest locations, so you can get there quickly and easily.</p>
  </div>
</div>

<div  className='bg-white md:w-80 w-11/12 rounded-md' style={{
  height: '450px'
}}>
  {/* card image */}
  <div className='flex justify-center items-center h-60'>
  <img src={responsive} alt="avater" className='w-52'/>
  </div>
  {/* card description */}
  <div  className='mt-10 leading-6 p-2 px-4'>
    <h3 className='text-xl font-bold'>Availablity</h3>
    <p className='mt-5'>Our website is accessible from any device, so you can use it on your phone, tablet, or computer.</p>
  </div>
</div>

</div>

</div>
    </>
  )
}

export default WhyUs