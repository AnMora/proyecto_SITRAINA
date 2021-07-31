import React from "react";
import $ from "jquery";
import ReactTooltip from "react-tooltip";
import logo from "../../multimedia/icono/SITRAINA.png";

const Header = (props) => {
  const handleMenu = (e) => {
    e.preventDefault();
    $("body").toggleClass("sidebar-toggled");
    $(".sidebar").toggleClass("toggled");
  };

  const RSociales_icons = props.data.PiePagina[0].iconos.map((item, position) => {
      return (
          <>
              <a key={position} className="dropdown-item d-flex align-items-center" href={item.Link} target="_blank" data-tip data-for={item.Nombre}>
                <div className="dropdown-list-image mr-3">
                  <a 
                      className="btn btn-primary btn-circle"
                      href={item.Link}
                      target="_blank"
                      id="alertsDropdown"
                      role="button"
                      >
                          <i className={item.Icono}></i>
                      </a>
                </div>
                <div className="font-weight-bold">
                  <div>{item.Nombre}</div>
                </div>
                <ReactTooltip id={item.Nombre} place="left" type="dark" effect="solid">
                  {item.Nombre}
                </ReactTooltip>
              </a>
          </>
      );
  })

  return (
    <>
      <nav
        className="navbar navbar-expand navbar-primary text-primary bg-white topbar static-top shadow"
      >
        <button
          id="sidebarToggleTop"
          className="btn btn-outline-primary btn-link text-primary d-md-none icon"
          onClick={(e) => handleMenu(e)}
        >
          <i className="fa fa-bars"></i>
        </button>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item dropdown no-arrow" data-tip data-for="Lema">
              <a
                className="nav-link dropdown-toggle" id="LinksDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
              >
                <span className="mr-2 d-lg-inline">
                  <b>SITRAINA</b>
                </span>
                <img className="img-profile rounded-circle" src={logo} />
              </a>
              <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="LinksDropdown">
                <h6 className="dropdown-header">
                    Te inivitamos visitar
                </h6>
                {RSociales_icons}
              </div>
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
