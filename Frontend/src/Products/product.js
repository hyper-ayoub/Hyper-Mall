import React from 'react';
import  './product.css';
import prd1 from '../styles/static/images/product/images/product-4.jpg'
import prd2 from '../styles/static/images/product/images/product-2.jpg'
import prd3 from '../styles/static/images/product/images/product-11.jpg'
import prd4 from '../styles/static/images/product/images/category-1.jpg'
import prd5 from '../styles/static/images/product/images/product-5.jpg'
import prd6 from '../styles/static/images/product/images/product-6.jpg'
import prd7 from '../styles/static/images/product/images/product-7.jpg'
import prd8 from '../styles/static/images/product/images/product-1.jpg'
import prd9 from '../styles/static/images/product/images/product-10.jpg'
import last1 from '../styles/static/images/product/mobile/12-removebg-preview.png'
import last2 from '../styles/static/images/product/mobile/14pro_-removebg-preview.png'
import last3 from '../styles/static/images/product/mobile/15-removebg-preview.png'
import last4 from '../styles/static/images/product/mobile/laptop.png'
import last5 from '../styles/static/images/product/mobile/cover_-removebg-preview.png'
import last6 from '../styles/static/images/product/mobile/iphone.png'
import last7 from '../styles/static/images/product/mobile/laptop-removebg-preview.png'
import last8 from '../styles/static/images/product/mobile/product-8.jpg'
import last9 from '../styles/static/images/product/mobile/product-9.jpg'
import last10 from '../styles/static/images/product/mobile/s23-removebg-preview (1).png'
import last11 from '../styles/static/images/product/mobile/S24ultra-removebg-preview.png'
import last12 from '../styles/static/images/product/mobile/asus-rog-ally-x-z1-extreme.front.variety.1717492416951-removebg-preview.png';
import limited1 from '../styles/static/images/product/mobile/raycon-everyday-earbuds-2024.front.variety.1718308649286__1_-removebg-preview.png';
import limited2 from '../styles/static/images/product/mobile/xiaomi-watch-s4-sport.front.variety.1721991799736-removebg-preview.png';
import limited3 from '../styles/static/images/product/mobile/11.png';
import limited4 from '../styles/static/images/product/mobile/marshall-major-v.front.variety.1713380864731-removebg-preview.png';
import limited5 from '../styles/static/images/product/mobile/ugreen-hitune-max5c.front.variety.1721901648594-removebg-preview.png';
import limited6 from '../styles/static/images/product/mobile/engwe-ep-2-pro.front.variety.1691587719351-removebg-preview.png';
import limited7 from '../styles/static/images/product/mobile/fiido-d21.front.variety.1641466989230-removebg-preview.png';
import limited8 from '../styles/static/images/product/mobile/air2_-removebg-preview.png';
export default function Product() {
{/* product section  */}
    return (
      <>
  
    <div className='marque'>
    <marquee width="40%"  height="200px" behavior="scroll" >
        Welcome to HyperMall! 🌟 Stay Updated with the Latest News and Offers. 📢 Check Back Often for More Updates!
    </marquee>
    </div>

  <h2 className="title"> Products </h2>
  <div className="row">
    <div className="col-4" id='Products'>
    <img
        src={prd1}
        alt=""
      />

      <h4> Hyper T-shirt blue print</h4>
      <div className="rating">
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star-o" aria-hidden="true" />
        {/* <i class="fas fa-shopping-cart"></i> */}
   
      </div>
      <p>$800</p>
      <h2>PreOrder Now </h2>
      <a href='https://docs.google.com/forms/d/e/1FAIpQLScWjF0bxQ4DiupQlr8Tpy8MO5T4rrLrs5esXSJLoVrxJJMfKg/viewform?usp=sf_link'><i className="fas fa-cart-plus" style={{ color: "white", fontSize: "38px", cursor: "pointer" }}></i></a>
      
    </div>
    <div className="col-4">
      <img
        src={prd2}
        alt=""
      />
      <h4> Hypera-S Black Shoe</h4>
      <div className="rating">
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star-o" aria-hidden="true" />
        {/* <i class="fas fa-shopping-cart"></i> */}
      </div>
      <p>$700</p>
      <h2>PreOrder Now </h2>
      <a href='https://docs.google.com/forms/d/e/1FAIpQLScWjF0bxQ4DiupQlr8Tpy8MO5T4rrLrs5esXSJLoVrxJJMfKg/viewform?usp=sf_link'><i className="fas fa-cart-plus" style={{ color: "white", fontSize: "38px", cursor: "pointer" }}></i></a>
    </div>
    <div className="col-4">
      <img
         src={prd3}
        alt=""
      />
      <h4> Hypera-S gray Shoe</h4>
      <div className="rating">
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star-o" aria-hidden="true" />
        {/* <i class="fas fa-shopping-cart"></i> */}
      </div>
      <p>$500</p>
      <h2>PreOrder Now </h2>
      <a href='https://docs.google.com/forms/d/e/1FAIpQLScWjF0bxQ4DiupQlr8Tpy8MO5T4rrLrs5esXSJLoVrxJJMfKg/viewform?usp=sf_link'><i className="fas fa-cart-plus" style={{ color: "white", fontSize: "38px", cursor: "pointer" }}></i></a>
    </div>
    
    <div className="col-4">
      <img
        src={prd4}
        alt=""
      />
      <h4> Hypera-S Red Shoe</h4>
      <div className="rating">
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star-o" aria-hidden="true" />
        {/* <i class="fas fa-shopping-cart"></i> */}
      </div>
      <p>$1,099</p>
      <h2>PreOrder Now </h2>
      <a href='https://docs.google.com/forms/d/e/1FAIpQLScWjF0bxQ4DiupQlr8Tpy8MO5T4rrLrs5esXSJLoVrxJJMfKg/viewform?usp=sf_link'><i className="fas fa-cart-plus" style={{ color: "white", fontSize: "38px", cursor: "pointer" }}></i></a>
    </div>
    <div className="col-4">
      <img
        src={prd5}
        alt=""
      />
      <h4> Slati shoe</h4>
      <div className="rating">
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star-o" aria-hidden="true" />
        {/* <i class="fas fa-shopping-cart"></i> */}
      </div>
      <p>$450</p>
      <h2>PreOrder Now </h2>
      <a href='https://docs.google.com/forms/d/e/1FAIpQLScWjF0bxQ4DiupQlr8Tpy8MO5T4rrLrs5esXSJLoVrxJJMfKg/viewform?usp=sf_link'><i className="fas fa-cart-plus" style={{ color: "white", fontSize: "38px", cursor: "pointer" }}></i></a>
    </div>
    <div className="col-4">
      <img
      src={prd6}
        alt=""
      />
      <h4> HyperT-shirt Black print </h4>
      <div className="rating">
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star-o" aria-hidden="true" />
        {/* <i class="fas fa-shopping-cart"></i> */}
      </div>
      <p>$188</p>
      <h2>PreOrder Now </h2>
      <a href='https://docs.google.com/forms/d/e/1FAIpQLScWjF0bxQ4DiupQlr8Tpy8MO5T4rrLrs5esXSJLoVrxJJMfKg/viewform?usp=sf_link'><i className="fas fa-cart-plus" style={{ color: "white", fontSize: "38px", cursor: "pointer" }}></i></a>
    </div>
    <div className="col-4">
      <img
       src={prd7}
        alt=""
      />
      <h4> Hyper-Y shock</h4>
      <div className="rating">
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star-o" aria-hidden="true" />
        {/* <i class="fas fa-shopping-cart"></i> */}
      </div>
      <p>$1,419</p>
      <h2 style={{ color: 'red' }}>out of stock</h2>
      <a href='https://docs.google.com/forms/d/e/1FAIpQLScWjF0bxQ4DiupQlr8Tpy8MO5T4rrLrs5esXSJLoVrxJJMfKg/viewform?usp=sf_link'><i className="fas fa-cart-plus" style={{ color: "white", fontSize: "38px", cursor: "pointer" }}></i></a>
    </div>
    <div className="col-4">
      <img
        src={prd8}
        alt=""
      />
      <h4> HyperT-shirt Red print </h4>
      <div className="rating">
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star-o" aria-hidden="true" />
        {/* <i class="fas fa-shopping-cart"></i> */}
      </div>


      <p>$1,000</p>
      <h2>PreOrder Now </h2>
      <a href='https://docs.google.com/forms/d/e/1FAIpQLScWjF0bxQ4DiupQlr8Tpy8MO5T4rrLrs5esXSJLoVrxJJMfKg/viewform?usp=sf_link'><i className="fas fa-cart-plus" style={{ color: "white", fontSize: "38px", cursor: "pointer" }}></i></a>
    </div>
    <div className="col-4">
      <img
      src={prd9}
        alt=""
      />
      <h4> Nicola Shoe</h4>
      <div className="rating">
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star-o" aria-hidden="true" />
        {/* <i class="fas fa-shopping-cart"></i> */}
      </div>
      <p>$1,600</p>
      <h2>PreOrder Now </h2>
      
      <a href='https://docs.google.com/forms/d/e/1FAIpQLScWjF0bxQ4DiupQlr8Tpy8MO5T4rrLrs5esXSJLoVrxJJMfKg/viewform?usp=sf_link'><i className="fas fa-cart-plus" style={{ color: "white", fontSize: "38px", cursor: "pointer" }}></i></a>
    </div>
  </div>
  {/* last product */}
  <h2 className="title"> Last Product</h2>
  <div className="row">
    <div className="col-4">
      <img
        src={last1}
        alt=""
      />
      <h4> Iphone 12</h4>
      <div className="rating">
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star-o" aria-hidden="true" />
        {/* <i class="fas fa-shopping-cart"></i> */}
      </div>
      <p>$180</p>
      <h2>PreOrder Now </h2>
      <a href='https://forms.gle/Meut6tnxR6Bwwexw8'><i className="fas fa-cart-plus" style={{ color: "white", fontSize: "38px", cursor: "pointer" }}></i></a>


    </div>
    <div className="col-4">
      <img
      src={last2}
        alt=""
      />
      <h4> Iphone 14 Pro Max </h4>
      <div className="rating">
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star-o" aria-hidden="true" />
        {/* <i class="fas fa-shopping-cart"></i> */}
      </div>
      <p>$199</p>
      <h2>PreOrder Now </h2>
      <a href='https://forms.gle/Meut6tnxR6Bwwexw8'><i className="fas fa-cart-plus" style={{ color: "white", fontSize: "38px", cursor: "pointer" }}></i></a>


    </div>
    <div className="col-4">
      <img
       src={last3}
        alt=""
      />
      <h4> Iphone 15 Pro Max</h4>
      <div className="rating">
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star-o" aria-hidden="true" />
        {/* <i class="fas fa-shopping-cart"></i> */}
      </div>
      <p>$158</p>
      <h2>PreOrder Now </h2>
      <a href='https://forms.gle/Meut6tnxR6Bwwexw8'><i className="fas fa-cart-plus" style={{ color: "white", fontSize: "38px", cursor: "pointer" }}></i></a>


    </div>
    <div className="col-4">
      <img
        src={last4}
        alt=""
      />
      <h4> Asus 2021 laptop</h4>
      <div className="rating">
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star-o" aria-hidden="true" />
        {/* <i class="fas fa-shopping-cart"></i> */}
      </div>
      <p>$158</p>
      <h2>PreOrder Now </h2>
      <a href='https://forms.gle/Meut6tnxR6Bwwexw8'><i className="fas fa-cart-plus" style={{ color: "white", fontSize: "38px", cursor: "pointer" }}></i></a>


    </div>
    <div className="col-4">
      <img
         src={last5}
        alt=""
      />
      <h4> AirPods Black Case Pro Cover</h4>
      <div className="rating">
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star-o" aria-hidden="true" />
        {/* <i class="fas fa-shopping-cart"></i> */}
      </div>
      <p>$200</p>
      <h2>PreOrder Now </h2>
      <a href='https://forms.gle/Meut6tnxR6Bwwexw8'><i className="fas fa-cart-plus" style={{ color: "white", fontSize: "38px", cursor: "pointer" }}></i></a>


    </div>
    <div className="col-4">
      <img
        src={last6}
        alt=""
      />
      <h4> Iphone 13</h4>
      <div className="rating">
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star-o" aria-hidden="true" />
        {/* <i class="fas fa-shopping-cart"></i> */}
      </div>
      <p>$29</p>
      <h2>PreOrder Now </h2>
      <a href='https://forms.gle/Meut6tnxR6Bwwexw8'><i className="fas fa-cart-plus" style={{ color: "white", fontSize: "38px", cursor: "pointer" }}></i></a>
    </div>
    <div className="col-4">
      <img
         src={last7}
        alt=""
      />
      <h4> Lenovo ideapad 2020 </h4>
      <div className="rating">
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star-o" aria-hidden="true" />
        {/* <i class="fas fa-shopping-cart"></i> */}
      </div>
      <p>$9</p>
      <h2>PreOrder Now </h2>
      <a href='https://forms.gle/Meut6tnxR6Bwwexw8'><i className="fas fa-cart-plus" style={{ color: "white", fontSize: "38px", cursor: "pointer" }}></i></a>


    </div>
    <div className="col-4">
      <img
         src={last8}
        alt=""
      />
       <h4> Aice Watch 2022 lite</h4>
      <div className="rating">
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star-o" aria-hidden="true" />
        {/* <i class="fas fa-shopping-cart"></i> */}
      </div>
      <p>$400</p>
      <h2>PreOrder Now </h2>
      <a href='https://forms.gle/Meut6tnxR6Bwwexw8'><i className="fas fa-cart-plus" style={{ color: "white", fontSize: "38px", cursor: "pointer" }}></i></a>


    </div>
    <div className="col-4">
      <img
        src={last9}
        alt=""
      />
      <h4> Aice Watch 2022 lite</h4>
      <div className="rating">
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star-o" aria-hidden="true" />
        {/* <i class="fas fa-shopping-cart"></i> */}
      </div>
      <p>$250</p>
      <h2>PreOrder Now </h2>
      <a href='https://forms.gle/Meut6tnxR6Bwwexw8'><i className="fas fa-cart-plus" style={{ color: "white", fontSize: "38px", cursor: "pointer" }}></i></a>


    </div>
    <div className="col-4">
      <img
        src={last10}
        alt=""
      />
      <h4> Samsung S22</h4>
      <div className="rating">
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star-o" aria-hidden="true" />
        {/* <i class="fas fa-shopping-cart"></i> */}
      </div>
      <p>$250</p>
      <h2>PreOrder Now </h2>
      <a href='https://forms.gle/Meut6tnxR6Bwwexw8'><i className="fas fa-cart-plus" style={{ color: "white", fontSize: "38px", cursor: "pointer" }}></i></a>


    </div>
    <div className="col-4">
      <img
        src={last11}
        alt=""
      />
      <h4> Samsung s23 </h4>
      <div className="rating">
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star-o" aria-hidden="true" />
        {/* <i class="fas fa-shopping-cart"></i> */}
      </div>
      <p>$250</p>
      <h2>PreOrder Now </h2>
      <a href='https://forms.gle/Meut6tnxR6Bwwexw8'><i className="fas fa-cart-plus" style={{ color: "white", fontSize: "38px", cursor: "pointer" }}></i></a>
    </div>
    <div className="col-4">
      <img
        src={last12}
        alt=""
      />
      <h4> asus-rog-ally-x-z1</h4>
      <div className="rating">
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star-o" aria-hidden="true" />
        {/* <i class="fas fa-shopping-cart"></i> */}
      </div>
      <p>$250</p>
      <h2>PreOrder Now </h2>
      <a href='https://forms.gle/Meut6tnxR6Bwwexw8'><i className="fas fa-cart-plus" style={{ color: "white", fontSize: "38px", cursor: "pointer" }}></i></a>
    </div>
  </div>




  {/* limited time */}
  <h2 className="title"> limited Time</h2>
  <div className="row">
    <div className="col-4">
      <img
        src={limited1}
        alt=""
      />
      <h4> Oiritaly Montre </h4>
      <div className="rating">
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star-o" aria-hidden="true" />
        {/* <i class="fas fa-shopping-cart"></i> */}
      </div>
      <p>$180</p>
      <h2>PreOrder Now </h2>
      <a href='https://docs.google.com/forms/d/e/1FAIpQLScZpaR5Cqd8ZgeZ7Z7jA8ibLrQHhrTchzlZZ1RlyakbZOmZ_A/viewform?usp=sf_link'><i className="fas fa-cart-plus" style={{ color: "white", fontSize: "38px", cursor: "pointer" }}></i></a>


    </div>
    <div className="col-4">
      <img
      src={limited2}
        alt=""
      />
      <h4> Fossil FS5455 </h4>
      <div className="rating">
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star-o" aria-hidden="true" />
        {/* <i class="fas fa-shopping-cart"></i> */}
      </div>
      <p>$199</p>
      <h2>PreOrder Now </h2>
      <a href='https://docs.google.com/forms/d/e/1FAIpQLScZpaR5Cqd8ZgeZ7Z7jA8ibLrQHhrTchzlZZ1RlyakbZOmZ_A/viewform?usp=sf_link'><i className="fas fa-cart-plus" style={{ color: "white", fontSize: "38px", cursor: "pointer" }}></i></a>


    </div>
    <div className="col-4">
      <img
       src={limited3}
        alt=""
      />
      <h4> Iphone 11</h4>
      <div className="rating">
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star-o" aria-hidden="true" />
        {/* <i class="fas fa-shopping-cart"></i> */}
      </div>
      <p>$158</p>
      <h2>PreOrder Now </h2>
      <a href='https://docs.google.com/forms/d/e/1FAIpQLScZpaR5Cqd8ZgeZ7Z7jA8ibLrQHhrTchzlZZ1RlyakbZOmZ_A/viewform?usp=sf_link'><i className="fas fa-cart-plus" style={{ color: "white", fontSize: "38px", cursor: "pointer" }}></i></a>


    </div>
    <div className="col-4">
      <img
        src={limited4}
        alt=""
      />
      <h4> Hyper Black lite Headphone</h4>
      <div className="rating">
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star-o" aria-hidden="true" />
        {/* <i class="fas fa-shopping-cart"></i> */}
      </div>
      <p>$158</p>
      <h2>PreOrder Now </h2>
      <a href='https://docs.google.com/forms/d/e/1FAIpQLScZpaR5Cqd8ZgeZ7Z7jA8ibLrQHhrTchzlZZ1RlyakbZOmZ_A/viewform?usp=sf_link'><i className="fas fa-cart-plus" style={{ color: "white", fontSize: "38px", cursor: "pointer" }}></i></a>


    </div>
    <div className="col-4">
      <img
         src={limited5}
        alt=""
      />
      <h4> Hypera Headphone</h4>
      <div className="rating">
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star-o" aria-hidden="true" />
        {/* <i class="fas fa-shopping-cart"></i> */}
      </div>
      <p>$200</p>
      <h2>PreOrder Now </h2>
      <a href='https://docs.google.com/forms/d/e/1FAIpQLScZpaR5Cqd8ZgeZ7Z7jA8ibLrQHhrTchzlZZ1RlyakbZOmZ_A/viewform?usp=sf_link'><i className="fas fa-cart-plus" style={{ color: "white", fontSize: "38px", cursor: "pointer" }}></i></a>
    </div>
    <div className="col-4">
      <img
         src={limited8}
        alt=""
      />
      <h4> Hypera-X Headphone</h4>
      <div className="rating">
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star-o" aria-hidden="true" />
        {/* <i class="fas fa-shopping-cart"></i> */}
      </div>
      <p>$400</p>
      <h2>PreOrder Now </h2>
      <a href='https://docs.google.com/forms/d/e/1FAIpQLScZpaR5Cqd8ZgeZ7Z7jA8ibLrQHhrTchzlZZ1RlyakbZOmZ_A/viewform?usp=sf_link'><i className="fas fa-cart-plus" style={{ color: "white", fontSize: "38px", cursor: "pointer" }}></i></a>
    </div>
  </div>


  
  <div className='row'>
          {/* giveaway */}
          <aside>
          <h2 className="title"> Giveaway</h2>
          </aside>
        
          <div className="col-4">
            
      <img
        src={limited6}
        alt=""
      />
      
      <h4> Hypera Bikes S</h4>
      <div className="rating">
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star-o" aria-hidden="true" />
        {/* <i class="fas fa-shopping-cart"></i> */}
      </div>
      <p>$29</p>
      <h2>PreOrder Now </h2>
      <a href='https://forms.gle/upD3S3XpX5G3aWGH6'><i className="fas fa-cart-plus" style={{ color: "white", fontSize: "38px", cursor: "pointer" }}></i></a>
    </div>
    <div className="col-4">
      <img
         src={limited7}
        alt=""
      />
      <h4> Hypera Bikes D</h4>
      <div className="rating">
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star-o" aria-hidden="true" />
        {/* <i class="fas fa-shopping-cart"></i> */}
      </div>
      <p>$9</p>
      <h2>PreOrder Now </h2>
      <a href='https://forms.gle/upD3S3XpX5G3aWGH6'><i className="fas fa-cart-plus" style={{ color: "white", fontSize: "38px", cursor: "pointer" }}></i></a>
    </div>
    <div className="col-4">
      <img
         src={limited7}
        alt=""
      />
      <h4> Hypera Bikes D</h4>
      <div className="rating">
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star-o" aria-hidden="true" />
        {/* <i class="fas fa-shopping-cart"></i> */}
      </div>
      <p>$9</p>
      <h2>PreOrder Now </h2>
      <a href='https://forms.gle/upD3S3XpX5G3aWGH6'><i className="fas fa-cart-plus" style={{ color: "white", fontSize: "38px", cursor: "pointer" }}></i></a>
    </div>
    
    </div>
    

</>
    );
  }