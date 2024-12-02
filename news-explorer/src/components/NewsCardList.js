import { useState, useEffect } from "react";
import NewsCard from "./NewsCard";
import Preloader from "./Preloader";

function NewsCardList() {
    const [loading, setLoading] = useState(true);

    // Simula o carregamento do conteúdo
    useEffect(() => {
      setTimeout(() => {
        setLoading(false); // Após 3 segundos, simula o fim do carregamento
      }, 3000);
    }, []);

    return (
        <section className='card-list'>{loading ? <Preloader/> : <>

            <h2 className='card-list__title'>Procurar resultados</h2>
            <div className='card-list__cards'>
                <NewsCard />
            </div>
            <button type='submit' className='card-list__button card-list__button_text'>Mostrar mais</button>
            </>}
        </section>
    )
};

export default NewsCardList;