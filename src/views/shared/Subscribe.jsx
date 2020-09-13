import React from "react";
import { Container, Col, Row } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { method_post_mail } from "../../providers/MailProvider";

const Subscribe = props => {
  async function sendMessage(e) {
    var button = null;
    if (e) e.preventDefault();
    button = e.target[5];
    button.disabled = true;
    var buttonClose = document.getElementById("button-close");
    buttonClose.disabled = true;
    var payload = {
      name: e.target[0].value,
      email: e.target[1].value,
      phone: e.target[2].value,
      coupon: e.target[3].value,
      text: e.target[4].value
    };

    const response = await method_post_mail(payload);

    if (response.error) {
      alert("Ha ocurrido un error, intente más tarde");
      button.disabled = false;
      buttonClose.disabled = false;
    } else {
      alert("Su mensaje fue enviado satisfactoriamente, pronto le contáctaremos.");
      button.disabled = false;
      buttonClose.disabled = false;
      props.onCloseModal();
    }
  }

  return (
    <Container className="smaller-container">
      <div className="shadow rounded bg-contrast no-opacity Modal__container px-0">
        <img
          src={require("assets/img/icons/pluma1.svg")}
          alt="Lights"
          width="200px"
          className="paquete-items-form pluma1-form p-0"
        />
        <img
          src={require("assets/img/icons/pluma2.svg")}
          alt="Lights"
          width="200px"
          className="paquete-items-form pluma2-form"
        />
        <img
          src={require("assets/img/icons/flecha.svg")}
          alt="Lights"
          width="100px"
          className="paquete-items-form flecha1-form"
        />
        <div className="contact-form-container">
          <h4 className="nombre-paquete-form text-center mt-4 pt-1 ">De Contacto</h4>
          <h4 className="paquete-form text-center">Formulario</h4>
        </div>
        <button id="button-close" onClick={props.onCloseModal} className="Modal__close-button bold">
          X
        </button>
        <div className="py-2 text-center">
          <p className="bold lead"> Estamos a nada de hacer crecer juntos tu marca.</p>
        </div>
        <div className="mx-auto px-4 position-relative form-wrapper">
          <form className="form form-row" data-response-message-animation="slide-in-left" onSubmit={sendMessage}>
            <div className="form-group input--group">
              <Row>
                <Col xs="12" sm="6">
                  <label className="lead required-field"> Nombre Completo</label>
                  <input
                    id="subscribe-name"
                    type="text"
                    name="name"
                    className="form-control form-control-lg"
                    placeholder=""
                    required
                  />
                </Col>
                <Col xs="12" sm="6">
                  <label className="lead required-field"> Correo Electrónico </label>
                  <input
                    id="subscribe-email"
                    type="email"
                    name="email"
                    className="form-control form-control-lg"
                    placeholder=""
                    required
                  />
                </Col>
                <Col xs="12" sm="6">
                  <label className="lead required-field"> Teléfono de Contacto </label>
                  <input
                    id="subscribe-phone"
                    type="text"
                    name="phone"
                    className="form-control form-control-lg"
                    placeholder=""
                    required
                  />
                </Col>
                <Col xs="12" sm="6">
                  <label className="lead"> Cupones de Descuento </label>
                  <input
                    id="subscribe-coupon"
                    type="coupon"
                    name="coupon"
                    className="form-control form-control-lg"
                    placeholder=""
                  />
                </Col>
                <Col xs="12">
                  <label className="lead"> Comentarios </label>
                  <textarea
                    rows="2"
                    id="subscribe-text"
                    type="text"
                    name="text"
                    className="form-control form-control-lg"
                    placeholder="Aprovecha este espacio para comentarnos el nombre de tu marca o cualquier duda que tengas al respecto"
                  />
                </Col>
                <Col xs="12" className="text-center mt-5 mb-5">
                  <button
                    type="submit"
                    className="btn btn-lg btn-alternate btn-contact-form-color text-center"
                    disabled={false}
                  >
                    Enviar
                  </button>
                </Col>
              </Row>
            </div>
          </form>

          <div className="response-message">
            <FontAwesomeIcon icon={["fas", "envelope"]} className="fa-3x" />
            <p className="font-md m-0">Tu correo </p>
            <p className="response">Tu respuesta ha sido enviada satisfactoriamente.</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Subscribe;
