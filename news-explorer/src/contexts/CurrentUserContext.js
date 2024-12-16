import React, { useState, createContext } from "react";
export const CurrentUserContext = createContext();

export const CurrentUserProvider = ({ children }) => {

  const [loggedIn, setLoggedIn] = useState(true);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isPopupSignupOpen, setIsPopupSignupOpen] = useState(false);
  const [title, setTitle] = useState("Entrar");
  const [titleNavlink, setTitleNavlink] = useState("Inscreva-se");
  
  function onPopupOpen() {
    setIsPopupOpen(true);
  };

  function onPopupClose() {
    setIsPopupOpen(false);
    setIsPopupSignupOpen(false);
  };

  return (
    <CurrentUserContext.Provider value={{ isPopupOpen, title, setTitle, titleNavlink, setTitleNavlink, onPopupOpen, setIsPopupOpen, onPopupClose, isPopupSignupOpen, setIsPopupSignupOpen, loggedIn }}>
      {children}
    </CurrentUserContext.Provider>
  );
};
