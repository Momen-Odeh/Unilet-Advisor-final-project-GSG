import React from 'react'
import GeneralHero from '../../Components/GeneralHero'
import BG from './images/generalBG.png'
import SignupForm from '../../Components/SignupForm'
const SignUpPage = () => {
  return (
    <>
      <GeneralHero BG={BG} title={"Welcome to Uniletadvisor"} subTitle={"Sign up and begin your journy with us "} />
      <SignupForm/>  
    </>
  )
}

export default SignUpPage