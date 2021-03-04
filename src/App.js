import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
//    custom hooks
import useModal from './useModal';
import useMessage from './Components/Message/useMessage';
import { isUserLogged } from './Api/lib';
//    components
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Modal from './Components/Modal/Modal';
import Menu from './Components/Menu/Menu';
import Message from './Components/Message/Message';
//    pages
import Home from './Pages/Home/Home';
import SignIn from './Pages/SignIn/SignIn';
import SignUp from './Pages/SignUp/SignUp';
import SignOff from './Pages/SignOff/SignOff';
import TagPage from './Pages/TagPage/TagPage';
import NotePage from './Pages/NotePage/NotePage';
import NotFound from './Pages/NotFound/NotFound';

//    test
import NoteItem from './Components/NoteItem/NoteItem';

export default function App() {
  const { isActive, show, hide } = useModal();
  const { text, colorMessage, isMessageVisible, showMessage } = useMessage();

  return (
    <div className="app">
      <BrowserRouter>
        <Header showMenu={show} />
        <div className="wrapper">
          <Message
            text={text}
            colorMessage={colorMessage}
            isMessageVisible={isMessageVisible}
          />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/sign-in">
              <SignIn showMessage={showMessage} />
            </Route>
            <Route path="/sign-up">
              <SignUp showMessage={showMessage} />
            </Route>
            <Route path="/sign-off">
              <SignOff showMessage={showMessage} />
            </Route>
            <Route path="/tags" exact>
              <TagPage showMessage={showMessage} />
            </Route>
            <Route path="/notes">
              <NotePage showMessage={showMessage} />
            </Route>
            <Route path="/test"></Route>
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
        <Footer />
        <Modal isActive={isActive} hide={hide} title="Menu">
          <Menu hide={hide} />
        </Modal>
      </BrowserRouter>
    </div>
  );
}
