const axios = require('axios');

exports.handler = async (event) => {
  try {
    const { input } = event.queryStringParameters;
    const API_KEY = process.env.GOOGLE_API_KEY;

    const response = await axios.get(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${input}&key=${API_KEY}`);

    return {
      statusCode: 200,
      body: JSON.stringify(response.data)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
