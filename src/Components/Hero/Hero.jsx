import React from 'react'
import { Link } from 'react-router-dom'
import  HeroImg  from '../../assets/heroImg.svg'
import  wave  from '../../assets/wave-bg.svg'


const Hero = () => {
  return (
    <>
    <div className=' w-full flex justify-center items-center hero py-20'>
        <div className='w-11/12 flex flex-col md:flex-row justify-between items-center'>

        {/* hero component caption  */}
<div className='lg:w-5/12 md:w-6/12 w-full mt-14 md:mt-0'>
    {/* hero title */}
<h1 className=' font-black md:text-3xl lg:text-5xl text-white text-3xl' >
Find Nearby Places Quickly in Times of Need
</h1>
{/* call to action */}
<p className='lg:text-lg  text-white text-sm mt-9'> 
In an emergency, every second counts. Use our website to quickly find the nearest hospitals.  Simply enter your location and we'll provide you with a list of nearby hospitals.
</p>
{/* two input field one is to know the kind of emergecy the user need while the second field collects the user location */}
<div className='mt-8'>

<div className='flex flex-col w-full items-center lg:flex-row gap-4 mt-9'>

<input 
type="text"
 className='w-full md:w-full rounded px-3 py-2 bg-gray-200  outline-none'
 placeholder='e.g 23 ebene street'
 />
<Link to='locations' className='w-full'>
<button className='px-3 py-2 rounded w-full  font-medium ' style={{backgroundColor: '#5ecdff'}}>Find Places Now</button>
</Link>
</div>

</div>

</div>

{/* the hero component image */}
<div className='lg:w-4/12 md:w-5/12 w-11/12 mt-14'>
<img src={HeroImg} alt="person-with-phone-map" className='w-75 h-75 md:w-96' />
</div>
        </div>
    </div>
    
    </>
  )
}

export default Hero