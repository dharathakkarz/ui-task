import React from 'react'
import re1 from '../../assets/reviews/re1.png'
import re2 from '../../assets/reviews/re2.png'
import r3 from '../../assets/reviews/r3.png'
import p1 from '../../assets/reviews/p1.png'
import p2 from '../../assets/reviews/p2.png'
import p3 from '../../assets/reviews/p3.png'
import star from '../../assets/reviews/star.png'

export default function Reviews() {
  return (
    <div style={{ height:800 }}>
<div className='text-center  ' style={{ top:"4285px" }}>
  <p className='my-3 ' style={{ color:"#E58411" }}>Testimonials</p>
  <p className='font-bold mb-6' >Our Client Reviews</p>
</div>
    
    <div className='flex  justify-center' >
      
      <div className='mx-3 relative' >
        <img src={re1} />
      <div  className='absolute  flex items-center inset-0  justify-center'>
      <div className='bg-white  w-72 h-52 rounded-xl' style={{ marginBottom:"-10rem" }}>
      {/*<div class="h-20 w-20 rounded-full "></div>*/}
      <div className=' rounded-full mb-4 flex items-center justify-center'>
      <img src={p1}  />
      </div>     
      <p className='text-center font-bold ' >Bang Upin</p>
      <p className='text-center' >Pedagang Asongan</p>
      <p className='text-center text-sm ' >“Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal“</p>
      <div className=' rounded-full mb-4 flex items-center justify-center'>
      <img src={star} />
      </div> 

      </div>
       
      </div>
      </div>
      <div className='mx-3 relative' >
        <img src={re2}  />
      <div  className='absolute  flex items-center inset-0  justify-center'>
      <div className='bg-white  w-72 h-52 rounded-xl' style={{ marginBottom:"-10rem" }}>
      {/*<div class="h-20 w-20 rounded-full "></div>*/}
      <div className=' rounded-full mb-4 flex items-center justify-center'>
      <img src={p2}  />
      </div>     
      <p className='text-center font-bold ' >Ibuk Sukijan</p>
      <p className='text-center' >Ibu Rumah Tangga</p>
      <p className='text-center text-sm ' >“Makasih Panto, aku sekarang berasa tinggal di -barang yang terlihat mewah“</p>
      <div className=' rounded-full mb-4 flex items-center justify-center'>
      <img src={star} />
      </div> 

      </div>
       
      </div>
      </div>
      <div className='mx-3 relative' >
        <img src={r3} />
      <div  className='absolute  flex items-center inset-0  justify-center'>
      <div className='bg-white  w-72 h-52 rounded-xl' style={{ marginBottom:"-10rem" }}>
      {/*<div class="h-20 w-20 rounded-full "></div>*/}
      <div className=' rounded-full mb-4 flex items-center justify-center'>
      <img src={p3}  />
      </div>     
      <p className='text-center font-bold ' >Mpok Ina</p>
      <p className='text-center' >Karyawan Swasta</p>
      <p className='text-center text-sm ' >“Sangat terjangkau untuk kantong saya yang tidak terlalu banyak“</p>
      <div className=' rounded-full mb-4 flex items-center justify-center'>
      <img src={star} />
      </div> 

      </div>
       
      </div>
      </div>
      {/* <div className='mx-3' ><img src={re2} /></div>
      <div className='mx-3' ><img src={r3} /></div>
      */}
    </div>
    </div>
  )
}
