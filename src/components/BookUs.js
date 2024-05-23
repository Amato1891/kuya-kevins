import React, { useState } from 'react';

const BookUs = () => {
    const [confirmationMessage, setConfirmationMessage] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        time: 'Afternoon',
        date: '',
        locationName: '',
        locationAddress: '',
        guests: '',
        additionalInfo: ''
    });

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleBookingFormSubmit = () => {
        // Handle form submission
        console.log(formData);

        // Update confirmation message
        const message = `Thank you, ${formData.name}! Your booking request has been received. We're looking forward to seeing you soon!`;
        setConfirmationMessage(message);

        // Clear form data
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

        // Scroll to confirmation message
        const formContainer = document.querySelector('.form-container');
        formContainer.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="container-xxl py-5 px-0 wow fadeInUp" data-wow-delay="0.1s">
            <div className="row g-0">
                <div className="col-12 bg-dark d-flex align-items-center">
                    <div className="col-12 p-5 wow fadeInUp" data-wow-delay="0.2s">
                        <h5 className="section-title ff-secondary text-start text-warning fw-normal">Book Us!</h5>
                        <h1 className="text-white mb-4">We'd Love To Do The Cooking!</h1>
                    </div>
                </div>
                <div className="form-container">
                    <form className="booking-form">
                        <div className="row g-3">
                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="name" placeholder="Your Name" value={formData.name} onChange={handleInputChange} />
                                    <label htmlFor="name">Your Name</label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="email" className="form-control" id="email" placeholder="Your Email" value={formData.email} onChange={handleInputChange} />
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
                                    <input type="text" className="form-control" id="locationName" placeholder="Location Name" value={formData.locationName} onChange={handleInputChange} />
                                    <label htmlFor="locationName">Location Name</label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="locationAddress" placeholder="Location Address" value={formData.locationAddress} onChange={handleInputChange} />
                                    <label htmlFor="locationAddress">Location Address</label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="number" className="form-control" id="guests" placeholder="Estimated Total Number of Guests" value={formData.guests} onChange={handleInputChange} />
                                    <label htmlFor="guests">Estimated Total Number of Guests</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                    <textarea className="form-control" placeholder="Additional Information" id="additionalInfo" style={{ height: '100px' }} value={formData.additionalInfo} onChange={handleInputChange}></textarea>
                                    <label htmlFor="additionalInfo">Additional Information</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <button id="submitBtn" className="btn btn-primary w-100 py-3" type="button" onClick={handleBookingFormSubmit}>Book Now</button>
                            </div>
                        </div>
                    </form>
                    <div className="after-booking-form-submit" style={{ display: confirmationMessage ? 'block' : 'none' }}>
                        {confirmationMessage && <p className="confirmation-message">{confirmationMessage}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookUs;
