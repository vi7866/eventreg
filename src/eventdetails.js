
import React from 'react';
import "./eventdetails.css";
const EventPage = () => {
  return (
    <div className="event-page-container">
      <h1>Event Details</h1>

      <section className='event-section'>
        <h2>Event Name: React Workshop</h2>
        <p>Date and Time: January 20, 2024, 2:00 PM - 5:00 PM</p>
        <p>Location: Virtual Event (Online)</p>
        <p>Description: Join us for an interactive workshop on React.js. Learn the basics and best practices from industry experts.</p>
      </section>

      
      <section className='event-section'>
        <h2>Event Name: HTML Workshop</h2>
        <p>Date and Time: January 21, 2024, 2:00 PM - 5:00 PM</p>
        <p>Location: Virtual Event (Online)</p>
        <p>Description: Join us for an interactive workshop on HTML5.Learn the basics and best practices from industry experts.</p>
      </section>
      

      <section className='event-section'>
        <h2>Event Name: CSS Workshop</h2>
        <p>Date and Time: January 22, 2024, 2:00 PM - 5:00 PM</p>
        <p>Location: Virtual Event (Online)</p>
        <p>Description: Join us for an interactive workshop on CSS. Learn the basics and best practices from industry experts.</p>
      </section>


      <section className='event-section'>
        <h2>Event Name: Node.js Workshop</h2>
        <p>Date and Time: January 23, 2024, 2:00 PM - 5:00 PM</p>
        <p>Location: Virtual Event (Online)</p>
        <p>Description: Join us for an interactive workshop on Node.js. Learn the basics and best practices from industry experts.</p>
      </section>
      
      
    </div>
  );
};

export default EventPage;
