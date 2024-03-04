import React from 'react'
import Bag from '../../assets/home/Bag.png'
import '../Home/homenav.scss';

export default function HomeNav() {
  return (
    <div className='main-nav mb-6' >
    <nav class="nav flex  items-center justify-between bg-transparent py-4 px-6 " >
  
  <div class="nav-1 flex items-center mb-12" >
 
    <h1 class="nav-h1 text-white font-semibold text-lg" style={{ marginTop:"25px" }}>Panto</h1>
  </div>

 
  <div class="nav-center text-white text-lg flex-grow text-center">
    
    <div class="nav-center-sub flex justify-center space-x-6">
      <a href="#" class="hover:text-gray-300" >Furniture</a>
      <a href="#" class="hover:text-gray-300">Shop</a>
      <a href="#" class="hover:text-gray-300" >About Us</a>
      <a href="#" class="hover:text-gray-300" >Contact</a>
    </div>
  </div>

 
  <div class="nav-img flex items-center">
    <div class="nav-img-sub relative">
    <img src={Bag}/>
     
     
    </div>
  </div>
</nav>
 
    </div>
   
  )
}
