import React from 'react'
import pr1 from '../../assets/product/pr1.png'
import pr2 from '../../assets/product/pr2.png'
import pr3 from '../../assets/product/pr3.png'
import pr4 from '../../assets/product/pr4.png'
import star from '../../assets/product/star.png'
import plus from '../../assets/product/plus.png'
import left from '../../assets/product/left.png'
import right from '../../assets/product/right.png'
import Vector from '../../assets/Vector.png'

export default function Product() {
  return (
    <div className= '' style={{ background: "#F7F7F7", height: "800px" }}>
      <div className='flex justify-center font-bold text-2xl mb-12  ' >
        <p className='my-3' style={{ marginTop:"10px" }}>Best Selling Product</p>
      </div>
      <div class="flex justify-center mb-4 " >
        <div class="flex px-1 justify-center items-center rounded-full bg-gray-300" style={{  height:"57px" }}>
          <div class="my-2 mx-3 " >
            <p class="text-center bg-slate-100 p-3 rounded-full" style={{ width:"84px", height:"45px" }}>chair</p>
          </div>
          <div class="my-2 mx-3">
            <p class="text-center">Beds</p>
          </div>
          <div class="my-2 mx-3">
            <p class="text-center">Sofa</p>
          </div>
          <div class="my-2 mx-3">
            <p class="text-center">Lamp</p>
          </div>
        </div>
      </div>

      <div className='absolute ' style={{ marginTop:"180px", left:"320px" ,zIndex:1}}>
        <img src={left} />
      </div>
      <div className='flex items-center justify-center mx-6 mt-6'>


        <div className="  bg-white rounded-lg overflow-hidden shadow-lg mx-2" style={{ width: "268.5px", height: "492px" }} >

          <div className="relative " style={{ background:"#FAFAFA"  }}>

            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat filter blur-md"
            ></div>
          

            <img className="  object-cover" style={{ width: "217.9px", height: "255.9px", top: 1775 }} src={pr1} alt="Product Image" />
          </div>

          <div className="p-6">
            <p>chair</p>
            <div className="text-xl font-semibold mb-2">Sakarias Armchair</div>
            <img src={star} />
            <div className="mt-4 flex justify-between items-center">
              <span className="text-gray-900 font-bold">$392</span>
              <img src={plus} />
            </div>
          </div>
        </div>
        <div className="  bg-white rounded-lg overflow-hidden shadow-lg  mx-4" style={{ width: "268.5px", height: "492px" }} >

          <div className="relative" style={{ background:"#FAFAFA"  }}>

            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat filter blur-md"
            ></div>

            <img className="  object-cover" style={{ width: "217.9px", height: "255.9px", top: "1775px" }} src={pr2} alt="Product Image" />
          </div>

          <div className="p-6">
            <p>chair</p>
            <div className="text-xl font-semibold mb-2">Sakarias Armchair</div>
            <img src={star} />
            <div className="mt-4 flex justify-between items-center">
              <span className="text-gray-900 font-bold">$392</span>
              <img src={plus} />
            </div>
          </div>
        </div>
        <div className=" bg-white rounded-lg overflow-hidden shadow-lg mx-4 " style={{ width: "268.5px", height: "492px" }} >

          <div className="relative flex items-center justify-items-center" style={{ background:"#FAFAFA"  }}>

            <div className="absolute mx-3 inset-0 bg-cover bg-center bg-no-repeat filter blur-md"
            ></div>

            <img className="  object-cover" style={{ width: "217.9px", height: "255.9px", top: "1775px" }} src={pr3} alt="Product Image" />
          </div>

          <div className="p-6">
            <p>chair</p>
            <div className="text-xl font-semibold mb-2">Sakarias Armchair</div>
            <img src={star} />
            <div className="mt-4 flex justify-between items-center">
              <span className="text-gray-900 font-bold">$392</span>
              <img src={plus} />
            </div>
          </div>
        </div>
        <div className=" bg-white rounded-lg overflow-hidden shadow-lg mx-4 " style={{ width: "268.5px", height: "492px" }} >

          <div className="relative flex items-center justify-items-center" style={{ background:"#FAFAFA"  }}>

            <div className="absolute mx-3 inset-0 bg-cover bg-center bg-no-repeat filter blur-md"
            ></div>

            <img className="  object-cover" style={{ width: "217.9px", height: "255.9px", top: "1775px" }} src={pr4} alt="Product Image" />
          </div>

          <div className="p-6">
            <p>chair</p>
            <div className="text-xl font-semibold mb-2">Sakarias Armchair</div>
            <img src={star} />
            <div className="mt-4 flex justify-between items-center">
              <span className="text-gray-900 font-bold">$392</span>
              <img src={plus} />
            </div>
          </div>
        </div>
        <div className='absolute ' style={{ marginTop:"-40px", right:"320px" ,zIndex:1}}>
        <img src={right} />
      </div>

      </div>
      <div className='mt-12 text-center ' style={{ color:"#E58411" }}>
        
        <p>
          View All
        </p>
        <img className='absolute' src={Vector} style={{ left:1000, marginTop: -20 }}/>
      </div>
    </div>
  )
}
