import React from "react";
import ScrollToTop from "../JS/componentes/ScrollToTop";
import ReactPlayer from "react-player";

const ENVIVO = (props) => {
  const EnVivo = props.data.Transmision;
  const SI_alert1 = props.data.Extra1;
  const SI_alert2 = props.data.Extra2;

  const SI_Programa = props.data.SITRAINAINFORMA.map((item, position) => {
    return (
      <>
        <div key={position} className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              <div className="h5 font-weight-bold text-info text-uppercase mb-1">
                {item.titulo}
              </div>
              <div className="row no-gutters align-items-center">
                <div className="col-auto">
                  <div className="mb-0 mr-3 font-weight-bold text-gray-800">
                    {item.dia}
                    <h3 className="display-5 text-info">
                      <strong>{item.tema}</strong>
                    </h3>
                    Con <strong>{item.con}</strong>.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-auto">
              <a href="https://www.facebook.com/SitrainaCR" target="_blank" rel="noopener noreferrer">
                <button type="button" className="mt-2 btn btn-primary btn-sm">
                  Facebook
                </button>
              </a>
              <br />
              <a href="https://wa.me/50663400176/?text=www.sitraina.org:%20Deje%20su%20mensaje%20a%20continuación..." target="_blank" rel="noopener noreferrer">
                <button type="button" className="mt-2 btn btn-success btn-sm">
                  Whatsapp
                </button>
              </a>
            </div>
          </div>

          {EnVivo === "" ? (
            ""
          ) : (
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col">
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
          )}
        </div>
      </>
    );
  });

  return (
    <>
      <div className="container-fluid">
        <div className="mt-4">
          <div className="alert alert-primary" role="alert">
            <div className="mb-3 mt-3">
              <div className="card border-left-info shadow h-100 py-2">
                {SI_Programa}
              </div>
            </div>
            <strong>
              {SI_alert1}
              <br />
              {SI_alert2}
            </strong>
          </div>
        </div>
      </div>

      <ScrollToTop />
    </>
  );
};

export default ENVIVO;
