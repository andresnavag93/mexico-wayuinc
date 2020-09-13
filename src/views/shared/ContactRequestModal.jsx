import React from "react";
import ReactDom from "react-dom";
import Suscribe from "./Subscribe.jsx";

function ContactRequestModal(props) {
  if (!props.isOpen) {
    return null;
  }
  console.log(props.onCloseModal);
  return ReactDom.createPortal(
    <div className="Modal overflow-y-hidden">
      <Suscribe onCloseModal={props.onCloseModal} />
    </div>,
    document.getElementById("modal")
  );
}

export default ContactRequestModal;
