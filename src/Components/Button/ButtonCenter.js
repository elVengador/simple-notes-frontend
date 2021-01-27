import React from 'react';
import './Button.css';

export default function ButtonCenter({ child, type, cb }) {
  const className =
    type === 'primary' ? 'button-primary--center' : 'button-secondary--center';
  return (
    <button className={className} onClick={cb}>
      {child}
    </button>
  );
}
