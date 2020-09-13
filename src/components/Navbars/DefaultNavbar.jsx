import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";

// reactstrap components
import { NavbarBrand, NavItem, NavLink, Nav, Container } from "reactstrap";

class DefaultNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      navbarExpanded: false,
      modal: props.onOpenModel
    };

    this.modal = this.props.onOpenModel;

    this.navbar = React.createRef();

    this.toggleNavbar = this.toggleNavbar.bind(this);
  }

  toggleNavbar() {
    this.setState(prevState => ({
      navbarExpanded: !prevState.navbarExpanded
    }));
  }

  toggleNavbar2() {
    this.setState(prevState => ({
      navbarExpanded: !prevState.navbarExpanded
    }));
  }

  // toggleNavbarModal() {
  //   this.setState(prevState => ({
  //     navbarExpanded: !prevState.navbarExpanded
  //   }));
  //   this.props.onOpenModal();
  // }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const navigation = this.navbar.current;
    const navTop = navigation.offsetTop + navigation.offsetHeight;

    if (window.scrollY >= navTop) {
      navigation.classList.add("navbar-sticky");
    } else {
      navigation.classList.remove("navbar-sticky");
    }
  };

  render() {
    const useOnlyDarkLogo = this.props.useOnlyDarkLogo;

    return (
      <nav
        id="navbar-scroll-spy"
        ref={this.navbar}
        className={classNames(
          "navbar nav-color-dark-blue navbar-expand-md main-nav navigation fixed-top sidebar-left",
          {
            "navbar-expanded": this.state.navbarExpanded
          }
        )}
      >
        <Container>
          <button className="navbar-toggler nav-color-dark-blue" type="button" onClick={this.toggleNavbar}>
            <span className="icon-bar nav-color-dark-blue" />
            <span className="icon-bar nav-color-dark-blue" />
            <span className="icon-bar nav-color-dark-blue" />
          </button>

          <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
            {useOnlyDarkLogo ? (
              <img alt="..." src={require("assets/img/wayu-logo.png")} className="logo logo-sticky" />
            ) : (
              <>
                <img
                  src={require("assets/img/wayu-logo.png")}
                  alt="Laapp"
                  className="logo logo-sticky d-block d-md-none"
                />
                <img src={require("assets/img/wayu-logo.png")} alt="Wayu Logo" className="logo d-none d-md-block" />
              </>
            )}
          </NavbarBrand>

          <div className="collapse navbar-collapse">
            <div className="sidebar-brand">
              <Link to="/">
                <img src={require("assets/img/wayu-logo.png")} alt="Laapp Template" className="logo" />
              </Link>
            </div>

            <Nav className="nav navbar-nav ml-auto" navbar>
              <NavItem>
                <NavLink href="#inicio" className="nav-color-dark-blue" onClick={this.toggleNavbar}>
                  Inicio
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#equipo" className="nav-color-dark-blue" onClick={this.toggleNavbar}>
                  Tribu
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#productos" className="nav-color-dark-blue" onClick={this.toggleNavbar}>
                  Productos
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#testimonios" className="nav-color-dark-blue" onClick={this.toggleNavbar}>
                  Testimonios
                </NavLink>
              </NavItem>
              {/* <NavItem>
                <NavLink href="#contactanos" className="nav-color-dark-blue" onClick={this.toggleNavbar}>
                  Contáctanos
                </NavLink>
              </NavItem> */}
            </Nav>
          </div>
        </Container>
      </nav>
    );
  }
}

export default DefaultNavbar;
