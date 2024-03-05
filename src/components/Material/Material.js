import React from 'react';
import './material.scss';
import up1 from '../../assets/meterials/up1.png';
import up2 from '../../assets/meterials/up2.png';
import r1 from '../../assets/meterials/r1.png';
import Vector  from '../../assets/Vector.png';

export default function CustomExperience() {
  return (
  
    // <div className="custom-flex-container mb-18">

    //   <div className="relative custom-content-container">
    //     <span className="custom-bold">Materials </span>
    //     <p className="custom-boldtext">Very serious materials for making furniture</p>
    //     <p className='text-start'>
    //       Because panto was very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively low price
    //     </p>
    //     <p style={{ color: '#E58411', fontSize: '14px', border: '1px ', width: '37.5px', height: '8.8px', top: '7px', left: '4.5px', whiteSpace: 'nowrap' }}>
    //       More Info
    //     </p>
    //     <img className='infoimg absolute' src={Vector} style={{ left: 180, marginTop: 2 }} />

    //   </div>

    //   <div className="flex">

    //     <div className="w-full md:w-1/2 lg:w-1/3 p-4 flex flex-col justify-center items-center">
    //       <img className="mb-4" src={up1} alt="Image 1" style={{ width: "100%", maxWidth: "223px", height: "auto" }} />
    //       <img src={up2} alt="" style={{ width: "100%", maxWidth: "223px", height: "auto" }} />
    //     </div>

    //     <div className="w-full md:w-1/2 lg:w-1/3 p-4 flex justify-end items-center">
    //       <img src={r1} alt="Image 3" style={{ width: "100%", maxWidth: "950px", height: "auto" }} />
    //     </div>
    //   </div>
    // </div>

    <div className="custom-flex-container mb-18">

      <div className="relative custom-content-container">
        <span className="custom-bold">Materials </span>
        <p className="custom-boldtext">Very serious materials for making furniture</p>
        <p className='text-start'>
          Because panto was very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively low price
        </p>
        <p style={{ color: '#E58411', fontSize: '14px', border: '1px ', width: '37.5px', height: '8.8px', top: '7px', left: '4.5px', whiteSpace: 'nowrap' }}>
          More Info
        </p>
        <img className='infoimg absolute' src={Vector} style={{ left: '50%', transform: 'translateX(-50%)', marginTop: '2px' }} />
      </div>

      <div className="flex flex-wrap">

        <div className="w-full md:w-1/2 lg:w-1/3 p-4 flex flex-col justify-center items-center">
          <img className="mb-4" src={up1} alt="Image 1" style={{ width: "100%", maxWidth: "100%", height: "auto" }} />
          <img src={up2} alt="Image 2" style={{ width: "100%", maxWidth: "100%", height: "auto" }} />
        </div>

        <div className="w-full md:w-1/2 lg:w-1/3 p-4 flex justify-end items-center">
          <img src={r1} alt="Image 3" style={{ width: "100%", maxWidth: "100%", height: "auto" }} />
        </div>
      </div>
    </div>

  );
}
