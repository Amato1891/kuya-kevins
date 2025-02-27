import React, { useEffect, useState } from 'react';
import GoogleCalendarEmbed from './GoogleCalendarEmbed';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

function FindUs() {

// import images
function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
  const images = importAll(require.context('../assets/img/', false, /\.(png|jpe?g|svg)$/));
  
  // images
  const checkBackSoon = images['check_back_soon.png'];

    const [locations, setLocations] = useState([]);

    // get current path 
      const location = useLocation();
      const currentRoute = location.pathname;

    // useEffect(() => {
    //     async function fetchLocations() {
    //         try {
    //             const baseUrl = process.env.NODE_ENV === 'production' ? 'https://kuyakevinsbbq.com/' : 'http://localhost:5000/';
    //             const response = await fetch(`${baseUrl}api/locations`);
    //             const data = await response.json();
    //             if (data.items.length >= 1) {
    //                 // array of location objects
    //                 const locationItems = data.items;
    //                 if (locationItems.length >= 1) {
    //                     setLocations(locationItems.map(location => location.fields));
    //                 } else {
    //                     // If locations array is empty, render placeholder info
    //                     setLocations([
    //                         {
    //                             imageUrl: checkBackSoon,
    //                             name: 'More Locations Coming Soon!',
    //                             address: '',
    //                             locationDetails: ''
    //                         }
    //                     ]);
    //                 }
    //             } else {
    //                 throw new Error('Failed to fetch locations');
    //             }
    //         } catch (error) {
    //             // If an error occurs, render placeholder info
    //             console.error('Error fetching locations:', error);
    //             setLocations([
    //                 {
    //                     imageUrl: checkBackSoon,
    //                     name: 'More Locations Coming Soon!',
    //                     address: '',
    //                     locationDetails: ''
    //                 }
    //             ]);
    //         }
    //     }

    //     fetchLocations();
    // }, []);

    return (
    <>
    <Helmet>
        <title>Find Us - Kuya Kevin's BBQ</title>
        <meta name="description" content="Find Kuya Kevin's BBQ food truck at various locations and events. Get our schedule and location information here." />
        <link rel="canonical" href="https://kuyakevinsbbq.com/find-us" />
      </Helmet>
     {/* <div className="container-xxl bg-white py-5"> */}
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">

    {currentRoute === '/find-us' ? <h1 className="ff-secondary text-center text-warning fw-normal" style={{paddingTop: '10%'}}>Find Us!</h1> : <h2 className="ff-secondary text-center text-warning fw-normal" style={{paddingTop: '10%'}}>Find Us!</h2>}
                <h3 className="text-black mb-4" style={{textAlign: 'center'}}>Come Visit Us At These Locations!</h3>
                <div className='calender-container'>
                <GoogleCalendarEmbed/>
                </div>
        {/* <div id="upcomingLocations">
            {locations.map((location, index) => (
                <div className="location-card" key={index}>
                    <img src={location.imageUrl} alt={location.name} />
                    <h2 className="text-warning">{location.name}</h2>
                    <p><em>{location.address}</em></p>
                    <p><strong>{location.locationDetails}</strong></p>
                </div>
            ))}
        </div> */}
        </div>
        </div>
        {/* </div> */}
        </>
    
    );
}

export default FindUs;
