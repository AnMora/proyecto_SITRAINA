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
            <h2 className="display-5">
              <b>SITRAINA INFORMA</b>
            </h2>
            <h5 className="display-5">
              <b>Programa: Martes 29 de Marzo 2022 - Horario: 4 pm</b></h5>
            <h3 className="display-5">
              <b>El INA: lo que fue, lo que es y lo que puede ser</b>
            </h3>
            <h5>
              Tendremos un programa de <b>SITRAINA INFORMA</b> con <b>Jorge Muñoz Araya</b>, <b>Ex-miembro de la Junta Directiva del INA</b>, como representante de la UCCEP, con quien conversaremos sobre el tema <b>"El INA: lo que fue, lo que es y lo que puede ser"</b>.
              <br />
              Lo pueden ver en vivo o en diferido en nuestro sitio web o en nuestra página de <a href="https://www.facebook.com/SitrainaCR" target="_blank">
                <button type="button" className="btn btn-primary">
                Facebook</button>
              </a>
            </h5>
            <p>
              <b>Comuníquese con nuestro departamento de comunicación vía <a href="https://wa.me/50663400176/?text=www.sitraina.org:%20Deje%20su%20mensaje%20a%20continuación..." target="_blank">
                <button type="button" className="btn btn-success">
                Whatsapp</button>
              </a> o al 6340 0176.</b>
            </p>
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
