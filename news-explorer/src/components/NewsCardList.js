import { useContext } from "react";
import NewsCard from "./NewsCard";
import Preloader from "./Preloader";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function NewsCardList() {
  const { articles, error, loading, handleShowMore } =
    useContext(CurrentUserContext);

  return (
    <section className="card-list">
      {loading && <Preloader />}
      {error && !loading && <div className="error-message">{error}</div>}
      <>
        <h2 className="card-list__title">Procurar resultados</h2>
        <div className="card-list__cards">
          {articles.length > 0 && !loading && !error ? <NewsCard /> : ""}
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
