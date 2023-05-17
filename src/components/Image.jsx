import React from 'react'
import car from "./car.png"
import "./Image.css"

const Image = () => {
  return (
    <div className='container'>
      <h1>Perfect way to buy <br/>and sell a car</h1>
      <img src={car} alt="car"/>
    </div>
  )
}

export default Image
