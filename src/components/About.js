import React from 'react';

const AboutSection = () => {
  // import images
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../assets/img/', false, /\.(png|jpe?g|svg)$/));

// images
const aboutImg1 = images['kuya-kevins-thumb.jpg'];
const usaPhilFlag = images['usa-phil-flag.jpg'];

  return (
    <div className="container-xxl py-5" style={{position: 'relative'}}>
       <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundImage: `url(${usaPhilFlag})`, opacity: 0.2}}></div>
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
          <img style={{width: 'auto', height: 'auto'}} className="img-fluid" data-wow-delay="0.1s" src= {aboutImg1} alt="About"/>
          </div>
          <div className="col-lg-6">
          <h4 className="ff-secondary text-center text-warning fw-normal">About Us</h4>
            <h5 className="mb-4" style={{textAlign: 'center'}}>Welcome to Kuya Kevin's</h5>
            <p className="mb-4" style={{textAlign: 'center'}}>your go-to destination for authentic Filipino cuisine. Indulge in a culinary journey that tantalizes your taste buds with vibrant flavors and traditional dishes.</p>
            <p className="mb-4" style={{textAlign: 'center'}}>Experience the warmth of Filipino hospitality as we serve up unforgettable meals that celebrate our rich culinary heritage.</p>
            <div className="row g-4 mb-4">
              <div className="col-sm-6">
                <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                  <h1 className="flex-shrink-0 display-5 text-warning mb-0" data-toggle="counter-up"><b>10+</b></h1>
                  <div className="ps-4">
                    <p className="mb-0">Years of</p>
                    <h6 className="text-uppercase mb-0">Serving Excellence</h6>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                  <h1 className="flex-shrink-0 display-5 text-warning mb-0" data-toggle="counter-up"><b>100+</b></h1>
                  <div className="ps-4">
                    <p className="mb-0">Events</p>
                    <h6 className="text-uppercase mb-0">Hosted</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
