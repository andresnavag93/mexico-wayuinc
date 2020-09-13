import React from "react";
import { Container, Row, Col } from "reactstrap";

const PowerfulFeatures = () => {
  return (
    <section id="equipo" className="section alter3-features">
      <Container className="pt-6">
        <Row>
          <Col className="col-md-6 col-12 order-2 order-md-1 d-flex justify-content-center">
            <div className="text-center text-md-left">
              <div className="d-flex justify-content-center align-items-center ml-md-5">
                <img
                  src={require("assets/img/icons/rombo3.svg")}
                  alt="Lights"
                  width="45px"
                  className="products-icon-title mx-3"
                />
                <h1 className="bold my-3 text-center">
                  ¿Quiénes <br />
                  Somos?
                </h1>
                <img
                  src={require("assets/img/icons/rombo3.svg")}
                  alt="Lights"
                  width="45px"
                  className="products-icon-title mx-3"
                />
              </div>

              <p className="ml-md-5 pl-md-5 lead my-2 mt-md-0 semi-bold">
                Enfocados en darte un servicio de primera desde tiempos ancestrales.
              </p>

              <ul className="list-unstyled mt-4 ">
                <li className="media flex-column flex-md-row align-items-center text-md-left d-flex d-md-block d-lg-block  ">
                  <div className="ml-md-5 pl-md-5 media-body my-2 mt-md-0 ">
                    <p>- Wayu Inc es una organización enfocada en generar soluciones tecnológicas de alta calidad.</p>
                  </div>
                </li>

                <li className="media flex-column flex-md-row align-items-center  text-md-left d-flex d-md-block d-lg-block ">
                  <div className="ml-md-5 pl-md-5 media-body  my-2 mt-md-0">
                    <p>- Somos una tribu que trabaja en equipo e impulsa las marcas desde cero.</p>
                  </div>
                </li>
              </ul>
            </div>
          </Col>

          <div className="col-md-6 col-12 order-1 order-md-2 pt-0 ">
            <div className="thumbnail">
              <div className="tribu">
                <img
                  src={require("assets/img/icons/chozawayu1.svg")}
                  alt="Lights"
                  width="300px"
                  className="tribu-items choza1"
                />
                <img
                  src={require("assets/img/icons/chozawayu2.svg")}
                  alt="Lights"
                  width="220px"
                  className="tribu-items choza2 d-none d-lg-block"
                />

                <img
                  src={require("assets/img/icons/wifi-09.svg")}
                  alt="Lights"
                  width="200px"
                  className="tribu-items wifi-09"
                />

                <img
                  src={require("assets/img/icons/wifi-10.svg")}
                  alt="Lights"
                  width="191px"
                  className="tribu-items wifi-10"
                />

                <img
                  src={require("assets/img/icons/wifi-11.svg")}
                  alt="Lights"
                  width="150px"
                  className="tribu-items wifi-11"
                />

                <img
                  src={require("assets/img/icons/wifi-12.svg")}
                  alt="Lights"
                  width="108px"
                  className="tribu-items wifi-12"
                />

                <img
                  src={require("assets/img/icons/wifi-13.svg")}
                  alt="Lights"
                  width="46px"
                  className="tribu-items wifi-13"
                />
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default PowerfulFeatures;
