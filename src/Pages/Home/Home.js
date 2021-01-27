import React from "react";
import { useHistory } from "react-router-dom";
import { faStickyNote } from "@fortawesome/free-solid-svg-icons";
import "./Home.css";
import Icon from "../../Components/Icon/Icon";

export default function Home() {
  const history = useHistory();
  return (
    <div className="home">
      <div className="home__icon">
        <Icon icon={faStickyNote} />
      </div>
      <p className="home__message">
        Write yout notes easy and read them ererywhere
      </p>
      <div className="home__options">
        <button
          className="button-primary"
          onClick={() => history.push("/sign-in")}
        >
          Sign In
        </button>
        <button
          className="button-secondary"
          onClick={() => history.push("/sign-up")}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}
