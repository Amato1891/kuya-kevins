import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet'
import Carousel from './Carousel';
import Menu from './Menu';
import AboutSection from './About';
import FindUs from './FindUs';
import BookUs from './BookUs';
import PromoBanner from './PromoBanner';
import GoogleCalendarEmbed from './GoogleCalendarEmbed';

const imgUrl = process.env.NODE_ENV === 'production' ? 'https://kuyakevinsbbq.com/images/' : 'http://192.168.4.122:3000/images/';

  
  // images
  const kuyaKevinImg = `${imgUrl}kuya_kevin_color_bg.png`;
  const aboutImg1 = `${imgUrl}kuya-kevins-thumb-removebg-preview.png`;
  const kuyaCardFront = `${imgUrl}KuyaCard.png`;
  const kuyaCardBack = `${imgUrl}KuyaCard2.png`;
  const ltoItem = `${imgUrl}porkstick.jpg`;


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
    // capture event if card is clicked
    gtag('event', 'kuya_kevin_business_card', {
      business_card_clicked: true
    });
  };

    return (
        <>
            <img className="img-fluid main-logo" src={kuyaKevinImg} alt="Kuya Kevins main logo" style={{
              display: 'block',
              marginTop: '0 auto',
              maxWidth: '700px',
              width: '100%', 
              zIndex: 1,
            }}/>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img style={{ width: 'auto', height: 'auto' }} className="img-fluid landing-page-logo" data-wow-delay="0.1s" src={aboutImg1} alt="Kuya Kevins alt logo" />
</div>
            {/* <PromoBanner
            productName = 'Filipino Pork Stick'
            productImage = {ltoItem}
            /> */}
            <AboutSection/>
            <Carousel/>
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
