import React from 'react'
import GeneralHero from '../../Components/GeneralHero'
import BG from './images/generalBG.png'
import NewPostForm from '../../Components/NewPostForm'
const NewPostPage = () => {
  return (
    <>
      <GeneralHero BG={BG} title={"Add New offer to our World "} subTitle={"Let's Start"} />
      <NewPostForm/>  
    </>
  )
}

export default NewPostPage