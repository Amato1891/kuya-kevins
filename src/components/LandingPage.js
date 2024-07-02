import React, { useEffect, useState } from 'react';
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
  const kuyaKevinImg = images['kuya_kevin_color_bg.png'];
  const aboutImg1 = images['kuya-kevins-thumb-removebg-preview.png'];
  const kuyaCardFront = images['KuyaCard.png'];
  const kuyaCardBack = images['KuyaCard2.png'];

  


const LandingPage = (props) => {

  const [isFlipped, setIsFlipped] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);
  
  const handleIconClick = () => {
    setIsVisible(false);
    setTimeout(() => {
      setIsFading(true);
      setIsVisible(true);
      setTimeout(() => {
        setIsFading(false);
      }, 500);
    }, 800);
  };

  const handleImageClick = () => {
    setIsFlipped(!isFlipped);
  };

    return (
        <>
            <img className="img-fluid main-logo" src={kuyaKevinImg} alt="Kuya Kevins main logo" style={{
              display: 'block',
              marginTop: '0 auto',
              maxWidth: '700px',
              width: '100%', 
              zIndex: 1
            }}/>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img style={{ width: 'auto', height: 'auto' }} className="img-fluid landing-page-logo" data-wow-delay="0.1s" src={aboutImg1} alt="Kuya Kevins alt logo" />
</div>
            <AboutSection/>
            <Menu/>
            <FindUs/>   
            <BookUs/>
            {/* <Carousel/> */}
            <div className="card-container" onClick={handleImageClick}>
            {isVisible && (
        <i
          className={`fa fa-sync icon ${isFading ? 'fade-in' : ''}`}
          style={{ position: 'absolute', top: '40px', left: '25px', zIndex: 5, cursor: 'pointer' }}
          onClick={handleIconClick}
        ></i>
      )}
            
      <img
        onClick={handleIconClick}
        style={{ width: 'auto', height: 'auto', marginTop: '15px', marginBottom: '15px', padding: '10px' }}
        className={`img-fluid landing-page-logo ${isFlipped ? 'flipped' : ''}`}
        src={isFlipped ? kuyaCardBack : kuyaCardFront}
        alt="Kuya Kevin's business card"
      />
    </div>
        </>
      )
}

export default LandingPage;
