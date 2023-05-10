import React from "react";
import ReactTooltip from "react-tooltip";

const Footer = (props) => {

    const Contacto = props.data.Contactenos[0];

    const Footer_icons = props.data.PiePagina[0].iconos.map((item, position) => {
        return (
            <>
                <a
                    key={position}
                    className="btn btn-lg btn-outline-light btn-circle m-1"
                    href={item.Link}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-tip
                    data-for={item.Nombre}
                >
                    <i className={item.Icono}></i>
                    <ReactTooltip id={item.Nombre} place="bottom" type="dark" effect="solid">{item.Nombre}</ReactTooltip>
                </a>
            </>
          );
    })

    const Medios_Comunicacion = props.data.Medios.map((item,position) => {
        return (
            <>
                <div key={position} className="col-xl-6 col-md-6 mb-4 mt-1">
                    <div className="card shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="font-weight-bold text-info text-uppercase mb-1">{item.medio}</div>
                                    <div className="row no-gutters align-items-center">
                                        <div className="col-auto">
                                            <div className="mb-0 mr-3 font-weight-bold text-gray-800">{item.contactar}</div>
                                            <div className="mb-0 mr-3 font-weight-bold text-gray-800">{item.otro}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <i className={item.icon}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    })

    return(
        <>
            <footer className="sticky-footer text-white bg-primary static-bottom shadow">
                <div className="container">
                    <div className="container my-auto mb-4">
                        <div className="copyright my-auto text-primary text-center my-auto">
                            {Footer_icons}
                        </div>
                    </div>
                    {/* <h4 class="text-primary text-center my-auto mt-2"><b>{Footer.Derechos}</b></h4> */}
                    <div className="mt-4 mb-4">
                        <div className="row no-gutters text-center text-primary align-items-center">
                            <div className="col mr-2">
                                <div className="h4 font-weight-bold text-white text-uppercase mb-1">
                                    {Contacto.lema}
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {Medios_Comunicacion}
                        </div> 
                    </div>            
                </div>
            </footer>
        </>
    )
};

export default Footer