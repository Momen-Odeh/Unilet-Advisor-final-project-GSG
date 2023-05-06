import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'

const Layout = () => {
  return (
    <>
    <h1>header</h1>
    <Outlet />
    <Footer/>
    </>
    
  )
}

export default Layout