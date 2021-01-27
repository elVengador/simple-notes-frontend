import React from 'react';
import { useHistory } from 'react-router-dom';

import './Title.css';

export default function Title({ text, options = [] }) {
  const history = useHistory();
  const opt = options.map((cur, idx) => (
    <div
      key={`title-option-${idx}`}
      className="button--icon"
      onClick={() => history.push(cur.link)}
    >
      {cur.icon}
    </div>
  ));
  return (
    <div className="title-page">
      <h3 className="title-page__text">{text}</h3>
      <div className="title-page__options">{opt}</div>
    </div>
  );
}
