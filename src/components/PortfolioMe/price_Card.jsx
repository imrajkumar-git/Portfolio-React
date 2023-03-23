import React from "react"
import { price } from "../dummydata"

const PriceCard = () => {
  return (
    <>
      {price.map((val) => (
        <div className='items shadow'>
          <h4>{val.name}</h4>
          <h1>
            <span className="dollar">$</span>
            {val.price}
          </h1>
          <p>{val.desc}</p>
          <button className="glow-on-hover" type="button">GET STARTED</button>
        </div>
      ))}
    </>
  )
}

export default PriceCard
