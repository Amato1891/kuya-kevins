import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const imgUrl = process.env.NODE_ENV === 'production' ? 'https://kuyakevinsbbq.com/images/' : 'http://192.168.4.243:3000/images/';

function Carousel() {
  const slideShowImages = [
    'slideshowconv.jpeg',
    'slideshowconv (2).jpeg',
    'slideshowconv (3).jpeg',
    'slideshowconv (4).jpeg',
    'slideshowconv (5).jpeg',
    'slideshowconv (6).jpeg',
    'slideshowconv (7).jpeg',
    'slideshow.JPEG',
    'slideshow (2).JPEG',
    'slideshow (3).JPEG',
    'slideshow (4).JPEG',
    'slideshow (5).JPEG',
    'slideshow (6).JPEG',
    'slideshow (7).JPEG',
    'slideshow (8).JPEG',
    'slideshow (9).JPEG',
    'slideshow (10).JPEG',
    'slideshow (11).JPEG',
    'slideshow.JPG',
    'slideshow (2).JPG',
    'slideshow (3).JPG',
    'slideshow (4).JPG',
    'slideshow (5).JPG',
    'slideshow (6).JPG',
    'slideshow (7).JPG',
  ];

  return (<>
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
        <div className="text-center ">
                    <h2 className="section-title ff-secondary text-center text-warning fw-normal">Photos</h2>
                </div>

        
                <OwlCarousel 
  className='owl-theme image-carousel' 
  loop 
  margin={10} 
  autoplay 
  smartSpeed={1000} 
  center 
  dots 
  responsive={{
    0: { items: 1 },
    768: { items: 2 },
    992: { items: 3 }
  }}
>
  {slideShowImages.map((image, index) => (
    <div key={index} className='image-item'>
      <img 
        className='img-fluid rounded full-height-image' 
        src={`${imgUrl}${image}`}
        loading='lazy' 
        alt={`Kuya Kevin Slidwshow Image ${index + 1}`} 
        style={{ width: '100%', height: 'auto', maxHeight: '300px' }} 
      />
    </div>
  ))}
</OwlCarousel>

    </div>
    </div>
    </>
  );
};

export default Carousel;
