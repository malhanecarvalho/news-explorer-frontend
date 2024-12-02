import React, { useState } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Header from "./Header";
import Main from './Main';
import Footer from './Footer';
import SavedNewsHeader from './SavedNewsHeader';
import NewsCardList from "./NewsCardList";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="page">
      <Switch>
        <Route exact path="/">
          <Main />
          <Footer />
        </Route>
        <Route path="/saved-news">
          <Header />
          <SavedNewsHeader />
          <NewsCardList/>
          <Footer/>
        </Route>
      </Switch>

    </div>
  );
}

export default withRouter(App);
