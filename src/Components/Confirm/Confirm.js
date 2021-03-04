import React, { useState } from 'react';
import './Confirm.css';

import ButtonCenter from '../Button/ButtonCenter';

export default function Confirm({ hideMenu, text, cb }) {
  /*const [title, setTitle] = useState('');
  const [cb, setCb] = useState()*/
  const handleConfirm = () => {
    console.log('confirm');
    hideMenu();
    cb();
  };
  return (
    <div className="confirm">
      <p className="confirm__text">{text}</p>
      <ButtonCenter child={'Si'} cb={() => handleConfirm()} />
    </div>
  );
}
