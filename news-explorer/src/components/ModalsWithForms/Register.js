import { useEffect, useContext } from "react";
import { CurrentUserContext } from "../../contexts/NewsExplorerContext";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import closeIcon from "../../images/close_icon.png";

function Register() {
  const {
    email,
    password,
    errorMessage,
    errorMessagePassword,
    errorMessageUserName,
    disabledButtonSubmit,
    classButtonSubmit,
    handleUpdateEmail,
    handleUpdatePassword,
    handleUpdateUserName,
    handleSubmitSignup,
    disabledBtn,
    onPopupClose,
    isPopupSignupOpen,
    userName,
    onPopupOpen,
  } = useContext(CurrentUserContext);

  const classPopupSignupOpen = isPopupSignupOpen ? "modal__open" : "";

  useEffect(() => {
    disabledBtn(email, password, userName);
  }, []);

  return (
    <section className={`modal ${classPopupSignupOpen}`}>
      <div className="modal__content">
        <form className="modal__form" onSubmit={handleSubmitSignup} noValidate>
          <img
            className="modal__icon"
            src={closeIcon}
            alt="Image icon close"
            onClick={onPopupClose}
          />
          <h2 className="modal__title">Inscreva-se</h2>
          <label className="modal__label" htmlFor="email-signup">
            E-mail
            <input
              type="email"
              id="email-signup"
              className={errorMessage ? "modal__input" : ""}
              name="email-signup"
              placeholder="Insira e-mail"
              value={email}
              onChange={handleUpdateEmail}
              required
            ></input>
            {errorMessage && (
              <span className="modal__label_span">{errorMessage}</span>
            )}
          </label>
          <label className="modal__label" htmlFor="password-signup">
            Password
            <input
              type="password"
              id="password-signup"
              name="password-signup"
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
          <label className="modal__label" htmlFor="name">
            Nome de usuário
            <input
              type="text"
              id="name"
              name="name"
              className={errorMessagePassword ? "modal__input" : ""}
              placeholder="Insira seu nome de usuário"
              value={userName}
              onChange={handleUpdateUserName}
              maxLength={7}
              required
            ></input>
            {errorMessageUserName && (
              <span className="modal__label_span">{errorMessageUserName}</span>
            )}
          </label>
          <button
            type="submit"
            className={`${classButtonSubmit} modal__button modal__button_text`}
            disabled={disabledButtonSubmit}
            onClick={handleSubmitSignup}
          >
            Inscreva-se
          </button>
          <NavLink
            className="modal_text modal__link"
            to="/"
            onClick={onPopupOpen}
          >
            <span className="modal_text modal__span">Ou</span> Entrar
          </NavLink>
        </form>
      </div>
    </section>
  );
}

export default Register;
