import React, { useState } from 'react';

export default function useMessage() {
  const [text, setText] = useState('');
  const [colorMessage, setColorMessage] = useState('');
  const [isMessageVisible, setIsMessageVisible] = useState(false);

  /**
   * @param {String} newText
   * @param {String} type
   */
  const showMessage = (newText, type) => {
    setText(newText);
    setColorMessage(type === 'success' ? 'message--success' : 'message--error');
    setIsMessageVisible(true);

    setTimeout(() => {
      setIsMessageVisible(false);
    }, 5000);
  };

  return { text, colorMessage, isMessageVisible, showMessage };
}
