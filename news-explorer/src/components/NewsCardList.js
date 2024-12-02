import NewsCard from "./NewsCard";

function NewsCardList() {
    return (
        <section className='card-list'>
            <h2 className='card-list__title'>Procurar resultados</h2>
            <div className='card-list__cards'>
                <NewsCard />
            </div>
            <button type='submit' className='card-list__button card-list__button_text'>Mostrar mais</button>
        </section>
    )
};

export default NewsCardList;