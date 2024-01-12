import React, { useState } from 'react';
import './Registrationform.css';

const RegistrationForm = () => {
 const [formData, setFormData] = useState({ name: '', ID: '', email: '', contact: '', event: '' });
 const [formErrors, setFormErrors] = useState({});

 const validateForm = () => {
    let errors = {};

    if (!formData.name) {
      errors.name = 'Name is required';
    }

    if (!formData.ID) {
      errors.ID = 'Student ID is required';
    }

    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }

    if (!formData.contact) {
      errors.contact = 'Contact Number is required';
    }
    else if(!/^\d{10}$/.test(formData.contact))
    {
        errors.contact='provide correct phone number';
    }
    if(!formData.event){
        errors.event = 'select an event';
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
 };

 const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
     
      window.alert('Registration successful');

      
      setFormData({ name: '', ID: '', email: '', contact: '' ,event:''});
    }
 };

 const handleInputChange = (e, field) => {
    setFormData({ ...formData, [field]: e.target.value });
 };

 return (
    <section className="registration-form">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={formData.name}
            onChange={(e) => handleInputChange(e, 'name')}
          />
        </label>
        {formErrors.name && (
          <p key="name" className="error">
            {formErrors.name}
          </p>
        )}

        <label>
          Student ID:
          <input
            type="text"
            value={formData.ID}
            onChange={(e) => handleInputChange(e, 'ID')}
          />
        </label>
        {formErrors.ID && (
          <p key="ID" className="error">
            {formErrors.ID}
          </p>
        )}

        <label>
          Email:
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange(e, 'email')}
          />
        </label>
        {formErrors.email && (
          <p key="email" className="error">
            {formErrors.email}
          </p>
        )}

        <label>
          Contact Number:
          <input
            type="number"
            value={formData.contact}
            onChange={(e) => handleInputChange(e, 'contact')}
          />
        </label>
        {formErrors.contact && (
          <p key="contact" className="error">
            {formErrors.contact}
          </p>
        )}
         <label>
    Select an event:</label>
    <select
      value={formData.event}
      onChange={(e) => handleInputChange(e, 'event')}
    >
      <option value="">--Please choose an event--</option>
      <option value="event1">React.js Workshop</option>
      <option value="event2">HTML Workshop</option>
      <option value="event3">CSS Workshop</option>
      <option value="event4">Node.js Workshop</option>
    </select>
 
 {formErrors.event && (
    <p key="event" className="error">
      {formErrors.event}
    </p>
 )}

        <input type="submit" value="Register" />
      </form>
    </section>
 );
};

export default RegistrationForm;