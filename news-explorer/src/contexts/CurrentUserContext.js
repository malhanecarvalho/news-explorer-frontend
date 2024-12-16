import React, { useState, createContext, useEffect } from "react";
import { fetchNews } from "../utils/NewsExplorerApi";
export const CurrentUserContext = createContext();

export const CurrentUserProvider = ({ children }) => {

  const [loggedIn, setLoggedIn] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isPopupSignupOpen, setIsPopupSignupOpen] = useState(false);
  const [title, setTitle] = useState("Entrar");
  const [titleNavlink, setTitleNavlink] = useState("Inscreva-se");
  const [query, setQuery] = useState("");
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [displayCount, setDisplayCount] = useState(3);

  function onPopupOpen() {
    setIsPopupOpen(true);
  }

  function onPopupClose() {
    setIsPopupOpen(false);
    setIsPopupSignupOpen(false);
  }

  useEffect(() => {
    const storedArticles = localStorage.getItem("articles");
    if (storedArticles) {
      setArticles(JSON.parse(storedArticles)); 
    }
  }, []);

  useEffect(() => {
    if (articles.length > 0) {
      localStorage.setItem("articles", JSON.stringify(articles));
    }
  }, [articles]);

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!query.trim()) {
      setError("Por favor, insira uma palavra-chave");
      return;
    }

    setLoading(true);
    setError("");
    try {
      const news = await fetchNews(query);
      if (news.length === 0) {
        setError("Nada encontrado");
      } else {
        setArticles(news);
      }
    } catch (err) {
      setError(
        "Desculpe, algo deu errado durante a solicitação. Pode haver um problema de conexão ou o servidor pode estar inativo. Por favor, tente novamente mais tarde."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleShowMore = () => {
    setDisplayCount(displayCount + 3);
  };

  return (
    <CurrentUserContext.Provider
      value={{
        isPopupOpen,
        title,
        setTitle,
        titleNavlink,
        setTitleNavlink,
        onPopupOpen,
        setIsPopupOpen,
        onPopupClose,
        isPopupSignupOpen,
        setIsPopupSignupOpen,
        query,
        setQuery,
        loggedIn,
        loading,
        setLoading,
        articles,
        error,
        displayCount,
        handleShowMore,
        handleSearch,
      }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};
