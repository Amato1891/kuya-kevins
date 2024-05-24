import React, { useEffect, useState } from 'react';

function UpcomingLocations() {

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

    useEffect(() => {
        async function fetchLocations() {
            try {
                const baseUrl = process.env.NODE_ENV === 'production' ? 'https://kuya-kevins-253fbee9ac9e.herokuapp.com/' : 'http://localhost:5000/';
                const response = await fetch(`${baseUrl}api/locations`);
                const data = await response.json();
                if (data.items.length >= 1) {
                    // array of location objects
                    const locationItems = data.items;
                    if (locationItems.length >= 1) {
                        setLocations(locationItems.map(location => location.fields));
                    } else {
                        // If locations array is empty, render placeholder info
                        setLocations([
                            {
                                imageUrl: checkBackSoon,
                                name: 'More Locations Coming Soon!',
                                address: '',
                                locationDetails: ''
                            }
                        ]);
                    }
                } else {
                    throw new Error('Failed to fetch locations');
                }
            } catch (error) {
                // If an error occurs, render placeholder info
                console.error('Error fetching locations:', error);
                setLocations([
                    {
                        imageUrl: checkBackSoon,
                        name: 'More Locations Coming Soon!',
                        address: '',
                        locationDetails: ''
                    }
                ]);
            }
        }

        fetchLocations();
    }, []);

    return (
        <div id="upcomingLocations">
            {locations.map((location, index) => (
                <div className="location-card" key={index}>
                    <img src={location.imageUrl} alt={location.name} />
                    <h2 className="text-warning">{location.name}</h2>
                    <p><em>{location.address}</em></p>
                    <p><strong>{location.locationDetails}</strong></p>
                </div>
            ))}
        </div>
    );
}

export default UpcomingLocations;
