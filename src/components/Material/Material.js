import React from 'react';
import './material.scss';
import up1 from '../../assets/meterials/up1.png';
import up2 from '../../assets/meterials/up2.png';
import r1 from '../../assets/meterials/r1.png';

export default function CustomExperience() {
  return (
    <div className="custom-flex-container mb-18" >


      
      <div className="relative custom-content-container "  >
        <span className="custom-bold" >Materials </span>
        <p className="custom-boldtext">Very serious materials for making furniture</p>
        <p className='text-start'>
        Because panto was very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively low price
        </p>
        <p style={{ color: '#E58411', fontSize: '14px', border: '1px ', width: '37.5px', height: '8.8px', top: '7px', left: '4.5px', whiteSpace: 'nowrap'}}>
                    More Info
                </p>
      </div>
  
      <div class="flex">
  
  

 
  <div class="w-1/3 p-4 flex flex-col justify-center items-center"  >
    <img class="mb-4" src={up1} alt="Image 1" style={{ widows:"223px", height:"250px", top:"3431px", left:"730px" }} />
    <img src={up2} alt="" style={{ width:"223px", height: "317.04px",  left:"953px" }} />
  </div>

  
  <div class="w-1/3 p-4 flex justify-end items-center">
    <img src={r1} alt="Image 3" style={{ width:"950px", height:"445px", left:1624, top:3570 }}/>
  </div>
</div>
    </div>
  );
}
