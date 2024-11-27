import { NavLink, useLocation } from "react-router-dom";
import strokeIcon from "../images/white-stroke_icon.png";
import blackStrokeIcon from "../images/black-stroke_icon.png";
import loggoutIcon from "../images/logout_icon.png";

function Navigation() {
    const location = useLocation();
    const isSignupPage = location.pathname === "/";
    //const isSavedNewsPage = location.pathname === "/saved-news";

    /*const RenderItensNavigation = () => {
        if (isSignupPage) {
            return <NavLink className='navigation__item navigation__title' activeClassName="navigation__item_active" to="/">NewsExplorer</NavLink>
                && <div className="navigation__wrapper">
                    <NavLink className='navigation__item navigation__text' activeClassName="navigation__item_active" to="/">Home</NavLink>
                    <img src={strokeIcon} alt='Icon stroke white' />
                </div> &&
                <button className='navigation__item navigation__button navigation__button_text'>
                    Entrar
                </button>
        } else if (isSavedNewsPage) {
            return <NavLink className='navigation__item navigation__title_loggedIn' activeClassName="navigation__item_active" to="/">NewsExplorer</NavLink>
                && <div className="navigation__wrapper">
                    <NavLink className='navigation__item navigation__text_loggedIn' activeClassName="navigation__item_active" to="/">Home</NavLink>
                    <img src={blackStrokeIcon} alt='Icon stroke black' />
                </div> &&
                <button className='navigation__item navigation__button navigation__button_text'>
                    Elise
                </button>
        }
    }*/

    return (
        <nav className="navigation">
            {isSignupPage ? <NavLink className='navigation__item navigation__title' activeClassName="navigation__item_active" to="/">NewsExplorer</NavLink> : <NavLink className='navigation__item navigation__title_loggedIn' activeClassName="navigation__item_active" to="/">NewsExplorer</NavLink>}

            {isSignupPage ? <div className="navigation__wrapper">
                <NavLink className='navigation__item navigation__text' activeClassName="navigation__item_active" to="/">Home</NavLink>
                <img src={strokeIcon} alt='Icon stroke white' />
            </div> :
                <NavLink className='navigation__item navigation__text_loggedIn' activeClassName="navigation__item_active" to="/">Home</NavLink>
            }

            {isSignupPage ? "" : <div className="navigation__wrapper">
                <NavLink className='navigation__item navigation__text_loggedIn' activeClassName="navigation__item_active" to="/">Artigos salvos</NavLink>
                <img src={blackStrokeIcon} alt='Icon stroke black' />
            </div>}

            {isSignupPage ? <button className='navigation__item navigation__button navigation__button_text'>
                Entrar
            </button> : <button className='navigation__item navigation__button_loggedIn navigation__button_text_loggedIn'>
                Elise
                <img className="navigation__button_close" src={loggoutIcon} alt='Icon loggout' />
            </button>}


            {/*<RenderItensNavigation/>*/}
        </nav>
    )
}

export default Navigation;