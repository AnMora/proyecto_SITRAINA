import React from 'react';
import ScrollToTop from "../JS/componentes/ScrollToTop";

const Reglamentos = (props) => {
    const Info_HReglamentos = props.data.HReglamentos[0];

    const Doc_Reglamentos = props.data.Documentos.map((item,position) => {
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
                                    {item.reglamento}
                                </div>
                                <div className="row no-gutters align-items-center">
                                    <div className="col-auto">
                                    <div className="mb-0 mr-3 font-weight-bold text-gray-800">
                                        {item.descripcion}
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

                <div className="card border-bottom-info shadow mb-4">
                    <div className="collapse show" id="Collapse2020">
                        {Doc_Reglamentos}
                    </div>
                </div>
                <ScrollToTop />
            </div>   
        </>
    )
}

export default Reglamentos