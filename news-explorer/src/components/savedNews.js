import React, { useContext } from "react";
import { CurrentUserContext } from "../contexts/NewsExplorerContext";
import NewsCard from "./NewsCard";
import UnsavedCards from "./UnsavedCards";

const SavedNews = () => {
  const { savedArticles, displayCount } = useContext(CurrentUserContext);

  return (
    <section className="saved-cards">
      <div className="saved-cards__container">
      {savedArticles.length > 0 ? < NewsCard onlySaved={true} displayCount={displayCount} /> : <UnsavedCards/>}
      </div>
    </section>
  );
};

export default SavedNews;
