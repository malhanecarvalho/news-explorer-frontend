import { NavLink } from "react-router-dom";
import facebookIcon from '../images/facebook_icon.png';
import githubIcon from '../images/github_icon.png';

function Footer() {
    return (
        <section className='footer'>
            <div className='footer__container'>
                <p className='footer__description'>© 2021 Supersite, desenvolvido pela News API</p>
                <div className='footer__link'>
                    <NavLink className='footer__item footer__text' activeClassName='footer__item_active' to="/">Home</NavLink>
                    <NavLink className='footer__item footer__text' activeClassName='footer__item_active' to="/">Practicum</NavLink>
                </div>
                <div className='footer__images'>
                    <a href='https://github.com/malhanecarvalho' target="_blank" rel="noopener noreferrer">
                        <img className='footer__item footer__icon' src={githubIcon} alt='Github icon' />
                    </a>
                    <img className='footer__item footer__icon' src={facebookIcon} alt='Facebook icon' />
                </div>
            </div>
        </section>
    )
};

export default Footer;