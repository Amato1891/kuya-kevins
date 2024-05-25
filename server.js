const express = require('express');
const path = require('path');
const app = express();
const contentful = require('contentful');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

// Allow requests from all origins
app.use(bodyParser.json());
app.use(cors());

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

// Define a POST endpoint for form submission
app.post('/submit-form', (req, res) => {
    const formData = req.body;
    const formEmailTemplate = `
    Booking Request Recieved!!
    Name: ${formData.name}
    Email: ${formData.email}
    Time: ${formData.time}
    Date: ${formData.date}
    Location Name: ${formData.locationName}
    Location Address: ${formData.locationAddress}
    Number of Guests: ${formData.guests}
    Additional Information: ${formData.additionalInfo}
    `
    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
        service: 'yahoo',
        auth: {
            user: process.env.HOST_EMAIL,
            pass: process.env.HOST_EMAIL_PASSWORD
        }
    });

    // Define email options
    const mailOptions = {
        from: process.env.HOST_EMAIL,
        to: process.env.COMPANY_EMAIL,
        subject: 'Form Submission For Kuya Kevins',
        text: formEmailTemplate
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error occurred:', error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent:', info.response);
            res.status(200).send('Email sent successfully');
        }
    });
});

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('Server is listening on port', port);
