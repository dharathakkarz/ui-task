import React from 'react'
import Bag from '../../assets/home/Bag.png'

export default function HomeNav() {
  return (
    <div className='mb-6' >
    <nav class="flex  items-center justify-between bg-transparent py-4 px-6 " >
  
  <div class="flex items-center mb-12" >
 
    <h1 class="text-white font-semibold text-lg" style={{ marginTop:"25px" }}>Panto</h1>
  </div>

 
  <div class="text-white text-lg flex-grow text-center">
    
    <div class="flex justify-center space-x-6">
      <a href="#" class="hover:text-gray-300" >Furniture</a>
      <a href="#" class="hover:text-gray-300">Shop</a>
      <a href="#" class="hover:text-gray-300" >About Us</a>
      <a href="#" class="hover:text-gray-300" >Contact</a>
    </div>
  </div>

 
  <div class="flex items-center">
    <div class="relative">
    <img src={Bag}/>
     
     
    </div>
  </div>
</nav>
 
    </div>
   
  )
}
