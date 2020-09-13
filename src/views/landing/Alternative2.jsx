import React from "react";

// shared page components
import Pricing from "../shared/Pricing.jsx";
import Faqs from "../shared/Faqs.jsx";
// core components
import DefaultNavbar from "components/Navbars/DefaultNavbar.jsx";
import DefaultFooter from "components/Footers/DefaultFooter.jsx";
import PowerfulFeatures from "../shared/PowerfulFeatures.jsx";

// alternative 2 page components
import Heading from "../alter2/Heading.jsx";

class Alternative2 extends React.Component {
  state = {
    modalIsOpen: false
  };

  handleCloseModal = e => {
    this.setState({ modalIsOpen: false });
    //alert("Ha ocurrido un error");
  };

  handleOpenModal = e => {
    this.setState({ modalIsOpen: true });
    //alert("Ha ocurrido un error");
  };
  render() {
    return (
      <div data-spy="scroll" data-target="#navbar-scroll-spy" data-offset="90">
        <DefaultNavbar useOnlyDarkLogo={true} />

        <main ref="main">
          {/* Alternative 2 specific components */}
          <img
            src={require("assets/img/icons/mas-02.svg")}
            alt="Lights"
            width="100px"
            className="contact-display-fixed"
            onClick={this.handleOpenModal}
          />
          <Heading />
          <PowerfulFeatures />
          <div className="hr-blue"></div>
          <div className="hr-yellow"></div>
          <div className="hr-blue"></div>
          <Pricing
            onCloseModal={this.handleCloseModal}
            onOpenModal={this.handleOpenModal}
            modalIsOpen={this.state.modalIsOpen}
          />
          <Faqs />
        </main>

        <div className="hr-yellow2"></div>
        <DefaultFooter />
        <div className="hr-yellow2"></div>
      </div>
    );
  }
}

export default Alternative2;
