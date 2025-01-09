import React, { useState, createContext, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { fetchNews } from "../utils/NewsExplorerApi";
import * as auth from "../utils/auth";
export const CurrentUserContext = createContext();

export const CurrentUserProvider = ({ children }) => {
  const location = useLocation();

  const isSignupPage = location.pathname === "/";
  const isSavedNewsPage = location.pathname === "/saved-news";

  const history = useHistory();
  const [loggedIn, setLoggedIn] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [errorMessagePassword, setErrorMessagePassword] = useState("");
  const [errorMessageUserName, setErrorMessageUserName] = useState("");
  const [disabledButtonSubmit, setDisabledButtonSubmit] = useState(true);

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isPopupSignupOpen, setIsPopupSignupOpen] = useState(false);
  const [isModalSuccessOpen, setIsModalSuccessOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [userName, setUserName] = useState("");
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

  const classButtonSubmit = disabledButtonSubmit
    ? "modal__button_disabled"
    : "";
  const emailRegex = /\S+@\S+\.\S+/;

  useEffect(() => {
    const getCurrentUser = () => {
      const currentUser = JSON.parse(localStorage.getItem("currentUser"));
      setUserName(currentUser.userName);
      return currentUser ? currentUser.userName : "Nenhum usuário logado";
    };
    getCurrentUser();
  }, []);

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
    setIsPopupSignupOpen(false);
  }

  function onPopupSignupOpen() {
    setIsPopupSignupOpen(true);
  }

  function onPopupClose() {
    setIsPopupOpen(false);
    setIsPopupSignupOpen(false);
    setIsModalSuccessOpen(false);
    setIsMobileOpen(false);
  }

  function onModalSuccessOpen() {
    setIsModalSuccessOpen(true);
  }

  function onMobileOpen() {
    setIsMobileOpen(true);
  }

  function disabledBtn(email, password, userName) {
    if (
      !emailRegex.test(email) ||
      email.length <= 2 ||
      email === "" ||
      password.length <= 7 ||
      (password === "" && userName === "")
    ) {
      setDisabledButtonSubmit(true);
    } else {
      setDisabledButtonSubmit(false);
    }
  }

  const validateEmail = (value) => {
    if (value === "" || value.length <= 2 || !emailRegex.test(value)) {
      return "Endereço de e-mail inválido";
    } else {
      return "";
    }
  };

  const validatePassword = (value) => {
    if (value === "" || value.length <= 7) {
      return "A senha deve conter pelo menos 8 caracteres ";
    } else {
      return "";
    }
  };

  const validateUserName = (value) => {
    if (value === "") {
      return "O nome de usuário é obrigatório";
    } else {
      return "";
    }
  };

  const handleUpdateEmail = (evt) => {
    const value = evt.target.value;
    setEmail(value);
    const error = validateEmail(value);
    setErrorMessage(error);
    disabledBtn(value, password, userName);
  };

  const handleUpdatePassword = (evt) => {
    const value = evt.target.value;
    setPassword(value);
    const error = validatePassword(value);
    setErrorMessagePassword(error);
    disabledBtn(email, value, userName);
  };

  const handleUpdateUserName = (evt) => {
    const value = evt.target.value;
    setUserName(value);
    const error = validateUserName(value);
    setErrorMessageUserName(error);
    disabledBtn(email, password, value);
  };

  const handleSignin = async () => {
    try {
      if (password && email) {
        let response = await auth.login({ email, password });
        if (!response.ok) {
          return "Email ou senha inválidos";
        }
        const data = await response.json();
        if (data.token) {
          handleLoggin();
          localStorage.setItem("Triple10", data.token);
          localStorage.setItem("userId", data.userId);

          const users = JSON.parse(localStorage.getItem("users")) || {};

          if (users[email]) {
            const loggedInUser = users[email];

            localStorage.setItem("currentUser", JSON.stringify(loggedInUser));
          } else {
            console.log("Usuário não encontrado.");
          }

          window.location = "/";
        }
      }
    } catch (error) {
      console.log("error login", error);
    }
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    handleSignin();
    setEmail("");
    setPassword("");
    setUserName("");
    setDisabledButtonSubmit(true);
    onPopupClose();
  };

  const handleSignup = async () => {
    try {
      if (password && email && userName) {
        const response = await auth.register({ email, password, userName });
        if (!response.ok) {
          throw new Error();
        }
        const users = JSON.parse(localStorage.getItem("users")) || {};

        users[email] = { userName, email };
        localStorage.setItem("users", JSON.stringify(users));
        setIsModalSuccessOpen(true);
        setUserName("");
      }
    } catch (error) {
      console.log("error register", error);
    }
  };

  const handleSubmitSignup = async (evt) => {
    evt.preventDefault();
    handleSignup();
    setEmail("");
    setPassword("");
    setUserName("");
    setDisabledButtonSubmit(true);
    onPopupClose();
  };

  function signOut(evt) {
    evt.preventDefault();
    handleLoggout();
    localStorage.removeItem("Triple10");
    localStorage.removeItem("userId");
    setUserName("");
    history.push("/");
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
        email,
        password,
        errorMessage,
        errorMessagePassword,
        errorMessageUserName,
        disabledButtonSubmit,
        classButtonSubmit,
        isPopupOpen,
        handleUpdateEmail,
        handleUpdatePassword,
        handleUpdateUserName,
        disabledBtn,
        handleSubmit,
        handleSubmitSignup,
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
        history,
        userName,
        setUserName,
        isModalSuccessOpen,
        setIsModalSuccessOpen,
        onModalSuccessOpen,
        onPopupSignupOpen,
        signOut
      }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};
