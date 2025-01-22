import { useContext } from "react";
import { CurrentUserContext } from "../contexts/NewsExplorerContext";
import NewsCard from "./NewsCard";

function NewsCardList() {
  const { articles, error, loading, handleShowMore, searchResults } =
    useContext(CurrentUserContext);

  return (
    <section className="card-list">
      {searchResults && (
        <>
          <h2 className="card-list__title">Procurar resultados</h2>
          <div className="card-list__cards">
            {articles.length > 0 && !loading && !error ? (
              <NewsCard onlySaved={false} />
            ) : (
              ""
            )}
          </div>

          <button
            onClick={handleShowMore}
            className="card-list__button card-list__button_text"
          >
            Mostrar mais
          </button>
        </>
      )}
    </section>
  );
}

export default NewsCardList;
