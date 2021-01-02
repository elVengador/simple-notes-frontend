import React from "react";

export default function useLink({ hideMenu, history }) {
  const redirect = (route) => {
    hideMenu();
    history.push(route);
  };
  return { redirect };
}
