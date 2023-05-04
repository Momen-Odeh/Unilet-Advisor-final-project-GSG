import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Layout from '../Layout'
const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout/>}>
              <Route index element={<h1>Home Page</h1>}/>
              <Route path='/ReviewSearch' element={<h1>ReviewSearch Page</h1>}/>
              <Route path='/ReviewSearchResult' element={<h1>ReviewSearchResult Page</h1>}/>
              <Route path='/ReviewDetails' element={<h1>ReviewDetails Page</h1>}/>
              <Route path='/NewPost' element={<h1>NewPost Page</h1>}/>
              <Route path='/Login' element={<h1>Login Page</h1>}/>
              <Route path='/signUp' element={<h1>signUp Page</h1>}/>
              <Route path='*' element={<h1>404 Not Found</h1>}/>  
            </Route>
            
        </Routes>
    </BrowserRouter>
  )
}

export default Router