import React from 'react'
import  AboutUs  from '../../assets/about-us.jpg' 

const AboutCom = () => {
  return (
    <>
    <div className='w-full items-center mt-28  md:mt-32 flex flex-col lg:flex-row about' style={{

    //  backgroundImage: `url(${wave})`,
    //  backgroundRepeat: 'no-repeat',
    //  backgroundSize: 'cover',

     }}>

<div className='w-full flex justify-center '>
    <div className='w-full md:w-10/12 flex justify-center p-4 '
     >

    <div className='w-full about-img'style={{
     backgroundImage: `url(${AboutUs})`,
     backgroundRepeat: 'no-repeat',
     backgroundSize: 'cover',
      
     }} >

    </div>

    </div>
</div>

<div className='w-full flex flex-col items-center mt-14 md:mt-46'>
    <h1 className='text-5xl font-bold'>About us</h1>
    <div className='w-10/12 mt-14'>
<p>
Our emergency website is a valuable resource for people in urgent situations. The website is designed to help users quickly and easily find important locations in their area such as hospitals, hotels, police stations, fire stations, and more.
<br />
<br />
When every second counts, our website can help users find the nearest emergency location based on their current location or a location they enter into the search bar. The website uses advanced technology to provide accurate and up-to-date information, so users can trust that they're getting the most reliable information available.
<br />
<br />
In addition to emergency locations, our website also provides additional helpful information such as phone numbers, reviews, and directions to help users navigate to their destination quickly and efficiently.
<br />
<br />
Overall, our emergency website is an essential tool for anyone who needs to find important locations in a hurry. Whether you're a local resident or a traveler in an unfamiliar area, our website is designed to provide you with the information you need to stay safe and get the help you need in an emergency.
</p>

    </div>

</div>


    </div>
    </>
  )
}

export default AboutCom