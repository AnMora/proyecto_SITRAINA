import React from "react";
import $ from "jquery";
// import { Link } from "react-router-dom";
import ReactTooltip from "react-tooltip";

const Header = (props) => {
  const handleMenu = (e) => {
    e.preventDefault();
    if (window.screen.width < 768){
      $(".sidebar").toggleClass("toggled");
    } else {
      $("body").toggleClass("sidebar-toggled");
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand navbar-light text-white bg-primary topbar static-top shadow">
        <button
          id="sidebarToggleTop"
          className="btn btn-outline-light btn-link text-white d-md-none icon"
          onClick={(e) => handleMenu(e)}
        >
          <i className="fa fa-bars"></i>
        </button>

        <ul className="navbar-nav ml-auto">

        {/* ENVIVO ////////////////////////////////////////////////// */}

          {/* <li className="nav-item dropdown no-arrow" data-tip data-for="Accesibilidad">
            <Link to="/EnVIVO">
              <a className="nav-link dropdown-toggle" href="##" id="messagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <div className="spinner-grow spinner-grow-sm text-danger" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
                <span className="mr-2 d-lg-inline">
                  <b>ENVIVO</b>
                </span>
              </a>
            </Link>
          </li>
          <ReactTooltip
            id="Accesibilidad"
            place="left"
            type="dark"
            effect="solid"
          >
            Programa de SITRAINA transmision EN VIVO
          </ReactTooltip>

          <div className="topbar-divider d-none d-sm-block"></div> */}

          {/* ENVIVO ////////////////////////////////////////////////// */}

          <li className="nav-item dropdown no-arrow" data-tip data-for="Lema">
            <a
              href="##"
              className="nav-link dropdown-toggle"
              id="LinksDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="mr-2 d-lg-inline">
                <b>SITRAINA</b>
              </span>
              <img
                className="img-profile rounded-circle"
                src="../../icon/SITRAINA.png"
                alt="Fines ilustrativos"
              />
            </a>
          </li>
          <ReactTooltip id="Lema" place="left" type="dark" effect="solid">
            Mientras haya Injusticia.. Habrá Sindicalismo
          </ReactTooltip>
        </ul>
      </nav>
    </>
  );
};

export default Header;
