
import React from 'react';
import '../Reviews/reviews.scss';
import re1 from '../../assets/reviews/re1.png';
import re2 from '../../assets/reviews/re2.png';
import r3 from '../../assets/reviews/r3.png';
import p1 from '../../assets/reviews/p1.png';
import p2 from '../../assets/reviews/p2.png';
import p3 from '../../assets/reviews/p3.png';
import star from '../../assets/reviews/star.png';

export default function Reviews() {
  return (
    <div className='rmain'>
      <div className='rmain1 text-center'>
        <p className='rhead my-3' style={{ color: '#E58411' }}>
          Testimonials
        </p>
        <p className='rsubhead font-bold mb-6'>Our Client Reviews</p>
      </div>

      <div className='rcard flex flex-wrap justify-center'>
      <div className='rcardmenu mx-3 mb-6 w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
          <img src={re2} alt='review2' />
          <div className='rcardmenu1 absolute flex items-center inset-0 justify-center'>
            <div className='rcardmenu2 bg-white w-full h-52 rounded-xl'>
              <div className='rcardmenu3 rounded-full mb-4 flex items-center justify-center'>
                <img src={p2} alt='person2' />
              </div>
              <p className='rcardname text-center font-bold'>Ibuk Sukijan</p>
              <p className='rcardsubname text-center'>Ibu Rumah Tangga</p>
              <p className='rcarddetails text-center text-sm'>
                “Makasih Panto, aku sekarang berasa tinggal di -barang yang terlihat mewah“
              </p>
              <div className='rimg rounded-full mb-4 flex items-center justify-center'>
                <img src={star} alt='star' />
              </div>
            </div>
          </div>
        </div>

        <div className='rcardmenu mx-3 mb-6 w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
          <img src={re2} alt='review2' />
          <div className='rcardmenu1 absolute flex items-center inset-0 justify-center'>
            <div className='rcardmenu2 bg-white w-full h-52 rounded-xl'>
              <div className='rcardmenu3 rounded-full mb-4 flex items-center justify-center'>
                <img src={p2} alt='person2' />
              </div>
              <p className='rcardname text-center font-bold'>Ibuk Sukijan</p>
              <p className='rcardsubname text-center'>Ibu Rumah Tangga</p>
              <p className='rcarddetails text-center text-sm'>
                “Makasih Panto, aku sekarang berasa tinggal di -barang yang terlihat mewah“
              </p>
              <div className='rimg rounded-full mb-4 flex items-center justify-center'>
                <img src={star} alt='star' />
              </div>
            </div>
          </div>
        </div>

        <div className='rcardmenu mx-3 mb-6 w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
          <img src={r3} alt='review3' />
          <div className='rcardmenu1 absolute flex items-center inset-0 justify-center'>
            <div className='rcardmenu2 bg-white w-full h-52 rounded-xl'>
              <div className='rcardmenu3 rounded-full mb-4 flex items-center justify-center'>
                <img src={p3} alt='person3' />
              </div>
              <p className='rcardname text-center font-bold'>Mpok Ina</p>
              <p className='rcardsubname text-center'>Karyawan Swasta</p>
              <p className='rcarddetails text-center text-sm'>
                “Sangat terjangkau untuk kantong saya yang tidak terlalu banyak“
              </p>
              <div className='rimg rounded-full mb-4 flex items-center justify-center'>
                <img src={star} alt='star' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}