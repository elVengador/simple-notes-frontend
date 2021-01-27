import React from "react";
import "./Input.css";

export default function Input({
  testId,
  name,
  value,
  setValue,
  type = "text",
}) {
  return (
    <div className="input-container">
      <input
        data-testid={testId}
        className="input-text"
        id={name}
        name={name}
        type={type}
        placeholder={`Write your ${name}`}
        value={value}
        onChange={(event) => {
          setValue(event.currentTarget.value);
        }}
      />
      <label htmlFor={name}>{name}</label>
    </div>
  );
}
