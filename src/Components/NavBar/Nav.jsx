import React from 'react'
import { Link } from 'react-router-dom'
import logo2 from '../../assets/logo1.png'

const Nav = () => {
  return (
    <>
<>
<header className='fixed top-0 w-full z-20' >
<div className='w-full text-white  h-14 flex md:px-4 items-center' style={{backgroundColor: '#0e2c3a'}}>
<nav className='w-full flex justify-between items-center'>
  {/* logo */}
    <Link to='/' >
  <div className='md:ml-5  flex gap-3 font-medium text-2xl items-center'>
<img src={logo2} alt="" className='w-10'/>
<h5>Rush</h5>
  </div>
</Link>
  {/* nav links */}
  <div className=' flex w-auto mr-5 justify-around items-center'>
    <Link to='locations'>
    <button className='bg-white text-black px-2 py-1 rounded'>Get started</button>
    </Link>
  </div>
</nav>

</div>

</header>

</>
    </>
  )
}

export default Nav