
// src/components/Button.js

import React from 'react';
import './Button.css';

const Button = ({label}) => {
  return (
    <div>
      <button className="custom-button">
        {label}
      </button>
    </div>
  );
};

export default Button;
