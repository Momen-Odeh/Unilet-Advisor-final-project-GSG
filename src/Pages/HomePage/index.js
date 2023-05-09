import React from 'react'
import ButtonAction from '../../Components/ButtonAction'
import CardAction from '../../Components/CardAction'
const HomePage = () => {
  return (
    <>
      <div>HomePage</div>
      <ButtonAction text="Log In" arrow dark bold/>
      <CardAction key={2} title="123 That Road Bournemouth" value={2.9} numRated={59}/>
    </>
    
  )
}

export default HomePage