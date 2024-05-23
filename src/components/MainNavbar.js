import React from 'react';
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const MainNavbar = () => {
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
    "/contact-us": 'Contact Us'
  }

  return (<>
    <div className="bg-white p-0">
      {/* <Spinner
  id="spinner"
  className="show bg-white position-fixed top-50 start-50 translate-middle"
  style={{ width: '3rem', height: '3rem' }}
  animation="border"
  role="status"
>
  <span className="sr-only">Loading...</span>
</Spinner> */}

<Container fluid className="position-relative p-0">
      <Navbar expand="lg" variant="dark" className="bg-dark px-0">
      <Container fluid>
        <Navbar.Brand href="#home">
          <h1 className="text-warning m-0">
            <img src={foodTruckIcon} style={{height:'25%', width: '25%'}}></img>
            <i className="me-3"></i>Kuya Kevin's
          </h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarCollapse">
          <span className="fa fa-bars"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="navbarCollapse">
          <Nav className="ms-auto py-0 pe-4">
            <NavLink exact to="/" className="nav-item nav-link" activeClassName="active">Home</NavLink>
            <NavLink to="/book-us" className="nav-item nav-link" activeClassName="active">Book Us</NavLink>
            <NavLink to="/menu" className="nav-item nav-link" activeClassName="active">Menu</NavLink>
            <NavLink to="/about" className="nav-item nav-link" activeClassName="active">About</NavLink>
            <NavLink to="/contact-us" className="nav-item nav-link" activeClassName="active">Contact Us</NavLink>
          </Nav>
          <Button href="location.html" variant="warning" className="py-2 px-4">FIND US</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Container>
    </div>
    {/* if not on landing page, generate a small navheader for other pages */}
    {currentRoute !== '/' && (
        <div className="container-xxl position-relative p-0">
          <div className="container-xxl py-5 bg-dark hero-header mb-5">
            <div className="container text-center my-5 pt-5 pb-4">
              <h1 className="display-3 text-white mb-3 animated slideInDown">{routesToHeaders[currentRoute]}</h1>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MainNavbar;
