import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import "./App.css";
import useApp from "./useApp";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Modal from "./Components/Modal/Modal";
import Menu from "./Components/Menu/Menu";
import Home from "./Pages/Home/Home";
import SignIn from "./Pages/SingIn/SignIn";
import SignUp from "./Pages/SingUp/SingUp";
import NotFound from "./Pages/NotFound/NotFound";

export default function App() {
  const { isMenuActive, showMenu, hideMenu } = useApp();

  return (
    <div className="app">
      <BrowserRouter>
        <Header showMenu={showMenu} />
        <div className="wrapper">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/sign-in">
              <SignIn />
            </Route>
            <Route path="/sign-up">
              <SignUp />
            </Route>
            <Route path="/notes"></Route>
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
        <Footer />
        <Modal isMenuActive={isMenuActive}>
          <Menu hideMenu={hideMenu} />
        </Modal>
      </BrowserRouter>
    </div>
  );
}
