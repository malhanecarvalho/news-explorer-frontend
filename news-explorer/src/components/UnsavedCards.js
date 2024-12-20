import NotFoundImg from "../images/not-found_icon.png";

function UnsavedCards() {
    return (
      <div className="unsaved">
        <img className="unsaved__icon" src={NotFoundImg} alt="Image not found unsaved"/>
        <p className="unsaved__title">Oops...</p>
        <p className="unsaved__text">Você não tem nenhuma notícia salva ainda.</p>
      </div>
    );
  };

  export default UnsavedCards;