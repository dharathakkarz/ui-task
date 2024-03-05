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
import '../Product/product.scss'

export default function Product() {
  return (
    <div className='productmain' style={{ background: "#F7F7F7", minHeight: "800px", position: "relative" }}>
      <div className='productmain1 flex justify-center font-bold text-2xl mb-12'>
        <p className='producthead my-3' style={{ marginTop: "10px" }}>Best Selling Product</p>
      </div>

      <div className="productcardmain flex justify-center mb-4">
        <div className="productbg flex px-1 justify-center items-center rounded-full bg-gray-300" style={{ height: "57px" }}>
          <div className="my-2 mx-3">
            <p className="productpar text-center bg-slate-100 p-3 rounded-full" style={{ width: "84px", height: "45px" }}>chair</p>
          </div>
          <div className="pitem my-2 mx-3">
            <p className="pitem-1 text-center">Beds</p>
          </div>
          <div className="pitem my-2 mx-3">
            <p className="pitem-2 text-center">Sofa</p>
          </div>
          <div className="pitem my-2 mx-3">
            <p className="pitem-3 text-center">Lamp</p>
          </div>
        </div>
      </div>

      <div className='pimg-left absolute' style={{ top: "370px", left: "14%", zIndex: 1, maxWidth: "80px" }}>
        <img src={left} alt="Left Arrow" style={{ width: "100%" }} />
      </div>

      <div className='pcardmain flex flex-wrap items-center justify-center mx-6 mt-6'>

        <ProductCard imgSrc={pr1} />
        <ProductCard imgSrc={pr2} />
        <ProductCard imgSrc={pr3} />
        <ProductCard imgSrc={pr4} />

      </div>

      <div className='pimg-right absolute ' style={{ top: "370px", right: "14%", zIndex: 1, maxWidth: "80px" }}>
        <img src={right} alt="Right Arrow" style={{ width: "100%" }} />
      </div>

      <div className='productview mt-12 text-center' style={{ color: "#E58411" }}>
        <p>View All</p>
        <img className='view-img absolute' src={Vector} alt="View All" style={{ left: "52%", marginTop: "-20px" }} />
      </div>
    </div>
  );
}


function ProductCard({ imgSrc }) {
  return (
    <div className="pcard bg-white rounded-lg overflow-hidden shadow-lg mx-2 mb-4" style={{ width: "268.5px", height: "492px" }} >
      <div className="pcardsub relative " style={{ background: "#FAFAFA" }}>
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat filter blur-md"></div>
        <img className="proimg object-cover" style={{ width: "217.9px", height: "255.9px" }} src={imgSrc} alt="Product Image" />
      </div>
      <div className="p-content p-6">
        <p>chair</p>
        <div className="p-content1 text-xl font-semibold mb-2">Sakarias Armchair</div>
        <img src={star} alt="Star" />
        <div className="p-content2 mt-4 flex justify-between items-center">
          <span className="p-content3 text-gray-900 font-bold">$392</span>
          <img src={plus} alt="Plus" />
        </div>
      </div>
    </div>
  ) 
}
 