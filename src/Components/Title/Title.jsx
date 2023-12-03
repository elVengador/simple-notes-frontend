import React from 'react';
import ButtonIcon from '../Button/ButtonIcon';

import './Title.css';

export default function Title({ text, options = [] }) {
  const optionList = options.map((cur, idx) => (
    <ButtonIcon
      key={`title-option-${idx}`}
      icon={cur.icon}
      cb={() => cur.cb()}
    />
  ));
  return (
    <div className="title-page">
      <h3 className="title-page__text">{text}</h3>
      <div className="title-page__options">{optionList}</div>
    </div>
  );
}