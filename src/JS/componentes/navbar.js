import React from "react";
import $ from "jquery";
import ReactTooltip from "react-tooltip";
import { Link } from "react-router-dom";
import Boleta from "../../Documentos/afiliacion/boleta_afiliacion_sitraina.pdf";

const Navbar = (props) => {
  const handleSide = (e) => {
    e.preventDefault();
    if (window.screen.width < 768){
      $(".sidebar").toggleClass("toggled");
    } else {
      $("body").toggleClass("sidebar-toggled");
    }
  };

  const estasEn = props.data.estasEn;
  const Link_paginas = props.data.paginas.map((item, position) => {
    return (
      <>
        <li className="nav-item" data-tip data-for={item.seccion} key={position} onClick={(e) => handleSide(e)}>
          <Link to={item.path}>
            <a href="##" className="nav-link icon">
              <i className="fas fa-fw fa-file-alt"></i>
              <span>{item.seccion}</span>
            </a>
          </Link>
          <ReactTooltip
            id={item.seccion}
            place="right"
            type="dark"
            effect="solid"
          >
            {item.seccion}
          </ReactTooltip>
        </li>
      </>
    );
  });

  const Link_multimedia = props.data.multimedia.map((item, position) => {
    return (
      <>
        <Link to={item.path}>
          <a
            href="##"
            key={position}
            className="collapse-item"
            data-tip
            data-for={item.seccion}
          >
            {item.seccion}
          </a>
        </Link>
        <ReactTooltip
          id={item.seccion}
          place="right"
          type="dark"
          effect="solid"
        >
          {item.seccion}
        </ReactTooltip>
      </>
    );
  });

  return (
    <>
      <ul
        className="navbar-nav bg-gray-900 sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        {estasEn === "Pagina Principal" ? (
          <>
            <div className="sidebar-heading" data-tip data-for="estasEn">
              Estas en
            </div>
            <ReactTooltip id="estasEn" place="right" type="dark" effect="solid">
              Muestra de Ubicación para usuarios con discapacidad en SITRAINA
            </ReactTooltip>
            <li className="nav-item d-inline-flex active" onClick={(e) => handleSide(e)}>
              <a
                href="##"
                className="nav-link"
                data-tip
                data-for="PaginaPrincipal"
              >
                <span>Página Principal</span>
              </a>
              <ReactTooltip
                id="PaginaPrincipal"
                place="right"
                type="dark"
                effect="solid"
              >
                Información acerca de SITRAINA
              </ReactTooltip>
            </li>
          </>
        ) : (
          <>
            <div className="sidebar-heading" data-tip data-for="estasEn">
              Estas en
            </div>
            <ReactTooltip id="estasEn" place="right" type="dark" effect="solid">
              Muestra de Ubicación para usuarios con discapacidad en SITRAINA
            </ReactTooltip>
            <li className="nav-item d-inline-flex active">
              <a href="##" className="nav-link" data-tip data-for="PageActual">
                <span>{estasEn}</span>
              </a>
            </li>
            <ReactTooltip
              id="PageActual"
              place="right"
              type="dark"
              effect="solid"
            >
              Información acerca de {estasEn} SITRAINA
            </ReactTooltip>
            <hr className="sidebar-divider" />

            <div className="sidebar-heading" data-tip data-for="Volver">
              Volver a
            </div>
            <ReactTooltip id="Volver" place="right" type="dark" effect="solid">
              La siguiente opción es para volver a Página Principal
            </ReactTooltip>
            <li className="nav-item d-inline-flex" onClick={(e) => handleSide(e)}>
              <Link to="/sitraina">
                <a
                  href="##"
                  className="nav-link"
                  data-tip
                  data-for="PaginaPrincipal"
                >
                  <span>Página Principal</span>
                </a>
              </Link>
              <ReactTooltip
                id="PaginaPrincipal"
                place="right"
                type="dark"
                effect="solid"
              >
                Información acerca de SITRAINA
              </ReactTooltip>
            </li>
          </>
        )}

        {estasEn === "Transmision ENVIVO" ? "" : (
          <>
            <hr className="sidebar-divider" />

            <div className="sidebar-heading" data-tip data-for="Paginas">
              Páginas de SITRAINA
            </div>
            <ReactTooltip id="Paginas" place="right" type="dark" effect="solid">
              Partes que conforman SITRAINA
            </ReactTooltip>

            {Link_paginas}
            
            <li className="nav-item" data-tip data-for="Multimedia">
              <a
                href="##"
                className="nav-link collapsed icon"
                data-toggle="collapse"
                data-target="#collapseGallery"
                aria-expanded="true"
                aria-controls="collapseGallery"
              >
                <i className="fas fa-fw fa-photo-video"></i>
                <span>Multimedia</span>
              </a>
              <div
                id="collapseGallery"
                className="collapse"
                aria-labelledby="headingPages"
                data-parent="#accordionSidebar"
              >
                <div className="bg-white py-2 collapse-inner rounded">
                  <h6 className="collapse-header">Galerias:</h6>
                  {Link_multimedia}
                </div>
              </div>
            </li>
            {/* <ReactTooltip id="Multimedia" place="right" type="dark" effect="solid">
              Archivos (Fotos/Audios/Videos) de SITRAINA
            </ReactTooltip> */}

            <hr className="sidebar-divider" />

            <div className="sidebar-heading" data-tip data-for="Afiliacion">
              Afiliación
            </div>
            <ReactTooltip id="Afiliacion" place="right" type="dark" effect="solid">
              Afiliese a SITRAINA descargando la siguiente boleta
            </ReactTooltip>
            <li className="nav-item" data-tip data-for="Boleta">
              <div className="col-12 mt-2 mb-3">
                <a
                  href={Boleta}
                  className="d-none d-block btn btn-sm btn-primary shadow-sm icon p-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-fw fa-download fa-sm text-white-50"></i>
                  <span>Boleta</span>
                </a>
              </div>
            </li>
            <ReactTooltip id="Boleta" place="right" type="dark" effect="solid">
              Descargar hoja de afiliación
            </ReactTooltip>
          </>
        )}
      </ul>
    </>
  );
};

export default Navbar;
