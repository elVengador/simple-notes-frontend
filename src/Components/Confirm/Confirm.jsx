import React, { useState } from 'react';
import './Confirm.css';

import ButtonCenter from '../Button/ButtonCenter';

export default function Confirm({ hide, text, cb }) {
  const handleConfirm = () => {
    console.log('confirm');
    hide();
    cb();
  };
  return (
    <div className="confirm">
      <p className="confirm__text">{text}</p>
      <ButtonCenter child={'Si'} cb={() => handleConfirm()} />
    </div>
  );
}
