import React from 'react';
import NotFoundImg from "../images/not-found_icon.png";

function Preloader(){
  
  function ResultNotFound() {
    return (
      <div className="preloader">
        <img className="preloader__icon" src={NotFoundImg} alt="Image not found result"/>
        <p className="preloader__title">Nada encontrado</p>
        <p className="preloader__text">Desculpe, mas nada corresponde aos seus termos de pesquisa.</p>
      </div>
    );
  };

  return (
    <>
    <div className="preloader">
      <div className="preloader__spinner"></div>
      <p className="preloader__text">Procurando notícias...</p>
    </div>
    <ResultNotFound/>
    </>
  );
};

export default Preloader;
