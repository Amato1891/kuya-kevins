import React from 'react';
import { useEffect, useState } from 'react';
import { NavLink, useNavigate  } from 'react-router-dom';

const Footer = () => {
    const [scrollY, setScrollY] = useState(window.scrollY || window.pageYOffset);
    const navigate = useNavigate();

    const handleNavLinkClick = (location) => {

      navigate(location);

      // scroll to top after clicking privacy page
     (() => {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top with smooth animation
      })();

      // send tab click to google analytics
      gtag('event', 'navbar_click', {
          navbar_tab_clicked: location
        });
    };

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

  const captureSocialMediaEvent = (socialMediaSite) => {
    // capture event if card is clicked
    gtag('event', 'social_media_link', {
      social_media_link_clicked: socialMediaSite
    });
  }
    return (
        <div className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s" style={{textAlign: 'center'}}>
                        <h4 className="section-title ff-secondary text-start text-warning fw-normal mb-4">Contact</h4>
                        <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>Greater Tampa Bay Area</p>
                        <p className="mb-2"><i className="fa fa-phone-alt me-3"></i><a href="tel:727-479-2614" style={{color:'white'}}>727-479-2614</a></p>
                        <p className="mb-2"><i className="fa fa-envelope me-3"></i><a href="mailto:Kuyakevinsbbq@gmail.com" style={{color:'white'}}>Kuyakevinsbbq@gmail.com</a></p>
                        <div className="d-flex pt-2" style={{flexDirection: 'row', justifyContent: 'center'}}>
                            <a className="btn btn-outline-light btn-social" href="https://x.com/KuyaKevinsBBQ" target='blank' onClick = {()=> {captureSocialMediaEvent('x')}}><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-outline-light btn-social" href="https://www.facebook.com/profile.php?id=61560228483831" target='blank' onClick = {()=> {captureSocialMediaEvent('facebook')}}><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-outline-light btn-social" href="https://www.instagram.com/kuyakevinsbbq/" target='blank' onClick = {()=> {captureSocialMediaEvent('instagram')}}><i className="fab fa-instagram"></i></a>
                            <a className="btn btn-outline-light btn-social" href="https://www.tiktok.com/@kuyakevinsbbq?lang=en" target='blank' onClick = {()=> {captureSocialMediaEvent('tiktok')}}><i className="fab fa-tiktok"></i></a>
                            <a className="btn btn-outline-light btn-social" href="https://www.snapchat.com/add/kuyakevinsbbq" target='blank' onClick = {()=> {captureSocialMediaEvent('snapchat')}}><i className="fab fa-snapchat"></i></a>
            </div>
            <br/>
            <hr/>
                <br/>
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                             <p>&copy; Kuya Kevins, All Rights Reserved.</p>
                          <NavLink to="/privacy" className="" activeclassname="active" onClick={() => handleNavLinkClick('privacy')}>Privacy Policy</NavLink>
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                        </div>
                    </div>
            {scrollY > 800 ? (<a href="#" className="btn btn-lg btn-warning btn-lg-square back-to-top"><i className="fa fa-arrow-up"></i></a>) :(<div></div>)}
            
        </div>
        
    );
}

export default Footer;
