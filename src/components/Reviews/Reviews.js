import React from 'react'
import '../Reviews/reviews.scss';
import re1 from '../../assets/reviews/re1.png'
import re2 from '../../assets/reviews/re2.png'
import r3 from '../../assets/reviews/r3.png'
import p1 from '../../assets/reviews/p1.png'
import p2 from '../../assets/reviews/p2.png'
import p3 from '../../assets/reviews/p3.png'
import star from '../../assets/reviews/star.png'

export default function Reviews() {
  return (
    <div className='rmain' style={{ height:800 }}>
<div className='rmain1 text-center' style={{ top:"4285px" }}>
  <p className='rhead my-3' style={{ color:"#E58411" }}>Testimonials</p>
  <p className='rsubhead font-bold mb-6' >Our Client Reviews</p>
</div>
    
    <div className='rcard flex  justify-center' >
      
      <div className='rcardmenu mx-3 relative' >
        <img src={re1} />
      <div  className='rcardmenu1 absolute  flex items-center inset-0  justify-center'>
      <div className='rcardmenu2 bg-white  w-72 h-52 rounded-xl' style={{ marginBottom:"-10rem" }}>
      {/*<div class="h-20 w-20 rounded-full "></div>*/}
      <div className='rcardmenu3 rounded-full mb-4 flex items-center justify-center'>
      <img src={p1}  />
      </div>     
      <p className='rcardname text-center font-bold ' >Bang Upin</p>
      <p className='rcardsubname text-center' >Pedagang Asongan</p>
      <p className='rcarddetails text-center text-sm ' >“Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal“</p>
      <div className='rimg rounded-full mb-4 flex items-center justify-center'>
      <img src={star} />
      </div> 

      </div>
       
      </div>
      </div>
      <div className='rcardmenu mx-3 relative' >
        <img src={re2}  />
      <div  className='rcardmenu1 absolute  flex items-center inset-0  justify-center'>
      <div className='rcardmenu2 bg-white  w-72 h-52 rounded-xl' style={{ marginBottom:"-10rem" }}>
      {/*<div class="h-20 w-20 rounded-full "></div>*/}
      <div className='rcardmenu3 rounded-full mb-4 flex items-center justify-center'>
      <img src={p2}  />
      </div>     
      <p className='rcardname text-center font-bold ' >Ibuk Sukijan</p>
      <p className='rcardsubname text-center' >Ibu Rumah Tangga</p>
      <p className='rcarddetails text-center text-sm ' >“Makasih Panto, aku sekarang berasa tinggal di -barang yang terlihat mewah“</p>
      <div className='rimg rounded-full mb-4 flex items-center justify-center'>
      <img src={star} />
      </div> 

      </div>
       
      </div>
      </div>


      <div className='rcardmenu mx-3 relative' >
        <img src={r3} />
      <div  className='rcardmenu1 absolute  flex items-center inset-0  justify-center'>
      <div className='rcardmenu2 bg-white  w-72 h-52 rounded-xl' style={{ marginBottom:"-10rem" }}>
      {/*<div class="h-20 w-20 rounded-full "></div>*/}
      <div className='rcardmenu3 rounded-full mb-4 flex items-center justify-center'>
      <img src={p3}  />
      </div>     
      <p className='rcardname text-center font-bold ' >Mpok Ina</p>
      <p className='rcardsubname text-center' >Karyawan Swasta</p>
      <p className='rcarddetails text-center text-sm ' >“Sangat terjangkau untuk kantong saya yang tidak terlalu banyak“</p>
      <div className='rimg rounded-full mb-4 flex items-center justify-center'>
      <img src={star} />
      </div> 

      </div>
       
      </div>
      </div>
  
    </div>
    </div>
  )
}
