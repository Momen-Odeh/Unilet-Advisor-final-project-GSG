import React from 'react'
import ButtonAction from '../../Components/ButtonAction'
import InputField from '../../Components/InputField'

const HomePage = () => {
  return (
    <>
      {/* <div>HomePage</div>
      <ButtonAction text="Log In" arrow dark bold/> */}
      <InputField type={"user"}/>
      <InputField type={"email"}/>
      <InputField type={"password"}/>
      <InputField type={"confirmPassword"}/>
    </>
    
  )
}

export default HomePage