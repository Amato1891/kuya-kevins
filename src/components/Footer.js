import React from 'react';
import { useEffect, useState } from 'react';

const Footer = () => {
    const [scrollY, setScrollY] = useState(window.scrollY || window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY || window.pageYOffset);
    };
    window.addEventListener('scroll', handleScroll);

    // Clean up event listener on unmount
    return () => {
        
      window.removeEventListener('scroll', handleScroll);
    };
    
  }, []);
    return (
        <div className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-3 col-md-6">
                        <h4 className="section-title ff-secondary text-start text-warning fw-normal mb-4">Kuya Kevin's</h4>
                        <a className="btn btn-link" href="/about">About Us</a>
                        <a className="btn btn-link" href="/contact-us">Contact Us</a>
                        <a className="btn btn-link" href="/book-us">Book Us</a>
                        {/* <a className="btn btn-link" href="">Privacy Policy</a> */}
                        {/* <a className="btn btn-link" href="">Terms & Condition</a> */}
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h4 className="section-title ff-secondary text-start text-warning fw-normal mb-4">Contact</h4>
                        <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>Greater Tampa Bay Area</p>
                        <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>727-479-2614</p>
                        <p className="mb-2"><i className="fa fa-envelope me-3"></i>Kuyakevinsbbq@gmail.com</p>
                        <div className="d-flex pt-2">
                            <a className="btn btn-outline-light btn-social" href="https://x.com/" target='blank'><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-outline-light btn-social" href="https://www.facebook.com/profile.php?id=61560228483831" target='blank'><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-outline-light btn-social" href="https://www.youtube.com/" target='blank'><i className="fab fa-youtube"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="copyright">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            &copy; <a className="border-bottom" href="#">Kuya Kevins</a>, All Rights Reserved. 
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            <div className="footer-menu">
                                {/* <a href="">Home</a> */}
                                {/* <a href="">Cookies</a> */}
                                {/* <a href="">Help</a> */}
                                {/* <a href="">FAQs</a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {scrollY > 800 ? (<a href="#" className="btn btn-lg btn-warning btn-lg-square back-to-top"><i className="fa fa-arrow-up"></i></a>) :(<div></div>)}
            
        </div>
        
    );
}

export default Footer;
