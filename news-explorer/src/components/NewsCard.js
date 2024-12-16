import { useContext, useState } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function NewsCard() {
  const [isHovered, setIsHovered] = useState(false);
  const { loggedIn, articles, displayCount } = useContext(CurrentUserContext);
  const [saveNews, setSaveNews] = useState(false);
  const classSavedNews = saveNews ? "card__button_saved" : "";

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleSubmitSave = () => {
    setSaveNews(true);
  };

  return (
    <ul className="card"> 
     {articles.slice(0, displayCount).map((article, index) => (
      <li className="card__container" key={index}>
        <div className="card__itens">
         { article.urlToImage && <img
            className="card__image"
            src={article.urlToImage}
            alt={article.title}
          />}
          {isHovered && (
            <span className="card__span">Sign in to save articles</span>
          )}
          {loggedIn ? (
            <button
              className={`card__button  ${classSavedNews}`}
              onClick={handleSubmitSave}
            ></button>
          ) : (
            <button
              className="card__button card__button_icon"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            ></button>
          )}
        </div>
        <div className="card__descriptions">
          <p className="card__date">
            {article.publishedAt}
          </p>
          <h2 className="card__title">
           {article.title}
          </h2>
          <p className="card__subheading">
           {article.description}
          </p>
          <p className="card__author">treehugger</p>
        </div>
      </li>))}


     {/* <li className="card__container">
        <div className="card__itens">
          <img
            className="card__image"
            src={cardImage}
            alt="Search-related background image"
          />
          {isHovered && (
            <span className="card__span">Sign in to save articles</span>
          )}
          {loggedIn ? (
            <button
              className={`card__button  ${classSavedNews}`}
              onClick={handleSubmitSave}
            ></button>
          ) : (
            <button
              className="card__button card__button_icon"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            ></button>
          )}
        </div>
        <div className="card__descriptions">
          <p className="card__date" itemType="Date">
            4 de novembro de 2020
          </p>
          <h2 className="card__title">
            Todo mundo precisa de um 'Lugar Especial para Sentar" especial na
            natureza
          </h2>
          <p className="card__subheading">
            Desde que li o influente livro de Richard Louv, "O Último Filho na
            Floresta", a ideia de ter um "lugar para sentar" especial me pegou
            de jeito. This advice, which Louv attributes to natureza...
          </p>
          <p className="card__author">treehugger</p>
        </div>
      </li>
      <li className="card__container">
        <div className="card__itens">
          <img
            className="card__image"
            src={cardImage}
            alt="Search-related background image"
          />
          {isHovered && (
            <span className="card__span">Sign in to save articles</span>
          )}
          {loggedIn ? (
            <button
              className={`card__button  ${classSavedNews}`}
              onClick={handleSubmitSave}
            ></button>
          ) : (
            <button
              className="card__button card__button_icon"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            ></button>
          )}
        </div>
        <div className="card__descriptions">
          <p className="card__date" itemType="Date">
            4 de novembro de 2020
          </p>
          <h2 className="card__title">
            Todo mundo precisa de um 'Lugar Especial para Sentar" especial na
            natureza
          </h2>
          <p className="card__subheading">
            Desde que li o influente livro de Richard Louv, "O Último Filho na
            Floresta", a ideia de ter um "lugar para sentar" especial me pegou
            de jeito. This advice, which Louv attributes to natureza...
          </p>
          <p className="card__author">treehugger</p>
        </div>
      </li>*/}
    </ul>
  );
}

export default NewsCard;
