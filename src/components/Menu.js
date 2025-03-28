import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import menuData from '../data/menu.json';

const Menu = () => {

  const imgUrl = process.env.NODE_ENV === 'production' ? 'https://kuyakevinsbbq.com/images/' : 'http://192.168.4.243:3000/images/';

  const glutenFreeImg = `${imgUrl}gluten_free-removebg.png`;

  // menu items to be looped over and displayed on menu page
  const menuItems = menuData.kuyaKevinsMenu;

  // get current path 
  const location = useLocation();
  const currentRoute = location.pathname;

  return (<>
  <Helmet>
        <title>Menu - Kuya Kevin's BBQ</title>
        <meta name="description" content="Explore the delicious menu of Kuya Kevin's BBQ, featuring authentic Filipino fusion dishes like Pancit and Adobo." />
        <link rel="canonical" href="https://kuyakevinsbbq.com/menu" />
      </Helmet>
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          {currentRoute === '/menu' ? <h1 className="ff-secondary text-center text-warning fw-normal">Food Menu</h1> : <h2 className="ff-secondary text-center text-warning fw-normal">Food Menu</h2>}
          <h3 className="mb-5">Proudly Serving A 100% Gluten Free Menu</h3>
          <img style={{ maxWidth: '30%', height: 'auto', paddingBottom: '10%' }} src={glutenFreeImg} alt="Gluten Free logo"></img>
        </div>
        <div className="tab-class text-center wow fadeInUp" data-wow-delay="0.1s">
          <div className="tab-content">
            <div id="tab-1" className="tab-pane fade show p-0 active">
              <div className="row g-4">
                {menuItems.map((menuItem, index) => (
                  <div key={index} className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <img className="flex-shrink-0 img-fluid rounded" src={menuItem.image.replace ('BASE_URL', imgUrl)} alt={menuItem.name} style={{ width: '80px',height: '60px', boxShadow: '0px 2px 7px rgba(0, 0, 0, 0.9)',filter: 'brightness(110%)'}} />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span className="menu-item-name" style={{paddingRight: '3%'}}>{menuItem.name}</span>
                          <span className="text-warning menu-item-price">{menuItem.price}</span>
                        </h5>
                        <small className="fst-italic">{menuItem.description}</small>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Menu;
