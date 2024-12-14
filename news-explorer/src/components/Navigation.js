import { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import strokeIcon from "../images/white-stroke_icon.png";
import blackStrokeIcon from "../images/black-stroke_icon.png";
import loggoutIcon from "../images/logout_icon.png";
import loggoutIconWhite from "../images/logout_icon-white.png";

function Navigation() {
    const location = useLocation();
    const { onPopupOpen, loggedIn } = useContext(CurrentUserContext);

    const isSignupPage = location.pathname === "/";
    const isSavedNewsPage = location.pathname === "/saved-news";

    const RenderItensNavigation = () => {
        if (isSignupPage) {
            return (
                <>
                    <NavLink className='navigation__item navigation__title' activeClassName="navigation__item_active" to="/">NewsExplorer</NavLink>
                    <div className="navigation__wrapper">
                        <NavLink className='navigation__item navigation__text' activeClassName="navigation__item_active" to="/">Home</NavLink>
                        <img src={strokeIcon} alt='Icon stroke white' />
                    </div>
                    {loggedIn && <NavLink className='navigation__item navigation__text' activeClassName="navigation__item_active" to="/saved-news">Artigos salvos</NavLink>}
                    {loggedIn ? <button className='navigation__item navigation__button navigation__button_text'>Elise
                        <img className="navigation__button_close" src={loggoutIconWhite} alt='Icon loggout' />
                    </button> : <button className='navigation__item navigation__button navigation__button_text' onClick={onPopupOpen}>
                        Entrar
                    </button>}
                </>
            )
        };

        if (isSavedNewsPage) {
            return (
                <>
                    <NavLink className='navigation__item navigation__title_loggedIn' activeClassName="navigation__item_active" to="/">NewsExplorer</NavLink>
                    <NavLink className='navigation__item navigation__text_loggedIn' activeClassName="navigation__item_active" to="/">Home</NavLink>
                    <div className="navigation__wrapper">
                        <NavLink className='navigation__item navigation__text_loggedIn' activeClassName="navigation__item_active" to="/">Artigos salvos</NavLink>
                        <img src={blackStrokeIcon} alt='Icon stroke black' />
                    </div>
                    <button className='navigation__item navigation__button_loggedIn navigation__button_text_loggedIn'>
                        Elise
                        <img className="navigation__button_close" src={loggoutIcon} alt='Icon loggout' />
                    </button>
                </>
            )
        }
    };

    return (
        <nav className="navigation">
            <RenderItensNavigation />
        </nav>
    )
};

export default Navigation;