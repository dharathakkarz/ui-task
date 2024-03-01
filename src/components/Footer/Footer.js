import './footer.scss'
import React from 'react'
import tw from '../../assets/tw.png'
import fb from "../../assets/fb.png"
import ig from "../../assets/ig.png"


export default function Footer() {
  return (
    <div>

<footer className=" text-black py-8" style={{background:"#F7F7F7"}}>
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
 
    <div className="md:col-span-1">
      <h2 className="text-xl font-bold mb-4">Panto</h2>
      <p className="mb-4">The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.</p>
     
    </div>
   
    <div>
      <h2 className="text-xl font-bold mb-4"style={{ color:"#F6973F" }} >Service</h2>
      <p className="mb-4">Email Marketing</p>
      <p className="mb-4">Campaigns</p>
      <p className="mb-4">Branding</p>
      </div>
      <div>
      <h2 className="text-xl font-bold mb-4" style={{ color:"#F6973F" }}  >Furniture</h2>
      <p className="mb-4">Email Marketing</p>
      <p className="mb-4">Campaigns</p>
      <p className="mb-4">Branding</p>
      </div>
     
  
    <div>
      <h2 className="text-xl font-bold mb-4" style={{ color:"#F6973F" }}  >Follow Us</h2>
      <ul className=" ">
      <div className='flex'>
      <img src={fb} alt="" style={{marginRight:"9px"}} />
      <li><a href="#" className="mb-4">Facebook</a></li>
      </div>
      <div className='flex'>
      <img src={tw} alt="" style={{marginRight:"9px"}} />
      <li><a href="#" className="mb-4">Twiter</a></li>
      </div>

      <div className='flex'>
      <img src={ig} alt="" style={{marginRight:"9px"}} />
      <li><a href="#" className="mb-4">Instagram</a></li>
      </div>
      
      </ul>
    </div>  
  
  </div>
  <div class="container mx-auto flex justify-between items-center">
    <div>
      <p>&copy; 2024 Your Company. All rights reserved.</p>
    </div>
    <div>
      <a href="#" className=" mr-4">Terms and Conditions</a>
      <a href="#" className="">Privacy Policy</a>
    </div>
  </div>
 
</footer>    
    </div>
  )
}
