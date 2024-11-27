import React,{useState} from 'react';
import {Switch, Route, withRouter } from 'react-router-dom';
import Header from "./Header";
import SearchForm from "./SearchForm"


function App() {
const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">     
        <SearchForm/>
        </Route>
        <Route path="/saved-news">
        <Header/>
        </Route>
      </Switch>
       
    </div>
  );
}

export default withRouter(App);
