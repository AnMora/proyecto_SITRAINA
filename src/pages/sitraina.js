import React, { useEffect } from "react";
import ReactGA from "react-ga";
import { Link } from "react-router-dom";
import ScrollToTop from "../JS/componentes/ScrollToTop";

const Sitraina = (props) => {
  useEffect(() => {
    ReactGA.initialize("UA-216041901-1");
    // to report page view
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  const HMReciente = props.data.HMActual.map((item, position) => {
    return (
      <>
        <a
          key={position}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <div className="container-fluid"> */}
          <div className="mb-3 mt-3">
            <div className="card border-left-warning shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="font-weight-bold text-info text-uppercase mb-1">
                      {item.titulo}
                    </div>
                    <div className="row no-gutters align-items-center">
                      <div className="col-auto">
                        <div className="mb-0 mr-3 font-weight-bold text-gray-800">
                          {item.año} / {item.mes} / {item.fecha}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-download fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
            {/* </div> */}
          </div>
        </a>
      </>
    );
  });

  const Sitraina = props.data.Sitraina.map((item, position) => {
    if (position === 0) {
      return (
        <>
          <div key={position} className="col-xl-12 col-md-12">
            <div className="card border-bottom-info shadow text-center mb-4">
              <div className="card-header py-3">
                <h4 className="m-0 font-weight-bold text-primary">
                  {item.Pregunta}
                </h4>
              </div>
              <div className="card-body">
                <div className="mb-0 mr-3 font-weight-bold text-gray-800">
                  {item.Respuesta}
                </div>
              </div>
            </div>
          </div>
        </>
      );
    } else if (position === 3) {
      return (
        <>
          <div key={position} className="col-xl-6 col-md-6">
            <div className="card border-bottom-info shadow text-center mb-4 pb-4">
              <div className="card-header py-3">
                <h4 className="m-0 font-weight-bold text-primary">
                  {item.Pregunta}
                </h4>
              </div>
              <div className="card-body">
                <div className="mb-0 mr-3 font-weight-bold text-gray-800">
                  {item.Respuesta}
                </div>
              </div>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="col-xl-6 col-md-6">
            <div className="card border-bottom-info shadow text-center mb-4">
              <div className="card-header py-3">
                <h4 className="m-0 font-weight-bold text-primary">
                  {item.Pregunta}
                </h4>
              </div>
              <div className="card-body">
                <div className="mb-0 mr-3 font-weight-bold text-gray-800">
                  {item.Respuesta}
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
  });

  const Administracion = props.data.Administracion[0];

  const Beneficios = props.data.Beneficios.map((item, position) => {
    return (
      <>
        <div key={position} className="col-xl-12 col-md-12">
          <div className="card border-bottom-info shadow text-center mb-4 pb-4">
            <div className="card-header py-3">
              <h4 className="m-0 font-weight-bold text-primary">
                {item.Pregunta}
              </h4>
            </div>
            <div className="card-body">
              <div className="mb-0 mr-3 font-weight-bold text-gray-800">
                {item.Respuesta}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  });

  const Logros = props.data.Logros[0];

  const Logros_lista = props.data.Logros[0].logros.map((item, position) => {
    return (
      <>
        <li key={position} className="list-group-item text-center">
          <b className="mb-0 mr-3 font-weight-bold text-gray-800">
            {item.logro}
          </b>
        </li>
      </>
    );
  });

  const Metas = props.data.metas.map((item, position) => {
    return (
      <>
        <div key={position} className="col-xl-6 col-md-6 mb-4">
          <div className="card border-bottom-info shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters text-center align-items-center">
                <div className="col mr-2">
                  <h4 className="font-weight-bold text-primary text-uppercase mb-1">
                    {item.Meta}
                  </h4>
                  <div className="mb-0">
                    <div className="mb-0 mr-3 font-weight-bold text-gray-800">
                      {item.descripcion}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  });

  const Valores = props.data.valores.map((item, position) => {
    if (position === 4) {
      return (
        <>
          <div key={position} className="card border-left-info shadow mb-4">
            <a
              href={"#" + item.Valor}
              className="d-block card-header"
              data-toggle="collapse"
              role="button"
              aria-expanded="true"
              aria-controls="collapseCard"
            >
              <h4 className="m-0 font-weight-bold text-primary">
                {item.Valor}
              </h4>
            </a>
            <div className="collapse show" id={item.Valor}>
              <div className="card-body">
                <div className="mb-0 mr-3 font-weight-bold text-gray-800">
                  {item.descripcion}
                </div>
              </div>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div key={position} className="card border-left-info shadow mb-2">
            <a
              href={"#" + item.Valor}
              className="d-block card-header"
              data-toggle="collapse"
              role="button"
              aria-expanded="true"
              aria-controls="collapseCard"
            >
              <h4 className="m-0 font-weight-bold text-primary">
                {item.Valor}
              </h4>
            </a>
            <div className="collapse show" id={item.Valor}>
              <div className="card-body">
                <div className="mb-0 mr-3 font-weight-bold text-gray-800">
                  {item.descripcion}
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
  });

  return (
    <div className="container-fluid">
      <div className="mt-4">
        <div className="alert alert-info" role="alert">
          <h2 className="display-5">
            <b>SITRAINA INFORMA</b>
          </h2>
          <h5 className="display-5">
            <b>Programa: Martes 08 de Marzo 2022 - Horario: 4 pm</b></h5>
          <h3 className="display-5">
            <b>PROGRAMA ESPECIAL de SITRAINA INFORMA</b>
          </h3>
          <h5>
            Conversatorio - El papel de la mujer en la política y los movimientos sociales
          </h5>
          <div className="col-auto">
            <Link to="/EnVIVO">
              <a
                href="##"
                className="text-light btn btn-info mt-2 mb-2"
                value="Ingresar"
              >
                Ver Programa
              </a>
            </Link>
          </div>
        </div>

        <div className="card border-left-info shadow mb-4">
          <a
            href="#Utiles"
            className="d-block card-header"
            data-toggle="collapse"
            role="button"
            aria-expanded="true"
            aria-controls="collapseCard"
          >
            <h4 className="m-0 font-weight-bold text-primary">
              Programa Especial de SITRAINA INFORMA
            </h4>
            <small className="mt-2">
            SITRAINA celebra el Día Internacional de la Mujer con un conversatorio sobre "El papel de la mujer en la política y los movimientos sociales". Tendremos un panel de lujo, como se aprecia en el afiche de la actividad a continuación. Síguenos EN VIVO martes 8 de marzo a las 4:00 pm.
            </small>
          </a>
          <div className="collapse show" id="Utiles">
            <div className="card-body">
              <div className="mb-0 mr-3 font-weight-bold text-gray-800">
                {/* <div className="row">
                  <div className="col-md-12"> */}
                    <div classname="card">
                      <div classname="card-body">
                        <img
                          src="../../Documentos/informativas/Programa_especial_sitraina_informa.jpeg"
                          className="rounded-lg img-thumbnail"
                          data-toggle="modal"
                          data-target=".bd-example-modal-lg"
                          alt="SITRAINACR"
                        />
                      </div>
                    </div>
                  {/* </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* {HMReciente} */}
        <div className="alert alert-primary" role="alert">
          {HMReciente}
          <strong>
            Visualice o descargue la hoja de miércoles más reciente.
          </strong>
        </div>

        <div className="row">{Sitraina}</div>

        <div className="row">{Metas}</div>

        {Valores}

        <div className="card border-bottom-info shadow text-center mb-4">
          <div className="card-header py-3">
            <h4 className="m-0 font-weight-bold text-primary">
              {Administracion.Pregunta}
            </h4>
          </div>
          <div className="card-body">
            <div className="mb-0 mr-3 font-weight-bold text-gray-800">
              {Administracion.Respuesta1}
              <br className="my-1" />
              {Administracion.Respuesta2}
              <br className="my-1" />
              {Administracion.Respuesta3}
            </div>
          </div>
        </div>

        <div className="row">{Beneficios}</div>

        <div className="card border-bottom-info shadow mb-4">
          <div className="card-header py-3">
            <h4 className="m-0 font-weight-bold text-primary">
              {Logros.Titulo}
            </h4>
          </div>
          <div className="card-body">
            <div className="mb-0 mr-3 mb-3 font-weight-bold text-gray-800">
              {Logros.descripcion}
            </div>
            <ul className="list-group">{Logros_lista}</ul>
          </div>
        </div>

        {/* Al final de todo contenido de paginas siempre el ScrollToTop Component */}
        <ScrollToTop />
      </div>
    </div>
  );
};

export default Sitraina;
