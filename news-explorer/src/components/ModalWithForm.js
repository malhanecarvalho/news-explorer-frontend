import { useState, useEffect, useContext } from "react";
import { CurrentUserContext } from "../contexts/NewsExplorerContext";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import closeIcon from "../images/close_icon.png";
import * as auth from "../utils/auth";

function Popup() {
  const {
    isPopupOpen,
    onPopupClose,
    title,
    setTitle,
    titleNavlink,
    setTitleNavlink,
    isPopupSignupOpen,
    handleLoggin,
    userName,
    setUserName,
  } = useContext(CurrentUserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [errorMessagePassword, setErrorMessagePassword] = useState("");
  const [errorMessageUserName, setErrorMessageUserName] = useState("");
  const [input, setInput] = useState(false);
  const [disabledButtonSubmit, setDisabledButtonSubmit] = useState(true);
  const [togglePopup, setTogglePopup] = useState(false);
  const [buttonText, setButtonText] = useState("Entrar");

  const classPopupOpen = isPopupOpen ? "modal__open" : "";
  const classPopupSignupOpen = isPopupSignupOpen ? "modal__open" : "";
  const classButtonSubmit = disabledButtonSubmit
    ? "modal__button_disabled"
    : "";
  const emailRegex = /\S+@\S+\.\S+/;

  useEffect(() => {
    disabledBtn(email, password, userName);
  }, []);

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

  console.log(userName);

  const handleSignup = async () => {
    try {
      if (password && email) {
        const response = await auth.register({ email, password });
        if (!response.ok) {
          throw new Error();
        }
        localStorage.setItem("username", userName);
        window.location = "/";
        //setTimeout(() => { onPopupOpen()}, 1000)
      }
    } catch (error) {
      console.log("error register", error);
    }
  };

  const handleSignin = async () => {
    setTogglePopup(false);
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
        }
      }
    } catch (error) {
      console.log("error login", error);
    }
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    if (togglePopup) {
      handleSignup();
    } else {
      handleSignin();
    }

    setEmail("");
    setPassword("");
    setUserName("");
    setDisabledButtonSubmit(true);
    onPopupClose();
  };

  const popupSignup = () => {
    setTogglePopup(true);
    setTitle("inscreva-se");
    setTitleNavlink("Entrar");
    setButtonText("inscreva-se");
    setInput(true);
    setEmail("");
    setErrorMessage("");
    setPassword("");
    setErrorMessagePassword("");
  };

  return (
    <section className={`modal ${classPopupOpen} ${classPopupSignupOpen}`}>
      <div className="modal__content">
        <form className="modal__form" onSubmit={handleSubmit} noValidate>
          <img
            className="modal__icon"
            src={closeIcon}
            alt="Image icon close"
            onClick={onPopupClose}
          />
          <h2 className="modal__title">{title}</h2>
          <label className="modal__label" htmlFor="email">
            E-mail
            <input
              type="email"
              id="email"
              className={errorMessage ? "modal__input" : ""}
              name="email"
              placeholder="Insira e-mail"
              value={email}
              onChange={handleUpdateEmail}
              required
            ></input>
            {errorMessage && (
              <span className="modal__label_span">{errorMessage}</span>
            )}
          </label>
          <label className="modal__label" htmlFor="password">
            Password
            <input
              type="password"
              id="password"
              name="password"
              className={errorMessagePassword ? "modal__input" : ""}
              placeholder="Insira a senha"
              value={password}
              onChange={handleUpdatePassword}
              required
            ></input>
            {errorMessagePassword && (
              <span className="modal__label_span">{errorMessagePassword}</span>
            )}
          </label>
          {input && (
            <label className="modal__label" htmlFor="password">
              Nome de usuário
              <input
                type="text"
                id="password"
                name="password"
                className={errorMessagePassword ? "modal__input" : ""}
                placeholder="Insira seu nome de usuário"
                value={userName}
                onChange={handleUpdateUserName}
                maxLength={7}
                required
              ></input>
              {errorMessageUserName && (
                <span className="modal__label_span">
                  {errorMessageUserName}
                </span>
              )}
            </label>
          )}
          <button
            type="submit"
            className={`${classButtonSubmit} modal__button modal__button_text`}
            disabled={disabledButtonSubmit}
            onClick={handleSubmit}
          >
            {buttonText}
          </button>
          <NavLink
            className="modal_text modal__link"
            to="/"
            onClick={popupSignup}
          >
            <span className="modal_text modal__span">Ou</span> {titleNavlink}
          </NavLink>
        </form>
      </div>
    </section>
  );
}

export default Popup;
