import React from 'react';
import test1 from '../styles/static/images/test/user-1.png';
import test2 from '../styles/static/images/test/OIP.png';
import test3 from '../styles/static/images/test/user-2.png';
import sponsor1 from '../styles/static/images/img/logo-paypal.png';
import sponsor2 from '../styles/static/images/img/logo-oppo.png';
import sponsor3 from '../styles/static/images/img/hp.png';
import sponsor4 from '../styles/static/images/img/icons8-lenovo-240.png';
import sponsor5 from '../styles/static/images/img/logo-philips.png';
import sponsor6 from '../styles/static/images/img/search.png';
import sponsor7 from '../styles/static/images/img/holberton.jpg';
import sponsor8 from '../styles/static/images/img/prime-day-stacked-logo-rgb-primeblue.png';
import sponsor9 from '../styles/static/images/img/luna-logo.png';
import sponsor10 from '../styles/static/images/img/icons8-dell-144.png';
import sponsor11 from '../styles/static/images/img/icons8-amazon-96.png';
import sponsor12 from '../styles/static/images/img/huawei.png';
import sponsor13 from '../styles/static/images/img/microsoft.png';
import download1 from '../styles/static/images/img/play-store.png';
import download2 from '../styles/static/images/img/app-store.png';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBBtn,
  MDBCol,
  MDBRow,
  MDBInput
} from 'mdb-react-ui-kit';

import './Footer.css';

const Footer = () => {
  return (
    <>
      {/* Test Section */}
      <div className="test">
        <div className="small-c" id="About">
          <div className="row">
            <div className="col-3 card">
              <i className="fa fa-quote-left" />
              <p>
                I wanted to take a moment to express my heartfelt appreciation for your exceptional service...
              </p>
              <div className="rating">
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star-o" aria-hidden="true" />
              </div>
              <img src={test1} alt="img" />
              <h3>Imane legacy</h3>
            </div>
            <div className="col-3 card">
              <i className="fa fa-quote-left" />
              <p>
                I just wanted to extend a sincere thank you for your outstanding service...
              </p>
              <div className="rating">
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star-o" aria-hidden="true" />
              </div>
              <img src={test2} alt="img" />
              <h3>Lara Croft</h3>
            </div>
            <div className="col-3 card">
              <i className="fa fa-quote-left" />
              <p>
                I wanted to take a moment to express my heartfelt appreciation for your exceptional service...
              </p>
              <div className="rating">
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star-o" aria-hidden="true" />
              </div>
              <img src={test3} alt="img" />
              <h3>Ayoub Dorcal</h3>
           
            </div>
            
          </div>
       
      
        </div>
      </div>
     

      
     

      {/* Brands Section */}
      <div className="brands">
        <div className="small-c">
          <div className="row">
            <img src={sponsor6} alt="" />
            <img src={sponsor5} alt="" />
            <img src={sponsor4} alt="" />
            <img src={sponsor3} alt="" />
            <img src={sponsor2} alt="" />
            <img src={sponsor1} alt="" />
            <img src={sponsor9} alt=""  className='luna'/>
            <img src={sponsor10} alt="" />
            <img src={sponsor11} alt="" />
            <img src={sponsor12} alt="" />
            <img src={sponsor7} alt="" />
            <img src={sponsor13} alt="" />
            <img src={sponsor8} alt="" />
        
          </div>
          
        </div>
        
      </div>
      
      <div className="col-6">
        <h3>Download App</h3>
       <div className="down">
    <img src={download1} alt="" />
    <img src={download2} alt="" /> 

    </div>
   <p>Download App for Android and iOS mobile phones</p>
   </div>
      

      {/* Footer Section */}
      <MDBFooter className="text-center text-white" style={{ backgroundColor: 'black' }}>
        <MDBContainer className="p-4 pb-0">
          <section className="mb-4">
            <MDBBtn floating className="m-1" style={{ backgroundColor: '#3b5998' }} href="https://www.facebook.com/ayoub.bnoune.50/" role="button">
              <MDBIcon fab icon="facebook-f" className="face" />
            </MDBBtn>
            <MDBBtn floating className="m-1" style={{ backgroundColor: '#55acee' }} href="https://x.com/ayoubbouagna" role="button">
              <MDBIcon fab icon="twitter" />
            </MDBBtn>
            <MDBBtn floating className="m-1" style={{ backgroundColor: '#dd4b39' }} href="mailto:ayoub.bouagna-etu@etu.univh2c.ma" role="button" type='email' required>
              <MDBIcon fab icon="google" />
            </MDBBtn>
            <MDBBtn floating className="m-1" style={{ backgroundColor: '#ac2bac' }} href="https://www.instagram.com/hyperayoub" role="button">
              <MDBIcon fab icon="instagram" />
            </MDBBtn>
            <MDBBtn floating className="m-1" style={{ backgroundColor: '#0082ca' }} href="https://www.linkedin.com/in/ayoub-bouagna-422a41274/" role="button">
              <MDBIcon fab icon="linkedin-in" />
            </MDBBtn>
            <MDBBtn floating className="m-1" style={{ backgroundColor: '#333333' }} href="https://github.com/hyper-ayoub" role="button">
              <MDBIcon fab icon="github" />
            </MDBBtn>
          </section>
        </MDBContainer>

        <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          ALL Right Reserved &copy; @Hyper-ayoub 2024 bouagnaayoub@gmail.com
          <a className="text-white" href="https://mdbootstrap.com/"></a>
        </div>
      </MDBFooter>



      {/* Subscribe Section */}
      <MDBFooter bgColor="dark" className="text-center text-white text-lg-left">
  <MDBContainer className="p-4 pb-0">
    <form action="https://api.web3forms.com/submit" method="POST">
      {/* Add your access key as a hidden field */}
      <input type="hidden" name="access_key" value="f0759c13-1d2f-49c8-bda8-3809f1effcb8" />

      <MDBRow className="d-flex justify-content-center">
        <MDBCol size="auto" className="mb-4 mb-md-0">
          <p className="pt-2">
            <strong>Sign up for our newsletter</strong>
          </p>
        </MDBCol>

        <MDBCol md="5" size="12" className="mb-4 mb-md-0">
          <MDBInput type="email" name="email" id="form5Example2" label="Email address" contrast required />
        </MDBCol>

        <MDBCol size="auto" className="mb-4 mb-md-0">
          <MDBBtn outline color="light" type="submit">
            Subscribe
          </MDBBtn>
        </MDBCol>
      </MDBRow>
    </form>
  </MDBContainer>
</MDBFooter>

    </>
  );
}

export default Footer;
