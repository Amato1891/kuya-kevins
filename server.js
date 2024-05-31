const express = require('express');
const path = require('path');
const app = express();
const contentful = require('contentful');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
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
app.post('/submit-form', async (req, res) => {
    const formData = req.body;
    
    // Extract the reCAPTCHA response from the form data
    const recaptchaResponse = formData.recaptchaResponse;
    // Verify the reCAPTCHA response
    const { data } = await axios.post('https://www.google.com/recaptcha/api/siteverify', null, {
        params: {
            secret: process.env.RECAPTCHA_SECRET_KEY,
            response: recaptchaResponse
        }
    });

    if (data.success === true) {
    
        try {
       
      // Create and send email
      const formEmailTemplate = `
      Booking Request Received!!
      Name: ${formData.name}
      Email: ${formData.email}
      Time: ${formData.time}
      Date: ${formData.date}
      Location Name: ${formData.locationName}
      Location Address: ${formData.locationAddress}
      Number of Guests: ${formData.guests}
      Additional Information: ${formData.additionalInfo}
      `;
  
      const transporter = nodemailer.createTransport({
        service: 'yahoo',
        auth: {
          user: process.env.HOST_EMAIL,
          pass: process.env.HOST_EMAIL_PASSWORD
        }
      });
  
      const mailOptions = {
        from: process.env.HOST_EMAIL,
        to: process.env.COMPANY_EMAIL,
        subject: 'Form Submission For Kuya Kevins',
        text: formEmailTemplate
      };
  
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('Error sending email:', error);
          return res.status(500).send('Error sending email');
        } else {
          console.log('Email sent:', info.response);
          return res.status(200).send('Email sent successfully');
        }
      });
    } catch (error) {
      console.error('Error processing form submission:', error);
      return res.status(500).send('Internal server error');
    }
}
  });

app.get('/api/places/autocomplete', async (req, res) => {
    const { input } = req.query;
    const API_KEY = process.env.GOOGLE_API_KEY;
    try {
      const response = await axios.get(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${input}&key=${API_KEY}`);
      res.status(200).json(response.data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('Server is listening on port', port);
