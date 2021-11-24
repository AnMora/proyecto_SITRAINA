import React from "react";
import ScrollToTop from "../JS/componentes/ScrollToTop";

const HojaMiercoles = (props) => {
  const Info_HMiercoles = props.data.HMiercoles[0];

  const HM2021 = props.data.HM2021.map((item,position) => {
    return (
        <>
          <a key={position} href={item.link} target="_blank" rel="noopener noreferrer">
            <div className="container-fluid">
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
              </div>
            </div>
          </a>
        </>
    )
  })

  const HM2020 = props.data.HM2020.map((item,position) => {
    return (
        <>
          <a key={position} href={item.link} target="_blank" rel="noopener noreferrer">
              <div className="container-fluid">
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
                </div>
              </div>
            </a>
        </>
    )
  })

  return (
    <>
      <div className="container-fluid">
        <div className="mt-4 mb-4">
          <div className="card border-left-warning shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="h4 font-weight-bold text-info text-uppercase mb-1">
                    {Info_HMiercoles.titulo}
                  </div>
                  <div className="row no-gutters align-items-center">
                    <div className="col-auto">
                      <div className="mb-0 mr-3 font-weight-bold text-gray-800">
                        {Info_HMiercoles.lema}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card border-bottom-info shadow mb-4">
          <a
            href="#Collapse2021"
            className="d-block card-header"
            data-toggle="collapse"
            role="button"
            aria-expanded="true"
            aria-controls="collapseCard"
          >
            <h4 className="m-0 font-weight-bold text-primary">2021</h4>
          </a>
          <div className="collapse show" id="Collapse2021">
              {HM2021}
          </div>
        </div>

        <div className="card border-bottom-info shadow mb-4">
          <a
            href="#Collapse2020"
            className="d-block card-header"
            data-toggle="collapse"
            role="button"
            aria-expanded="true"
            aria-controls="collapseCard"
          >
            <h4 className="m-0 font-weight-bold text-primary">2020</h4>
          </a>
          <div className="collapse show" id="Collapse2020">
              {HM2020}
          </div>
        </div>
        {/* Al final de todo contenido de paginas siempre el ScrollToTop Component */}
        <ScrollToTop />
      </div>
    </>
  );
};

export default HojaMiercoles;
