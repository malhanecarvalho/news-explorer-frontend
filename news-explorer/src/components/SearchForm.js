import Header from "./Header";

function SearchForm() {
    return (
        <section className="search">
            <Header />
            <div className='search__container'>
                <h1 className='search_title'>O que está
                    acontecendo no mundo?</h1>
                <p className='search__subheading'>Encontre as últimas notícias sobre qualquer tema e salve elas em sua conta pessoal</p>
                <form className='search__form'>
                    <input className='search__input' placeholder='Inserir tema'></input>
                    <button className='search__button search__button_text'>Procurar</button>
                </form>
            </div>
        </section>
    )
}
export default SearchForm;