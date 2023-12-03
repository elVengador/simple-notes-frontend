import React, { useEffect, useRef } from 'react';
import './Message.css';

export default function Message({ text, colorMessage, isMessageVisible }) {
  const message = useRef(null);
  useEffect(() => {
    if (message) {
      message.current.style.display = isMessageVisible ? 'flex' : 'none';
    }
  }, [isMessageVisible]);
  return (
    <div className={colorMessage} ref={message}>
      {text}
    </div>
  );
}
