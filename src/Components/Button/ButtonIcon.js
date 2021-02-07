import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ButtonIcon({ icon, type, cb = () => {} }) {
  const iconSvg = <FontAwesomeIcon icon={icon} />;
  const colorSvg =
    type === 'light'
      ? 'button--icon-light'
      : type === 'dark'
      ? 'button--icon-dark'
      : 'button--icon';
  return (
    <div className={colorSvg} onClick={() => cb()}>
      {iconSvg}
    </div>
  );
}
