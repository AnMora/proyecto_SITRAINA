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

        <div className="alert alert-primary" role="alert">
          <Link to="/EnVIVO">
            <a
              href="##"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="mb-3 mt-3">
                <div className="card border-left-info shadow h-100 py-2">
                  <div className="card-body">
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                        <div className="h5 font-weight-bold text-info text-uppercase mb-1">
                          SITRAINA INFORMA
                        </div>
                        <div className="row no-gutters align-items-center">
                          <div className="col-auto">
                            <div className="mb-0 mr-3 font-weight-bold text-gray-800">
                              Programa: Martes 03 de Mayo 2022 - Horario: 5 pm
                              <h3 className="display-5 text-info">
                                <strong>Segunda parte ¿Qué esta pasando con la plata del INA?</strong>
                              </h3>
                              Con <strong>Ricardo Jara - Secretario General</strong>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-auto">
                        <i className="fas fa-play fa-2x text-gray-300"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </Link>
          <strong>
            Visualice el programa SITRAINA INFORMA dando clic encima del texto.
          </strong>
        </div>

        {/* Programa Especial */}

        <div className="alert alert-danger" role="alert">
          <div className="card border-left-danger shadow">
            <a
              href="#Informativas"
              className="d-block card-header"
              data-toggle="collapse"
              role="button"
              aria-expanded="true"
              aria-controls="collapseCard"
            >
              <h4 className="m-0 font-weight-bold text-danger">
                SITRAINA informa de la manifestacion del 1 de mayo:
              </h4>
              <div className="mt-2 mb-0 mr-3 font-weight-bold text-gray-800">
                El día de ayer celebramos en las calles de San José, el 1 de mayo, Día Internacional de la Persona Trabajadora. Del INA participamos docentes, estudiantes y personas administrativas. Nuestra consigna fue <strong className="text-danger">EL INA SÍ ES CAPAZ</strong> y desde ella solicitamos un INA con una visión humanística y social en su Administración. No queremos un INA que sea desmantelado, tercerizado y privatizado por los intereses neoliberales de los principales grupos económicos de este país. Esta es una lucha continua: súmese si quiere a nuestra institución.
              </div>
            </a>
            <div className="collapse show" id="Informativas">
              <div className="card-body">
                <div className="mb-0 font-weight-bold text-gray-800">
                  <div className="row">
                    <div className="col-12 col-md-12 col-lg-12">
                      <div classname="card">
                        <div classname="card-body">
                          <img
                            src="../../Documentos/informativas/INAcapaz1.jpeg"
                            className="rounded-lg img-thumbnail"
                            data-toggle="modal"
                            data-target=".bd-example-modal-lg"
                            alt="SITRAINACR"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Programa Especial */}

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
