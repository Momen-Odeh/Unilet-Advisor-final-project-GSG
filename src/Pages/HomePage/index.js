import React from 'react'
import ButtonAction from '../../Components/ButtonAction'
import SearchInput from '../../Components/SearchInput'
import SortResult from '../../Components/SortResult'

const HomePage = () => {
  return (
    <>
      {/* <div>HomePage</div>
      <ButtonAction text="Log In" arrow dark bold/> */}
      <SearchInput/>
      <SortResult/>
=======
import CardAction from '../../Components/CardAction'
import Cards from '../../Components/Cards'
const HomePage = () => {
  return (
    <>
      <div>HomePage</div>
      <ButtonAction text="Log In" arrow dark bold/>
      <Cards/>
    </>
    
  )
}

export default HomePage