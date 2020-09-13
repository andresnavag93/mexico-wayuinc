import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// reactstrap components
import { NavLink, Nav, Container, Row, Col } from "reactstrap";

const DefaultFooter = () => {
  return (
    <footer className="site-footer section bg-dark text-contrast">
      {" "}
      {/*edge top-left*/}
      <Container className="py-3 ">
        <Row className="row gap-y text-center text-md-left d-flex align-items-center">
          <Col md="3" className="text-center mr-auto">
            <img src={require("assets/img/wayu-logo-white.png")} alt="" className="logo" />

            <p>© 2019, Todos los derechos reservados</p>
          </Col>

          <Col md="6" className="">
            <Nav className="text-center flex-column flex-lg-row" tag="nav">
              <NavLink className="py-2 flex-fill text-contrast" href="#inicio">
                Inicio
              </NavLink>
              <NavLink className="py-2 flex-fill text-contrast" href="#equipo">
                Tribu
              </NavLink>
              <NavLink className="py-2 flex-fill text-contrast" href="#productos">
                Productos
              </NavLink>
              <NavLink className="py-2 flex-fill text-contrast" href="#testimonios">
                Testimonios
              </NavLink>
            </Nav>
          </Col>

          <Col md="3">
            <h6 className="py-2 text-center small">Síguenos</h6>

            <nav className="nav justify-content-around">
              <a
                href="https://www.youtube.com/channel/UCQ35aNBf8j7op8qCqV-Iq4Q"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-circle btn-sm brand-youtube"
              >
                <FontAwesomeIcon icon={["fab", "youtube"]} />
              </a>
              <a
                href="https://www.instagram.com/wayuinc/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-circle btn-sm brand-instagram"
              >
                <FontAwesomeIcon icon={["fab", "instagram"]} />
              </a>
              <a
                href="https://www.facebook.com/wayu.wayuinc"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-circle btn-sm brand-facebook"
              >
                <FontAwesomeIcon icon={["fab", "facebook"]} />
              </a>
            </nav>
          </Col>
        </Row>

        <hr className="mt-2 op-5" />
      </Container>
    </footer>
  );
};

export default DefaultFooter;
