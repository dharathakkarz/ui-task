import '../Home/homefooter.scss'
import React from 'react'
import Vector from '../../assets/Vector.png'



export default function Homefooter() {
  return (
    <div >

<footer className=" text-black py-8" style={{background:"#FFFFFF"}}>
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
 
    <div className="md:col-span-1 " style={{ marginTop:"50px" }}>
      <h2 className="text-xl font-bold ">Why</h2>
<h2 className="text-xl font-bold ">Choosing Us</h2>   
     
    </div>
   
    <div>
      <h2 className="text-xl font-bold mb-4"style={{ color:"#1E1E1E" }} >Luxury facilities</h2>
      <p className="mb-4">You can get a workspace of the highst quality at an affordable price and still enjoy the facilities that are oly here.</p>
      <div>
      <p style={{ color:"#E58411" }}>More Info</p>
      <img className='absolute' src={Vector} style={{ left:650, marginTop: -17 }} />
      </div>
      
      </div>
      <div>
      <h2 className="text-xl font-bold mb-4" style={{ color:"#1E1E1E" }}>Affordable Price</h2>
      <p className="mb-4">The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.</p>
      <div>
      <p style={{ color:"#E58411" }}>More Info</p>
      <img className='absolute' src={Vector} style={{ left:1050, marginTop: -17 }}/>
      </div>
     
      </div>
      <div>
      <h2 className="text-xl font-bold mb-4" style={{ color:"#1E1E1E" }} >Many Choices</h2>
      <p className="mb-4">We provide many unique work space choices so that you can choose the workspace to your liking.</p>
      <div>
      <p style={{ color:"#E58411" }}>More Info</p>
      <img className='absolute' src={Vector} style={{ left:1430, marginTop:-17 }} />
      </div>
     
   
      </div>
     
  
 

    
   
   
  </div>
 
 
</footer>


     
    </div>
  )
}
