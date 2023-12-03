import React from "react";
import "./Footer.css";

export default function Footer({ testId }) {
  return (
    <footer data-testid={testId} className="footer">
      <h2 className="footer__title">App Notes - 2020 - by elVengador</h2>
    </footer>
  );
}
