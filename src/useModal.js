import React, { useState } from 'react';

export default function useApp() {
  const [isActive, setIsActive] = useState(false);

  const show = () => setIsActive(true);
  const hide = () => setIsActive(false);

  return {
    isActive,
    show,
    hide,
  };
}
