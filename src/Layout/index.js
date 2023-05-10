import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Components/Header'

const Layout = () => {
  return (
    <>
    <Header/>
    <Outlet />
    <h1>footer</h1>
    </>
    
  )
}

export default Layout