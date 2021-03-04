import React, { useState } from 'react';

export default function useApp() {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const showMenu = () => setIsMenuActive(true);
  const hideMenu = () => setIsMenuActive(false);

  return {
    isMenuActive,
    showMenu,
    hideMenu,
  };
}
