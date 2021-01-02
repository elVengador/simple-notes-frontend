import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Icon.css";

export default function Icon({ testId, icon, light = false, cb }) {
  const iconSvg = <FontAwesomeIcon icon={icon} />;
  const colorSvg = light ? "icon-light" : "icon-dark";
  return (
    <div data-testid={testId} className={colorSvg} onClick={() => cb()}>
      {iconSvg}
    </div>
  );
}
