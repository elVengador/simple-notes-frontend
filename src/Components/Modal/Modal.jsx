import React, { useEffect, useRef } from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './Modal.css';

import Icon from '../Icon/Icon';

export default function Modal({ children, testId, hide, isActive, title }) {
  const modal = useRef(null);
  useEffect(() => {
    if (modal) {
      modal.current.style.display = isActive ? 'flex' : 'none';
    }
  }, [isActive]);
  return (
    <div data-testid={testId} className="modal" ref={modal}>
      <div className="container">
        <div className="modal__header">
          <div className="modal__header__icon">
            <Icon
              testId={'id-close'}
              icon={faTimes}
              light={true}
              cb={() => hide()}
            />
          </div>
          <h2 className="modal__header__title">{title}</h2>
        </div>
        <div className="modal__body">{children}</div>
      </div>
    </div>
  );
}
