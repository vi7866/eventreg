import React, { useState } from 'react';

import Header from './header';
import EventDetails from './eventdetails';
import RegistrationForm from './Registrationform';
import FAQs from './FAQ';
import './App.css';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    ID: '',
    email: '',
    contact: '',
  });

  const handleFormChange = (updatedData) => {
    setFormData(updatedData);
 };

  return (<>
  <div className='main-container'>
    <Header />
    <div className="app-container">

    <a id="one"></a> <EventDetails />
      <h1>Student Event Registration</h1>
      <div className="App">
      <a id="two"></a><RegistrationForm formData={formData} onFormChange={handleFormChange} />
    </div>
      <a id="three"></a>
      <FAQs />
    </div>
    </div>
    </>
  );
};

export default App;

