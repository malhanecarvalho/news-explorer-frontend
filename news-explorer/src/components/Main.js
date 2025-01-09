import SearchForm from "./SearchForm";
import NewsCardList from "./NewsCardList";
import About from "./About";
import Register from "./ModalsWithForms/Register";
import Login from "./ModalsWithForms/Login";
import ResultNotFound from "./ResultNotFound";
import { useContext } from "react";
import { CurrentUserContext } from "../contexts/NewsExplorerContext";

function Main() {
  const { searchResults, notFoundResults } = useContext(CurrentUserContext);
  return (
    <>
      <SearchForm />
      {searchResults &&
        (notFoundResults ? <ResultNotFound /> : <NewsCardList />)}
      <About />
      <Login />
      <Register />
    </>
  );
};

export default Main;
