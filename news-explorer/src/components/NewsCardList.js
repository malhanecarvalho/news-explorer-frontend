import { useContext } from "react";
import { CurrentUserContext } from "../contexts/NewsExplorerContext";
import NewsCard from "./NewsCard";
import Preloader from "./Preloader";
import ResultNotFound from "./ResultNotFound";

function NewsCardList() {
  const { articles, error, loading, handleShowMore } =
    useContext(CurrentUserContext);

  return (
    <section className="card-list">
      {loading && <Preloader />}
      {error && !loading && <ResultNotFound />}
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
    </section>
  );
}

export default NewsCardList;
