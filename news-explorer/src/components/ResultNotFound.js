import NotFoundImg from "../images/not-found_icon.png";

function ResultNotFound() {
    return (
      <div className="result">
        <img className="result__icon" src={NotFoundImg} alt="Image not found result"/>
        <p className="result__title">Nada encontrado</p>
        <p className="result__text">Desculpe, mas nada corresponde aos seus termos de pesquisa.</p>
      </div>
    );
  };

  export default ResultNotFound;