import SearchForm from "./SearchForm";
import NewsCardList from "./NewsCardList";
import About from "./About";
import Popup from "./ModalWithForm";
import ResultNotFound from "./ResultNotFound";
import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main() {
  const {searchResults, notFoundResults} = useContext(CurrentUserContext);
    return(
      <>
        <SearchForm/>
      { searchResults && (notFoundResults ? <ResultNotFound/> : <NewsCardList/>)}
        <About/>
        <Popup/>
        </>
    )
};

export default Main;