import React from 'react'
import GeneralHero from '../../Components/GeneralHero'
import BG from './images/generalBG.png'
const NotFoundPage = () => {
  return (
    <>
      <GeneralHero BG={BG} title={"404 Not Found"} subTitle={"Your visited page not found. You may go home page."} notFound/>
    </>
  )
}

export default NotFoundPage