const axios = require('axios');
const nodemailer = require('nodemailer');

exports.handler = async (event) => {
  try {
    const formData = JSON.parse(event.body);
    const recaptchaResponse = formData.recaptchaResponse;

    // Verify the reCAPTCHA response
    const { data } = await axios.post('https://www.google.com/recaptcha/api/siteverify', null, {
      params: {
        secret: process.env.RECAPTCHA_SECRET_KEY,
        response: recaptchaResponse
      }
    });

    if (data.success === true) {
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

      await transporter.sendMail(mailOptions);
      
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Email sent successfully' })
      };
    } else {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'reCAPTCHA verification failed' })
      };
    }
  } catch (error) {
    console.error('Error processing form submission:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error' })
    };
  }
};