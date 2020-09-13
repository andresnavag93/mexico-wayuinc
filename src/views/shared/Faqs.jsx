import React from "react";
import { Container, Row } from "reactstrap";
import "swiper/dist/css/swiper.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const testimonials = [
  {
    name: "Ranita",
    image: require(`assets/img/logos/ranita.svg`),
    testimonial:
      "“Estamos contentos con el contenido que se le ha dado a Instagram y Facebook. Gracias por su apoyo y esperamos que pronto podamos contar con ustedes para construir un nuevo sitio web, mover la cuenta de twitter y generar publicidad para hacer eventos mensuales y mejorar con mayor fuerza la imagen de Ranita.”"
  },
  {
    name: "Comgrafic",
    image: require(`assets/img/logos/comgrafic.svg`),
    testimonial:
      "“Yo destacaría vuestra disponibilidad continua. A pesar de la diferencia horaria, siempre que tenemos cualquier duda o necesitamos cualquier cosa, están pendientes y nos dan respuesta prácticamente inmediata. Además, estamos muy satisfechos con el plan de visibilidad en redes tan profesional y adaptado a nuestra imagen que se está llevando a cabo.”"
  },
  {
    name: "Itagres",
    image: require(`assets/img/logos/itagres.svg`),
    testimonial:
      "“Estamos satisfechos y contentos con el trabajo realizado en nuestras RRSS. Uno de los puntos fuertes a resaltar del equipo de Wayu inc, es la respuesta casi inmediata y efectiva que obtenemos de parte de ellos, a cualquier hora del día por algún improvisto o duda que tengamos. Pronto contaremos con su apoyo para desarrollar nuestro sitio web y un sistema de ventas para verder nuestros productos.”"
  }
];

const Faqs = props => {
  return (
    <section id="testimonios" className="faqs-dd bg-blue2">
      <Container className="pt-0">
        <div className="pb-3 section-heading text-center ">
          <div className=" d-flex justify-content-center">
            <img
              src={require("assets/img/icons/rombo.svg")}
              alt="Lights"
              width="45px"
              className="products-icon-title mx-2"
            />
            <h1 className="bold">Testimonios</h1>
            <img
              src={require("assets/img/icons/rombo.svg")}
              alt="Lights"
              width="45px"
              className="products-icon-title mx-2"
            />
          </div>

          <p className="head-line-2">¿Qué dicen nuestros clientes de nosotros?</p>
        </div>
        <div className="d-none d-lg-block">
          <Row>
            <div className="col-lg-3 col-12 order-1 order-lg-1 d-flex justify-content-center">
              <div className="my-auto">
                <img className="rounded-circle img-l-img-50 shadow text-center" src={testimonials[0].image} alt="" />
              </div>
            </div>
            <div className="col-lg-9 col-12 order-2 order-lg-2">
              <div className="my-4 card-body text-center">{testimonials[0].testimonial}</div>
            </div>
          </Row>
          <Row>
            <div className="col-lg-9 col-12 order-2 order-lg-1">
              <div className="my-4 card-body text-center">{testimonials[1].testimonial}</div>
            </div>
            <div className="col-lg-3 col-12 order-1 order-lg-2 d-flex justify-content-center align-items-center">
              <div className="my-4">
                <img className="rounded-circle img-l-img-50 shadow text-center" src={testimonials[1].image} alt="" />
              </div>
            </div>
          </Row>
          <Row>
            <div className="col-lg-3 col-12 order-1 order-lg-1 d-flex justify-content-center align-items-center">
              <div className="my-4">
                <img className="rounded-circle img-l-img-50 shadow text-center" src={testimonials[2].image} alt="" />
              </div>
            </div>
            <div className="col-lg-9 col-12 order-2 order-lg-2">
              <div className="my-4 card-body text-center">{testimonials[2].testimonial}</div>
            </div>
          </Row>
        </div>
        <div className="d-block d-lg-none">
          <Carousel arrows={false} responsive={responsive} autoPlay={true} autoPlaySpeed={3000} infinite>
            <Row>
              <div className="col-lg-3 col-12 order-1 order-lg-1 d-flex justify-content-center align-items-center">
                <div className="my-4">
                  <img className="rounded-circle img-l-img-50 shadow text-center" src={testimonials[0].image} alt="" />
                </div>
              </div>
              <div className="col-lg-9 col-12 order-2 order-lg-2">
                <div className="my-4 card-body text-center">{testimonials[0].testimonial}</div>
              </div>
            </Row>
            <Row>
              <div className="col-lg-9 col-12 order-2 order-lg-1">
                <div className="my-4 card-body text-center">{testimonials[1].testimonial}</div>
              </div>
              <div className="col-lg-3 col-12 order-1 order-lg-2 d-flex justify-content-center align-items-center">
                <div className="my-4">
                  <img className="rounded-circle img-l-img-50 shadow text-center" src={testimonials[1].image} alt="" />
                </div>
              </div>
            </Row>
            <Row>
              <div className="col-lg-3 col-12 order-1 order-lg-1 d-flex justify-content-center align-items-center">
                <div className="my-4">
                  <img className="rounded-circle img-l-img-50 shadow text-center" src={testimonials[2].image} alt="" />
                </div>
              </div>
              <div className="col-lg-9 col-12 order-2 order-lg-2">
                <div className="my-4 card-body text-center">{testimonials[2].testimonial}</div>
              </div>
            </Row>
          </Carousel>
        </div>
      </Container>
    </section>
  );
};

export default Faqs;
