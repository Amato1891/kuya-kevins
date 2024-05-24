const express = require('express');
const path = require('path');
const app = express();
const contentful = require('contentful');
require('dotenv').config();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

// Define a route to handle the API call and return the necessary data
app.get('/api/locations', async (req, res) => {
 
    try {
        const space = process.env.SPACE || null;
        const accessToken = process.env.ACCESS_TOKEN || null

        // Initialize the Contentful client
        const client = contentful.createClient({
            space,
            environment: 'master',
            accessToken
        });
        // Retrieve entries from Contentful
        const entries = await client.getEntries();
        // Check if entries are retrieved and send response
        if (entries.items && entries.items.length > 0) {
            res.json(entries);
        } else {
            res.status(404).json({ error: 'No locations found' });
        }
    } catch (error) {
       // If an error occurs, send an error response
       console.error('Error fetching locations:', error);
       res.status(500).json({ error: 'Error fetching locations' });
    }
});

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('Server is listening on port', port);
