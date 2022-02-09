import React from "react";
import ScrollToTop from "../JS/componentes/ScrollToTop";
import ReactPlayer from "react-player";

const ENVIVO = (props) => {
  const EnVivo = props.data.transmision;

  return (
    <>
      <div className="container-fluid">
        <div className="mt-4">
          <div className="alert alert-info" role="alert">
            <h1 className="display-5">
              <b>SITRAINA INFORMA</b>
            </h1>
            <h5 className="display-5">
              <b>Programa: Martes 08 de Febrero 2022 - Horario: 4 pm a 5pm</b>
            </h5>
            <h3 className="mt-3">
                <b>Reglamento autónomo de servicios: Una introducción</b>
            </h3>
            <h5>
                con Ricardo Jara Nuñez - Secretario General SITRAINA
            </h5>
          </div>

          {EnVivo === "" ? (
            ""
          ) : (
            <div className="mt-4 mb-4">
              <div className="card border-left-warning shadow h-100">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <ReactPlayer
                        url={EnVivo}
                        className="rounded"
                        width="100%"
                        height="100%"
                        controls
                        playing
                        volume="0.4"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Al final de todo contenido de paginas siempre el ScrollToTop Component */}
      <ScrollToTop />
    </>
  );
};

export default ENVIVO;
