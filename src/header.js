import React from 'react';
import './Header.css';

const Header = () => { return (
<header className="header">

<nav className='nav-container'>
<div className="event-logo-container">
<img src="logo.png" alt="event-logo" className="event-logo" />

</div>
<h1> Student Event Registration Page</h1>
   <div className='items'>
     <a className='item' href="#two">Registration</a>
     <a className='item' href="#one">Event Details</a>
     <a className='item' href="#three">FAQs</a>
   </div>
</nav>



<img src="https://media.istockphoto.com/id/1035127198/photo/adult-female-students-listening-to-professor-in-classroom.jpg?s=2048x2048&w=is&k=20&c=GI09CVNk0L-u8qK0L1-XyDM_XYt5Kf3ESZLSL_rgAj8=" alt="event-img" className="event-img" />

</header>); };

export default Header;