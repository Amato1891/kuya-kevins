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
const aboutImg1 = images['kuya-kevins-thumb-removebg-preview.png'];
const usaPhilFlag = images['usa-phil-flag.jpg'];

return (<>
  <div className="container-xxl py-5" style={{ position: 'relative', textAlign: 'center'}}>
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundImage: `url(${usaPhilFlag})`, opacity: 0.1 }}></div>
    <div className="container">
      <div className="row g-4 align-items-center">
          <h1 className="ff-secondary text-warning fw-normal">About Us</h1>
          <h3 className="mb-4">Welcome to Kuya Kevin's</h3>
          <p className="mb-4">Your go-to destination for authentic Filipino cuisine. Indulge in a culinary journey that tantalizes your taste buds with vibrant flavors and traditional dishes.</p>
          <p className="mb-4">Experience the warmth of Filipino hospitality as we serve up unforgettable meals that celebrate our rich culinary heritage.</p>
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
  </>
);

};

export default AboutSection;
