import SearchForm from "./SearchForm";
import NewsCardList from "./NewsCardList";
import About from "./About";
import Register from "./ModalsWithForms/Register";
import Login from "./ModalsWithForms/Login";
import { useContext } from "react";
import { CurrentUserContext } from "../contexts/NewsExplorerContext";

function Main() {
  const { searchResults } = useContext(CurrentUserContext);
  return (
    <>
      <SearchForm />
      {searchResults && <NewsCardList />}
      <About />
      <Login />
      <Register />
    </>
  );
}

export default Main;
