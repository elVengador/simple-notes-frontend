import React, { useEffect, useContext } from 'react';
import Icon from '../Icon/Icon';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

export default function Header({ testId, showMenu }) {
  return (
    <header data-testid={testId} className="header">
      <h3 className="header__title">App Notes</h3>

      <Icon
        testId={'id-icon-menu'}
        icon={faBars}
        light={true}
        cb={() => showMenu()}
      />
    </header>
  );
}
