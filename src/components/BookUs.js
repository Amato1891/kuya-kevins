import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import axios from 'axios';

const BookUs = () => {
    const [confirmationMessage, setConfirmationMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [errorMsg, seterrorMsg] = useState('');
    const [emailConfirmationMsgClass, setEmailConfirmationMsgClass] = useState('');
    const [address, setAddress] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        time: 'Afternoon',
        date: '',
        locationName: '',
        locationAddress: '',
        guests: '',
        additionalInfo: '',
        recaptchaResponse: ''
    });

    const baseUrl = process.env.NODE_ENV === 'production' ? '/.netlify/functions/' : 'http://localhost:5000/';
    const SITE_KEY = '6LeCNO0pAAAAAMZnVymcb2fxA4Wt6tq_ZxZVtP3A';

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleBookingFormSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || formData.name.length < 2) {
            console.error('Invalid name');
            seterrorMsg('a name is required');
            return;
        }
        if (!formData.email) {
            console.error('email is required');
            seterrorMsg('an email is required');
            return;
        }
        if (!formData.time) {
            console.error('time is required');
            seterrorMsg('a time is required');
            return;
        }
        if (!formData.date) {
            console.error('date is required');
            seterrorMsg('date is required');
            return;
        }
        if (!formData.locationName) {
            console.error('locationName is required');
            seterrorMsg('a location name is required');
            return;
        }
        if (!address || address.length < 10) {
            console.error('locationAddress is required');
            seterrorMsg('a location address is required');
            return;
        }
        if (!formData.guests) {
            console.error('guests is required');
            seterrorMsg('a guest total is required');
            return;
        }
            // reset form validation error msg
            seterrorMsg('');
            setIsLoading(true);
        try {
            formData.locationAddress = address;
            const response = await fetch(`${baseUrl}submit-form`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
            if (!response.ok) {
                const message = `Sorry, ${formData.name}! Your message failed to send, we working to fix the problem so please try again later!`;
                setEmailConfirmationMsgClass('error-message');
                setConfirmationMessage(message);
                throw new Error('Failed to send message');
            }
            const message = `Thank you, ${formData.name}! Your booking request has been received. We're looking forward to seeing you soon!`;
            setEmailConfirmationMsgClass('confirmation-message');
            setConfirmationMessage(message);
            clearFormData();
            scrollToConfirmationMessage();
            gtag('event', 'booking_form_submit', {
                time_submitted: new Date().toISOString(),
                success: true
              });
        } catch (error) {
            gtag('event', 'booking_form_submit', {
                time_submitted: new Date().toISOString(),
                success: false,
                error_on_submit: JSON.stringify(error)
              });
            console.error('Error submitting form:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const clearFormData = () => {
        setFormData({
            name: '',
            email: '',
            time: 'Afternoon',
            date: '',
            locationName: '',
            locationAddress: '',
            guests: '',
            additionalInfo: ''
        });
        setAddress('');
    };

    const scrollToConfirmationMessage = () => {
        const formContainer = document.querySelector('.form-container');
        formContainer.scrollIntoView({ behavior: 'smooth' });
    };

    const handleAddressChange = async (e) => {
        const input = e.target.value;
        setAddress(input);
        if (input.length > 2) {
          try {
            const response = await axios.get(`${baseUrl}autocomplete?input=${input}`);
            setSuggestions(response.data.predictions);
          } catch (error) {
            console.error('Error fetching autocomplete data:', error);
          }
        } else {
          setSuggestions([]);
        }
      };
    
      const handleSuggestionSelected = (e) => {
        setAddress(e.target.innerHTML);
        setSuggestions([]);
      };

      const handleRecaptchaChange = (response) => {
        setFormData({ ...formData, recaptchaResponse: response });
      };

    return (
        <>
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h1 className="ff-secondary text-center text-warning" style={{paddingTop: '15%'}}>Book Us for Your Next Event!</h1>
                <h3 className="text-black mb-4" style={{textAlign: 'center'}}>Let Us Bring the Flavors to You!</h3>
                <div className="form-container">
                {errorMsg ? (<span style={{ padding: '10px', backgroundColor: '#ffe6e6', color: 'red', borderRadius: '5px', fontStyle: 'italic' }}>{errorMsg}</span>) : (<span></span>)}
                    <form className="form-group" onSubmit={handleBookingFormSubmit}>
                        <div className="row g-3">
                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="name" placeholder="Your Name" value={formData.name} onChange={handleInputChange} required/>
                                    <label htmlFor="name">Your Name</label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="email" className="form-control" id="email" placeholder="Your Email" value={formData.email} onChange={handleInputChange} required/>
                                    <label htmlFor="email">Your Email</label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="date" className="form-control" id="date" placeholder="Date" value={formData.date} onChange={handleInputChange} />
                                    <label htmlFor="date">Date</label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-floating">
                                    <select className="form-select" id="time" value={formData.time} onChange={handleInputChange}>
                                        <option value="Afternoon">Afternoon</option>
                                        <option value="Evening">Evening</option>
                                        <option value="Night">Night</option>
                                    </select>
                                    <label htmlFor="time">Time</label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="locationName" placeholder="Location Name" value={formData.locationName} onChange={handleInputChange} required/>
                                    <label htmlFor="locationName">Location Name</label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="locationAddress" placeholder="Location Address" value={address} onChange={handleAddressChange} required/>
                                    <div className="suggestion-box">
                                        {suggestions && suggestions.map((suggestion) => (
                                            <div key={suggestion.place_id} className="suggestion-item" onClick={handleSuggestionSelected}>
                                            {suggestion.description}
                                            </div>
                                        ))}
                                        </div>
                                    <label htmlFor="locationAddress">Location Address</label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="number" className="form-control" id="guests" placeholder="Estimated Total Number of Guests" value={formData.guests} onChange={handleInputChange} min={5} max={300} required/>
                                    <label htmlFor="guests">Est. Total Guests</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                    <textarea className="form-control" placeholder="Additional Information" id="additionalInfo" style={{ height: '100px' }} value={formData.additionalInfo} onChange={handleInputChange}></textarea>
                                    <label htmlFor="additionalInfo">Additional Information</label>
                                </div>
                            </div>
                            <div className="col-12">
                            <ReCAPTCHA
                            sitekey={SITE_KEY}
                            onChange={handleRecaptchaChange}
                            />
                            </div>
                            <div className="col-12">
                                <button id="submitBtn" className="btn btn-warning w-100 py-3" type="submit">Book Now</button>
                            </div>
                        </div>
                    </form>
                    {isLoading && (
                        <div className="loading-animation">
                        <div></div>
                        <em className="loading-text">Sending Form</em>
                        </div>
                    )}
                    <div className="after-booking-form-submit" style={{ display: confirmationMessage ? 'block' : 'none' }}>
                        {confirmationMessage && <p className={emailConfirmationMsgClass}>{confirmationMessage}</p>}
                    </div>
                </div>
        </div>
        </div>
        </>
    );
};

export default BookUs;
