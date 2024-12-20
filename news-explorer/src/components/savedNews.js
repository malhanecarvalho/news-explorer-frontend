import React, { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import NewsCard from "./NewsCard";
import UnsavedCards from "./UnsavedCards";

const SavedNews = () => {
  const { savedArticles } = useContext(CurrentUserContext);

  return (
    <section className="saved-cards">
      {savedArticles.length > 0 ? < NewsCard onlySaved={true} /> : <UnsavedCards/>}
    </section>
  );
};

export default SavedNews;
