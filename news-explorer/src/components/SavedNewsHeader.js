import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function SavedNewsHeader() {
    const {query, savedQuerys, savedArticles} = useContext(CurrentUserContext);

    return(
        <section className="saved-news">
            <div className="saved-news__container">
        <p className="saved-news__text">Artigos salvos</p>
        <h2 className="saved-news__title">{`Elise, você tem ${savedArticles.length} artigos salvos`}</h2>
        {savedArticles.length > 0 && <p className="saved-news__subheading">{`Por palavras-chave: ${savedQuerys[0]}, ${savedQuerys[1]}, e ${savedQuerys.length} outras`}</p>}
        </div>
        </section>
    )
};

export default SavedNewsHeader;

