import React from "react";
import { Modal as ModalB } from "react-bootstrap";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { openCloseAddTweetModalAction } from "../actions/modalsActions";

//Componente modal el cual muestra el formulario para un nuevo Tweet
const Modal = ({ children }) => {
  //Ejecutar la acción
  const dispatch = useDispatch();
  const closeModal = state => dispatch(openCloseAddTweetModalAction(state));

  //Acceder al valor del estado del modal del store
  const isOpenModal = useSelector(state => state.modals.stateModalAddTweet);

  return (
    <ModalB
      show={isOpenModal}
      onHide={() => closeModal(false)}
      size="lg"
      centered
    >
      {children}
    </ModalB>
  );
};

Modal.propTypes = {
  children: PropTypes.element.isRequired
};

export default Modal;
