const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
  try {
    // Parse the incoming form data from the request body
    const formData = JSON.parse(event.body);
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
    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully' })
    };
  } catch (error) {
    console.error('Error occurred:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error sending email' })
    };
  }
};
