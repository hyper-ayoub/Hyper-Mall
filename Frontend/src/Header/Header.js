import React from "react";
import menuIcon from '../styles/static/images/product/menu.png';
import sales from '../styles/static/images/state.gif';
import catImage1 from '../styles/static/images/product/images/pic-article-03.jpg';
import catImage2 from '../styles/static/images/product/images/istockphoto-1480578223-170667a.png';
import catImage3 from '../styles/static/images/product/images/istockphoto-1560142923-170667a.png';
import black from '../styles/static/images/Gray Red Black White Dark Red Photo Shopping Black Friday Sale Banner.png';
import './Header.css';



const Header = ({ menutoogle }, {toggleNavbar}) => {
  return (
    <>
      <div className="loader" id="loader" />
      {/* Your page content goes here */}
      <div className="content hide-loader" id="content"></div>
      <div className="header" >
        <div className="container">
          <div className="navbar">
            <div className="logo"></div>
            <nav>
              <button className="navbar-toggle" onClick={toggleNavbar}>
                <span className="bar" />
                <span className="bar" />
                <span className="bar" />
              </button>
              <ul id="items" className="center" id='Home'>
                <li>
                  <a href="#Home">Home🏠</a>
                  
                </li>
                <li>
                  <a href="#Products">Products🏷️</a>
                </li>
                <li>
                  <a href="#About">About🤷‍♂️</a>
                </li>
                <li>
                  <a href="/contact.html">Contact💬</a>
                </li>
                <li>
                  <a href="">
                    <i className="fa fa-shopping-bag" />
                  </a>
                </li>
              </ul>
            </nav>
            <img
              src={menuIcon}
              alt="Menu Icon"
              className="menu-icon"
              onClick={menutoogle}
            />
            
          </div>
        </div>
        <div className="row" >
          <div className="col-2">
            <h1 className="text">
              Buy Now With <br /> Hyper-ayoub Shop !
            </h1>    <model-viewer 
        className ="module"
        src="scene.gltf"
        alt="A 3D model of a car"
        shadow-intensity="1"
        camera-controls
        auto-rotate
        ar
        style={{ width: '200px', }}
      ></model-viewer>
            <p style={{ alignItems: 'center' }} className="typewriter">
              Welcome to Hyper-Shop, your one-stop destination for all things extraordinary! <br />
              Step into a world where innovation meets convenience, and where the latest trends are just a click away. At
              Hyper-Shop, we redefine shopping with a curated selection of top-notch products that cater to your every need.
            </p>
            <a href="https://github.com/hyper-ayoub" className="btn">
              Github Profile for More
            </a>
          </div>
          <img
             src={sales}
              alt="Real Product"
              className='sales'
            />
          <img className='col-33'
       src={black}
       alt="black friday"/>
          <div className="col-2">
          </div>
        </div>
      </div>
      {/* part2  */}
      <div className="categories">
        <div className="small-c">
          <div className="row">
            <div className="col-3">
              <img
                src={catImage1}
                alt="Category 1"
              />
            </div>
            <div className="col-3">
              <img
                src= {catImage2}
                alt="Category 2"
              />
            </div>
            <div className="col-3">
              <img
                src={catImage3}
                alt="Category 3"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


export default Header;
