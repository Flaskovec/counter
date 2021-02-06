import React from 'react';
import './App.css';

type ButtonType = {
  onClick: () => void;
  disabled?: boolean;
};

const Button: React.FC<ButtonType> = ({ children, disabled, onClick }) => {
  return (
    <button className="button" disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
