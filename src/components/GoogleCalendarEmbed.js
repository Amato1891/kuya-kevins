import React from 'react';

const GoogleCalendarEmbed = () => {
  return (
    <div className="calendar-container">
      <iframe
        src="https://calendar.google.com/calendar/embed?src=kuyakevinsbbq%40gmail.com&ctz=America%2FNew_York"
        className="calendar-iframe"
        frameBorder="0"
        scrolling="no"
        title="Google Calendar"
      ></iframe>
    </div>
  );
};

export default GoogleCalendarEmbed;
