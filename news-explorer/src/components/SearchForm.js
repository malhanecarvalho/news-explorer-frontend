import { useContext } from "react";
import Header from "./Header";
import { CurrentUserContext } from "../contexts/NewsExplorerContext";

function SearchForm() {
  const { query, setQuery, handleSearch } = useContext(CurrentUserContext);

  return (
    <section className="search">
      <Header />
      <div className="search__container">
        <div className="search__description">
          <h1 className="search__title">O que está acontecendo no mundo?</h1>
          <p className="search__subheading">
            Encontre as últimas notícias sobre qualquer tema e salve elas em sua
            conta pessoal
          </p>
        </div>
        <form className="search__form" onSubmit={handleSearch}>
          <input
            type="text"
            className="search__input"
            placeholder="Inserir tema"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            required
          ></input>
          <button type="submit" className="search__button search__button_text">
            Procurar
          </button>
        </form>
      </div>
    </section>
  );
}
export default SearchForm;
