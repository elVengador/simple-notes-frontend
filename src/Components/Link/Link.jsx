import React from "react";

export default function Link({ testId, text, cb }) {
  return (
    <li data-testid={testId} className="link" onClick={() => cb()}>
      {text}
    </li>
  );
}
