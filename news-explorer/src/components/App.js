import React, { useContext} from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Header from "./Header";
import Main from './Main';
import Footer from './Footer';
import SavedNewsHeader from './SavedNewsHeader';
import NewsCardList from "./NewsCardList";
import ProtectedRoute from './ProtectedRoute';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import SavedNews from './savedNews';

function App() {
  const { loggedIn } = useContext(CurrentUserContext)
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
