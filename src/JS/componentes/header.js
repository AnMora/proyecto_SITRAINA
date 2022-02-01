import React from "react";
import $ from "jquery";
import { Link } from "react-router-dom";
import ReactTooltip from "react-tooltip";
import logo from "../../multimedia/icono/SITRAINA.png";

const Header = (props) => {
  const handleMenu = (e) => {
    e.preventDefault();
    if (window.screen.width < 768){
      $(".sidebar").toggleClass("toggled");
    } else {
      $("body").toggleClass("sidebar-toggled");
    }
  };

  const Colores = [
    { Color: "Negro/Blanco" },
    { Color: "Negro/Amarillo" },
    { Color: "Normal" },
  ];
  const Letras = [
    { Letra: "Grande" },
    { Letra: "Muy Grande" },
    { Letra: "Normal" },
  ];

  const mapColores = Colores.map((item, position) => {
    return (
      <>
        <a
            key={position}
            className="dropdown-item d-flex align-items-center"
            href="##"
            rel="noopener noreferrer"
            data-tip
            data-for={item.Color}
          >
          <div className="dropdown-list-image mr-3">
            <a
              className="btn btn-primary btn-circle"
              href="##"
              target="_blank"
              rel="noopener noreferrer"
              id="alertsDropdown"
              role="button"
            >
              <i className="fas fa-fw fa-wrench"></i>
            </a>
          </div>
          <div className="font-weight-bold">
            <div>{item.Color}</div>
          </div>
          <ReactTooltip
            id={item.Color}
            place="left"
            type="dark"
            effect="solid"
          >
            {item.Color}
          </ReactTooltip>
        </a>
      </>
    );
  });

  const mapLetras = Letras.map((item, position) => {
    return (
      <>
        <a
            key={position}
            className="dropdown-item d-flex align-items-center"
            href="##"
            rel="noopener noreferrer"
            data-tip
            data-for={item.Letra}
          >
          <div className="dropdown-list-image mr-3">
            <a
              className="btn btn-primary btn-circle"
              href="##"
              target="_blank"
              rel="noopener noreferrer"
              id="alertsDropdown"
              role="button"
            >
              <i className="fas fa-fw fa-wrench"></i>
            </a>
          </div>
          <div className="font-weight-bold">
            <div>{item.Letra}</div>
          </div>
          <ReactTooltip
            id={item.Letra}
            place="left"
            type="dark"
            effect="solid"
          >
            {item.Letra}
          </ReactTooltip>
        </a>
      </>
    );
  });

  const RSociales_icons = props.data.PiePagina[0].iconos.map(
    (item, position) => {
      return (
        <>
          <a
            key={position}
            className="dropdown-item d-flex align-items-center"
            href={item.Link}
            target="_blank"
            rel="noopener noreferrer"
            data-tip
            data-for={item.Nombre}
          >
            <div className="dropdown-list-image mr-3">
              <a
                className="btn btn-primary btn-circle"
                href={item.Link}
                target="_blank"
                rel="noopener noreferrer"
                id="alertsDropdown"
                role="button"
              >
                <i className={item.Icono}></i>
              </a>
            </div>
            <div className="font-weight-bold">
              <div>{item.Nombre}</div>
            </div>
            <ReactTooltip
              id={item.Nombre}
              place="left"
              type="dark"
              effect="solid"
            >
              {item.Nombre}
            </ReactTooltip>
          </a>
        </>
      );
    }
  );

  return (
    <>
      <nav className="navbar navbar-expand navbar-primary text-primary bg-light topbar static-top shadow">
        <button
          id="sidebarToggleTop"
          className="btn btn-outline-primary btn-link text-primary d-md-none icon"
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
                src={logo}
                alt="Fines ilustrativos"
              />
            </a>
            {/* <div
              className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
              aria-labelledby="LinksDropdown"
            >
              <h6 className="dropdown-header">Te inivitamos visitar</h6>
              {RSociales_icons}
            </div> */}
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
