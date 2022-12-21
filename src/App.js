import './App.css';
import React, { useState } from 'react';

function App() {
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    Email: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleFirstNameInputChange = (event) => {
    setValues({ ...values, firstName: event.target.value });
  };

  const handleLastNameInputChange = (event) => {
    setValues({ ...values, lastName: event.target.value });
  };

  const handleEmailInputChange = (event) => {
    setValues({ ...values, Email: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (values.firstName && values.lastName && values.Email) {
      setValid(true);
    }
    setSubmitted(true);
  };

  return (
    <div className="form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        {submitted && valid ? (
          <div className="success-message">
            Success! Thanks you for registering.
          </div>
        ) : null}
        <input
          onChange={handleFirstNameInputChange}
          value={values.firstName}
          className="form-field"
          placeholder="First Name"
          name="fisrtName"
        />

        {submitted && !values.firstName ? (
          <span>Please enter a first name</span>
        ) : null}

        <input
          onChange={handleLastNameInputChange}
          value={values.lastName}
          className="form-field"
          placeholder="Last Name"
          name="lastName"
        />

        {submitted && !values.lastName ? (
          <span>Please enter a last name</span>
        ) : null}

        <input
          onChange={handleEmailInputChange}
          value={values.Email}
          className="form-field"
          placeholder="Email"
          name="Email"
        />
        {submitted && !values.Email ? (
          <span>Please enter a Email adress</span>
        ) : null}

        <button className="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default App;
