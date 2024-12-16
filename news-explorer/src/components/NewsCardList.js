import { useState, useEffect } from "react";
import NewsCard from "./NewsCard";
import Preloader from "./Preloader";

function NewsCardList() {
  const [loading, setLoading] = useState(true);

  const Submit = (evt) => {
    console.log(evt.target)
    console.log("cliquei")
  }

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <section className='card-list'>{loading ? <Preloader /> : <>
      <h2 className='card-list__title'>Procurar resultados</h2>
      <div className='card-list__cards'>
        <NewsCard />
      </div>
      <button onClick={Submit} className='card-list__button card-list__button_text'>Mostrar mais</button>
    </>}
    </section>
  )
};

export default NewsCardList;