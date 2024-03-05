import React from 'react'
import './experience.scss'
import expe from "../../assets/expe.png"
import Vector from "../../assets/Vector.png"

export default function Experience() {
    return (

       
<div className="flex-container">
      <div className="image-container">
        <img src={expe} alt="" className="image" />
      </div>
      <div className="content-container">
        <span className="bold">Experience </span>
        <p className="boldtext mb-8">
          we provide you the best experience
        </p>
        <p>
          You don’t have to worry about the result because all of these interiors are made by professionals in their fields with an elegant and luxurious style and with premium quality materials
        </p>
        <p style={{ color: '#E58411', fontSize: '14px', border: '1px ', width: '37.5px', height: '8.8px', top: '7px', left: '4.5px', whiteSpace: 'nowrap' }}>
          More Info
        </p>
        <img className='eximg absolute' src={Vector} style={{ left:'7%', transform: 'translateX(-50%)', marginTop: '1px' }} />
      </div>
    </div>

    )
}
