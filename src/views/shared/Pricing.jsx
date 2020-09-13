import React, { useState } from "react";
import { Container, ButtonGroup, Button } from "reactstrap";
// import { Container, Row, Col, ButtonGroup, Button } from "reactstrap";
import PricingPlan from "./PricingPlan.jsx";
import ContactRequestModal from "./ContactRequestModal.jsx";

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
    breakpoint: { max: 1024, min: 768 },
    items: 3
  },
  mobile2: {
    breakpoint: { max: 768, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const plans = [
  {
    name: "Indio",
    desc: "Desde",
    lg: "2",
    class: "",
    price: { pesos: 6000, dolares: 300, euros: 280 },
    description: [
      // 'Contenido para RRSS + Gráficos + Estadísticas + Interacción Diaria',
      "Contenido para RRSS",
      "Gráficos",
      "Estadísticas",
      "Interacción Diaria"
    ]
  },
  {
    name: "Tribu",
    desc: "Desde",
    lg: "2",
    class: "",
    best: true,
    price: { pesos: 12000, dolares: 600, euros: 550 },

    description: [
      // 'Contenido para RRSS + Gráficos + Estrategias digitales $3,000 inversión FB / Instagram',
      "Estrategias digitales",
      "Contenido para RRSS",
      "Gráficos",
      "Estadísticas",
      "Interacción Diaria"
    ]
  },
  {
    name: "Cacique",
    desc: "Desde",
    lg: "2",
    price: { pesos: 18000, dolares: 900, euros: 830 },
    description: [
      // 'Contenido para RRSS + Gráficos + Estrategias digitales $3,000 inversión FB / Instagram + Programación de landing page + Adwords'
      "Estrategias digitales",
      "Landing page ",
      "Adwords ",
      "Contenido para RRSS ",
      "Gráficos ",
      "Estadísticas ",
      "Interacción Diaria"
    ]
  },
  {
    name: "Chamán",
    desc: "Desde",
    lg: "2",
    //class: "order-md-last",
    class: "",
    price: { pesos: 21000, dolares: 1050, euros: 970 },
    description: [
      // 'Contenido para RRSS + Gráficos + Estrategias digitales $3,000 inversión FB / Instagram + Programación de sitio web + Adwords'
      "Estrategias digitales",
      "Sitio web",
      "Adwords",
      "Contenido para RRSS",
      "Gráficos",
      "Estadísticas",
      "Interacción Diaria"
    ]
  },
  {
    name: "Dioses",
    desc: "Desde los",
    lg: "2",
    class: "",
    //class: "order-md-first",
    price: { pesos: 25000, dolares: 1250, euros: 1160 },
    description: [
      // 'Contenido para RRSS + Gráficos + Estrategias digitales $3,000 inversión FB / Instagram + E-commerce + Adwords'
      "Estrategias digitales",
      "E-commerce",
      "Adwords",
      "Contenido para RRSS",
      "Gráficos",
      "Estadísticas",
      "Interacción Diaria"
    ]
  }
];

const Pricing = props => {
  const number = 1;
  const [basis, setBasis] = useState("pesos");
  //const [current, setCurrent] = useState("use")

  const CustomButtonGroup = ({ next, previous, goToSlide, carouselState }) => {
    const { totalItems, currentSlide } = carouselState;
    //alert();

    return (
      <div className="btn-bestseller-position text-center">
        <button
          onClick={() => goToSlide(totalItems / 3)}
          className={`bold button-text-color text-center btn btn-lg btn-outline-best-alternate`}
        >
          Bestseller
        </button>
      </div>
    );
  };

  return (
    <section id="productos" className="section pricing-plans">
      <Container className="pt-7 text-center">
        <div className="section-heading text-center mb-1 ">
          <div className="d-flex justify-content-center">
            <img
              src={require("assets/img/icons/rombo2.svg")}
              alt="Lights"
              width="45px"
              className="products-icon-title mx-3"
            />
            <h1 className="bold">Productos</h1>
            <img
              src={require("assets/img/icons/rombo2.svg")}
              alt="Lights"
              width="45px"
              className="products-icon-title mx-3"
            />
          </div>
          <ButtonGroup className={"mt-5"}>
            <Button
              className={`bold button-text-color text-center btn btn-lg btn-outline-alternate`}
              onClick={e => setBasis("dolares")}
              active={basis === "dolares"}
            >
              Dollar
            </Button>
            <Button
              className={`bold button-text-color text-center btn btn-lg btn-outline-alternate`}
              onClick={e => setBasis("pesos")}
              active={basis === "pesos"}
            >
              PesosMX
            </Button>
            <Button
              className={`bold button-text-color text-center btn btn-lg btn-outline-alternate`}
              onClick={e => setBasis("euros")}
              active={basis === "euros"}
            >
              Euro
            </Button>
          </ButtonGroup>
        </div>

        <Carousel
          goToSlide={number}
          focusOnSelect={true}
          customButtonGroup={<CustomButtonGroup />}
          arrows={true}
          responsive={responsive}
          autoPlay={true}
          autoPlaySpeed={3000}
          slidesToSlide={number}
          infinite
          className="py-7 d-flex align-content-stretch"
        >
          <div className="mx-4 my-auto align-content-stretch">
            <PricingPlan onOpenModal={props.onOpenModal} {...plans[0]} basis={basis} />
          </div>
          <div className="mx-4 align-content-stretch">
            <PricingPlan onOpenModal={props.onOpenModal} {...plans[1]} basis={basis} />
          </div>
          <div className="mx-4 align-content-stretch">
            <PricingPlan onOpenModal={props.onOpenModal} {...plans[2]} basis={basis} />
          </div>
          <div className="mx-4 align-content-stretch">
            <PricingPlan onOpenModal={props.onOpenModal} {...plans[3]} basis={basis} />
          </div>
          <div className="mx-4 align-content-stretch">
            <PricingPlan onOpenModal={props.onOpenModal} {...plans[4]} basis={basis} />
          </div>
        </Carousel>
        <ContactRequestModal isOpen={props.modalIsOpen} onCloseModal={props.onCloseModal} />
      </Container>
    </section>
  );
};

export default Pricing;
