import cardImage from '../images/georgia-de-lotz-unsplash.png';
import trashIcon from '../images/bookmark_normal.png';

function NewsCard() {
    return (
        <ul className="card">
            <li className="card__container">
                <div className="card__itens">
                    <img className='card__image' src={cardImage} />
                    <button className='card__button'>
                        <img className='card__bookmark' src={trashIcon} />
                    </button>
                </div>
                <div className="card__descriptions">
                    <p className="card__date" itemType="Date">4 de novembro de 2020</p>
                    <h2 className="card__title">Todo mundo precisa de um ''Lugar Especial para Sentar" especial na natureza</h2>
                    <p className="card__subheading">Desde que li o influente livro de Richard Louv, "O Último Filho na Floresta", a ideia de ter um "lugar para sentar" especial me pegou de jeito. This advice, which Louv attributes to natureza...</p>
                    <p className="card__author">treehugger</p>
                </div>
            </li>
            <li className="card__container">
                <div className="card__itens">
                    <img className='card__image' src={cardImage} />
                    <button className='card__button'>
                        <img className='card__trash' src={trashIcon} />
                    </button>
                </div>
                <div className="card__descriptions">
                    <p className="card__date" itemType="Date">19 de fevereiro de 2019</p>
                    <h2 className="card__title">A natureza faz de você uma pessoa melhor</h2>
                    <p className="card__subheading">Todos nós sabemos como a natureza nos faz bem. Nós a conhecemos há milênios: o som dos oceanos, os aromas de uma floresta, a forma como a luz do sol dança através das folhas.</p>
                    <p className="card__author">national geographic</p>
                </div>
            </li>
            <li className="card__container">
                <div className="card__itens">
                    <img className='card__image' src={cardImage} />
                    <button className='card__button'>
                        <img className='card__trash' src={trashIcon} />
                    </button>
                </div>
                <div className="card__descriptions">
                    <p className="card__date" itemType="Date">19 de outubro de 2020</p>
                    <h2 className="card__title">Todo mundo precisa de um ''Lugar Especial para Sentar" especial na natureza</h2>
                    <p className="card__subheading">Desde que li o influente livro de Richard Louv, "O Último Filho na Floresta", a ideia de ter um "lugar para sentar" especial me pegou de jeito. This advice, which Louv attributes to natureza...</p>
                    <p className="card__author">national geographic</p>
                </div>
            </li>
        </ul>

    )

};

export default NewsCard;