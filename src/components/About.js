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
const foodTruckIcon = images['food-truck.png'];

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
          <img style={{width: 'auto', height: 'auto'}} className="img-fluid" data-wow-delay="0.1s" src= {aboutImg1} alt="About"/>
            {/* <div className="row g-3">
              <div className="col-6 text-start">
                <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.1s" src="img/about-1.jpg" alt="About 1" />
              </div>
              <div className="col-6 text-start">
                <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.3s" src="img/about-2.jpg" alt="About 2" style={{ marginTop: '25%' }} />
              </div>
              <div className="col-6 text-end">
                <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.5s" src="img/about-3.jpg" alt="About 3" />
              </div>
              <div className="col-6 text-end">
                <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.7s" src="img/about-4.jpg" alt="About 4" />
              </div>
            </div> */}
          </div>
          <div className="col-lg-6">
            <h5 className="section-title ff-secondary text-start text-warning fw-normal">About Us</h5>
            <h1 className="mb-4">Welcome to Kuya Kevin's</h1>
            <p className="mb-4">your go-to destination for authentic Filipino cuisine. Indulge in a culinary journey that tantalizes your taste buds with vibrant flavors and traditional dishes.</p>
            <p className="mb-4">Experience the warmth of Filipino hospitality as we serve up unforgettable meals that celebrate our rich culinary heritage.</p>
            <div className="row g-4 mb-4">
              <div className="col-sm-6">
                <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                  <h1 className="flex-shrink-0 display-5 text-warning mb-0" data-toggle="counter-up">15+</h1>
                  <div className="ps-4">
                    <p className="mb-0">Years of</p>
                    <h6 className="text-uppercase mb-0">Serving Excellence</h6>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                  <h1 className="flex-shrink-0 display-5 text-warning mb-0" data-toggle="counter-up">100+</h1>
                  <div className="ps-4">
                    <p className="mb-0">Events</p>
                    <h6 className="text-uppercase mb-0">Hosted</h6>
                  </div>
                </div>
              </div>
            </div>
            {/* <a className="btn btn-primary py-3 px-5 mt-2" href="">Read More</a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
