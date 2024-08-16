import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const MainNavbar = () => {
  const [isFullScreenNav, setFullScreenNav] = useState(false);
  // import images
function importAll(r) {
  let images = {};
  r.keys().map((item) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../assets/img/', false, /\.(png|jpe?g|svg)$/));

// images
const foodTruckIcon = images['food-truck.png'];

  const location = useLocation();
  const currentRoute = location.pathname;
  const routesToHeaders = {
    "/book-us": 'Book Us',
    "/menu": 'Menu',
    "/about": 'About',
    "/contact-us": 'Contact Us',
    "/find-us": 'Find Us'
  }

  const [expanded, setExpanded] = useState(false);

  const handleNavLinkClick = () => {
    setExpanded(false); // Close the navbar when a link is clicked
  };
  
  useEffect(() => {
    // Function to check page width and update state
    const logPageWidth = () => {
      const pageWidth = window.innerWidth;

      // Only update state if the condition changes
      if (pageWidth >= 992 && !isFullScreenNav) {
        setFullScreenNav(true);
      } else if (pageWidth < 992 && isFullScreenNav) {
        setFullScreenNav(false);
      }
    };

    // Initial check
    logPageWidth();

    // Listen for resize events
    window.addEventListener('resize', logPageWidth);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', logPageWidth);
  }, [isFullScreenNav]); // Dependency array to watch for changes

  return (<>
    <div className="bg-white p-0">

<Container fluid className="position-relative p-0">
<Navbar expand="lg" variant="dark" className="bg-dark px-0" expanded={expanded}>
<Container fluid style={{backgroundColor: isFullScreenNav ? '#212529':'transparent'}}>
    <Navbar.Brand href="#home" className="d-flex align-items-center food-truck-icon">
      <img src={foodTruckIcon} alt="Food Truck Icon" className="me-3" />
      {isFullScreenNav ? (<div></div>) : (<h1 className="text-warning m-0">Kuya Kevin's</h1>)}
      {/* <h1 className="text-warning m-0">Kuya Kevin's</h1> */}
      <Navbar.Toggle aria-controls="navbarCollapse" className='hamburger-icon' onClick={() => setExpanded(!expanded)}>
      <span className="fa fa-bars"></span>
    </Navbar.Toggle>
    </Navbar.Brand>
    <Navbar.Collapse id="navbarCollapse" className="justify-content-end">
      <Nav className="ms-auto py-0 pe-4">
        <NavLink to="/" className="nav-item nav-link" activeclassname="active" onClick={handleNavLinkClick}>Home</NavLink>
        <NavLink to="/book-us" className="nav-item nav-link" activeclassname="active" onClick={handleNavLinkClick}>Book Us</NavLink>
        <NavLink to="/menu" className="nav-item nav-link" activeclassname="active" onClick={handleNavLinkClick}>Menu</NavLink>
        <NavLink to="/about" className="nav-item nav-link" activeclassname="active" onClick={handleNavLinkClick}>About</NavLink>
        <NavLink to="/contact-us" className="nav-item nav-link" activeclassname="active" onClick={handleNavLinkClick}>Contact Us</NavLink>
      </Nav>
      <Button href="/find-us" variant="warning" className="py-2 px-4">FIND US</Button>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </Container>
    </div>
    {/* if full screen, push the header down so navbar is clean */}
    {isFullScreenNav ? (<div style={{width: '100%', height: '100px'}}></div>) : (<div></div>)}
    {/* if not on landing page, generate a small navheader for other pages */}
    {currentRoute !== '/' && (
        <div className="container-xxl position-relative p-0">
          <div className="container-xxl py-5 bg-dark hero-header mb-0">
            <div className="container text-center my-1 pt-1 pb-1">
              <h2 className="display-3 text-white mb-0 animated slideInDown">{routesToHeaders[currentRoute]}</h2>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MainNavbar;
