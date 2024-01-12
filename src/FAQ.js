import React from 'react';
import './FAQ.css';

const FAQs = () => {
  return (
    <section className="faq-section">
      <h2>FAQs</h2>
      
      <div className="faq-item">
        <p className="faq-question">Q: How do I register for the event?</p>
        <p className="faq-answer">A: To register for the event, simply fill out the registration form on this page. Make sure to provide accurate information, and don't forget to click the submit button.</p>
      </div>

      <div className="faq-item">
        <p className="faq-question">Q: Is there a registration fee for the event?</p>
        <p className="faq-answer">A: The registration fee varies depending on the type of registration. Please check the registration form for details on any associated fees.</p>
      </div>

      <div className="faq-item">
        <p className="faq-question">Q: Can I register multiple participants with a single form? </p>
        <p className="faq-answer">A: No, each participant should have a separate registration. Please submit individual registration forms for each attendee.</p>
      </div>

      <div className="faq-item">
        <p className="faq-question">Q: What is included in the registration fee? </p>
        <p className="faq-answer">A: The registration fee typically covers access to the event, any provided materials, and relevant activities. Refer to the event details section for specific inclusions.</p>
      </div>

      <div className="faq-item">
        <p className="faq-question">Q: How can I make a payment for the registration fee? </p>
        <p className="faq-answer">A: Payment details, including accepted methods and instructions, will be provided upon completion of the registration form. Follow the provided guidelines to complete the payment process.</p>
      </div>

      <div className="faq-item">
        <p className="faq-question">Q: Can I modify my registration information after submission? </p>
        <p className="faq-answer">A: Unfortunately, once the registration form is submitted, you cannot directly modify the information. If you need to make changes, please contact our support team for assistance.</p>
      </div>

      <div className="faq-item">
        <p className="faq-question">Q: Is there a deadline for registration?</p>
        <p className="faq-answer">A: Yes, there is usually a registration deadline. Refer to the event details section for the specific deadline. Late registrations may not be accepted.</p>
      </div>

      <div className="faq-item">
        <p className="faq-question">Q: How will I receive confirmation of my registration? </p>
        <p className="faq-answer">A: Upon successful registration, you will receive a confirmation email with details of your registration. Please check your email inbox, including the spam folder.</p>
      </div>

      <div className="faq-item">
        <p className="faq-question">Q: What should I do if I encounter issues during the registration process?</p>
        <p className="faq-answer">A: If you experience any issues or have questions during the registration process, contact our support team at [support@example.com] for assistance.</p>
      </div>

      <div className="faq-item">
        <p className="faq-question">Q: Is there a cancellation policy for the event?</p>
        <p className="faq-answer">A: Yes, please refer to the terms and conditions provided during the registration process for information on the cancellation policy.</p>
      </div>

    </section>
  );
};

export default FAQs;
