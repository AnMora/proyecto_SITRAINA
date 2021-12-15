import React from 'react';
import ScrollToTop from '../JS/componentes/ScrollToTop';

const Convenios = (props) => {
    const Info_HConvenios = props.data.HConvenios[0];

    const StLuc_img = props.data.Convenio_StaLucia[0].imagenes.map((item,position) => {
        return (
            <>
                <div key={position} className="mt-4 mb-4">
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                        <img className='container' src={item.link} alt={item.titulo} />
                    </a>
                </div>
            </>
        )
    })

    const StLuc = props.data.Convenio_StaLucia.map((item,position) => {
        return (
            <>
                <div key={position} className="col-xl-12 col-md-12">
                    <div className="card border-bottom-info shadow text-center mb-4">
                        <div className="card-header py-3">
                            <h4 className="m-0 font-weight-bold text-primary">{item.titulo}</h4>
                        </div>
                        <div className="card-body">
                            <div className="mb-0 mr-3 font-weight-bold text-gray-800">
                                {item.descripcion_01}
                            </div>
                            
                            {StLuc_img}
                            
                            <div className="mb-0 mr-3 font-weight-bold text-gray-800">
                                {item.descripcion_02}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    })

    const Convenios = props.data.Convenios.map((item,position) => {
    return (
        <>
          <a key={position} href={item.link} target="_blank" rel="noopener noreferrer">
            <div className="container-fluid">
              <div className="mb-3 mt-3">
                <div className="card border-left-warning shadow h-100 py-2">
                  <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col-auto col-md-4 col-lg-6">
                        <img className='container' src={item.link} alt={item.titulo} />
                        </div>
                      <div className="col mr-2">
                        <div className="font-weight-bold text-info text-uppercase mb-1">
                          {item.titulo}
                        </div>
                        <div className="row no-gutters align-items-center">
                          <div className="col-auto">
                            <div className="mb-0 mr-3 font-weight-bold text-gray-800">
                              {item.descripcion}
                            </div>
                          </div>
                        </div>
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
            <div className='container-fluid'>
                <div className="mt-4 mb-4">
                    <div className="card border-left-warning shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="h4 font-weight-bold text-info text-uppercase mb-1">
                                        {Info_HConvenios.titulo}
                                    </div>
                                    <div className="row no-gutters align-items-center">
                                        <div className="col-auto">
                                            <div className="mb-0 mr-3 font-weight-bold text-gray-800">
                                                {Info_HConvenios.lema}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {StLuc}

                <div className="card border-bottom-info shadow mb-4">
                    <a
                        href="#Collapse2021"
                        className="d-block card-header"
                        data-toggle="collapse"
                        role="button"
                        aria-expanded="true"
                        aria-controls="collapseCard"
                    >
                        <h4 className="m-0 font-weight-bold text-primary">Otros convenios</h4>
                    </a>
                    <div className="collapse show" id="Collapse2021">
                        {Convenios}
                    </div>
                </div>
            </div>

            <ScrollToTop />
        </>
    )
}

export default Convenios
