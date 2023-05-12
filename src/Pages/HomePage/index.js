import React from 'react'
import HeroSection from '../../Components/HeroSection'
import ReviewReason from '../../Components/ReviewReason'
import HowWork from '../../Components/HowWork'
import RecentlyReviewed from '../../Components/RecentlyReviewed'
import KeepTouch from '../../Components/KeepTouch'

const HomePage = () => {
  return (
    <>
      <HeroSection/>
      <ReviewReason/>
      <HowWork/>
      <RecentlyReviewed/>
      <KeepTouch/>
    </>
    
  )
}

export default HomePage