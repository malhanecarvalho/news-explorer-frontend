import { useState } from "react";
import Header from "./Header";

function SearchForm() {
    const [thema, setThema] = useState("");

    const handleUpdateTheme = (evt) => {
        const value = evt.target.value
        setThema(value)
    };

    const handleSubmit = (evt) => {
        console.log("cliquei")
    }

    return (
        <section className="search">
            <Header />
            <div className='search__container'>
                <div className='search__description'>
                    <h1 className='search_title'>O que está
                        acontecendo no mundo?</h1>
                    <p className='search__subheading'>Encontre as últimas notícias sobre qualquer tema e salve elas em sua conta pessoal</p>
                </div>
                <form className='search__form'>
                    <input type='text' className='search__input' placeholder='Inserir tema' value={thema} onChange={handleUpdateTheme} required></input>
                    <button type="submit" className='search__button search__button_text' onClick={handleSubmit}>Procurar</button>
                </form>
            </div>
        </section>
    )
}
export default SearchForm;