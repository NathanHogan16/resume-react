import React, { useState } from "react";
import { validateEmail } from '../utils/helpers';

function ContactUs() {
    // const [formState, setFormState] = useState({ name: '', email: '', message: ''});
    // const { name, email, message } = formState;
    // const [errorMessage, setErrorMessage] = useState('');

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     if (!errorMessage) {
    //       setFormState({ [e.target.name]: e.target.value });
    //       console.log('Form', formState);
    //     }
    // };
    
    // const handleChange = (e) => {
    //     if (e.target.name === 'email') {
    //         const isValid = validateEmail(e.target.value);
    //         if (!isValid) {
    //             setErrorMessage('Your email is invalid.');
    //           } else {
    //             setErrorMessage('');
    //         }
    //     } else {
    //         if (!e.target.value.length) {
    //           setErrorMessage(`${e.target.name} is required.`);
    //         } else {
    //           setErrorMessage('');
    //         }
    //     }
    // };
    // JSX
    return (
        <section>
          <h1>Contact me</h1>

            <div className="contact">
                
                <p className="myemail">
                    natek.hogan@gmail.com
                </p>
            
                <p className="myemail">
                    801-721-7302
                    <p>Text or Call</p>
                </p>
            </div>
          {/* <form id="contact-form" onSubmit={handleSubmit}>
          <div className="form">
                <label htmlFor="name">Name:</label>
                <input type="text" defaultValue={name} onChange={handleChange} name="name" />
            </div>
            <div className="form">
                <label htmlFor="email">Email:</label>
                <input type="email" defaultValue={email} name="email" onChange={handleChange} />
            </div>
            <div className="form">
                <label htmlFor="message">Message:</label>
                <textarea name="message" defaultValue={message} onChange={handleChange} rows="5"  />
            </div>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
            <button type="submit">Submit</button>
          </form> */}
        </section>
    );
}
    
export default ContactUs;