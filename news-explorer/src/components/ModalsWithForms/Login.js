import { useEffect, useContext } from "react";
import { CurrentUserContext } from "../../contexts/NewsExplorerContext";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import closeIcon from "../../images/close_icon.png";

function Login() {
  const {
    email,
    password,
    errorMessage,
    errorMessagePassword,
    disabledButtonSubmit,
    classButtonSubmit,
    handleUpdateEmail,
    handleUpdatePassword,
    disabledBtn,
    handleSubmit,
    isPopupOpen,
    onPopupClose,
    onPopupSignupOpen,
  } = useContext(CurrentUserContext);

  const classPopupOpen = isPopupOpen ? "modal__open" : "";

  useEffect(() => {
    disabledBtn(email, password);
  }, []);

  return (
    <section className={`modal ${classPopupOpen}`}>
      <div className="modal__content">
        <form className="modal__form" onSubmit={handleSubmit} noValidate>
          <img
            className="modal__icon"
            src={closeIcon}
            alt="Image icon close"
            onClick={onPopupClose}
          />
          <h2 className="modal__title">Entrar</h2>
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
          <button
            type="submit"
            className={`${classButtonSubmit} modal__button modal__button_text`}
            disabled={disabledButtonSubmit}
            onClick={handleSubmit}
          >
            Entrar
          </button>
          <NavLink
            className="modal_text modal__link"
            to="/"
            onClick={onPopupSignupOpen}
          >
            <span className="modal_text modal__span">Ou</span> Inscreva-se
          </NavLink>
        </form>
      </div>
    </section>
  );
}

export default Login;
