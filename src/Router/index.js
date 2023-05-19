import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Layout from '../Layout'
import HomePage from '../Pages/HomePage'
import LoginPage from '../Pages/LoginPage'
import NewPostPage from '../Pages/NewPostPage'
import NotFoundPage from '../Pages/NotFoundPage'
import ReviewDetailsPage from '../Pages/ReviewDetailsPage'
import ReviewSearchPage from '../Pages/ReviewSearchPage'
import ReviewSearchResultPage from '../Pages/ReviewSearchResultPage'
import SignUpPage from '../Pages/SignUpPage'
const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout/>}>
              <Route index element={<HomePage/>}/>
              <Route path='/ReviewSearch' element={<ReviewSearchPage/>}/>
              <Route path='/ReviewSearchResult' element={<ReviewSearchResultPage/>}/>
              <Route path='/ReviewDetails/:title' element={<ReviewDetailsPage/>}/>
              <Route path='/NewPost' element={<NewPostPage/>}/>
              <Route path='/Login' element={<LoginPage/>}/>
              <Route path='/signUp' element={<SignUpPage/>}/>
              <Route path='*' element={<NotFoundPage/>}/>  
            </Route>
            
        </Routes>
    </BrowserRouter>
  )
}

export default Router