import React from "react";
import $ from "jquery";
import ReactTooltip from "react-tooltip";
import { Link } from "react-router-dom";

import Boleta from "../../Documentos/afiliacion/boleta_afiliacion_sitraina.pdf";
// import logo from "../../multimedia/icono/SITRAINA.png";

const Navbar = (props) => {
  const handleSide = (e) => {
    e.preventDefault();
    $("body").toggleClass("sidebar-toggled");
    $(".sidebar").toggleClass("toggled");
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
        <a key={position} className="collapse-item" data-tip data-for={item.Color}>
          {item.Color}
        </a>
        <ReactTooltip id={item.Color} place="right" type="dark" effect="solid">
          {item.Color}
        </ReactTooltip>
      </>
    );
  });

  const mapLetras = Letras.map((item, position) => {
    return (
      <>
        <a key={position} className="collapse-item" data-tip data-for={item.Letra}>
          {item.Letra}
        </a>
        <ReactTooltip id={item.Letra} place="right" type="dark" effect="solid">
          {item.Letra}
        </ReactTooltip>
      </>
    );
  });

  const estasEn = props.data.estasEn;
  const Link_paginas = props.data.paginas.map((item, position) => {
    return (
      <>
        <Link to={item.path}>
          <a key={position} className="collapse-item" data-tip data-for={item.seccion}>
            {item.seccion}
          </a>
        </Link>
        <ReactTooltip id={item.seccion} place="right" type="dark" effect="solid">
          {item.seccion}
        </ReactTooltip>
      </>
    );
  });
  const Link_multimedia = props.data.multimedia.map((item, position) => {
    return (
      <>
        <Link to={item.path}>
          <a key={position} className="collapse-item" data-tip data-for={item.seccion}>
            {item.seccion}
          </a>
        </Link>
        <ReactTooltip id={item.seccion} place="right" type="dark" effect="solid">
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
            <li className="nav-item d-inline-flex active">
              <a className="nav-link" data-tip data-for="PaginaPrincipal">
                <span>Página Principal</span>
              </a>
              <ReactTooltip id="PaginaPrincipal" place="right" type="dark" effect="solid">
                Información acerca de SITRAINA
              </ReactTooltip>
            </li>
          </>
        ) : (
          <>
            <div
              className="sidebar-heading" data-tip data-for="estasEn"
            >
              Estas en
            </div>
            <ReactTooltip id="estasEn" place="right" type="dark" effect="solid">
              Muestra de Ubicación para usuarios con discapacidad en SITRAINA
            </ReactTooltip>
            <li className="nav-item d-inline-flex active">
              <a
                className="nav-link" data-tip data-for="PageActual"
              >
                <span>{estasEn}</span>
              </a>
            </li>
            <ReactTooltip id="PageActual" place="right" type="dark" effect="solid">
              Información acerca de {estasEn} SITRAINA
            </ReactTooltip>
            <hr className="sidebar-divider" />

            <div
              className="sidebar-heading" data-tip data-for="Volver"
            >
              Volver a
            </div>
            <ReactTooltip id="Volver" place="right" type="dark" effect="solid">
              La siguiente opción es para volver a Página Principal
            </ReactTooltip>
            <li className="nav-item d-inline-flex">
              <Link to="/sitraina">
                <a className="nav-link" data-tip data-for="PaginaPrincipal">
                  <span>Página Principal</span>
                </a>
              </Link>
              <ReactTooltip id="PaginaPrincipal" place="right" type="dark" effect="solid">
                Información acerca de SITRAINA
              </ReactTooltip>
            </li>
          </>
        )}

        <hr className="sidebar-divider" />

        <div
          className="sidebar-heading" data-tip data-for="Accesibilidad"
        >
          accesibilidad
        </div>
        <ReactTooltip id="Accesibilidad" place="right" type="dark" effect="solid">
          Permite el cambio de diseño en la página para personas con discapacidad
        </ReactTooltip>
        <li
          className="nav-item" data-tip data-for="AjusteColor"
        >
          <a
            className="nav-link collapsed icon"
            data-toggle="collapse"
            data-target="#collapseColors"
            aria-expanded="true"
            aria-controls="collapseColors"
          >
            <i className="fas fa-fw fa-wrench"></i>
            <span>Colores</span>
          </a>
          <div
            id="collapseColors"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Cambio de Color</h6>
              {mapColores}
            </div>
          </div>
        </li>
        <ReactTooltip id="AjusteColor" place="right" type="dark" effect="solid">
          Esta opcion permite el cambio de color para usuarios con discapacidad visual
        </ReactTooltip>
        <li
          className="nav-item" data-tip data-for="AjusteLetra"
        >
          <a
            className="nav-link collapsed icon"
            data-toggle="collapse"
            data-target="#collapseUtilities"
            aria-expanded="true"
            aria-controls="collapseUtilities"
          >
            <i className="fas fa-fw fa-wrench"></i>
            <span>Letras</span>
          </a>
          <div
            id="collapseUtilities"
            className="collapse"
            aria-labelledby="headingUtilities"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Cambio Tamaño Letra</h6>
              {mapLetras}
            </div>
          </div>
        </li>
        <ReactTooltip id="AjusteLetra" place="right" type="dark" effect="solid">
          Esta opcion permite el aumento de letra para usuarios con discapacidad visual
        </ReactTooltip>
        <hr className="sidebar-divider" />

        <div
          className="sidebar-heading" data-tip data-for="Paginas"
        >
          Páginas
        </div>
        <ReactTooltip id="Paginas" place="right" type="dark" effect="solid">
          Partes que conforman SITRAINA
        </ReactTooltip>
        {estasEn !== "Contactenos" ? (
          <>
            <li
              className="nav-item" data-tip data-for="Contactenos"
            >
              <Link to="/sitraina/contactenos">
                <a className="nav-link icon" href="">
                  <i className="fas fa-fw fa-tty"></i>
                  <span>Contactenos</span>
                </a>
              </Link>
              <ReactTooltip id="Contactenos" place="right" type="dark" effect="solid">
                Para más información comuniquese con SITRAINA
              </ReactTooltip>
            </li>
          </>
        ) : (
          ""
        )}

        <li
          className="nav-item" data-tip data-for="PartesPaginas"
        >
          <a
            className="nav-link collapsed icon"
            data-toggle="collapse"
            data-target="#collapsePages"
            aria-expanded="true"
            aria-controls="collapsePages"
          >
            <i className="fas fa-fw fa-folder"></i>
            <span>Páginas</span>
          </a>
          <div
            id="collapsePages"
            className="collapse"
            aria-labelledby="headingPages"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Secciones:</h6>
              {Link_paginas}
            </div>
          </div>
        </li>
        <ReactTooltip id="PartesPaginas" place="right" type="dark" effect="solid">
          Páginas que conforman SITRAINA
        </ReactTooltip>
        <li
          className="nav-item" data-tip data-for="Multimedia"
        >
          <a
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
        <ReactTooltip id="Multimedia" place="right" type="dark" effect="solid">
          Archivos (Fotos/Audios/Videos) de SITRAINA
        </ReactTooltip>
        <hr className="sidebar-divider" />

        <div
          className="sidebar-heading" data-tip data-for="Afiliacion"
        >
          Afiliación
        </div>
        <ReactTooltip id="Afiliacion" place="right" type="dark" effect="solid">
          Afiliese a SITRAINA descargando la siguiente boleta
        </ReactTooltip>
        <li
          className="nav-item" data-tip data-for="Boleta"
        >
          <div className="col-12 mt-2 mb-3">
            <a
              href={Boleta}
              className="d-none d-block btn btn-sm btn-primary shadow-sm icon"
              target="_blank"
            >
              <i className="fas fa-fw fa-download fa-sm text-white-50"></i>
              <span>Boleta</span>
            </a>
          </div>
        </li>
        <ReactTooltip id="Boleta" place="right" type="dark" effect="solid">
          Descargar hoja de afiliación
        </ReactTooltip>
        <div className="text-center d-none d-md-inline">
          <button
            className="rounded-circle border-0"
            id="sidebarToggle"
            onClick={(e) => handleSide(e)}
          ></button>
        </div>
      </ul>
    </>
  );
};

export default Navbar;
