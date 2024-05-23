const handleBookingFormSubmit = () => {
    // Get form elements
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const time = document.getElementById('time').value;
    const date = document.getElementById('date').value;
    const locationName = document.getElementById('locationName').value;
    const locationAddress = document.getElementById('locationAddress').value;
    const guests = document.getElementById('guests').value;
    const additionalInfo = document.getElementById('message').value;

    // Create an object to hold the form data
    const formData = {
        name: name,
        email: email,
        time: time,
        date: date,
        locationName: locationName,
        locationAddress: locationAddress,
        guests: guests,
        additionalInfo: additionalInfo
    };
    console.log(formData);

    // Print confirmation message
    const confirmationMessage = `Thank you, ${name}! Your booking request has been received. We're looking forward to seeing you soon!`;

    // Hide the form
    document.querySelector('.booking-form').style.display = 'none';
    const afterBookingSubmit = document.querySelector('.after-booking-form-submit');
    const submitContainer = document.querySelector('.form-container');
    // change styling after on after submit div to show confirmation message
    afterBookingSubmit.style.display = 'block';
    afterBookingSubmit.innerHTML = confirmationMessage;
    // adjust styling on container div after the form is gone
    submitContainer.style.position = 'relative';
    submitContainer.style.top = '30px';
    // scroll to element
    submitContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // scroll up another 50px
    window.scrollBy(0, -350);
}
document.getElementById('submitBtn').addEventListener('click', handleBookingFormSubmit);