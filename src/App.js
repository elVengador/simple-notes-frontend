import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
//    custom hooks
import useApp from './useApp';
import useMessage from './Components/Message/useMessage';
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
import TagPage from './Pages/TagPage/TagPage';
import NotePage from './Pages/NotePage/NotePage';
import NotFound from './Pages/NotFound/NotFound';

//    test
import NoteItem from './Components/NoteItem/NoteItem';

export default function App() {
  const { isMenuActive, showMenu, hideMenu } = useApp();
  const { text, colorMessage, isMessageVisible, showMessage } = useMessage();

  return (
    <div className="app">
      <BrowserRouter>
        <Header showMenu={showMenu} />
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
        <Modal isMenuActive={isMenuActive}>
          <Menu hideMenu={hideMenu} />
        </Modal>
      </BrowserRouter>
    </div>
  );
}
