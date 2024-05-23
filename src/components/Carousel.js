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
      text: 'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam',
      name: 'Client Name 1',
      profession: 'Profession 1',
      imageSrc: testimonialImg1,
    },
    {
      id: 2,
      text: 'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam',
      name: 'Client Name 2',
      profession: 'Profession 2',
      imageSrc: testimonialImg2,
    },
    {
      id: 3,
      text: 'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam',
      name: 'Client Name 3',
      profession: 'Profession 3',
      imageSrc: testimonialImg3,
    },
    {
      id: 4,
      text: 'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam',
      name: 'Client Name 4',
      profession: 'Profession 4',
      imageSrc: testimonialImg4,
    },
  ];

  return (
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
  );
};

export default Carousel;
