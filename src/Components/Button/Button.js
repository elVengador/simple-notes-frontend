import React from 'react';
import './Button.css';

export default function Button({ child, type, cb }) {
  const className = type === 'primary' ? 'button-primary' : 'button-secondary';
  return (
    <button className={className} onClick={cb}>
      {child}
    </button>
  );
}
