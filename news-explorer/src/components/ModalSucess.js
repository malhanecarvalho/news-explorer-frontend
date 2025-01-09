import { useContext } from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { CurrentUserContext } from "../contexts/NewsExplorerContext";
import closeIcon from "../images/close_icon.png";

function ModalSuccess() {
  const { isModalSuccessOpen, onPopupOpen, onPopupClose } =
    useContext(CurrentUserContext);
    
  const classModalSucessOpen = isModalSuccessOpen ? "modal-sucess__open" : "";

  return (
    <div className={`modal-sucess ${classModalSucessOpen}`}>
      <img
        className="modal-sucess__icon"
        src={closeIcon}
        alt="Image icon close"
        onClick={onPopupClose}
      />
      <div className="modal-sucess__container">
        <h2 className="modal-sucess__title">Cadastro concluído com sucesso!</h2>
        <NavLink
          className="modal-success__text modal-success__link"
          to="/"
          onClick={onPopupOpen}
        >
          Entrar
        </NavLink>
      </div>
    </div>
  );
}

export default ModalSuccess;
