import React from 'react'
import home from '../../assets/home/home.png'
import search from '../../assets/home/search.png'
import HomeNav from './HomeNav'
import Homefooter from './Homefooter'
import './home.scss';

export default function Home() {
  return (
    <div>
      <div className='main-div absolute inset-0' style={{ marginTop:"-20px", zIndex:1 }}>
      <HomeNav/>
      </div>
  
       <div className='home-img w-screen relative'  >
        <img src={home} style={{ width:1940,height:1084 ,marginTop:0}}/>      
     
      </div>
      <div className='home absolute inset-0  flex flex-col items-center justify-center' style={{ marginTop:"-90px" }}>
          <p className='home-p font-bold' style={{ fontSize:50 , color:"#FFFFFF"}} >Make your interior more </p>
         <p className='home-p font-bold mb-4' style={{ fontSize:50 , color:"#FFFFFF"}} > minimalistic & modern</p>
          <p className='inner-p' style={{ color:"#FFFFFF" }}>Turn your room with panto into a lot more minimalist </p>
          <p className='inner-p mb-4' style={{ color:"#FFFFFF" }} >and modern with ease and speed</p>
          <img className='search-img mb-4 mx-4' src={search} />
        </div>

        <Homefooter/>
    </div>
    
  )
}
