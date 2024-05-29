import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet'
import Carousel from './Carousel';
import Menu from './Menu';
import AboutSection from './About';
import FindUs from './FindUs';
import BookUs from './BookUs';
import GoogleCalendarEmbed from './GoogleCalendarEmbed';

// import images
function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
  const images = importAll(require.context('../assets/img/', false, /\.(png|jpe?g|svg)$/));
  
  // images
  const kuyaKevinImg = images['kuya-kevins-main.jpg'];
  const aboutImg1 = images['kuya-kevins-thumb-removebg-preview.png'];

  


const LandingPage = (props) => {

    return (
        <>
            <img className="img-fluid" src={kuyaKevinImg} alt="Kuya Kevins main logo" style={{
              display: 'block',
              margin: '0 auto',
              maxWidth: '700px',
              width: '100%',
              height: '80vh', 
              zIndex: 1
            }}/>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img style={{ width: 'auto', height: 'auto' }} className="img-fluid landing-page-logo" data-wow-delay="0.1s" src={aboutImg1} alt="Kuya Kevins alt logo" />
</div>
            <AboutSection/>
            <Menu/>
            <FindUs/>   
            <BookUs/>
            <Carousel/>
        </>
      )
}

export default LandingPage;
