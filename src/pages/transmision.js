import React from "react";
import ScrollToTop from "../JS/componentes/ScrollToTop";
import ReactPlayer from "react-player";

const ENVIVO = (props) => {
  const EnVivo = props.data.transmision;

  return (
    <>
      <div className="container-fluid">
        <div className="mt-4">

          <div className="alert alert-primary" role="alert">
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
                              Programa: Miercoles 04 de Mayo 2022 - Horario: 5 pm
                              <h3 className="display-5 text-info">
                                <strong>Segunda parte ¿Qué esta pasando con la plata del INA?</strong>
                              </h3>
                              Con <strong>Ricardo Jara - Sindicalista SITRAINA</strong>
                              <div className="mt-1 mb-0 mr-3 font-weight-bold text-gray-800">
                                <strong>SITRAINA</strong> pide disculpas por los problemas técnicos que obstaculizaron la transmisión del programa el día de hoy. Debido a estos, nos vemos en la necesidad y la obligación de reprogramar la transmisión para el Miercoles 04 de mayo, a las 5 pm. Saludos cordiales.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-auto">
                        <button type="button" className="mt-2 btn btn-primary btn-sm">Facebook</button>
                        <br />
                        <button type="button" className="mt-2 btn btn-success btn-sm">Whatsapp</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          <strong>
            Lo pueden ver en vivo en nuestro sitio web o en nuestra página de Facebook.
            <br />
            Comuníquese con nuestro departamento de comunicación.
          </strong>
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
