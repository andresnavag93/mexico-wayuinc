import React from "react";
import { Container, Row } from "reactstrap";

const Heading = () => {
  return (
    <header id="inicio" className="header alter2-header section">
      <Container className="pb-0">
        <Row>
          <div className="col-12 col-md-5 ml-n5 pl-n5 d-none d-md-block ">
            <img src={require("assets/img/telefono.png")} alt="Lights" className="img-size-resposive2" />
          </div>
          <div className="col-12 col-md-7 mb-md-5 ml-none ml-md-5 text-center text-md-left col-12 col-md-7 align-self-center">
            <h1 className="mt-5 text-control">
              <span className="pr-0 ">
                ¡No Tengas Miedo <br />
                De Probar La Grandeza!
              </span>
            </h1>
            <p className="mb-md-5">
              <span className="head-line-2">
                Dos meses con nosotros <br /> cambiarán tu forma de hacer negocios
              </span>
            </p>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Heading;
