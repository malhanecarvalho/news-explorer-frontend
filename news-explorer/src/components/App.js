import React, { useContext, useEffect} from 'react';
import { Switch, Route, withRouter, useHistory } from 'react-router-dom';
import Header from "./Header";
import Main from './Main';
import Footer from './Footer';
import SavedNewsHeader from './SavedNewsHeader';
import ProtectedRoute from './ProtectedRoute';
import SavedNews from './savedNews';
import * as auth from "../utils/auth";
import { CurrentUserContext } from '../contexts/NewsExplorerContext';

function App() {
  const { loggedIn, handleLoggin, handleLoggout, history } = useContext(CurrentUserContext);

  useEffect(() => {
    handleCheckToken();
  }, []);

  async function handleCheckToken() {
    const isToken = localStorage.getItem("Triple10");
    const userId = localStorage.getItem("userId");

    if (isToken) {
      try {
        const response = await auth.checkToken(isToken, userId);
        if (response.ok) {
          handleLoggin();
          history.push("/");
        }
      } catch (error) {
        console.error("Erro ao verificar token:", error);
        handleLoggout();
      }
    } else {
      handleLoggout();
    }
  };

  return (
    <div className="page">
      <Switch>
        <ProtectedRoute exact path="/saved-news" loggedIn={loggedIn} component={() => <>
          <Header />
          <SavedNewsHeader />
          <SavedNews />
          <Footer />
        </>} />
        <Route exact path="/">
          <Main />
          <Footer />
        </Route>
      </Switch>
    </div>
  );
}

export default withRouter(App);
