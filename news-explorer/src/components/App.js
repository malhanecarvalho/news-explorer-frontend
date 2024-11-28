import React,{useState} from 'react';
import {Switch, Route, withRouter } from 'react-router-dom';
import Header from "./Header";
import SearchForm from "./SearchForm";
import Main from './Main';


function App() {
const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">     
        <Main/>
        </Route>
        <Route path="/saved-news">
        <Header/>
        </Route>
      </Switch>
       
    </div>
  );
}

export default withRouter(App);
