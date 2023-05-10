import React from 'react'
import ButtonAction from '../../Components/ButtonAction'
import SearchInput from '../../Components/SearchInput'
import SortResult from '../../Components/SortResult'


const HomePage = () => {
  return (
    <>
      <InputField type={"user"}/>
      <InputField type={"email"}/>
      <InputField type={"password"}/>
      <InputField type={"confirmPassword"}/>
    </>
    
  )
}

export default HomePage