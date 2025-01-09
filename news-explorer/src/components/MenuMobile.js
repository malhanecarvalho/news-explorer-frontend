import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CurrentUserContext } from "../contexts/NewsExplorerContext";
import closeIcon from "../images/close_icon.png";
import loggoutIconWhite from "../images/logout_icon-white.png";

function ResponseMenuNavigation() {
  const { onPopupClose, loggedIn, onPopupOpen, userName, signOut } =
    useContext(CurrentUserContext);

  return (
    <section className="menu">
      <div className="menu__container">
        <div className="menu__header">
          <NavLink className="menu__title" to="/">
            NewsExplorer
          </NavLink>
          <img
            className="menu__button_close"
            src={closeIcon}
            alt="Icon loggout"
            onClick={onPopupClose}
          />
        </div>
        <div className="menu__itens">
          <NavLink className="menu__text" to="/">
            Home
          </NavLink>

          {loggedIn && (
            <NavLink className="menu__text" to="/saved-news">
              Artigos salvos
            </NavLink>
          )}

          {loggedIn ? (
            <button className="menu__button menu__button_text">
              {userName}
              <img
                src={loggoutIconWhite}
                alt="Icon loggout"
                onClick={signOut}
              />
            </button>
          ) : (
            <button
              className="menu__button menu__button_text"
              onClick={onPopupOpen}
            >
              Entrar
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default ResponseMenuNavigation;
