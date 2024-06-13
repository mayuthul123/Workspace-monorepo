// Contact.js
import React from 'react';
// import { useHistory } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Contact = () => {
//   const history = useHistory();
const navigate = useNavigate(); 

  const handleClick = () => {
    // Redirect to the Home page
    navigate('/');
  };

  return (
    <div>
      <h2>Contact Page</h2>
      <button onClick={handleClick}>Go to Home</button>
    </div>
  );
};

export default Contact;
