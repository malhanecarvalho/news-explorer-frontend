import { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "../contexts/NewsExplorerContext";

function NewsCard(props) {
  const {
    loggedIn,
    articles,
    displayCount,
    savedArticles,
    query,
    handleSave,
    handleRemove,
    iconSaved,
    savedStatus,
    isSavedNewsPage,
  } = useContext(CurrentUserContext);

  const [localSavedArticles, setLocalSavedArticles] = useState(savedArticles);

  useEffect(() => {
    const updatedSavedArticles =
      JSON.parse(localStorage.getItem("savedArticles")) || [];
    setLocalSavedArticles(updatedSavedArticles);
  }, [savedArticles]);

  const [targetCard, setTargetCard] = useState({
    articleUrl: null,
    isHovered: false,
  });

  const handleMouseEnter = (article) => {
    setTargetCard({
      articleUrl: article.url,
      isHovered: true,
    });
  };

  const handleMouseLeave = () => {
    setTargetCard({
      articleUrl: null,
      isHovered: false,
    });
  };

  const formatDate = (dateString) => {
    const options = { day: "numeric", month: "long", year: "numeric" };

    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR", options);
  };

  const saveToLocalStorage = (article) => {
    const savedArticles =
      JSON.parse(localStorage.getItem("savedArticles")) || [];

    const updatedArticle = {
      ...article,
      query: query,
    };

    if (!savedArticles.some((saved) => saved.url === article.url)) {
      savedArticles.push(updatedArticle);
      localStorage.setItem("savedArticles", JSON.stringify(savedArticles));
      setLocalSavedArticles(savedArticles);
    }
  };

  const removeFromLocalStorage = (article) => {
    let savedArticles = JSON.parse(localStorage.getItem("savedArticles")) || [];
    savedArticles = savedArticles.filter((saved) => saved.url !== article.url);
    localStorage.setItem("savedArticles", JSON.stringify(savedArticles));
  };

  let articlesFormated;

  if (props.onlySaved) {
    articlesFormated = localSavedArticles;
  } else {
    articlesFormated = articles;
  }

  return (
    <ul className="card">
      {articlesFormated
        .slice(0, displayCount)
        .filter((article) => !article.title.includes("[Removed]"))
        .map((article, index) => (
          <li className="card__container" key={index}>
            <div className="card__itens">
              {article.urlToImage && (
                <img
                  className="card__image"
                  src={article.urlToImage}
                  alt={article.title}
                />
              )}

              {isSavedNewsPage && (
                <span className="card__span_query">{article.query}</span>
              )}

              {targetCard.isHovered &&
                targetCard.articleUrl === article.url && (
                  <span className="card__span">
                    {isSavedNewsPage
                      ? "Remove from saved"
                      : "Sign in to save articles"}
                  </span>
                )}

              {loggedIn ? (
                savedArticles.length > 0 && savedStatus[article.url] ? (
                  <button
                    className={`card__button  ${
                      iconSaved.articleUrl === !article.url &&
                      !iconSaved.isSaved
                        ? ""
                        : "card__button_saved"
                    }`}
                    onClick={() => handleRemove(article)}
                  ></button>
                ) : (
                  <button
                    className={`card__button  ${
                      iconSaved.articleUrl === !article.url && iconSaved.isSaved
                        ? "card__button_saved"
                        : ""
                    }`}
                    onClick={() => {
                      saveToLocalStorage(article);
                      handleSave(article);
                    }}
                  ></button>
                )
              ) : (
                <button
                  className="card__button card__button_icon"
                  onMouseEnter={() => handleMouseEnter(article)}
                  onMouseLeave={handleMouseLeave}
                ></button>
              )}
              {isSavedNewsPage && (
                <button
                  className="card__button card__button_trash"
                  onMouseEnter={() => {
                    removeFromLocalStorage(article);
                    handleMouseEnter(article);
                  }}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleRemove(article)}
                ></button>
              )}
            </div>

            <div className="card__descriptions">
              <p className="card__date">{formatDate(article.publishedAt)}</p>
              <h2 className="card__title">{article.title}</h2>
              <p className="card__subheading">{article.description}</p>
              <p className="card__author">
                {article.source.name.toUpperCase()}
              </p>
            </div>
          </li>
        ))}
    </ul>
  );
}

export default NewsCard;
