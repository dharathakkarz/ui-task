import React from 'react'
import home from '../../assets/home/home.png'
import search from '../../assets/home/search.png'
import HomeNav from './HomeNav'
import Homefooter from './Homefooter'

export default function Home() {
  return (
    <div>
      <div className='absolute inset-0' style={{ marginTop:"-20px", zIndex:1 }}>
      <HomeNav/>
      </div>
  
       <div className=' w-screen relative'  >
        <img src={home} style={{ width:1940,height:1084 ,marginTop:0}}/>      
     
      </div>
      <div className='absolute inset-0  flex flex-col items-center justify-center' style={{ marginTop:"-90px" }}>
          <p className='font-bold' style={{ fontSize:50 , color:"#FFFFFF"}} >Make your interior more </p>
         <p className='font-bold mb-4' style={{ fontSize:50 , color:"#FFFFFF"}} > minimalistic & modern</p>
          <p className='' style={{ color:"#FFFFFF" }}>Turn your room with panto into a lot more minimalist </p>
          <p className='mb-4' style={{ color:"#FFFFFF" }} >and modern with ease and speed</p>
          <img className=' mb-4 mx-4' src={search} />
        </div>

        <Homefooter/>
    </div>
    
  )
}
