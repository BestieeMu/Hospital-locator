import React from 'react'
import { Outlet } from "react-router-dom";
import Footer from '../Components/Footer/Footer';
import Nav from '../Components/NavBar/Nav';

const Layout = () => {
  return (
    <>
        <div>
         <Nav />
        <Outlet />
        <Footer />
        </div>

    </>
  )
}

export default Layout