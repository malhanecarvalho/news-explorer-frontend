import React, { useState, createContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { fetchNews } from "../utils/NewsExplorerApi";
export const CurrentUserContext = createContext();

export const CurrentUserProvider = ({ children }) => {
  const location = useLocation();

  const isSignupPage = location.pathname === "/";
  const isSavedNewsPage = location.pathname === "/saved-news";

  const [loggedIn, setLoggedIn] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isPopupSignupOpen, setIsPopupSignupOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [title, setTitle] = useState("Entrar");
  const [titleNavlink, setTitleNavlink] = useState("Inscreva-se");
  const [query, setQuery] = useState("");
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [displayCount, setDisplayCount] = useState(3);
  const [searchResults, setSearchResults] = useState(false);
  const [notFoundResults, setNotFoundResults] = useState(false);
  const [savedArticles, setSavedArticles] = useState([]);
  const [savedStatus, setSavedStatus] = useState({});
  const [savedQuerys, setSavedQuerys] = useState([]);
  const [iconSaved, setIconSaved] = useState({
    articleUrl: null,
    isSaved: false,
  });

  useEffect(() => {
    let savedArticles = JSON.parse(localStorage.getItem("savedArticles")) || [];
    setSavedArticles(savedArticles);
    let savedQuery = JSON.parse(localStorage.getItem("query")) || [];
    setSavedQuerys(savedQuery);
  }, []);

  function handleLoggin() {
    setLoggedIn(true);
  }

  function handleLoggout() {
    setLoggedIn(false);
  }

  function onPopupOpen() {
    setIsPopupOpen(true);
  }

  function onPopupClose() {
    setIsPopupOpen(false);
    setIsPopupSignupOpen(false);
    setIsMobileOpen(false);
  }

  function onMobileOpen() {
    setIsMobileOpen(true);
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

    if (!savedQuerys.some((querySaved) => querySaved === query)) {
      const querysFormated = [...savedQuerys, query];
      setSavedQuerys(querysFormated);
      localStorage.setItem("query", JSON.stringify(querysFormated));
    }

    setLoading(true);
    setError("");
    setSearchResults(true);

    try {
      const news = await fetchNews(query);
      if (news.length === 0) {
        setError("Nada encontrado");
        setNotFoundResults(true);
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

  const handleSave = (article) => {
    setIconSaved({
      articleUrl: article.url,
      isSaved: true,
    });
    if (!savedArticles.some((saved) => saved.url === article.url)) {
      setSavedArticles([...savedArticles, article]);
      setSavedStatus((prevState) => ({
        ...prevState,
        [article.url]: true,
      }));
    }
  };

  const handleRemove = (article) => {
    setIconSaved({
      articleUrl: null,
      isSaved: false,
    });
    setSavedArticles(
      savedArticles.filter((saved) => saved.url !== article.url)
    );
    setSavedStatus((prevState) => ({
      ...prevState,
      [article.url]: false,
    }));
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
        setDisplayCount,
        handleShowMore,
        handleSearch,
        savedArticles,
        setSavedArticles,
        searchResults,
        notFoundResults,
        handleSave,
        handleRemove,
        iconSaved,
        savedStatus,
        isSavedNewsPage,
        isSignupPage,
        savedQuerys,
        handleLoggin,
        handleLoggout,
        isMobileOpen,
        onMobileOpen,
      }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};
