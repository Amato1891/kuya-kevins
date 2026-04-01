import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found - Kuya Kevin's BBQ</title>
        <meta name="description" content="The page you're looking for doesn't exist. Head back to Kuya Kevin's BBQ homepage to explore our menu, book us for events, or find our food truck." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <div className="container-xxl py-5" style={{ minHeight: '60vh' }}>
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <h1 className="display-1 text-warning fw-bold">404</h1>
              <h2 className="ff-secondary text-warning fw-normal mb-4">Page Not Found</h2>
              <p className="mb-4">
                Sorry, the page you're looking for doesn't exist or has been moved. 
                Let's get you back to something delicious!
              </p>
              <div className="d-flex justify-content-center gap-3">
                <Link to="/" className="btn btn-warning py-2 px-4">
                  <i className="fa fa-home me-2"></i>Go Home
                </Link>
                <Link to="/menu" className="btn btn-outline-warning py-2 px-4">
                  <i className="fa fa-utensils me-2"></i>View Menu
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
