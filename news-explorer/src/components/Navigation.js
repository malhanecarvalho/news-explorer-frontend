import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CurrentUserContext } from "../contexts/NewsExplorerContext";
import strokeIcon from "../images/white-stroke_icon.png";
import blackStrokeIcon from "../images/black-stroke_icon.png";
import loggoutIcon from "../images/logout_icon.png";
import loggoutIconWhite from "../images/logout_icon-white.png";

function Navigation() {
  const {
    onPopupOpen,
    userName,
    loggedIn,
    isSignupPage,
    isSavedNewsPage,
    onMobileOpen,
    signOut,
  } = useContext(CurrentUserContext);

  const RenderItensNavigation = () => {
    if (isSignupPage) {
      return (
        <>
          <NavLink
            className="navigation__item navigation__title"
            activeClassName="navigation__item_active"
            to="/"
          >
            NewsExplorer
          </NavLink>
          <div className="navigation__wrapper">
            <NavLink
              className="navigation__item navigation__text"
              activeClassName="navigation__item_active"
              to="/"
            >
              Home
            </NavLink>
            <img src={strokeIcon} alt="Icon stroke white" />
          </div>
          <button
            className="navigation__menu navigation__menu_white"
            onClick={onMobileOpen}
          ></button>
          {loggedIn && (
            <NavLink
              className="navigation__item navigation__text"
              activeClassName="navigation__item_active"
              to="/saved-news"
            >
              Artigos salvos
            </NavLink>
          )}
          {loggedIn ? (
            <button className="navigation__item navigation__button navigation__button_text">
              {userName}
              <img
                className="navigation__button_close"
                src={loggoutIconWhite}
                alt="Icon loggout"
                onClick={signOut}
              />
            </button>
          ) : (
            <button
              className="navigation__item navigation__button navigation__button_text"
              onClick={onPopupOpen}
            >
              Entrar
            </button>
          )}
        </>
      );
    }

    if (isSavedNewsPage) {
      return (
        <>
          <NavLink
            className="navigation__item navigation__title_loggedIn"
            activeClassName="navigation__item_active"
            to="/"
          >
            NewsExplorer
          </NavLink>
          <button
            className="navigation__menu navigation__menu_black"
            onClick={onMobileOpen}
          ></button>
          <NavLink
            className="navigation__item navigation__text_loggedIn"
            activeClassName="navigation__item_active"
            to="/"
          >
            Home
          </NavLink>
          <div className="navigation__wrapper">
            <NavLink
              className="navigation__item navigation__text_loggedIn"
              activeClassName="navigation__item_active"
              to="/"
            >
              Artigos salvos
            </NavLink>
            <img src={blackStrokeIcon} alt="Icon stroke black" />
          </div>
          <button className="navigation__item navigation__button_loggedIn navigation__button_text_loggedIn">
            {userName}
            <img
              className="navigation__button_close"
              src={loggoutIcon}
              alt="Icon loggout"
              onClick={signOut}
            />
          </button>
        </>
      );
    }
  };

  return (
    <nav className="navigation">
      <RenderItensNavigation />
    </nav>
  );
}

export default Navigation;
