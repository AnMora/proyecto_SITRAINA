import React from "react";
import ReactTooltip from "react-tooltip";
import { Link } from "react-router-dom";

const Presentacion = (props) => {
  const Presentacion = props.data.Presentacion[0];
  const Footer = props.data.PiePagina[0];

  const Footer_icons = props.data.PiePagina[0].iconos.map((item, position) => {
    return (
      <>
        <a
          key={position}
          className="btn btn-primary btn-circle m-1"
          href={item.Link}
          target="_blank"
          rel="noopener noreferrer"
          data-tip
          data-for={item.Nombre}
        >
          <i className={item.Icono}></i>
          <ReactTooltip
            id={item.Nombre}
            place="bottom"
            type="dark"
            effect="solid"
          >
            {item.Nombre}
          </ReactTooltip>
        </a>
      </>
    );
  });

  return (
    <>
      <div class="bg-color">
        <header className="jumbotron-fluid pt-1">
          <div className="container text-center text-primary">
            <img
              className="logoPresentacion"
              src="../../icon/SITRAINA.png"
              alt="SITRAINA"
              data-tip
              data-for={Presentacion.Institucion}
            />
            <ReactTooltip
              id={Presentacion.Institucion}
              place="bottom"
              type="dark"
              effect="solid"
            >
              {Presentacion.NombreCompleto}
            </ReactTooltip>
            <h1>
              <b>{Presentacion.Institucion}</b>
            </h1>
            <h3>{Presentacion.Lema}</h3>
          </div>
        </header>

        <section className="container text-primary text-center">
            <article className="col-12">
            <hr className="my-1" />
            <h2 className="display-5 text-danger">
              <b>SITRAINA INFORMA</b>
            </h2>
            <h5 className="display-5">
              <b>Programa: Martes 22 de Marzo 2022 - Horario: 4 pm</b></h5>
            <h3 className="display-5 text-danger">
              <b>Situación Actual del INA</b>
            </h3>
            <h5>
              <b>
                Con Ricardo Jara - Secretario General, SITRAINA
              </b>
            </h5>

            {/* ENVIVO ////////////////////////////////////////////////// */}

            {/* <h5 className="mt-3">
              <div className="spinner-grow spinner-grow-sm text-danger mb-2" role="status">
                <span className="sr-only">Loading...</span>
              </div>
              <span className="mr-2 d-lg-inline">
                <b>ENVIVO</b>
              </span>
            </h5> 
            <div className="col-auto">
              <Link to="/EnVIVO">
                <a
                  href="##"
                  className="text-light btn btn-danger mt-2 mb-2"
                  value="Ingresar"
                >
                  Ver Programa
                </a>
              </Link>
            </div> */}

            {/* ENVIVO ////////////////////////////////////////////////// */}

            <h3 className="display-5 mt-3">
              <b>Síguenos todos los martes a las 4:00 pm</b>
            </h3>

            <h3 className="display-5">
              <b>¡Por un país con mayor justicia social!</b>
            </h3>

            {/* ======================== */}
          </article>
          <hr className="my-1" />
          <h5 className="mt-3">{Presentacion.Aviso2}</h5>
            <div className="col-auto">
              <Link to="/sitraina">
                <a
                  href="##"
                  className="text-light btn btn-primary mt-2 mb-2"
                  value="Ingresar"
                >
                  Ingresar
                </a>
              </Link>
            </div>
          <hr className="my-1" />
        </section>

        <footer className="text-center sticky-footer">
          <div className="container my-auto">
            <div className="copyright my-auto">{Footer_icons}</div>
          </div>
          <h4 class="text-primary mt-2">
            <b>{Footer.Derechos}</b>
          </h4>
        </footer>
      </div>
    </>
  );
};

export default Presentacion;
