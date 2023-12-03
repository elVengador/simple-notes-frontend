import React, { useEffect, useRef } from 'react';
import './Select.css';

export default function Select({ testId, name, optionList, value, setValue }) {
  const optionItemList = optionList.map((cur, idx) => (
    <option key={`option-${idx}`} value={cur._id}>
      {cur.name}
    </option>
  ));
  return (
    <div className="input-container">
      <select
        data-testid={testId}
        className="input-select"
        id={name}
        name={name}
        placeholder={`Write your ${name}`}
        value={value}
        onChange={(event) => {
          setValue(event.currentTarget.value);
        }}
      >
        {optionItemList}
      </select>
      <label htmlFor={name}>{name}</label>
    </div>
  );
}
