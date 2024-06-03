import React from 'react';

const ContactSection = () => {
  return (
    <>
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h2 className="section-title ff-secondary text-center text-warning fw-normal">Contact Us</h2>
          <h3 className="mb-5">Drop us a line.</h3>
        </div>
        <div className="row g-4">
          <div className="col-12">
            <div className="row gy-4">
              <div className="col-md-4">
                <h5 className="section-title ff-secondary fw-normal text-start text-warning">By Email</h5>
                <p><i className="fa fa-envelope-open text-warning me-2"></i><a href="mailto:Kuyakevinsbbq@gmail.com" style={{color:'black'}}>Kuyakevinsbbq@gmail.com</a></p>
              </div>
              <div className="col-md-4">
                <h5 className="section-title ff-secondary fw-normal text-start text-warning">By Phone</h5>
                <p><i className="fa fa-phone text-warning me-2"></i><a href="tel:727-479-2614" style={{color:'black'}}>727-479-2614</a></p>
              </div>
              {/* <div className="col-md-4">
                <h5 className="section-title ff-secondary fw-normal text-start text-warning">Technical</h5>
                <p><i className="fa fa-envelope-open text-warning me-2"></i>tech@example.com</p>
              </div> */}
            </div>
          </div>
          <div className="col-md-6 wow fadeIn" data-wow-delay="0.1s">
          <iframe className="position-relative rounded w-100 h-100"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d186926.87950884816!2d-82.45717740319795!3d27.994197625632273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2e8bb6ce85f2d%3A0x8765b4417d82edf2!2sTampa%2C%20FL!5e0!3m2!1sen!2sus!4v1603799052348!5m2!1sen!2sus"
        frameBorder="0" style={{ minHeight: '350px', border: '0' }} allowFullScreen="" aria-hidden="false"
        tabIndex="0"></iframe>

          </div>
        </div>
      </div>
    </div>
    
    </>
  );
};

export default ContactSection;
