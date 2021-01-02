import React, { useEffect, useRef } from "react";
import "./Modal.css";

export default function Modal({ children, testId, isMenuActive }) {
  const modal = useRef(null);
  useEffect(() => {
    if (modal) {
      modal.current.style.display = isMenuActive ? "flex" : "none";
    }
  }, [isMenuActive]);
  return (
    <div data-testid={testId} className="modal" ref={modal}>
      {children}
    </div>
  );
}
