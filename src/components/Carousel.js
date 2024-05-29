import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
// import images
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../assets/img/', false, /\.(png|jpe?g|svg)$/));
const testimonialImg1 = images['testimonial-1.jpg'];
const testimonialImg2 = images['testimonial-2.jpg'];
const testimonialImg3 = images['testimonial-3.jpg'];
const testimonialImg4 = images['testimonial-4.jpg'];

function Carousel() {
  const testimonials = [
    {
      id: 1,
      text: "The food at Kuya Kevin's is absolutely delicious! Every dish is bursting with flavor and cooked to perfection. I highly recommend trying their Filipino BBQ skewers - they're simply mouthwatering.",
      name: 'Maria Rodriguez',
      profession: 'Food Blogger',
      imageSrc: testimonialImg1,
    },
    {
      id: 2,
      text: "I recently tried Kuya Kevin's food truck, and I was blown away by the authenticity and taste of their Filipino cuisine. The Pancit and Adobo were spot on, reminding me of home. Can't wait to visit again!",
      name: 'Jose Garcia',
      profession: 'Filipino Food Enthusiast',
      imageSrc: testimonialImg3,
    },
    {
      id: 3,
      text: "Kuya Kevin's food truck is a hidden gem! The food is fresh, flavorful, and affordable. The staff is friendly, and the service is quick. It's my go-to spot for a delicious and satisfying meal.",
      name: 'Linda Nguyen',
      profession: 'Local Resident',
      imageSrc: testimonialImg4,
    },
    {
      id: 4,
      text: "I had the pleasure of dining at Kuya Kevin's food truck, and I must say, it exceeded my expectations. The ambiance, the flavors, and the hospitality - everything was top-notch. I can't wait to come back for more!",
      name: 'Michael Smith',
      profession: 'Food Critic',
      imageSrc: testimonialImg2,
    },
  ];

  return (<>
  {/* <div className="container-xxl bg-white py-5"> */}
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
        <div className="text-center ">
                    <h2 className="section-title ff-secondary text-center text-warning fw-normal">Reviews</h2>
                    <h3 className="mb-5">See What Our Customers Are Saying!</h3>
                </div>

        
    <OwlCarousel className='owl-theme testimonial-carousel' loop margin={10} autoplay smartSpeed={1000} center dots responsive={{ 0: { items: 1 }, 768: { items: 2 }, 992: { items: 3 } }}>
      {testimonials.map((testimonial) => (
        <div key={testimonial.id} className='testimonial-item bg-transparent border rounded p-4'>
          <i className='fa fa-quote-left fa-2x text-warning mb-3'></i>
          <p>{testimonial.text}</p>
          <div className='d-flex align-items-center'>
            <img className='img-fluid flex-shrink-0 rounded-circle' src={testimonial.imageSrc} style={{ width: '50px', height: '50px' }} alt={`Client ${testimonial.id}`} />
            <div className='ps-3'>
              <h5 className='mb-1'>{testimonial.name}</h5>
              <small>{testimonial.profession}</small>
            </div>
          </div>
        </div>
      ))}
    </OwlCarousel>
    </div>
    </div>
    {/* </div> */}
    </>
  );
};

export default Carousel;
