import React from "react";
import classNames from "classnames/bind";
import { Col } from "reactstrap";
import Odometer from "react-odometerjs";
import "odometer/themes/odometer-theme-minimal.css";
import { NavLink, Button } from "reactstrap";

const PricingPlan = props => {
  const plan = props;

  if (plan.best) {
  }

  return (
    <Col
      className={classNames(
        `justify-content-center shadow d-md-flex pricing-plan plan-${plan.name} ${plan.class}
          // plan.best ? "background-best-princing-cards" : ""
        }`,
        {
          "best-value": plan.best
        }
      )}
    >
      <div className={`background-description ${plan.best ? "paquete-bg-color-best" : ""}`}>
        <h4 className="paquete">Paquete</h4>
        <h4 className="nombre-paquete text-center mt-4 pt-3">{plan.name}</h4>
        <img src={require("assets/img/icons/pluma1.svg")} alt="Lights" width="160px" className="paquete-items pluma1" />
        {plan.best && (
          <img
            src={require("assets/img/icons/pluma2.svg")}
            alt="Lights"
            width="200px"
            className="paquete-items pluma2"
          />
        )}
        {plan.best && (
          <img
            src={require("assets/img/icons/pluma3.svg")}
            alt="Lights"
            width="160px"
            className="paquete-items pluma3"
          />
        )}
        {plan.best && (
          <img
            src={require("assets/img/icons/flecha.svg")}
            alt="Lights"
            width="200px"
            className="paquete-items flecha1 d-none d-sm-block"
          />
        )}
        {plan.best && (
          <img
            src={require("assets/img/icons/flecha.svg")}
            alt="Lights"
            width="200px"
            className="paquete-items flecha2 d-none d-sm-block"
          />
        )}
      </div>

      <div className={classNames("px-1 py-4", { "py-md-5": true })}>
        <div className="text-center">
          <p className={`mt-8 mb-0 text-${plan.best ? "" : "secundary"} align-middle`}>{plan.desc}</p>
          <div className="pricing-details">
            <span className="pricing-value">
              <span className="price py-1 bold">
                <Odometer duration={500} value={plan.price[props.basis]} />
              </span>
            </span>
          </div>
          <NavLink href="#contactanos">
            <Button
              onClick={props.onOpenModal}
              className={`bold button-text-color text-center btn btn-lg btn-${
                plan.best ? "outline-best-" : "outline-"
              }alternate mb-1`}
            >
              Solicitar ya!
            </Button>
          </NavLink>
        </div>

        <hr />

        <div className="justify-content-center text-center d-md-flex  ">
          <ul className="ul-princi mt-0 list-group-no-border list-group">
            {plan.description.map((element, i) => (
              <li className={`${plan.best ? "bold" : ""} py-1 `} key={i}>
                {element}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Col>
  );
};

export default PricingPlan;
