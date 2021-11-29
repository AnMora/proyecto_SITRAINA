import React from 'react';
import ScrollToTop from "../JS/componentes/ScrollToTop";
import logo from "../multimedia/icono/SITRAINA.png";

const Fiscalia = (props) => {
    const Info_HFiscalia = props.data.HFiscalia[0];

    // const Doc_Reglamentos = props.data.Documentos.map((item,position) => {
    //     return (
    //         <>
    //             <a key={position} href={item.link} target="_blank" rel="noopener noreferrer">
    //                 <div className="container-fluid">
    //                     <div className="mb-3 mt-3">
    //                     <div className="card border-left-warning shadow h-100 py-2">
    //                         <div className="card-body">
    //                         <div className="row no-gutters align-items-center">
    //                             <div className="col mr-2">
    //                             <div className="font-weight-bold text-info text-uppercase mb-1">
    //                                 {item.reglamento}
    //                             </div>
    //                             <div className="row no-gutters align-items-center">
    //                                 <div className="col-auto">
    //                                 <div className="mb-0 mr-3 font-weight-bold text-gray-800">
    //                                     {item.descripcion}
    //                                 </div>
    //                                 </div>
    //                             </div>
    //                             </div>
    //                             <div className="col-auto">
    //                             <i className="fas fa-download fa-2x text-gray-300"></i>
    //                             </div>
    //                         </div>
    //                         </div>
    //                     </div>
    //                     </div>
    //                 </div>
    //             </a>
    //         </>
    //     )
    // })

    // // Actas y correspondencia
    const Des_fs = props.data.DFiscalia[0].descripcion.map((item,position) => {
        return(
            <>
                <li key={position} className="list-group-item text-center"><b className="mb-0 mr-3 font-weight-bold text-gray-800">{item.cargo}</b></li>
            </>
        )
    })
    const Deb_fs = props.data.fiscalia_general[0].deberes.map((item,position) => {
        return(
            <>
                <li key={position} className="list-group-item text-center"><b className="mb-0 mr-3 font-weight-bold text-gray-800">{item.atribucion}</b></li>
            </>
        )
    })
    const Fiscalia = props.data.fiscalia_general.map((item,position) => {
        return (
            <>
                <a key={position} href="##" rel="noopener noreferrer">
                    <div className="container-fluid">
                        <div className="mb-3 mt-3">
                            <div className="card border-left-warning shadow h-100 py-2">
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col-auto col-md-2">
                                            <img style={{ width: "120px" }} className="d-flex align-self-center m-3" src={logo} alt="Fines ilustrativos" />
                                        </div>
                                        <div className="col-auto col-md-10">
                                            <div className="font-weight-bold text-info text-uppercase mb-1">
                                                <span className="h4 font-weight-bold text-info text-uppercase mb-1">{item.representante}</span>
                                                <br />
                                                <span className="font-weight-bold text-primary">{item.cargo}</span>
                                            </div>
                                            <div className="row no-gutters align-items-center">
                                                <div className="col-auto">
                                                    <div className="mt-3 font-weight-bold text-info text-uppercase mb-1">Correo Electronico: </div>
                                                    <div className="mb-0 mr-3 font-weight-bold text-gray-800">
                                                        {item.contactar}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* descripcion */}
                                        <div className="card-body">
                                            <div className="mb-0 mr-3 mb-3 font-weight-bold text-info text-uppercase">Descripción:</div>
                                            <ul className="list-group">
                                                {Des_fs}
                                            </ul>
                                        </div>
                                        {/* atribuciones */}
                                        <div className="card-body">
                                            <div className="mb-0 mr-3 mb-3 font-weight-bold text-info text-uppercase">Deberes o atribuciones:</div>
                                            <ul className="list-group">
                                                {Deb_fs}
                                            </ul>
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
                                {Info_HFiscalia.titulo}
                            </div>
                            <div className="row no-gutters align-items-center">
                                <div className="col-auto">
                                <div className="mb-0 mr-3 font-weight-bold text-gray-800">
                                    {Info_HFiscalia.lema}
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
                        {Fiscalia}
                    </div>
                </div>
                <ScrollToTop />
            </div>   
        </>
    )
}

export default Fiscalia