
document.addEventListener('DOMContentLoaded', async function() {
    const upcomingLocationsElement = document.getElementById('upcomingLocations');
    try {
        const contentfulResponse = await axios.get ('/api/locations');

        if (contentfulResponse.data && contentfulResponse.data.items.length >= 1) {
            contentfulResponse.data.items.forEach(location => {
                location = location.fields;
                const locationHtml = `
                    <div class="location-card">
                        <img src="${location.imageUrl}">
                        <h2 class="text-warning">${location.name}</h2>
                        <p><em>${location.address}</em></p>
                        <p><strong>${location.locationDetails}</strong></p>
                    </div>
                `;
                upcomingLocationsElement.innerHTML += locationHtml;
            });
        } else {
            // Render placeholder info if locations array is empty
            const locationHtml = `
                <div class="location-card">
                    <img src="img/check_back_soon.png">
                    <h2 class="text-warning">More Locations Coming Soon!</h2>
                </div>
            `;
            upcomingLocationsElement.innerHTML = locationHtml;
        }
    } catch (error) {
        // Render placeholder info if an error occurs
        const locationHtml = `
                <div class="location-card">
                    <img src="img/check_back_soon.png">
                    <h2 class="text-warning">More Locations Coming Soon!</h2>
                </div>
            `;
        upcomingLocationsElement.innerHTML = locationHtml;
        console.error('Error fetching locations:', error);
    }
});
