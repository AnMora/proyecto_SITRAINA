import React from 'react';
import ScrollToTop from "../JS/componentes/ScrollToTop";

const Reglamentos = (props) => {
    const Info_HReglamentos = props.data.HReglamentos[0];

    const Doc_Reglamentos = props.data.Documentos.map((item,position) => {
        return (
            <>
                <div key={position} className="col-xl-6 col-md-6 mb-4 mt-1">
                    <div className="card border-left-warning shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="font-weight-bold text-info text-uppercase mb-1">{item.reglamento}</div>
                                    <div className="row no-gutters align-items-center">
                                        <div className="col-auto">
                                            <div className="mb-0 mr-3 font-weight-bold text-gray-800">{item.descripcion}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <div className="col-12">
                                        <a
                                        href={item.link}
                                        className="d-none d-block btn btn-sm btn-primary shadow-sm icon p-2"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >
                                            <i className="fas fa-fw fa-download fa-sm text-white-50"></i>
                                            <span>Reglamento</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
                                {Info_HReglamentos.titulo}
                            </div>
                            <div className="row no-gutters align-items-center">
                                <div className="col-auto">
                                <div className="mb-0 mr-3 font-weight-bold text-gray-800">
                                    {Info_HReglamentos.lema}
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

                <div className="card border-bottom-info shadow h-100 py-2 mb-4">
                    <div className="card-body">
                        <div className="row">
                            {Doc_Reglamentos}
                        </div>
                    </div>
                </div>
                <ScrollToTop />
            </div>   
        </>
    )
}

export default Reglamentos